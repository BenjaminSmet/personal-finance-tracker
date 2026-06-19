/**
 * db.js — Firestore data layer
 * All sorting is done client-side to avoid composite index requirements.
 */

import {
  collection, doc, getDocs, getDoc, setDoc,
  updateDoc, deleteDoc, query, where,
  writeBatch, Timestamp
} from 'firebase/firestore'
import { db, auth } from './firebase.js'

// ─── helpers ──────────────────────────────────────────────────────────────────

function uid() {
  const u = auth.currentUser
  if (!u) throw new Error('Not authenticated')
  return u.uid
}

function col(path) {
  return collection(db, 'users', uid(), path)
}

function ref(path, id) {
  return doc(db, 'users', uid(), path, id)
}

function newId() {
  return doc(col('_')).id
}

function toData(snap) {
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

function toDocs(snap) {
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

function normalize(obj) {
  if (!obj) return obj
  const out = {}
  for (const [k, v] of Object.entries(obj)) {
    if (v instanceof Timestamp) out[k] = v.toDate().toISOString().split('T')[0]
    else out[k] = v
  }
  return out
}

// ─── ACCOUNTS ─────────────────────────────────────────────────────────────────

export async function getAccounts() {
  const snap = await getDocs(col('accounts'))
  const accounts = toDocs(snap).map(normalize)
    .filter(a => a.is_active !== false)
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0) || (a.created_at || '').localeCompare(b.created_at || ''))

  const txSnap = await getDocs(col('transactions'))
  const txs = toDocs(txSnap)
  return accounts.map(a => ({ ...a, balance: computeBalance(a, txs) }))
}

export async function createAccount(data) {
  const today = new Date().toISOString().split('T')[0]
  const id = newId()
  const account = {
    name:            data.name,
    type:            data.type,
    currency:        'EUR',
    opening_balance: parseFloat(data.balance) || 0,
    balance_date:    data.balance_date || today,
    balance:         parseFloat(data.balance) || 0,
    credit_limit:    data.credit_limit || null,
    goal_amount:     data.goal_amount || null,
    goal_name:       data.goal_name || null,
    goal_deadline:   data.goal_deadline || null,
    color:           data.color || '#007AFF',
    icon:            data.icon || 'wallet',
    sort_order:      data.sort_order || 0,
    iban:            data.iban ? data.iban.replace(/\s/g, '').toUpperCase() : null,
    is_active:       true,
    created_at:      new Date().toISOString(),
  }
  await setDoc(ref('accounts', id), account)
  return { id, ...account }
}

export async function updateAccount(id, data) {
  const allowed = ['name', 'color', 'icon', 'goal_amount', 'goal_name', 'goal_deadline',
                   'credit_limit', 'sort_order', 'is_active', 'balance_date', 'iban',
                   'opening_balance']
  const updates = { updated_at: new Date().toISOString() }
  for (const key of allowed) {
    if (data[key] !== undefined) {
      updates[key] = key === 'iban' && data[key]
        ? data[key].replace(/\s/g, '').toUpperCase()
        : data[key]
    }
  }
  if (data.balance !== undefined) {
    updates.opening_balance = parseFloat(data.balance)
    if (data.balance_date) updates.balance_date = data.balance_date
  }
  await updateDoc(ref('accounts', id), updates)
  return await getAccountWithBalance(id)
}

export async function getAccountWithBalance(id) {
  const snap = await getDoc(ref('accounts', id))
  const account = normalize(toData(snap))
  const [txSnap1, txSnap2] = await Promise.all([
    getDocs(query(col('transactions'), where('account_id', '==', id))),
    getDocs(query(col('transactions'), where('to_account_id', '==', id))),
  ])
  const txs = [...toDocs(txSnap1), ...toDocs(txSnap2)]
  return { ...account, balance: computeBalance(account, txs) }
}

// ─── BALANCE ──────────────────────────────────────────────────────────────────

export function computeBalance(account, allTxs) {
  const balanceDate = account.balance_date || '1970-01-01'
  const opening = account.opening_balance || 0
  const id = account.id
  let delta = 0
  for (const tx of allTxs) {
    if (tx.date < balanceDate) continue
    if (tx.account_id === id) {
      if (tx.type === 'income')   delta += tx.amount
      else if (tx.type === 'expense')  delta -= tx.amount
      else if (tx.type === 'savings')  delta -= tx.amount
      else if (tx.type === 'transfer') delta -= tx.amount
    }
    if (tx.to_account_id === id && tx.type === 'transfer') delta += tx.amount
  }
  return Math.round((opening + delta) * 100) / 100
}

export async function refreshBalance(accountId) {
  const snap = await getDoc(ref('accounts', accountId))
  if (!snap.exists()) return
  const account = normalize(toData(snap))
  const [s1, s2] = await Promise.all([
    getDocs(query(col('transactions'), where('account_id', '==', accountId))),
    getDocs(query(col('transactions'), where('to_account_id', '==', accountId))),
  ])
  const txs = [...toDocs(s1), ...toDocs(s2)]
  const balance = computeBalance(account, txs)
  await updateDoc(ref('accounts', accountId), { balance, updated_at: new Date().toISOString() })
  return balance
}

// ─── TRANSACTIONS ─────────────────────────────────────────────────────────────

export async function getTransactions({ account_id, type, month, search, limit = 50, offset = 0 } = {}) {
  const snap = await getDocs(col('transactions'))
  let rows = toDocs(snap).map(normalize)

  if (account_id) rows = rows.filter(t => t.account_id === account_id || t.to_account_id === account_id)
  if (type)       rows = rows.filter(t => t.type === type)
  if (month)      rows = rows.filter(t => t.date?.startsWith(month))
  if (search)     rows = rows.filter(t =>
    (t.description || '').toLowerCase().includes(search.toLowerCase()) ||
    (t.note || '').toLowerCase().includes(search.toLowerCase())
  )

  rows.sort((a, b) => b.date > a.date ? 1 : b.date < a.date ? -1 : 0)

  const total = rows.length
  rows = rows.slice(offset, offset + limit)

  const [accountsSnap, catsSnap] = await Promise.all([
    getDocs(col('accounts')),
    getDocs(col('categories'))
  ])
  const accountMap  = Object.fromEntries(toDocs(accountsSnap).map(a => [a.id, a]))
  const categoryMap = Object.fromEntries(toDocs(catsSnap).map(c => [c.id, c]))

  rows = rows.map(t => ({
    ...t,
    account_name:    accountMap[t.account_id]?.name || '',
    to_account_name: t.to_account_id ? (accountMap[t.to_account_id]?.name || '') : null,
    category_name:   t.category_id ? (categoryMap[t.category_id]?.name || '') : null,
    category_icon:   t.category_id ? (categoryMap[t.category_id]?.icon || '') : null,
    category_color:  t.category_id ? (categoryMap[t.category_id]?.color || '') : null,
  }))

  return { total, rows, limit, offset }
}

export async function createTransaction(data) {
  const id = newId()
  const tx = {
    account_id:    data.account_id,
    to_account_id: data.to_account_id || null,
    amount:        Math.abs(parseFloat(data.amount)),
    type:          data.type,
    category_id:   data.category_id || null,
    description:   data.description || null,
    note:          data.note || null,
    date:          data.date,
    import_id:     data.import_id || null,
    fixed_cost_id: data.fixed_cost_id || null,
    created_at:    new Date().toISOString(),
    updated_at:    new Date().toISOString(),
  }
  await setDoc(ref('transactions', id), tx)
  await refreshBalance(data.account_id)
  if (data.to_account_id) await refreshBalance(data.to_account_id)
  return { id, ...tx }
}

export async function updateTransaction(id, data) {
  const snap = await getDoc(ref('transactions', id))
  if (!snap.exists()) throw new Error('Transaction not found')
  const old = toData(snap)
  const updates = { updated_at: new Date().toISOString() }
  if (data.amount      !== undefined) updates.amount      = Math.abs(parseFloat(data.amount))
  if (data.type        !== undefined) updates.type        = data.type
  if (data.category_id !== undefined) updates.category_id = data.category_id
  if (data.description !== undefined) updates.description = data.description
  if (data.note        !== undefined) updates.note        = data.note
  if (data.date        !== undefined) updates.date        = data.date
  if (data.to_account_id !== undefined) updates.to_account_id = data.to_account_id
  await updateDoc(ref('transactions', id), updates)
  await refreshBalance(old.account_id)
  if (old.to_account_id)     await refreshBalance(old.to_account_id)
  if (updates.to_account_id) await refreshBalance(updates.to_account_id)
  return normalize({ id, ...old, ...updates })
}

export async function deleteTransaction(id) {
  const snap = await getDoc(ref('transactions', id))
  if (!snap.exists()) return
  const tx = toData(snap)
  await deleteDoc(ref('transactions', id))
  await refreshBalance(tx.account_id)
  if (tx.to_account_id) await refreshBalance(tx.to_account_id)
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────────

export async function getCategories(type) {
  const snap = await getDocs(col('categories'))
  let cats = toDocs(snap)
  if (type) cats = cats.filter(c => c.type === type)
  return cats
}

export async function getCategoryTree(type) {
  const all = await getCategories(type)
  const parents  = all.filter(c => !c.parent_id).sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
  const children = all.filter(c =>  c.parent_id)
  return parents.map(p => ({
    ...p,
    children: children
      .filter(c => c.parent_id === p.id)
      .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
  }))
}

export async function createCategory(data) {
  const id = newId()
  const cat = {
    name:       data.name,
    icon:       data.icon || '📦',
    color:      data.color || '#6366f1',
    type:       data.type,
    parent_id:  data.parent_id || null,
    is_default: false,
    sort_order: data.sort_order || 0,
    created_at: new Date().toISOString(),
  }
  await setDoc(ref('categories', id), cat)
  return { id, ...cat }
}

export async function deleteCategory(id) {
  await deleteDoc(ref('categories', id))
}

// ─── FIXED COSTS ──────────────────────────────────────────────────────────────

export async function getFixedCosts() {
  const snap = await getDocs(col('fixed_costs'))
  return toDocs(snap).map(normalize).sort((a, b) => (a.created_at || '').localeCompare(b.created_at || ''))
}

export async function createFixedCost(data) {
  const id = newId()
  const fc = {
    name:          data.name,
    amount:        parseFloat(data.amount),
    type:          data.type,
    frequency:     data.frequency || 'monthly',
    day_of_month:  data.day_of_month || null,
    month_of_year: data.month_of_year || null,
    account_id:    data.account_id || null,
    to_account_id: data.to_account_id || null,
    category_id:   data.category_id || null,
    start_date:    data.start_date || null,
    end_date:      data.end_date || null,
    is_active:     true,
    created_at:    new Date().toISOString(),
  }
  await setDoc(ref('fixed_costs', id), fc)
  return { id, ...fc }
}

export async function updateFixedCost(id, data) {
  await updateDoc(ref('fixed_costs', id), { ...data, updated_at: new Date().toISOString() })
  return normalize(toData(await getDoc(ref('fixed_costs', id))))
}

export async function deleteFixedCost(id) {
  await deleteDoc(ref('fixed_costs', id))
}

// ─── WISHLIST ─────────────────────────────────────────────────────────────────

export async function getWishlist() {
  const snap = await getDocs(col('wishlist'))
  return toDocs(snap).map(normalize).sort((a, b) => (a.priority || 2) - (b.priority || 2))
}

export async function createWishItem(data) {
  const id = newId()
  const item = {
    name:             data.name,
    price:            parseFloat(data.price) || null,
    url:              data.url || null,
    notes:            data.notes || null,
    priority:         data.priority || 2,
    status:           data.status || 'wanted',
    icon:             data.icon || '🛍️',
    track_account_id: data.track_account_id || null,
    created_at:       new Date().toISOString(),
    updated_at:       new Date().toISOString(),
  }
  await setDoc(ref('wishlist', id), item)
  return { id, ...item }
}

export async function updateWishItem(id, data) {
  await updateDoc(ref('wishlist', id), { ...data, updated_at: new Date().toISOString() })
  return normalize(toData(await getDoc(ref('wishlist', id))))
}

export async function deleteWishItem(id) {
  await deleteDoc(ref('wishlist', id))
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────

export async function getDashboard(month) {
  const [accounts, txSnap, catsSnap] = await Promise.all([
    getAccounts(),
    getDocs(col('transactions')),
    getDocs(col('categories')),
  ])

  const allTxs     = toDocs(txSnap).map(normalize)
  const categories = toDocs(catsSnap)
  const catMap     = Object.fromEntries(categories.map(c => [c.id, c]))
  const accMap     = Object.fromEntries(accounts.map(a => [a.id, a]))

  const thisYear = new Date().getFullYear().toString()
  const monthTxs = allTxs.filter(t => t.date?.startsWith(month))
  const [y, m]   = month.split('-').map(Number)
  const prevDate  = new Date(y, m - 2, 1)
  const prevMonth = `${prevDate.getFullYear()}-${String(prevDate.getMonth() + 1).padStart(2, '0')}`
  const prevTxs   = allTxs.filter(t => t.date?.startsWith(prevMonth))
  const ytdTxs    = allTxs.filter(t => t.date?.startsWith(thisYear))

  function stats(txs) {
    return {
      income:   txs.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0),
      expenses: txs.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0),
      savings:  txs.filter(t => t.type === 'savings').reduce((s, t) => s + t.amount, 0),
      tx_count: txs.length,
    }
  }

  const last6months = []
  for (let i = 5; i >= 0; i--) {
    const d   = new Date(y, m - 1 - i, 1)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    last6months.push({ month: key, ...stats(allTxs.filter(t => t.date?.startsWith(key))) })
  }

  const catTotals = {}
  for (const tx of monthTxs.filter(t => t.type === 'expense')) {
    const cat = catMap[tx.category_id]
    const key = tx.category_id || 'uncategorized'
    if (!catTotals[key]) catTotals[key] = { name: cat?.name || 'Other', icon: cat?.icon || '📦', color: cat?.color || '#94a3b8', total: 0 }
    catTotals[key].total += tx.amount
  }

  const incTotals = {}
  for (const tx of monthTxs.filter(t => t.type === 'income')) {
    const cat = catMap[tx.category_id]
    const key = tx.category_id || 'uncategorized'
    if (!incTotals[key]) incTotals[key] = { name: cat?.name || 'Other', icon: cat?.icon || '💰', color: cat?.color || '#34C759', total: 0 }
    incTotals[key].total += tx.amount
  }

  const recent = monthTxs
    .sort((a, b) => b.date > a.date ? 1 : -1)
    .slice(0, 10)
    .map(t => ({
      ...t,
      account_name:    accMap[t.account_id]?.name || '',
      to_account_name: t.to_account_id ? (accMap[t.to_account_id]?.name || '') : null,
      category_name:   catMap[t.category_id]?.name || null,
      category_icon:   catMap[t.category_id]?.icon || null,
      category_color:  catMap[t.category_id]?.color || null,
    }))

  return {
    this_month:          stats(monthTxs),
    prev_month:          stats(prevTxs),
    ytd:                 { ...stats(ytdTxs), tx_count: ytdTxs.length },
    last6months,
    accounts:            accounts.filter(a => a.is_active !== false),
    recent_transactions: recent,
    category_breakdown:  Object.values(catTotals).sort((a, b) => b.total - a.total).slice(0, 5),
    income_breakdown:    Object.values(incTotals).sort((a, b) => b.total - a.total).slice(0, 5),
    savings_goals:       accounts.filter(a => a.goal_amount && a.is_active !== false),
    net_worth:           accounts.filter(a => a.is_active !== false && a.type !== 'credit_card').reduce((s, a) => s + a.balance, 0),
    this_year:           thisYear,
  }
}

// ─── CSV IMPORT ───────────────────────────────────────────────────────────────

export async function importTransactions(accountId, rows) {
  const sessionId = 'imp_' + Date.now()
  let imported = 0, skipped = 0
  const pendingReview = [], possibleDuplicates = []

  const accountsSnap = await getDocs(col('accounts'))
  const allAccounts  = toDocs(accountsSnap)
  const ibanMap = {}
  for (const a of allAccounts) {
    if (a.iban) ibanMap[a.iban.replace(/\s/g, '').toUpperCase()] = a.id
  }
  const thisAccount = allAccounts.find(a => a.id === accountId)
  const thisIban    = thisAccount?.iban?.replace(/\s/g, '').toUpperCase() || ''

  const IBAN_RE = /\b[A-Z]{2}\d{2}[A-Z0-9]{4,30}\b/g

  const existingSnap = await getDocs(col('transactions'))
  const existingTxs  = toDocs(existingSnap).map(normalize)

  const batch = writeBatch(db)

  for (const row of rows) {
    try {
      if (!row.date || !row.amount || row.amount === 0) { skipped++; continue }

      let txType = row.type || 'expense', toAccountId = null, unknownIban = null
      const text  = [row.description, row.note].filter(Boolean).join(' ')
      const found = [...new Set((text.match(IBAN_RE) || []).map(i => i.replace(/\s/g, '').toUpperCase()))]

      for (const iban of found) {
        if (iban === thisIban) continue
        if (ibanMap[iban]) { toAccountId = ibanMap[iban]; txType = 'transfer'; break }
        else unknownIban = iban
      }

      const id = newId()
      const tx = {
        account_id: accountId, to_account_id: toAccountId,
        amount: Math.abs(row.amount), type: txType,
        description: row.description || null, note: row.note || null,
        date: row.date, import_id: sessionId, category_id: null,
        created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
      }
      batch.set(ref('transactions', id), tx)

      if (unknownIban && !toAccountId)
        pendingReview.push({ tx_id: id, date: row.date, amount: row.amount, type: txType, description: row.description, unknown_iban: unknownIban })

      const rowDate = new Date(row.date).getTime()
      for (const ex of existingTxs) {
        if (ex.import_id === sessionId || ex.account_id === accountId) continue
        if (Math.abs(ex.amount - Math.abs(row.amount)) < 0.01 && Math.abs(new Date(ex.date).getTime() - rowDate) <= 2 * 86400000) {
          possibleDuplicates.push({
            imported_tx: { id, date: row.date, amount: Math.abs(row.amount), type: txType, description: row.description },
            existing_tx: { id: ex.id, date: ex.date, amount: ex.amount, type: ex.type, description: ex.description, account_name: allAccounts.find(a => a.id === ex.account_id)?.name || '?' },
          })
        }
      }
      imported++
    } catch { skipped++ }
  }

  await batch.commit()
  await refreshBalance(accountId)

  return { session_id: sessionId, imported, skipped, pending_review: pendingReview, possible_duplicates: possibleDuplicates }
}

export async function resolveTransfer(txId, toAccountId) {
  await updateDoc(ref('transactions', txId), { type: 'transfer', to_account_id: toAccountId || null, updated_at: new Date().toISOString() })
  const snap = await getDoc(ref('transactions', txId))
  const tx = toData(snap)
  await refreshBalance(tx.account_id)
  if (tx.to_account_id) await refreshBalance(tx.to_account_id)
}

// ─── RESET ────────────────────────────────────────────────────────────────────

export async function resetAllData() {
  for (const name of ['accounts', 'transactions', 'fixed_costs', 'wishlist', 'import_sessions']) {
    const snap  = await getDocs(col(name))
    const batch = writeBatch(db)
    snap.docs.forEach(d => batch.delete(d.ref))
    await batch.commit()
  }
  const catSnap = await getDocs(col('categories'))
  const batch   = writeBatch(db)
  catSnap.docs.filter(d => !d.data().is_default).forEach(d => batch.delete(d.ref))
  await batch.commit()
}

// ─── SEED CATEGORIES ──────────────────────────────────────────────────────────

export async function seedDefaultCategories() {
  const existing = await getDocs(col('categories'))
  if (existing.size > 0) return

  const batch = writeBatch(db)
  const parents = [
    { id: 'cat_p_housing',   name: 'Housing',      icon: '🏠', color: '#ef4444', type: 'expense',  sort_order: 1 },
    { id: 'cat_p_transport', name: 'Transport',    icon: '🚗', color: '#f97316', type: 'expense',  sort_order: 2 },
    { id: 'cat_p_food',      name: 'Food & Drink', icon: '🍽️', color: '#eab308', type: 'expense',  sort_order: 3 },
    { id: 'cat_p_health',    name: 'Health',       icon: '💊', color: '#10b981', type: 'expense',  sort_order: 4 },
    { id: 'cat_p_personal',  name: 'Personal',     icon: '👤', color: '#ec4899', type: 'expense',  sort_order: 5 },
    { id: 'cat_p_leisure',   name: 'Leisure',      icon: '🎬', color: '#6366f1', type: 'expense',  sort_order: 6 },
    { id: 'cat_p_finance',   name: 'Finance',      icon: '🏦', color: '#64748b', type: 'expense',  sort_order: 7 },
    { id: 'cat_p_other_exp', name: 'Other',        icon: '📦', color: '#94a3b8', type: 'expense',  sort_order: 8 },
    { id: 'cat_p_work',      name: 'Work',         icon: '💼', color: '#22c55e', type: 'income',   sort_order: 1 },
    { id: 'cat_p_returns',   name: 'Returns',      icon: '📈', color: '#10b981', type: 'income',   sort_order: 2 },
    { id: 'cat_p_other_inc', name: 'Other Income', icon: '🎁', color: '#34d399', type: 'income',   sort_order: 3 },
    { id: 'cat_p_savings',   name: 'Savings',      icon: '🔒', color: '#8b5cf6', type: 'savings',  sort_order: 1 },
  ]
  const children = [
    { id: 'cat_rent',      name: 'Rent / Mortgage',   icon: '🏠', color: '#ef4444', type: 'expense', parent_id: 'cat_p_housing',   sort_order: 1 },
    { id: 'cat_utilities', name: 'Utilities',          icon: '⚡', color: '#ef4444', type: 'expense', parent_id: 'cat_p_housing',   sort_order: 2 },
    { id: 'cat_internet',  name: 'Internet & Phone',   icon: '📡', color: '#ef4444', type: 'expense', parent_id: 'cat_p_housing',   sort_order: 3 },
    { id: 'cat_fuel',      name: 'Fuel',               icon: '⛽', color: '#f97316', type: 'expense', parent_id: 'cat_p_transport', sort_order: 1 },
    { id: 'cat_publictx',  name: 'Public Transport',   icon: '🚌', color: '#f97316', type: 'expense', parent_id: 'cat_p_transport', sort_order: 2 },
    { id: 'cat_groceries', name: 'Groceries',          icon: '🛒', color: '#eab308', type: 'expense', parent_id: 'cat_p_food',      sort_order: 1 },
    { id: 'cat_dining',    name: 'Dining Out',         icon: '🍔', color: '#eab308', type: 'expense', parent_id: 'cat_p_food',      sort_order: 2 },
    { id: 'cat_coffee',    name: 'Coffee & Drinks',    icon: '☕', color: '#eab308', type: 'expense', parent_id: 'cat_p_food',      sort_order: 3 },
    { id: 'cat_doctor',    name: 'Doctor / Pharmacy',  icon: '💊', color: '#10b981', type: 'expense', parent_id: 'cat_p_health',    sort_order: 1 },
    { id: 'cat_clothing',  name: 'Clothing',           icon: '👕', color: '#ec4899', type: 'expense', parent_id: 'cat_p_personal',  sort_order: 1 },
    { id: 'cat_haircut',   name: 'Personal Care',      icon: '✂️', color: '#ec4899', type: 'expense', parent_id: 'cat_p_personal',  sort_order: 2 },
    { id: 'cat_entertain', name: 'Entertainment',      icon: '🎬', color: '#6366f1', type: 'expense', parent_id: 'cat_p_leisure',   sort_order: 1 },
    { id: 'cat_sport',     name: 'Sport & Fitness',    icon: '🏋️', color: '#6366f1', type: 'expense', parent_id: 'cat_p_leisure',   sort_order: 2 },
    { id: 'cat_travel',    name: 'Travel',             icon: '✈️', color: '#6366f1', type: 'expense', parent_id: 'cat_p_leisure',   sort_order: 3 },
    { id: 'cat_subscript', name: 'Subscriptions',      icon: '📱', color: '#64748b', type: 'expense', parent_id: 'cat_p_finance',   sort_order: 1 },
    { id: 'cat_salary',    name: 'Salary',             icon: '💼', color: '#22c55e', type: 'income',  parent_id: 'cat_p_work',      sort_order: 1 },
    { id: 'cat_freelance', name: 'Freelance',          icon: '💻', color: '#22c55e', type: 'income',  parent_id: 'cat_p_work',      sort_order: 2 },
    { id: 'cat_sav_emerg', name: 'Emergency Fund',     icon: '🛡️', color: '#8b5cf6', type: 'savings', parent_id: 'cat_p_savings',   sort_order: 1 },
    { id: 'cat_sav_inv',   name: 'Investments',        icon: '📈', color: '#8b5cf6', type: 'savings', parent_id: 'cat_p_savings',   sort_order: 2 },
  ]

  for (const p of parents)
    batch.set(ref('categories', p.id), { ...p, parent_id: null, is_default: true, created_at: new Date().toISOString() })
  for (const c of children)
    batch.set(ref('categories', c.id), { ...c, is_default: true, created_at: new Date().toISOString() })

  await batch.commit()
}

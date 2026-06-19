/**
 * app.js — UI logic, ported from the SQLite version.
 * All data calls go through db.js (Firestore).
 * No fetch/api() calls — replaced with direct imports.
 */

import {
  getAccounts, createAccount, updateAccount, deleteAccount,
  getTransactions, createTransaction, updateTransaction, deleteTransaction,
  getCategories, getCategoryTree, createCategory, deleteCategory,
  getFixedCosts, createFixedCost, updateFixedCost, deleteFixedCost,
  getWishlist, createWishItem, updateWishItem, deleteWishItem as removeWishItem,
  getDashboard, importTransactions, resolveTransfer,
  resetAllData, refreshBalance,
} from './db.js'

// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
  accounts:     [],
  currentPage:  'dashboard',
  dashMonth:    new Date().toISOString().slice(0, 7),
  dashView:     'month',   // 'month' | 'ytd'
  categoryTree: { expense: [], income: [], savings: [] },
}

const txFilters = { account_id: '', type: '', month: new Date().toISOString().slice(0,7), search: '', offset: 0 }

// ─── INIT ─────────────────────────────────────────────────────────────────────
export async function initApp() {
  state.accounts = await getAccounts()
  navigate('dashboard')
}

// ─── FORMAT HELPERS ───────────────────────────────────────────────────────────
const fmt = {
  currency(n, signed = false) {
    if (n === null || n === undefined) return '€0,00'
    const abs = Math.abs(n)
    const str = abs.toLocaleString('nl-BE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    if (signed) return (n >= 0 ? '+' : '-') + '€' + str
    return '€' + str
  },
  dateShort(d) {
    if (!d) return ''
    const [y, m, day] = d.split('-')
    return `${day}/${m}/${y}`
  },
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
const pageTitles = {
  dashboard: 'Overview', accounts: 'Accounts', transactions: 'Transactions',
  'fixed-costs': 'Fixed Costs', more: 'More', 'savings-goals': 'Goals & Wishlist',
  projection: 'Future Balance', categories: 'Categories', import: 'Import CSV',
  calculator: 'Calculator',
}
const morePages = new Set(['savings-goals', 'projection', 'categories', 'import', 'calculator'])

async function navigate(page) {
  state.currentPage = page
  document.getElementById('page-title').textContent = pageTitles[page] || page
  document.getElementById('header-actions').innerHTML = ''

  const tabPage = morePages.has(page) ? 'more' : page
  document.querySelectorAll('.tab-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === tabPage)
  })
  moveTabPill()

  const area = document.getElementById('content-area')
  area.innerHTML = '<div style="padding:40px 0;text-align:center;color:var(--text-tertiary)">Loading…</div>'

  // Refresh accounts on every navigate
  state.accounts = await getAccounts()

  switch (page) {
    case 'dashboard':    await renderDashboard();    break
    case 'accounts':     await renderAccounts();     break
    case 'transactions': await renderTransactions(); break
    case 'fixed-costs':  await renderFixedCosts();   break
    case 'more':         await renderMore();         break
    case 'savings-goals':await renderSavingsGoals(); break
    case 'projection':   await renderProjection();   break
    case 'categories':   await renderCategories();   break
    case 'import':       await renderImport();       break
    case 'calculator':   renderCalculator();         break
  }

  document.getElementById('scroll-area').scrollTo({ top: 0, behavior: 'instant' })
}
window.navigate = navigate

function moveTabPill() {
  const pill = document.getElementById('tab-pill')
  const active = document.querySelector('.tab-item.active')
  if (!active || !pill) return
  const bar = document.getElementById('tab-bar')
  const barRect = bar.getBoundingClientRect()
  const activeRect = active.getBoundingClientRect()
  pill.style.left  = (activeRect.left - barRect.left + 6) + 'px'
  pill.style.width = (activeRect.width - 12) + 'px'
}
window.addEventListener('resize', moveTabPill)

// ─── TOAST ────────────────────────────────────────────────────────────────────
function toast(msg, type = 'info') {
  const el = document.createElement('div')
  el.className = `toast ${type}`
  el.textContent = msg
  document.getElementById('toast-container').appendChild(el)
  setTimeout(() => el.remove(), 3000)
}
window.toast = toast

// ─── MODAL ────────────────────────────────────────────────────────────────────
function showModal(title, body, actions = '') {
  const id = 'modal_' + Date.now()
  const actHtml = actions.replace(/__MODAL_ID__/g, id)
  const el = document.createElement('div')
  el.className = 'modal-backdrop'
  el.id = id
  el.innerHTML = `
    <div class="modal-sheet">
      <div class="modal-handle"></div>
      <div class="modal-title">${title}</div>
      ${body}
      ${actHtml ? `<div class="modal-actions">${actHtml}</div>` : ''}
    </div>`
  el.addEventListener('click', e => { if (e.target === el) closeModal(id) })
  document.body.appendChild(el)
  return id
}
function closeModal(id) {
  document.getElementById(id)?.remove()
}
window.showModal = showModal
window.closeModal = closeModal

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
async function renderDashboard() {
  const data = await getDashboard(state.dashMonth)
  const tm   = data.this_month, pm = data.prev_month, ytd = data.ytd

  const net         = (tm.income || 0) - (tm.expenses || 0)
  const prevNet     = (pm.income || 0) - (pm.expenses || 0)
  const savingsRate = tm.income > 0 ? Math.round((tm.savings / tm.income) * 100) : 0

  function delta(curr, prev) {
    if (!prev) return ''
    const pct = Math.round(((curr - prev) / prev) * 100)
    const col = pct >= 0 ? 'var(--tint-green)' : 'var(--tint-red)'
    return `<div style="font-size:11px;font-weight:600;color:${col};margin-top:2px">${pct >= 0 ? '▲' : '▼'} ${Math.abs(pct)}% vs last month</div>`
  }

  function sparkline(months, key, color) {
    const vals = months.map(m => m[key] || 0)
    const max  = Math.max(...vals, 1)
    return `<svg viewBox="0 0 60 20" style="width:60px;height:20px;display:block">
      ${vals.map((v, i) => {
        const x = (i / (vals.length - 1)) * 54 + 3
        const y = 18 - (v / max) * 15
        return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
      }).join(' ')}
      <path d="${vals.map((v, i) => {
        const x = (i / (vals.length - 1)) * 54 + 3
        const y = 18 - (v / max) * 15
        return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
      }).join(' ')}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  }

  const [y, m]   = state.dashMonth.split('-').map(Number)
  const isNow    = state.dashMonth === new Date().toISOString().slice(0, 7)
  const monthLabel = new Date(y, m - 1).toLocaleString('nl-BE', { month: 'long', year: 'numeric' })

  document.getElementById('content-area').innerHTML = `

    <!-- MONTH NAV + HERO -->
    <div class="glass-card hero-card" style="margin-bottom:16px">
      <div class="flex-row" style="margin-bottom:14px;gap:8px">
        <button class="btn btn-glass" style="padding:6px 12px;font-size:13px" onclick="shiftDashMonth(-1)">‹</button>
        <div style="flex:1;text-align:center;font-size:13px;font-weight:600;color:var(--text-secondary)">${monthLabel}</div>
        <button class="btn btn-glass" style="padding:6px 12px;font-size:13px" ${isNow ? 'disabled style="opacity:0.3;padding:6px 12px;font-size:13px"' : 'onclick="shiftDashMonth(1)"'}>›</button>
        <div class="segment-control">
          <button class="segment-btn ${state.dashView==='month'?'active':''}" onclick="setDashView('month')">Month</button>
          <button class="segment-btn ${state.dashView==='ytd'?'active':''}"  onclick="setDashView('ytd')">YTD</button>
        </div>
      </div>
      <div class="flex-row" style="gap:16px">
        <div style="flex:1">
          <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px">Net Worth</div>
          <div style="font-size:30px;font-weight:700;letter-spacing:-1px">${fmt.currency(data.net_worth)}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px">Month balance</div>
          <div style="font-size:22px;font-weight:700;color:${net>=0?'var(--tint-green)':'var(--tint-red)'}">${fmt.currency(net,true)}</div>
        </div>
      </div>
    </div>

    <!-- STATS PILLS -->
    <div class="glass-card" style="margin-bottom:16px">
      ${state.dashView === 'ytd' ? `
        <div style="font-size:11px;color:var(--text-secondary);margin-bottom:10px;text-align:center;font-weight:500">
          Jan – ${new Date().toLocaleString('nl-BE',{month:'short'})} ${data.this_year}
        </div>
        <div class="grid-3" style="gap:10px">
          <div style="background:rgba(52,199,89,0.15);border:1px solid rgba(52,199,89,0.25);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-green);margin-bottom:6px">Income YTD</div>
            <div style="font-size:17px;font-weight:700">${fmt.currency(ytd.income||0)}</div>
          </div>
          <div style="background:rgba(255,59,48,0.12);border:1px solid rgba(255,59,48,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-red);margin-bottom:6px">Expenses YTD</div>
            <div style="font-size:17px;font-weight:700">${fmt.currency(ytd.expenses||0)}</div>
          </div>
          <div style="background:rgba(175,82,222,0.12);border:1px solid rgba(175,82,222,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-purple);margin-bottom:6px">Savings YTD</div>
            <div style="font-size:17px;font-weight:700">${fmt.currency(ytd.savings||0)}</div>
          </div>
        </div>
        <div style="margin-top:10px;padding:10px 14px;border-radius:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08)">
          <div class="flex-row">
            <div style="font-size:12px;color:var(--text-secondary)">Net YTD <span style="color:var(--text-tertiary)">(excl. savings)</span></div>
            <div style="font-size:16px;font-weight:700;margin-left:auto;color:${((ytd.income||0)-(ytd.expenses||0))>=0?'var(--tint-green)':'var(--tint-red)'}">
              ${fmt.currency((ytd.income||0)-(ytd.expenses||0),true)}
            </div>
          </div>
          <div class="flex-row" style="margin-top:6px">
            <div style="font-size:12px;color:var(--text-secondary)">Savings rate</div>
            ${(() => { const r = ytd.income>0?Math.round((ytd.savings/ytd.income)*100):0; return `<div style="font-size:13px;font-weight:700;margin-left:auto;color:${r>=20?'var(--tint-green)':r>=10?'var(--tint-orange)':'var(--tint-red)'}">${r}% of income</div>` })()}
            <div style="font-size:12px;color:var(--text-tertiary);margin-left:8px">${ytd.tx_count||0} tx</div>
          </div>
        </div>
      ` : `
        <div class="grid-2" style="gap:10px">
          <div style="background:rgba(52,199,89,0.15);border:1px solid rgba(52,199,89,0.25);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-green);margin-bottom:6px">Income</div>
            <div style="font-size:17px;font-weight:700">${fmt.currency(tm.income||0)}</div>
            ${delta(tm.income||0,pm.income||0)||''}
            <div style="margin-top:8px">${sparkline(data.last6months,'income','var(--tint-green)')}</div>
          </div>
          <div style="background:rgba(255,59,48,0.12);border:1px solid rgba(255,59,48,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-red);margin-bottom:6px">Expenses</div>
            <div style="font-size:17px;font-weight:700">${fmt.currency(tm.expenses||0)}</div>
            ${delta(tm.expenses||0,pm.expenses||0)||''}
            <div style="margin-top:8px">${sparkline(data.last6months,'expenses','var(--tint-red)')}</div>
          </div>
          <div style="background:rgba(175,82,222,0.12);border:1px solid rgba(175,82,222,0.2);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--tint-purple);margin-bottom:6px">Saved</div>
            <div style="font-size:17px;font-weight:700">${fmt.currency(tm.savings||0)}</div>
            ${delta(tm.savings||0,pm.savings||0)||''}
            <div style="margin-top:8px">${sparkline(data.last6months,'savings','var(--tint-purple)')}</div>
          </div>
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:12px">
            <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--text-secondary);margin-bottom:6px">Savings Rate</div>
            <div style="font-size:17px;font-weight:700;color:${savingsRate>=20?'var(--tint-green)':savingsRate>=10?'var(--tint-orange)':'var(--text-primary)'}">${savingsRate}%</div>
            <div style="font-size:11px;color:var(--text-tertiary);margin-top:4px">of income</div>
            <div style="margin-top:8px">
              <div class="progress-track" style="height:4px">
                <div style="height:100%;border-radius:100px;width:${Math.min(100,savingsRate)}%;background:${savingsRate>=20?'var(--tint-green)':savingsRate>=10?'var(--tint-orange)':'var(--tint-red)'}"></div>
              </div>
            </div>
          </div>
        </div>
      `}
    </div>

    <!-- ACCOUNTS GRID -->
    <div class="flex-row" style="margin-bottom:12px">
      <div class="title-sm">Accounts</div>
      <button class="btn btn-glass" style="margin-left:auto;font-size:12px;padding:5px 12px" onclick="openAddAccount()">+ Add</button>
    </div>
    <div class="grid-3" style="margin-bottom:20px;gap:12px">
      ${data.accounts.map(a => renderAccountCard(a)).join('')}
    </div>

    <!-- RECENT TRANSACTIONS + BREAKDOWN -->
    <div class="grid-2" style="gap:16px;margin-bottom:16px">
      <div class="glass-card">
        <div class="flex-row" style="margin-bottom:14px">
          <div class="title-sm">Transactions</div>
          <button class="btn btn-glass" style="margin-left:auto;padding:5px 12px;font-size:12px" onclick="navigate('transactions')">All →</button>
        </div>
        ${data.recent_transactions.length === 0
          ? '<div class="empty-state" style="padding:28px 0"><div class="empty-icon">💸</div><h3>No transactions</h3><p>None recorded for this month</p></div>'
          : data.recent_transactions.map(t => renderTxRow(t)).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:16px">
        ${data.category_breakdown.length > 0 ? `
          <div class="glass-card">
            <div class="title-sm" style="margin-bottom:14px">Expenses</div>
            ${renderCategoryBreakdown(data.category_breakdown)}
          </div>` : ''}
        ${data.income_breakdown.length > 0 ? `
          <div class="glass-card">
            <div class="title-sm" style="margin-bottom:14px">Income Sources</div>
            ${renderCategoryBreakdown(data.income_breakdown, 'income')}
          </div>` : ''}
        ${data.savings_goals.length > 0 ? `
          <div class="glass-card">
            <div class="title-sm" style="margin-bottom:14px">Savings Goals</div>
            ${data.savings_goals.map(a => {
              const pct = Math.min(100, Math.round((a.balance/a.goal_amount)*100))
              return `<div style="margin-bottom:12px">
                <div class="flex-row" style="margin-bottom:5px">
                  <div style="font-size:13px;font-weight:500">${a.goal_name||a.name}</div>
                  <div style="font-size:12px;font-weight:700;margin-left:auto;color:var(--tint-blue)">${pct}%</div>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
                <div style="font-size:11px;color:var(--text-tertiary);margin-top:3px">${fmt.currency(a.balance)} of ${fmt.currency(a.goal_amount)}</div>
              </div>`
            }).join('')}
          </div>` : ''}
      </div>
    </div>
  `
}

window.shiftDashMonth = (dir) => {
  const [y, m] = state.dashMonth.split('-').map(Number)
  const d = new Date(y, m - 1 + dir, 1)
  state.dashMonth = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`
  renderDashboard()
}
window.setDashView = (v) => { state.dashView = v; renderDashboard() }

// ─── ACCOUNT CARD ─────────────────────────────────────────────────────────────
function renderAccountCard(a) {
  const color = a.color || '#007AFF'
  return `
    <div class="glass-card glass-card-sm" style="border-color:${color}30;cursor:pointer" onclick="openEditAccount('${a.id}')">
      <div style="font-size:20px;margin-bottom:6px">${a.type==='credit_card'?'💳':a.type==='savings'?'🏦':a.type==='investment'?'📈':'🏦'}</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.name}</div>
      <div style="font-size:16px;font-weight:700;color:${color}">${fmt.currency(a.balance)}</div>
      ${a.goal_amount ? `
        <div style="margin-top:8px">
          <div class="progress-track" style="height:3px">
            <div class="progress-fill" style="width:${Math.min(100,(a.balance/a.goal_amount)*100)}%;background:${color}"></div>
          </div>
        </div>` : ''}
    </div>`
}

// ─── CATEGORY BREAKDOWN ───────────────────────────────────────────────────────
function renderCategoryBreakdown(cats, type = 'expense') {
  const total = cats.reduce((s, c) => s + c.total, 0)
  return cats.map(c => {
    const pct = total > 0 ? Math.round((c.total/total)*100) : 0
    const color = type === 'income' ? 'var(--tint-green)' : 'var(--tint-red)'
    return `<div class="flex-row" style="gap:12px;margin-bottom:10px">
      <div style="font-size:16px;width:24px;text-align:center">${c.icon||'📦'}</div>
      <div style="flex:1;min-width:0">
        <div class="flex-row" style="margin-bottom:4px">
          <div style="font-size:13px;font-weight:500">${c.name||'Other'}</div>
          <div style="margin-left:auto;font-size:13px;font-weight:600;color:${color}">${fmt.currency(c.total)}</div>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${pct}%;background:${c.color||color}"></div>
        </div>
      </div>
      <div style="font-size:11px;color:var(--text-tertiary);width:30px;text-align:right">${pct}%</div>
    </div>`
  }).join('')
}

// ─── TX ROW ───────────────────────────────────────────────────────────────────
function renderTxRow(t, viewingAccountId) {
  const isTransfer  = t.type === 'transfer' || t.type === 'savings'
  const isReceiving = isTransfer && t.to_account_id === viewingAccountId
  const isIncome    = t.type === 'income' || isReceiving
  const isSavings   = t.type === 'savings' && !isReceiving
  const bg    = t.category_color ? t.category_color+'30' : isTransfer ? 'rgba(94,92,230,0.18)' : 'rgba(255,255,255,0.08)'
  const sign  = isIncome ? '+' : isTransfer ? '→' : '-'
  const color = isIncome ? 'var(--tint-green)' : isSavings ? 'var(--tint-purple)' : isTransfer ? 'var(--tint-purple)' : 'var(--tint-red)'
  const icon  = isTransfer ? '🔄' : (t.category_icon || '💸')
  let meta = t.account_name || ''
  if (isTransfer && t.to_account_name) {
    meta = isReceiving ? `← ${t.account_name}` : `→ ${t.to_account_name}`
  }
  return `
    <div class="tx-row" onclick="openEditTransaction('${t.id}')">
      <div class="tx-icon" style="background:${bg}">${icon}</div>
      <div class="tx-info">
        <div class="tx-desc">${t.description||t.category_name||(isTransfer?'Transfer':'Transaction')}</div>
        <div class="tx-meta">${meta} · ${fmt.dateShort(t.date)}</div>
      </div>
      <div class="tx-amount" style="color:${color}">${sign}${fmt.currency(t.amount)}</div>
    </div>`
}

// ─── ACCOUNTS PAGE ────────────────────────────────────────────────────────────
async function renderAccounts() {
  document.getElementById('header-actions').innerHTML = `<button class="btn btn-primary" onclick="openAddAccount()">+ Add Account</button>`
  const grouped = { current: [], savings: [], credit_card: [], investment: [] }
  for (const a of state.accounts.filter(a => a.is_active)) {
    grouped[a.type]?.push(a)
  }
  const typeLabels = { current: 'Current Accounts', savings: 'Savings Accounts', credit_card: 'Credit Cards', investment: 'Investments' }
  let html = ''
  for (const [type, accounts] of Object.entries(grouped)) {
    if (!accounts.length) continue
    html += `<div style="font-size:12px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.6px;margin:16px 0 8px">${typeLabels[type]}</div>`
    for (const a of accounts) {
      const color = a.color || '#007AFF'
      const usedPct = a.type === 'credit_card' && a.credit_limit ? Math.min(100, Math.round((Math.abs(a.balance)/a.credit_limit)*100)) : null
      html += `
        <div class="glass-card" style="margin-bottom:12px;border-color:${color}25">
          <div class="flex-row" style="margin-bottom:${a.goal_amount||usedPct!==null?'12':'0'}px">
            <div style="width:38px;height:38px;border-radius:12px;background:${color}25;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">
              ${a.type==='credit_card'?'💳':a.type==='savings'?'🏦':a.type==='investment'?'📈':'🏦'}
            </div>
            <div style="flex:1;padding:0 12px">
              <div style="font-size:15px;font-weight:600">${a.name}</div>
              <div style="font-size:12px;color:var(--text-tertiary)">${a.iban||''}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:18px;font-weight:700;color:${color}">${fmt.currency(a.balance)}</div>
              ${usedPct!==null?`<div style="font-size:11px;color:var(--text-tertiary)">${usedPct}% of ${fmt.currency(a.credit_limit)}</div>`:''}
            </div>
            <button class="btn btn-glass" style="padding:7px 12px;font-size:12px;margin-left:10px" onclick="openEditAccount('${a.id}')">Edit</button>
          </div>
          ${a.goal_amount ? `
            <div>
              <div class="flex-row" style="margin-bottom:5px">
                <div style="font-size:12px;color:var(--text-secondary)">${a.goal_name||'Goal'}</div>
                <div style="font-size:12px;font-weight:700;margin-left:auto;color:${color}">${Math.min(100,Math.round((a.balance/a.goal_amount)*100))}%</div>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,(a.balance/a.goal_amount)*100)}%;background:${color}"></div></div>
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:3px">${fmt.currency(a.balance)} of ${fmt.currency(a.goal_amount)}</div>
            </div>` : ''}
        </div>`
    }
  }
  if (!html) html = '<div class="empty-state"><div class="empty-icon">💳</div><h3>No accounts yet</h3><p>Add your first account</p><br><button class="btn btn-primary" onclick="openAddAccount()">+ Add Account</button></div>'
  document.getElementById('content-area').innerHTML = html
}

// ─── TRANSACTIONS PAGE ────────────────────────────────────────────────────────
async function renderTransactions() {
  document.getElementById('header-actions').innerHTML = `<button class="btn btn-primary" onclick="openAddTransaction()">+ Add</button>`
  if (!txFilters.month) txFilters.month = new Date().toISOString().slice(0,7)
  await renderTxList()
}

async function renderTxList() {
  const data = await getTransactions({
    account_id: txFilters.account_id,
    type:       txFilters.type,
    month:      txFilters.month,
    search:     txFilters.search,
    limit:      50,
    offset:     txFilters.offset || 0,
  })
  const rows = data.rows

  document.getElementById('content-area').innerHTML = `
    <div class="glass-card glass-card-sm" style="margin-bottom:16px">
      <div class="flex-row" style="flex-wrap:wrap;gap:10px">
        <select class="select" style="width:auto;flex:1;min-width:150px" onchange="txFilters.account_id=this.value;txFilters.offset=0;renderTxList()">
          <option value="">All Accounts</option>
          ${state.accounts.map(a=>`<option value="${a.id}" ${txFilters.account_id===a.id?'selected':''}>${a.name}</option>`).join('')}
        </select>
        <select class="select" style="width:auto;flex:1;min-width:130px" onchange="txFilters.type=this.value;txFilters.offset=0;renderTxList()">
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="savings">Savings</option>
          <option value="transfer">Transfer</option>
        </select>
        <input type="month" class="input" style="width:auto;flex:1;min-width:150px" value="${txFilters.month}" onchange="txFilters.month=this.value;txFilters.offset=0;renderTxList()" />
        <input type="search" class="input" style="width:auto;flex:2;min-width:180px" placeholder="Search…" value="${txFilters.search||''}" oninput="txFilters.search=this.value;txFilters.offset=0;renderTxList()" />
      </div>
    </div>
    <div class="glass-card">
      <div class="flex-row" style="margin-bottom:16px">
        <div class="title-sm">${data.total} Transactions</div>
      </div>
      ${rows.length===0
        ? '<div class="empty-state"><div class="empty-icon">🔍</div><h3>No transactions</h3><p>Try adjusting filters</p></div>'
        : rows.map(t => renderTxRow(t, txFilters.account_id)).join('')}
      ${data.total>50 ? `
        <div class="flex-row" style="margin-top:16px;justify-content:center;gap:10px">
          ${txFilters.offset>0?`<button class="btn btn-glass" onclick="txFilters.offset-=50;renderTxList()">← Prev</button>`:''}
          <span class="text-secondary text-sm">${Math.floor(txFilters.offset/50)+1} / ${Math.ceil(data.total/50)}</span>
          ${txFilters.offset+50<data.total?`<button class="btn btn-glass" onclick="txFilters.offset+=50;renderTxList()">Next →</button>`:''}
        </div>` : ''}
    </div>`
}
window.renderTxList = renderTxList

// ─── FIXED COSTS PAGE ─────────────────────────────────────────────────────────
async function renderFixedCosts() {
  const costs = await getFixedCosts()
  const incomes   = costs.filter(c => c.type === 'income'  && c.is_active)
  const expenses  = costs.filter(c => c.type === 'expense' && c.is_active)
  const savings   = costs.filter(c => c.type === 'savings' && c.is_active)

  function toMonthly(list) {
    return list.reduce((s, c) => {
      if (c.frequency === 'monthly') return s + c.amount
      if (c.frequency === 'yearly')  return s + c.amount / 12
      if (c.frequency === 'weekly')  return s + c.amount * 4.33
      return s
    }, 0)
  }

  const monthlyIncome  = toMonthly(incomes)
  const monthlyExpense = toMonthly(expenses)
  const monthlySavings = toMonthly(savings)
  const monthlyNet     = monthlyIncome - monthlyExpense

  function section(type, items, empty) {
    if (!items.length) return `<div style="font-size:13px;color:var(--text-tertiary);padding:8px 0">${empty}</div>`
    return items.map(fc => {
      const col = type==='income'?'var(--tint-green)':type==='savings'?'var(--tint-purple)':'var(--tint-red)'
      const freq = fc.frequency==='monthly'?'/mo':fc.frequency==='yearly'?'/yr':'/wk'
      return `<div class="flex-row" style="padding:10px 0;border-bottom:1px solid var(--glass-border-sub)">
        <div style="flex:1">
          <div style="font-size:14px;font-weight:500">${fc.name}</div>
          <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px">${fc.frequency}${fc.account_id?` · ${state.accounts.find(a=>a.id===fc.account_id)?.name||''}`:''}</div>
        </div>
        <div style="font-size:14px;font-weight:700;color:${col};margin-right:10px">${fmt.currency(fc.amount)}${freq}</div>
        <button class="btn btn-glass" style="font-size:11px;padding:4px 10px" onclick="openEditFixedCost('${fc.id}')">Edit</button>
      </div>`
    }).join('')
  }

  document.getElementById('content-area').innerHTML = `
    <div class="glass-card glass-card-sm" style="margin-bottom:14px">
      <div class="flex-row" style="gap:16px;flex-wrap:wrap">
        <div><div class="text-xs text-secondary" style="margin-bottom:2px">Monthly Income</div><div style="font-size:16px;font-weight:700;color:var(--tint-green)">${fmt.currency(monthlyIncome)}</div></div>
        <div><div class="text-xs text-secondary" style="margin-bottom:2px">Monthly Expenses</div><div style="font-size:16px;font-weight:700;color:var(--tint-red)">${fmt.currency(monthlyExpense)}</div></div>
        <div><div class="text-xs text-secondary" style="margin-bottom:2px">Fixed Savings</div><div style="font-size:16px;font-weight:700;color:var(--tint-purple)">${fmt.currency(monthlySavings)}</div></div>
        <div style="margin-left:auto">
          <div class="text-xs text-secondary" style="margin-bottom:2px">Monthly Net</div>
          <div style="font-size:20px;font-weight:700;color:${monthlyNet>=0?'var(--tint-green)':'var(--tint-red)'}">${fmt.currency(monthlyNet,true)}</div>
          <div style="font-size:10px;color:var(--text-tertiary);margin-top:2px">excl. savings</div>
        </div>
      </div>
    </div>

    <div class="glass-card" style="margin-bottom:14px">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-green)">💰 Fixed Income</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:11px;padding:5px 10px" onclick="openAddFixedCost('income')">+ Add</button>
      </div>
      ${section('income', incomes, 'No fixed income yet.')}
    </div>
    <div class="glass-card" style="margin-bottom:14px">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-red)">💸 Fixed Expenses</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:11px;padding:5px 10px" onclick="openAddFixedCost('expense')">+ Add</button>
      </div>
      ${section('expense', expenses, 'No fixed expenses yet.')}
    </div>
    <div class="glass-card">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-purple)">🔒 Fixed Savings</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:11px;padding:5px 10px" onclick="openAddFixedCost('savings')">+ Add</button>
      </div>
      ${section('savings', savings, 'No fixed savings yet.')}
    </div>`
}

// ─── SAVINGS GOALS + WISHLIST ─────────────────────────────────────────────────
async function renderSavingsGoals() {
  document.getElementById('header-actions').innerHTML = `<button class="btn btn-primary" onclick="openAddWishItem()">+ Wish</button>`
  const wishlist = await getWishlist()
  const goaled   = state.accounts.filter(a => a.goal_amount && a.is_active)
  const noGoal   = state.accounts.filter(a => !a.goal_amount && a.type !== 'credit_card' && a.is_active)
  const totalBalance = state.accounts.filter(a => a.type !== 'credit_card' && a.is_active).reduce((s,a) => s+a.balance, 0)

  const priorityLabel = { 1:'🔥 High', 2:'⭐ Medium', 3:'💤 Low' }
  const priorityColor = { 1:'var(--tint-red)', 2:'var(--tint-yellow)', 3:'var(--text-tertiary)' }
  const statusLabel   = { wanted:'🛍️ Wanted', saving:'💰 Saving', bought:'✅ Bought' }
  const statusColor   = { wanted:'rgba(255,255,255,0.08)', saving:'rgba(0,122,255,0.12)', bought:'rgba(52,199,89,0.12)' }

  function wishProgress(w) {
    if (!w.price) return ''
    let balance, label
    if (w.track_account_id) {
      const acc = state.accounts.find(a => a.id === w.track_account_id)
      balance = acc ? acc.balance : 0
      label   = acc ? acc.name : 'Account'
    } else {
      balance = totalBalance
      label   = 'Total balance'
    }
    const pct          = Math.min(100, Math.max(0, Math.round((balance/w.price)*100)))
    const canAfford    = balance >= w.price
    const afterPurchase = balance - w.price
    const color = canAfford ? 'var(--tint-green)' : pct>=66 ? 'var(--tint-blue)' : pct>=33 ? 'var(--tint-orange)' : 'var(--tint-red)'
    return `
      <div style="margin-top:10px">
        <div class="flex-row" style="margin-bottom:5px">
          <div style="font-size:11px;color:var(--text-tertiary)">${label}: ${fmt.currency(balance)}</div>
          <div style="font-size:11px;font-weight:700;color:${color};margin-left:auto">${pct}% ${canAfford?'— ready! 🎉':`— ${fmt.currency(w.price-balance)} to go`}</div>
        </div>
        <div class="progress-track" style="height:6px">
          <div class="progress-fill" style="width:${pct}%;background:${color}"></div>
        </div>
        <div style="font-size:11px;color:${afterPurchase>=0?'var(--tint-green)':'var(--tint-red)'};margin-top:5px;font-weight:600">
          After purchase: ${fmt.currency(afterPurchase,true)}
        </div>
      </div>`
  }

  let html = ''

  if (goaled.length > 0) {
    html += `<div class="flex-row" style="margin-bottom:12px"><div class="title-sm">Savings Goals</div></div>
      <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:28px">`
    for (const a of goaled) {
      const pct       = Math.min(100, Math.round((a.balance/a.goal_amount)*100))
      const remaining = a.goal_amount - a.balance
      const color     = a.color || '#007AFF'
      html += `<div class="glass-card">
        <div class="flex-row" style="margin-bottom:14px">
          <div>
            <div style="font-size:16px;font-weight:600">${a.goal_name||a.name}</div>
            <div style="font-size:12px;color:var(--text-tertiary)">${a.name}${a.goal_deadline?` · by ${fmt.dateShort(a.goal_deadline)}`:''}</div>
          </div>
          <button class="btn btn-glass" style="margin-left:auto;font-size:11px;padding:5px 10px" onclick="openEditAccount('${a.id}')">Edit</button>
        </div>
        <div class="flex-row" style="margin-bottom:10px;gap:12px">
          <div><div style="font-size:11px;color:var(--text-tertiary)">Saved</div><div style="font-size:15px;font-weight:700;color:${color}">${fmt.currency(a.balance)}</div></div>
          <div><div style="font-size:11px;color:var(--text-tertiary)">Goal</div><div style="font-size:15px;font-weight:700">${fmt.currency(a.goal_amount)}</div></div>
          <div><div style="font-size:11px;color:var(--text-tertiary)">Remaining</div><div style="font-size:15px;font-weight:700;color:var(--tint-orange)">${fmt.currency(remaining)}</div></div>
          <div style="margin-left:auto;font-size:22px;font-weight:700;color:${color}">${pct}%</div>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${color}"></div></div>
      </div>`
    }
    html += `</div>`
  }

  if (noGoal.length > 0) {
    html += `<div class="glass-card glass-card-sm" style="margin-bottom:20px">
      <div style="font-size:13px;font-weight:600;margin-bottom:10px;color:var(--text-secondary)">Set a Goal</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${noGoal.map(a => `<button class="btn btn-glass" style="font-size:12px" onclick="openSetGoal('${a.id}')">${a.name}</button>`).join('')}
      </div>
    </div>`
  }

  const wantedItems = wishlist.filter(w => w.status !== 'bought')
  const boughtItems = wishlist.filter(w => w.status === 'bought')

  html += `<div class="flex-row" style="margin-bottom:12px">
    <div class="title-sm">Wish List</div>
    <button class="btn btn-glass" style="margin-left:auto;font-size:12px;padding:5px 12px" onclick="openAddWishItem()">+ Add</button>
  </div>`

  if (!wantedItems.length && !boughtItems.length) {
    html += `<div class="glass-card"><div class="empty-state" style="padding:32px 0"><div class="empty-icon">🛍️</div><h3>Your wish list is empty</h3><p>Add things you want to save up for</p></div></div>`
  } else {
    if (wantedItems.length) {
      html += `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">`
      for (const w of wantedItems) {
        html += `<div class="glass-card glass-card-sm" style="background:${statusColor[w.status]}">
          <div class="flex-row">
            <div style="font-size:24px;width:38px;text-align:center;flex-shrink:0">${w.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:15px;font-weight:600">${w.name}</div>
              <div class="flex-row" style="margin-top:3px;gap:8px">
                ${w.price?`<div style="font-size:13px;font-weight:700;color:var(--tint-blue)">${fmt.currency(w.price)}</div>`:''}
                <div style="font-size:11px;font-weight:600;color:${priorityColor[w.priority]}">${priorityLabel[w.priority]}</div>
                <div style="font-size:11px;color:var(--text-tertiary)">${statusLabel[w.status]}</div>
              </div>
              ${w.notes?`<div style="font-size:12px;color:var(--text-secondary);margin-top:3px">${w.notes}</div>`:''}
              ${wishProgress(w)}
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;flex-shrink:0;margin-left:10px">
              <button class="btn btn-glass" style="font-size:11px;padding:4px 10px" onclick="markWishBought('${w.id}')">✅ Got it</button>
              <button class="btn btn-glass" style="font-size:11px;padding:4px 10px" onclick="openEditWishItem('${w.id}')">Edit</button>
            </div>
          </div>
        </div>`
      }
      html += `</div>`
    }
    if (boughtItems.length) {
      html += `<div style="font-size:12px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:8px">Already Got ✅</div>
        <div style="display:flex;flex-direction:column;gap:8px">`
      for (const w of boughtItems) {
        html += `<div class="glass-card glass-card-xs flex-row" style="background:rgba(52,199,89,0.08);opacity:0.7">
          <div style="font-size:18px;width:30px;text-align:center">${w.icon}</div>
          <div style="flex:1;font-size:13px;font-weight:500;text-decoration:line-through;color:var(--text-secondary)">${w.name}</div>
          ${w.price?`<div style="font-size:13px;font-weight:600;color:var(--tint-green)">${fmt.currency(w.price)}</div>`:''}
          <button class="btn btn-glass" style="font-size:11px;padding:3px 8px;margin-left:8px" onclick="doDeleteWishItem('${w.id}')">✕</button>
        </div>`
      }
      html += `</div>`
    }
  }

  document.getElementById('content-area').innerHTML = html
}

// ─── MORE PAGE ────────────────────────────────────────────────────────────────
async function renderMore() {
  document.getElementById('header-actions').innerHTML = ''
  function menuRow(icon, iconBg, label, sub, page) {
    return `<div class="list-row" onclick="navigate('${page}')">
      <div style="width:34px;height:34px;border-radius:10px;background:${iconBg};display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0">${icon}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15px;font-weight:500">${label}</div>
        ${sub?`<div style="font-size:12px;color:var(--text-tertiary);margin-top:1px">${sub}</div>`:''}
      </div>
      <div style="color:var(--text-tertiary);font-size:16px;font-weight:300">›</div>
    </div>`
  }
  document.getElementById('content-area').innerHTML = `
    <div class="list-section" style="margin-bottom:16px">
      <div class="list-section-header">Goals & Future</div>
      ${menuRow('🎯','rgba(255,204,0,0.18)','Savings Goals','Track your savings targets','savings-goals')}
      ${menuRow('🔮','rgba(94,92,230,0.18)','Future Balance','12-month projection','projection')}
      ${menuRow('🧮','rgba(0,199,140,0.18)','Quick Calculator','What-if balance scenarios','calculator')}
    </div>
    <div class="list-section" style="margin-bottom:16px">
      <div class="list-section-header">Manage</div>
      ${menuRow('🏷️','rgba(255,149,0,0.18)','Categories','Organise your transactions','categories')}
      ${menuRow('📥','rgba(52,199,89,0.18)','Import CSV','Bulk import from your bank','import')}
    </div>
    <div class="list-section">
      <div class="list-section-header">About</div>
      <div class="list-row" style="cursor:default">
        <div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,rgba(0,122,255,0.35),rgba(175,82,222,0.35));display:flex;align-items:center;justify-content:center;font-size:17px">💰</div>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:500">Finance</div>
          <div style="font-size:12px;color:var(--text-tertiary)">Personal tracker · v2.0 Firebase</div>
        </div>
        <button class="btn btn-glass" style="font-size:12px;padding:6px 12px" onclick="window.signOut()">Sign out</button>
      </div>
      <div class="list-row" onclick="openResetConfirm()" style="color:var(--tint-red)">
        <div style="width:34px;height:34px;border-radius:10px;background:rgba(255,59,48,0.15);display:flex;align-items:center;justify-content:center;font-size:17px">🗑️</div>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:500;color:var(--tint-red)">Reset All Data</div>
          <div style="font-size:12px;color:var(--text-tertiary)">Wipe everything and start fresh</div>
        </div>
        <div style="color:var(--text-tertiary);font-size:16px;font-weight:300">›</div>
      </div>
    </div>`
}

// ─── FUTURE PROJECTION ────────────────────────────────────────────────────────
async function renderProjection() {
  const costs   = await getFixedCosts()
  const active  = costs.filter(c => c.is_active)
  const today   = new Date()
  const totalNow = state.accounts.filter(a => a.type !== 'credit_card' && a.is_active).reduce((s,a) => s+a.balance, 0)

  function monthlyNet(fc) {
    if (fc.frequency === 'monthly') return fc.type === 'income' ? fc.amount : -fc.amount
    if (fc.frequency === 'yearly')  return fc.type === 'income' ? fc.amount/12 : -fc.amount/12
    if (fc.frequency === 'weekly')  return fc.type === 'income' ? fc.amount*4.33 : -fc.amount*4.33
    return 0
  }

  const netPerMonth = active.reduce((s, fc) => s + monthlyNet(fc), 0)
  const rows = []
  let running = totalNow
  for (let i = 1; i <= 12; i++) {
    const d = new Date(today.getFullYear(), today.getMonth() + i, 1)
    const label = d.toLocaleString('nl-BE', { month: 'short', year: 'numeric' })
    running += netPerMonth
    rows.push({ label, balance: running, delta: netPerMonth })
  }

  const max = Math.max(...rows.map(r => Math.abs(r.balance)), 1)
  document.getElementById('content-area').innerHTML = `
    <div class="glass-card" style="margin-bottom:16px">
      <div class="title-sm" style="margin-bottom:4px">Starting Balance</div>
      <div style="font-size:28px;font-weight:700">${fmt.currency(totalNow)}</div>
      <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">Monthly fixed net: <strong style="color:${netPerMonth>=0?'var(--tint-green)':'var(--tint-red)'}">${fmt.currency(netPerMonth,true)}</strong></div>
    </div>
    <div class="glass-card" style="margin-bottom:16px">
      <div style="display:flex;align-items:flex-end;gap:4px;height:100px;margin-bottom:8px">
        ${rows.map(r => {
          const h = Math.max(4, Math.round((Math.abs(r.balance)/max)*90))
          const c = r.balance >= 0 ? 'var(--tint-blue)' : 'var(--tint-red)'
          return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px">
            <div style="width:100%;height:${h}px;background:${c};border-radius:4px 4px 0 0;opacity:0.8"></div>
          </div>`
        }).join('')}
      </div>
      <div style="display:flex;gap:4px">
        ${rows.map(r => `<div style="flex:1;font-size:8px;color:var(--text-tertiary);text-align:center;writing-mode:vertical-rl;transform:rotate(180deg)">${r.label}</div>`).join('')}
      </div>
    </div>
    <div class="glass-card">
      ${rows.map(r => `
        <div class="flex-row" style="padding:10px 0;border-bottom:1px solid var(--glass-border-sub)">
          <div style="font-size:13px;font-weight:500;flex:1">${r.label}</div>
          <div style="font-size:12px;color:${r.delta>=0?'var(--tint-green)':'var(--tint-red)'};margin-right:12px">${fmt.currency(r.delta,true)}</div>
          <div style="font-size:14px;font-weight:700;color:${r.balance>=0?'var(--tint-blue)':'var(--tint-red)'}">${fmt.currency(r.balance)}</div>
        </div>`).join('')}
    </div>`
}

// ─── CATEGORIES PAGE ──────────────────────────────────────────────────────────
async function renderCategories() {
  const [expTree, incTree, savTree] = await Promise.all([
    getCategoryTree('expense'),
    getCategoryTree('income'),
    getCategoryTree('savings'),
  ])
  state.categoryTree = { expense: expTree, income: incTree, savings: savTree }

  function renderTree(tree, type) {
    if (!tree.length) return `<div style="font-size:13px;color:var(--text-tertiary);padding:8px 0">No categories yet.</div>`
    return tree.map(p => `
      <div style="margin-bottom:8px">
        <div class="flex-row" style="padding:8px 0;cursor:pointer" onclick="toggleCatChildren('cc_${p.id}','chevron_${p.id}')">
          <div style="font-size:16px;width:26px">${p.icon||'📦'}</div>
          <div style="font-size:14px;font-weight:600;flex:1">${p.name}</div>
          <div id="chevron_${p.id}" style="color:var(--text-tertiary);font-size:13px;transform:rotate(-90deg);transition:transform 0.2s">▾</div>
        </div>
        <div id="cc_${p.id}" style="display:none;flex-direction:column;padding-left:26px">
          ${p.children.map(c => `
            <div class="flex-row" style="padding:6px 0;border-top:1px solid var(--glass-border-sub)">
              <div style="font-size:14px;width:24px">${c.icon||'·'}</div>
              <div style="font-size:13px;flex:1;color:var(--text-secondary)">${c.name}</div>
              <button class="btn btn-glass" style="font-size:10px;padding:3px 8px;color:var(--tint-red)" onclick="doDeleteCategory('${c.id}')">✕</button>
            </div>`).join('')}
          <button class="btn btn-glass" style="font-size:11px;padding:5px 10px;margin:6px 0" onclick="openAddCategory('${type}','${p.id}')">+ Sub</button>
        </div>
      </div>`).join('')
  }

  document.getElementById('content-area').innerHTML = `
    <div class="glass-card" style="margin-bottom:14px">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-red)">🔴 Expense Categories</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:12px;padding:5px 10px" onclick="openAddCategory('expense')">+ Parent</button>
      </div>
      ${renderTree(expTree,'expense')}
    </div>
    <div class="glass-card" style="margin-bottom:14px">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-green)">🟢 Income Categories</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:12px;padding:5px 10px" onclick="openAddCategory('income')">+ Parent</button>
      </div>
      ${renderTree(incTree,'income')}
    </div>
    <div class="glass-card">
      <div class="flex-row" style="margin-bottom:14px">
        <div class="title-sm" style="color:var(--tint-purple)">🟣 Savings Categories</div>
        <button class="btn btn-glass" style="margin-left:auto;font-size:12px;padding:5px 10px" onclick="openAddCategory('savings')">+ Parent</button>
      </div>
      ${renderTree(savTree,'savings')}
    </div>`
}

window.toggleCatChildren = (id, chevronId) => {
  const el = document.getElementById(id)
  if (!el) return
  const open = el.style.display === 'none'
  el.style.display = open ? 'flex' : 'none'
  const ch = document.getElementById(chevronId)
  if (ch) ch.style.transform = open ? 'rotate(0deg)' : 'rotate(-90deg)'
}

// ─── IMPORT PAGE ──────────────────────────────────────────────────────────────
async function renderImport() {
  document.getElementById('header-actions').innerHTML = ''
  document.getElementById('content-area').innerHTML = `
    <div class="glass-card" style="margin-bottom:16px">
      <div class="title-sm" style="margin-bottom:14px">📥 Import CSV</div>
      <div class="input-group">
        <label class="input-label">Account</label>
        <select class="select" id="imp-account">
          ${state.accounts.filter(a=>a.is_active).map(a=>`<option value="${a.id}">${a.name}</option>`).join('')}
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">CSV File</label>
        <input type="file" class="input" id="imp-file" accept=".csv" />
      </div>
      <div class="input-group">
        <label class="input-label">Date Format</label>
        <select class="select" id="imp-date-fmt">
          <option value="DD/MM/YYYY">DD/MM/YYYY (Belgian)</option>
          <option value="YYYY-MM-DD">YYYY-MM-DD (ISO)</option>
          <option value="MM/DD/YYYY">MM/DD/YYYY (US)</option>
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">Amount Format</label>
        <select class="select" id="imp-amount-type">
          <option value="signed">Single column (negative = expense)</option>
          <option value="separate">Separate debit/credit columns</option>
        </select>
      </div>
      <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px" onclick="parseImportCSV()">Preview CSV →</button>
    </div>
    <div id="imp-mapping" style="display:none"></div>
    <div id="imp-preview" style="display:none"></div>`
}

window.parseImportCSV = async () => {
  const file = document.getElementById('imp-file').files[0]
  if (!file) { toast('Select a CSV file', 'warning'); return }
  const text = await file.text()

  // Detect delimiter
  let delimiter = ','
  for (const d of [';', ',', '\t', '|']) {
    const lines = text.split('\n')
    if (lines[0].split(d).length > 2) { delimiter = d; break }
  }

  const lines   = text.trim().split('\n')
  const headers = lines[0].split(delimiter).map(h => h.trim().replace(/^"|"$/g,''))
  const rows    = lines.slice(1, 6).map(l => l.split(delimiter).map(v => v.trim().replace(/^"|"$/g,'')))

  // Auto-detect columns
  const lower = headers.map(h => h.toLowerCase())
  const guess = {
    date:        headers[lower.findIndex(h => h.includes('date') || h.includes('datum'))] || headers[0],
    amount:      headers[lower.findIndex(h => h.includes('amount') || h.includes('bedrag') || h.includes('montant'))] || '',
    description: headers[lower.findIndex(h => h.includes('desc') || h.includes('omschrijving') || h.includes('naam') || h.includes('name'))] || '',
    note:        headers[lower.findIndex(h => h.includes('note') || h.includes('mededeling') || h.includes('comment'))] || '',
  }

  window._importState = { text, delimiter, headers, accountId: document.getElementById('imp-account').value }

  document.getElementById('imp-mapping').style.display = 'block'
  document.getElementById('imp-mapping').innerHTML = `
    <div class="glass-card" style="margin-bottom:16px">
      <div class="title-sm" style="margin-bottom:14px">Map Columns</div>
      <div class="grid-2">
        ${['date','amount','description','note'].map(field => `
          <div class="input-group">
            <label class="input-label">${field.charAt(0).toUpperCase()+field.slice(1)}</label>
            <select class="select" id="map-${field}">
              <option value="">— skip —</option>
              ${headers.map(h=>`<option value="${h}" ${guess[field]===h?'selected':''}>${h}</option>`).join('')}
            </select>
          </div>`).join('')}
      </div>
      <div class="input-group">
        <label class="input-label">Date Format</label>
        <select class="select" id="imp-date-fmt2">
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
        </select>
      </div>
      <div style="overflow-x:auto;margin-top:12px">
        <table style="width:100%;font-size:11px;border-collapse:collapse">
          <thead><tr>${headers.map(h=>`<th style="text-align:left;padding:4px 8px;color:var(--text-tertiary);border-bottom:1px solid var(--glass-border)">${h}</th>`).join('')}</tr></thead>
          <tbody>${rows.map(r=>`<tr>${r.map(v=>`<td style="padding:4px 8px;border-bottom:1px solid var(--glass-border-sub)">${v}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      </div>
      <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:14px" onclick="executeImport()">Import →</button>
    </div>`
}

window.executeImport = async () => {
  const { text, delimiter, accountId } = window._importState
  const colDate = document.getElementById('map-date').value
  const colAmt  = document.getElementById('map-amount').value
  const colDesc = document.getElementById('map-description').value
  const colNote = document.getElementById('map-note').value
  const dateFmt = document.getElementById('imp-date-fmt2').value

  if (!colDate || !colAmt) { toast('Date and Amount columns required', 'warning'); return }

  function parseDate(raw) {
    if (!raw) return null
    if (dateFmt === 'DD/MM/YYYY') { const [d,m,y] = raw.split(/[\/\-\.]/); return `${y}-${m?.padStart(2,'0')}-${d?.padStart(2,'0')}` }
    if (dateFmt === 'MM/DD/YYYY') { const [m,d,y] = raw.split(/[\/\-\.]/); return `${y}-${m?.padStart(2,'0')}-${d?.padStart(2,'0')}` }
    return raw
  }

  const lines = text.trim().split('\n')
  const headers = lines[0].split(delimiter).map(h => h.trim().replace(/^"|"$/g,''))
  const dataRows = []

  for (const line of lines.slice(1)) {
    if (!line.trim()) continue
    const vals = line.split(delimiter).map(v => v.trim().replace(/^"|"$/g,''))
    const row  = Object.fromEntries(headers.map((h,i) => [h, vals[i]||'']))
    const date = parseDate(row[colDate])
    if (!date || isNaN(new Date(date).getTime())) continue
    const rawAmt = (row[colAmt]||'0').replace(/\s/g,'').replace(/[^\d\-\+\.,]/g,'').replace(',','.')
    const parsed = parseFloat(rawAmt)
    if (isNaN(parsed)) continue
    dataRows.push({
      date,
      amount:      Math.abs(parsed),
      type:        parsed >= 0 ? 'income' : 'expense',
      description: colDesc ? row[colDesc] : null,
      note:        colNote ? row[colNote] : null,
    })
  }

  if (!dataRows.length) { toast('No valid rows found', 'warning'); return }
  toast(`Importing ${dataRows.length} rows…`, 'info')

  const result = await importTransactions(accountId, dataRows)
  state.accounts = await getAccounts()

  const hasDupes   = result.possible_duplicates?.length > 0
  const hasPending = result.pending_review?.length > 0

  if (!hasDupes && !hasPending) {
    toast(`✅ Imported ${result.imported} transactions`, 'success')
    navigate('transactions')
    return
  }

  toast(`Imported ${result.imported} — review needed`, 'info')

  const accOptions = state.accounts.filter(a=>a.id!==accountId)
    .map(a=>`<option value="${a.id}">${a.name}</option>`).join('')

  let html = `<div style="font-size:15px;font-weight:600;margin-bottom:16px">✅ ${result.imported} imported · ${result.skipped} skipped</div>`

  if (hasPending) {
    html += `<div class="title-sm" style="margin-bottom:10px">🔗 Unknown IBANs</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
      ${result.pending_review.map(p=>`
        <div class="glass-card glass-card-sm" style="background:rgba(255,149,0,0.10);border-color:rgba(255,149,0,0.25)" id="pr_${p.tx_id}">
          <div class="flex-row" style="margin-bottom:8px">
            <div><div style="font-size:14px;font-weight:600">${p.description||'Transaction'}</div>
            <div style="font-size:12px;color:var(--text-tertiary)">${fmt.dateShort(p.date)} · ${fmt.currency(p.amount)} · <code style="font-size:11px">${p.unknown_iban}</code></div></div>
          </div>
          <div class="flex-row" style="gap:8px">
            <select class="select" id="resolve-acc-${p.tx_id}" style="flex:1">
              <option value="">Keep as-is</option>${accOptions}
            </select>
            <button class="btn btn-primary" style="font-size:12px" onclick="doResolveTransfer('${p.tx_id}')">Link</button>
          </div>
        </div>`).join('')}
      </div>`
  }

  if (hasDupes) {
    html += `<div class="title-sm" style="margin-bottom:10px">⚠️ Possible Duplicates</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
      ${result.possible_duplicates.map(d=>`
        <div class="glass-card glass-card-sm" style="background:rgba(255,59,48,0.08);border-color:rgba(255,59,48,0.2)">
          <div class="flex-row" style="gap:10px">
            <div style="flex:1;padding:8px;border-radius:10px;background:rgba(255,255,255,0.05)">
              <div style="font-size:11px;color:var(--text-tertiary);margin-bottom:3px">New</div>
              <div style="font-size:13px;font-weight:600">${d.imported_tx.description||'—'}</div>
              <div style="font-size:12px;color:var(--text-secondary)">${fmt.dateShort(d.imported_tx.date)} · ${fmt.currency(d.imported_tx.amount)}</div>
              <button class="btn btn-danger" style="font-size:11px;width:100%;justify-content:center;margin-top:6px" onclick="doDeleteDuplicate('${d.imported_tx.id}',this)">Delete new</button>
            </div>
            <div style="font-size:18px;align-self:center;color:var(--text-tertiary)">↔</div>
            <div style="flex:1;padding:8px;border-radius:10px;background:rgba(255,255,255,0.05)">
              <div style="font-size:11px;color:var(--text-tertiary);margin-bottom:3px">Existing · ${d.existing_tx.account_name}</div>
              <div style="font-size:13px;font-weight:600">${d.existing_tx.description||'—'}</div>
              <div style="font-size:12px;color:var(--text-secondary)">${fmt.dateShort(d.existing_tx.date)} · ${fmt.currency(d.existing_tx.amount)}</div>
              <button class="btn btn-danger" style="font-size:11px;width:100%;justify-content:center;margin-top:6px" onclick="doDeleteDuplicate('${d.existing_tx.id}',this)">Delete existing</button>
            </div>
          </div>
        </div>`).join('')}
      </div>`
  }

  html += `<button class="btn btn-primary" style="width:100%;justify-content:center" onclick="navigate('transactions')">Done →</button>`
  document.getElementById('content-area').innerHTML = html
}

window.doResolveTransfer = async (txId) => {
  const toAccId = document.getElementById('resolve-acc-'+txId)?.value
  await resolveTransfer(txId, toAccId || null)
  document.getElementById('pr_'+txId)?.remove()
  state.accounts = await getAccounts()
  toast('Transfer linked', 'success')
}

window.doDeleteDuplicate = async (txId, btn) => {
  await deleteTransaction(txId)
  btn.closest('.glass-card')?.remove()
  state.accounts = await getAccounts()
  toast('Deleted', 'info')
}

// ─── CALCULATOR ───────────────────────────────────────────────────────────────
let calcItems = []
let calcAccountId = ''

function renderCalculator() {
  document.getElementById('header-actions').innerHTML = ''
  const accounts = state.accounts.filter(a => a.type !== 'credit_card' && a.is_active)
  const totalBalance = accounts.reduce((s,a) => s+a.balance, 0)

  function startBal() {
    if (!calcAccountId) return totalBalance
    return accounts.find(a => a.id === calcAccountId)?.balance || 0
  }

  function renderCalc() {
    const base   = startBal()
    const result = calcItems.reduce((s, it) => it.type === 'income' ? s+it.amount : s-it.amount, base)
    const diff   = result - base
    const rc     = result >= 0 ? 'var(--tint-green)' : 'var(--tint-red)'
    const dc     = diff   >= 0 ? 'var(--tint-green)' : 'var(--tint-red)'

    const resEl  = document.getElementById('calc-result')
    const diffEl = document.getElementById('calc-diff')
    const baseEl = document.getElementById('calc-base')
    if (resEl)  { resEl.textContent  = fmt.currency(result); resEl.style.color  = rc }
    if (diffEl) { diffEl.textContent = fmt.currency(diff,true); diffEl.style.color = dc }
    if (baseEl)   baseEl.textContent = fmt.currency(base)

    const listEl = document.getElementById('calc-items')
    if (listEl) {
      listEl.innerHTML = calcItems.length === 0
        ? `<div style="text-align:center;padding:24px 0;color:var(--text-tertiary);font-size:13px">Add expenses or income below</div>`
        : calcItems.map(it => `
          <div class="flex-row" style="padding:10px 0;border-bottom:1px solid var(--glass-border-sub)">
            <div style="width:26px;height:26px;border-radius:8px;background:${it.type==='income'?'rgba(52,199,89,0.18)':'rgba(255,59,48,0.15)'};display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0">${it.type==='income'?'＋':'－'}</div>
            <div style="flex:1;font-size:14px;font-weight:500;padding:0 10px">${it.label}</div>
            <div style="font-size:14px;font-weight:700;color:${it.type==='income'?'var(--tint-green)':'var(--tint-red)'}">${it.type==='income'?'+':'-'}${fmt.currency(it.amount)}</div>
            <button onclick="calcRemove('${it.id}')" style="background:none;border:none;color:var(--text-tertiary);font-size:17px;cursor:pointer;padding:0 0 0 10px">×</button>
          </div>`).join('')
    }
  }

  document.getElementById('content-area').innerHTML = `
    <div class="glass-card hero-card" style="margin-bottom:16px;text-align:center;padding:24px">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:var(--text-secondary);margin-bottom:6px">Resulting Balance</div>
      <div id="calc-result" style="font-size:44px;font-weight:700;letter-spacing:-1.5px;line-height:1">${fmt.currency(startBal())}</div>
      <div style="margin-top:8px;display:flex;align-items:center;justify-content:center;gap:12px">
        <div style="font-size:13px;color:var(--text-secondary)">Starting: <span id="calc-base">${fmt.currency(startBal())}</span></div>
        <div style="font-size:13px;font-weight:700" id="calc-diff">+€0,00</div>
      </div>
    </div>
    <div class="glass-card glass-card-sm" style="margin-bottom:14px">
      <div class="input-group">
        <label class="input-label">Starting from</label>
        <select class="select" id="calc-account-sel" onchange="calcSetAccount(this.value)">
          <option value="">📊 Total balance — ${fmt.currency(totalBalance)}</option>
          ${accounts.map(a=>`<option value="${a.id}" ${calcAccountId===a.id?'selected':''}>${a.name} (${fmt.currency(a.balance)})</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="glass-card" style="margin-bottom:14px">
      <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:var(--text-tertiary);margin-bottom:10px">What-ifs</div>
      <div id="calc-items"><div style="text-align:center;padding:24px 0;color:var(--text-tertiary);font-size:13px">Add expenses or income below</div></div>
    </div>
    <div class="glass-card glass-card-sm" style="margin-bottom:10px">
      <div class="flex-row" style="gap:8px;margin-bottom:8px">
        <div class="segment-control" style="flex-shrink:0">
          <button class="segment-btn active" id="calc-type-exp" onclick="calcSetType('expense')">− Expense</button>
          <button class="segment-btn" id="calc-type-inc" onclick="calcSetType('income')">+ Income</button>
        </div>
      </div>
      <div class="flex-row" style="gap:8px">
        <input type="text" class="input" id="calc-label" placeholder="Label (e.g. Trip to Rome)" style="flex:2" />
        <div class="amount-input-wrap" style="flex:1">
          <span class="amount-prefix">€</span>
          <input type="number" class="input" id="calc-amount" placeholder="0.00" step="0.01" style="padding-left:28px" onkeydown="if(event.key==='Enter')calcAdd()" />
        </div>
        <button class="btn btn-primary" onclick="calcAdd()" style="flex-shrink:0;padding:10px 16px;font-size:18px;line-height:1">+</button>
      </div>
    </div>
    <button class="btn btn-glass" onclick="calcClear()" style="width:100%;justify-content:center;color:var(--tint-red)">🗑 Clear all</button>`

  window._calcType = 'expense'
  renderCalc()

  window.calcSetAccount = (v) => { calcAccountId = v; renderCalc() }
  window.calcRemove     = (id) => { calcItems = calcItems.filter(i => i.id !== id); renderCalc() }
  window.calcClear      = ()   => { calcItems = []; calcAccountId = ''; document.getElementById('calc-account-sel').value = ''; renderCalc() }
  window.calcSetType    = (t)  => {
    window._calcType = t
    document.getElementById('calc-type-exp').classList.toggle('active', t==='expense')
    document.getElementById('calc-type-inc').classList.toggle('active', t==='income')
  }
  window.calcAdd = () => {
    const label  = document.getElementById('calc-label').value.trim()
    const amount = parseFloat(document.getElementById('calc-amount').value)
    if (!amount || isNaN(amount) || amount <= 0) { toast('Enter an amount','warning'); return }
    calcItems.push({ id:'c'+Date.now(), label: label||(window._calcType==='income'?'Income':'Expense'), amount, type: window._calcType||'expense' })
    document.getElementById('calc-label').value  = ''
    document.getElementById('calc-amount').value = ''
    renderCalc()
  }
}

// ─── MODAL FORMS ──────────────────────────────────────────────────────────────

// ── ADD ACCOUNT ──────────────────────────────────────────────────────────────
function openAddAccount() {
  const id = showModal('New Account', `
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Name *</label>
        <input type="text" class="input" id="acc-name" placeholder="e.g. Main Current" />
      </div>
      <div class="input-group">
        <label class="input-label">Type *</label>
        <select class="select" id="acc-type">
          <option value="current">Current Account</option>
          <option value="savings">Savings Account</option>
          <option value="credit_card">Credit Card</option>
          <option value="investment">Investment</option>
        </select>
      </div>
    </div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Starting Balance (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span>
        <input type="number" class="input" id="acc-balance" step="0.01" placeholder="0.00" /></div>
      </div>
      <div class="input-group">
        <label class="input-label">Balance Date</label>
        <input type="date" class="input" id="acc-balance-date" value="${new Date().toISOString().split('T')[0]}" />
      </div>
    </div>
    <div class="input-group" id="credit-limit-group" style="display:none">
      <label class="input-label">Credit Limit (€)</label>
      <div class="amount-input-wrap"><span class="amount-prefix">€</span>
      <input type="number" class="input" id="acc-credit-limit" step="0.01" placeholder="e.g. 2000" /></div>
    </div>
    <div class="input-group">
      <label class="input-label">IBAN <span style="color:var(--text-tertiary);font-weight:400">(optional)</span></label>
      <input type="text" class="input" id="acc-iban" placeholder="BE68 5390 0754 7034" style="font-family:monospace" />
    </div>
    <div class="input-group">
      <label class="input-label">Color</label>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${['#007AFF','#34C759','#FF9500','#FF3B30','#AF52DE','#5AC8FA','#FF2D55','#FFCC00'].map(c=>`
          <div style="width:28px;height:28px;border-radius:50%;background:${c};cursor:pointer;border:2px solid transparent" 
               onclick="selectColor('${c}',this)" data-color="${c}"></div>`).join('')}
      </div>
      <input type="hidden" id="acc-color" value="#007AFF" />
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitAccount('__MODAL_ID__')">Add Account</button>`)

  document.getElementById('acc-type').addEventListener('change', function() {
    document.getElementById('credit-limit-group').style.display = this.value === 'credit_card' ? 'block' : 'none'
  })
}
window.openAddAccount = openAddAccount

window.selectColor = (color, el) => {
  document.querySelectorAll('[data-color]').forEach(e => e.style.border = '2px solid transparent')
  el.style.border = '2px solid white'
  const input = document.getElementById('acc-color')
  if (input) input.value = color
}

window.submitAccount = async (modalId) => {
  const name = document.getElementById('acc-name').value.trim()
  if (!name) { toast('Name required','warning'); return }
  await createAccount({
    name,
    type:        document.getElementById('acc-type').value,
    balance:     parseFloat(document.getElementById('acc-balance').value) || 0,
    balance_date:document.getElementById('acc-balance-date').value,
    color:       document.getElementById('acc-color').value,
    credit_limit:document.getElementById('acc-credit-limit')?.value || null,
    iban:        document.getElementById('acc-iban')?.value?.trim() || null,
  })
  toast('Account created','success')
  closeModal(modalId)
  state.accounts = await getAccounts()
  if (state.currentPage === 'accounts') await renderAccounts()
  else await renderDashboard()
}

// ── EDIT ACCOUNT ─────────────────────────────────────────────────────────────
function openEditAccount(id) {
  const a = state.accounts.find(x => x.id === id)
  if (!a) return
  showModal('Edit Account', `
    <div class="input-group">
      <label class="input-label">Name</label>
      <input type="text" class="input" id="edit-acc-name" value="${a.name}" />
    </div>
    <div class="glass-card glass-card-xs" style="background:rgba(0,122,255,0.08);border-color:rgba(0,122,255,0.20);margin-bottom:12px">
      <div style="font-size:12px;font-weight:600;color:var(--tint-blue);margin-bottom:6px">📍 Starting Point</div>
      <div class="grid-2" style="gap:10px">
        <div class="input-group">
          <label class="input-label">Opening Balance (€)</label>
          <div class="amount-input-wrap"><span class="amount-prefix">€</span>
          <input type="number" class="input" id="edit-acc-balance" step="0.01" value="${a.opening_balance ?? a.balance}" /></div>
        </div>
        <div class="input-group">
          <label class="input-label">Balance Date</label>
          <input type="date" class="input" id="edit-acc-balance-date" value="${a.balance_date || new Date().toISOString().split('T')[0]}" />
        </div>
      </div>
      <div style="font-size:11px;color:var(--text-tertiary);margin-top:6px">Current computed balance: <strong style="color:var(--text-primary)">${fmt.currency(a.balance)}</strong></div>
    </div>
    <div class="input-group">
      <label class="input-label">IBAN</label>
      <input type="text" class="input" id="edit-acc-iban" value="${a.iban||''}" placeholder="BE68 5390 0754 7034" style="font-family:monospace" />
    </div>
    ${a.type === 'credit_card' ? `
      <div class="input-group">
        <label class="input-label">Credit Limit (€)</label>
        <input type="number" class="input" id="edit-acc-limit" value="${a.credit_limit||''}" step="0.01" />
      </div>` : ''}
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitEditAccount('${id}','__MODAL_ID__')">Save</button>`)
}
window.openEditAccount = openEditAccount

window.submitEditAccount = async (id, modalId) => {
  const body = {
    name:         document.getElementById('edit-acc-name').value,
    iban:         document.getElementById('edit-acc-iban')?.value?.trim() || null,
  }
  const balEl  = document.getElementById('edit-acc-balance')
  const dateEl = document.getElementById('edit-acc-balance-date')
  const limEl  = document.getElementById('edit-acc-limit')
  if (balEl?.value !== '')  body.balance      = parseFloat(balEl.value)
  if (dateEl?.value)        body.balance_date = dateEl.value
  if (limEl?.value !== '')  body.credit_limit = parseFloat(limEl.value)

  await updateAccount(id, body)
  toast('Account updated','success')
  closeModal(modalId)
  state.accounts = await getAccounts()
  if (state.currentPage === 'accounts') await renderAccounts()
  else await renderDashboard()
}

// ── ADD/EDIT TRANSACTION ──────────────────────────────────────────────────────
async function openAddTransaction(prefill = {}) {
  const today = new Date().toISOString().split('T')[0]
  const expTree = state.categoryTree.expense.length ? state.categoryTree.expense : await getCategoryTree('expense')
  const incTree = state.categoryTree.income.length  ? state.categoryTree.income  : await getCategoryTree('income')
  const savTree = state.categoryTree.savings.length ? state.categoryTree.savings : await getCategoryTree('savings')
  state.categoryTree = { expense: expTree, income: incTree, savings: savTree }

  function catOptions(tree) {
    return tree.map(p => `
      <optgroup label="${p.icon} ${p.name}">
        ${p.children.map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join('')}
      </optgroup>`).join('')
  }

  showModal('Add Transaction', `
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Type</label>
        <select class="select" id="tx-type" onchange="onTxTypeChange(this.value)">
          ${['expense','income','savings','transfer'].map(t=>`<option value="${t}" ${prefill.type===t?'selected':''}>${t.charAt(0).toUpperCase()+t.slice(1)}</option>`).join('')}
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">Account</label>
        <select class="select" id="tx-account">
          ${state.accounts.filter(a=>a.is_active).map(a=>`<option value="${a.id}" ${prefill.account_id===a.id?'selected':''}>${a.name}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="input-group" id="tx-to-account-group" style="display:none">
      <label class="input-label">To Account</label>
      <select class="select" id="tx-to-account">
        ${state.accounts.filter(a=>a.is_active).map(a=>`<option value="${a.id}">${a.name}</option>`).join('')}
      </select>
    </div>
    <div class="input-group">
      <label class="input-label">Amount (€)</label>
      <div class="amount-input-wrap"><span class="amount-prefix">€</span>
      <input type="number" class="input" id="tx-amount" step="0.01" placeholder="0.00" value="${prefill.amount||''}" /></div>
    </div>
    <div class="input-group">
      <label class="input-label">Date</label>
      <input type="date" class="input" id="tx-date" value="${prefill.date||today}" />
    </div>
    <div class="input-group" id="tx-cat-group">
      <label class="input-label">Category</label>
      <select class="select" id="tx-cat">
        <option value="">— none —</option>
        ${catOptions(expTree)}
      </select>
    </div>
    <div class="input-group">
      <label class="input-label">Description</label>
      <input type="text" class="input" id="tx-desc" placeholder="Optional description" value="${prefill.description||''}" />
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitAddTransaction('__MODAL_ID__')">Add</button>`)

  window.onTxTypeChange = (type) => {
    const toGroup = document.getElementById('tx-to-account-group')
    const catSel  = document.getElementById('tx-cat')
    if (toGroup) toGroup.style.display = ['savings','transfer'].includes(type) ? 'block' : 'none'
    if (catSel) {
      catSel.innerHTML = '<option value="">— none —</option>'
      const tree = type === 'savings' ? savTree : type === 'income' ? incTree : type === 'expense' ? expTree : []
      catSel.innerHTML += catOptions(tree)
    }
  }
  onTxTypeChange(prefill.type || 'expense')
}
window.openAddTransaction = openAddTransaction

window.submitAddTransaction = async (modalId) => {
  const type = document.getElementById('tx-type').value
  const amount = parseFloat(document.getElementById('tx-amount').value)
  const date   = document.getElementById('tx-date').value
  const acctId = document.getElementById('tx-account').value
  if (!amount || !date || !acctId) { toast('Amount, date and account required','warning'); return }
  await createTransaction({
    account_id:    acctId,
    to_account_id: ['savings','transfer'].includes(type) ? document.getElementById('tx-to-account').value : null,
    amount, type, date,
    category_id:  document.getElementById('tx-cat').value || null,
    description:  document.getElementById('tx-desc').value || null,
  })
  toast('Transaction added','success')
  closeModal(modalId)
  state.accounts = await getAccounts()
  if (state.currentPage === 'transactions') await renderTxList()
  else await renderDashboard()
}

async function openEditTransaction(id) {
  const expTree = state.categoryTree.expense.length ? state.categoryTree.expense : await getCategoryTree('expense')
  const incTree = state.categoryTree.income.length  ? state.categoryTree.income  : await getCategoryTree('income')
  const savTree = state.categoryTree.savings.length ? state.categoryTree.savings : await getCategoryTree('savings')

  // Need to fetch this single tx with enriched data
  const data = await getTransactions({})
  const tx = data.rows.find(t => t.id === id)
  if (!tx) { toast('Transaction not found','warning'); return }

  function catOptions(tree, selId) {
    return tree.map(p => `
      <optgroup label="${p.icon} ${p.name}">
        ${p.children.map(c=>`<option value="${c.id}" ${c.id===selId?'selected':''}>${c.icon} ${c.name}</option>`).join('')}
      </optgroup>`).join('')
  }

  function getCatHtml(type, selId) {
    const tree = type === 'savings' ? savTree : type === 'income' ? incTree : expTree
    return `<option value="">— none —</option>${catOptions(tree, selId)}`
  }

  showModal('Edit Transaction', `
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Type</label>
        <select class="select" id="edit-tx-type" onchange="onEditTxTypeChange(this.value)">
          ${['expense','income','savings','transfer'].map(t=>`<option value="${t}" ${tx.type===t?'selected':''}>${t.charAt(0).toUpperCase()+t.slice(1)}</option>`).join('')}
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">Amount (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span>
        <input type="number" class="input" id="edit-tx-amount" step="0.01" value="${tx.amount}" /></div>
      </div>
    </div>
    <div class="input-group">
      <label class="input-label">Date</label>
      <input type="date" class="input" id="edit-tx-date" value="${tx.date}" />
    </div>
    <div class="input-group" id="edit-tx-to-account-group" style="display:${['savings','transfer'].includes(tx.type)?'block':'none'}">
      <label class="input-label">To Account</label>
      <select class="select" id="edit-tx-to-account">
        ${state.accounts.filter(a=>a.is_active).map(a=>`<option value="${a.id}" ${a.id===tx.to_account_id?'selected':''}>${a.name}</option>`).join('')}
      </select>
    </div>
    <div class="input-group">
      <label class="input-label">Category</label>
      <select class="select" id="edit-tx-cat">${getCatHtml(tx.type, tx.category_id)}</select>
    </div>
    <div class="input-group">
      <label class="input-label">Description</label>
      <input type="text" class="input" id="edit-tx-desc" value="${tx.description||''}" />
    </div>
  `,`
    <button class="btn btn-danger" onclick="doDeleteTransaction('${id}','__MODAL_ID__')">Delete</button>
    <button class="btn btn-glass"  onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitEditTransaction('${id}','__MODAL_ID__')">Save</button>`)

  window.onEditTxTypeChange = (type) => {
    const toGroup = document.getElementById('edit-tx-to-account-group')
    const catSel  = document.getElementById('edit-tx-cat')
    if (toGroup) toGroup.style.display = ['savings','transfer'].includes(type) ? 'block' : 'none'
    if (catSel) catSel.innerHTML = getCatHtml(type, null)
  }
}
window.openEditTransaction = openEditTransaction

window.submitEditTransaction = async (id, modalId) => {
  const type = document.getElementById('edit-tx-type').value
  await updateTransaction(id, {
    type,
    amount:        parseFloat(document.getElementById('edit-tx-amount').value),
    date:          document.getElementById('edit-tx-date').value,
    category_id:   document.getElementById('edit-tx-cat').value || null,
    description:   document.getElementById('edit-tx-desc').value || null,
    to_account_id: ['savings','transfer'].includes(type) ? document.getElementById('edit-tx-to-account').value : null,
  })
  toast('Saved','success')
  closeModal(modalId)
  state.accounts = await getAccounts()
  if (state.currentPage === 'transactions') await renderTxList()
  else await renderDashboard()
}

window.doDeleteTransaction = async (id, modalId) => {
  await deleteTransaction(id)
  toast('Deleted','info')
  closeModal(modalId)
  state.accounts = await getAccounts()
  if (state.currentPage === 'transactions') await renderTxList()
  else await renderDashboard()
}

// ── ADD/EDIT FIXED COST ───────────────────────────────────────────────────────
function openAddFixedCost(presetType = 'expense') {
  showModal('New Fixed Cost', `
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Name *</label>
        <input type="text" class="input" id="fc-name" placeholder="e.g. Rent, Salary…" />
      </div>
      <div class="input-group">
        <label class="input-label">Type</label>
        <select class="select" id="fc-type">
          ${['expense','income','savings'].map(t=>`<option value="${t}" ${t===presetType?'selected':''}>${t.charAt(0).toUpperCase()+t.slice(1)}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Amount (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span>
        <input type="number" class="input" id="fc-amount" step="0.01" placeholder="0.00" /></div>
      </div>
      <div class="input-group">
        <label class="input-label">Frequency</label>
        <select class="select" id="fc-freq">
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
    </div>
    <div class="input-group">
      <label class="input-label">Account</label>
      <select class="select" id="fc-account">
        <option value="">— any —</option>
        ${state.accounts.filter(a=>a.is_active).map(a=>`<option value="${a.id}">${a.name}</option>`).join('')}
      </select>
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitAddFixedCost('__MODAL_ID__')">Add</button>`)
}
window.openAddFixedCost = openAddFixedCost

window.submitAddFixedCost = async (modalId) => {
  const name   = document.getElementById('fc-name').value.trim()
  const amount = parseFloat(document.getElementById('fc-amount').value)
  if (!name || !amount) { toast('Name and amount required','warning'); return }
  await createFixedCost({
    name, amount,
    type:       document.getElementById('fc-type').value,
    frequency:  document.getElementById('fc-freq').value,
    account_id: document.getElementById('fc-account').value || null,
  })
  toast('Fixed cost added','success')
  closeModal(modalId)
  await renderFixedCosts()
}

async function openEditFixedCost(id) {
  const costs = await getFixedCosts()
  const fc = costs.find(c => c.id === id)
  if (!fc) return
  showModal('Edit Fixed Cost', `
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Name</label>
        <input type="text" class="input" id="efc-name" value="${fc.name}" />
      </div>
      <div class="input-group">
        <label class="input-label">Type</label>
        <select class="select" id="efc-type">
          ${['expense','income','savings'].map(t=>`<option value="${t}" ${t===fc.type?'selected':''}>${t.charAt(0).toUpperCase()+t.slice(1)}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Amount (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span>
        <input type="number" class="input" id="efc-amount" step="0.01" value="${fc.amount}" /></div>
      </div>
      <div class="input-group">
        <label class="input-label">Frequency</label>
        <select class="select" id="efc-freq">
          ${['monthly','yearly','weekly'].map(f=>`<option value="${f}" ${f===fc.frequency?'selected':''}>${f.charAt(0).toUpperCase()+f.slice(1)}</option>`).join('')}
        </select>
      </div>
    </div>
  `,`
    <button class="btn btn-danger" onclick="doDeleteFixedCost('${id}','__MODAL_ID__')">Delete</button>
    <button class="btn btn-glass"  onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitEditFixedCost('${id}','__MODAL_ID__')">Save</button>`)
}
window.openEditFixedCost = openEditFixedCost

window.submitEditFixedCost = async (id, modalId) => {
  await updateFixedCost(id, {
    name:      document.getElementById('efc-name').value,
    type:      document.getElementById('efc-type').value,
    amount:    parseFloat(document.getElementById('efc-amount').value),
    frequency: document.getElementById('efc-freq').value,
  })
  toast('Saved','success')
  closeModal(modalId)
  await renderFixedCosts()
}

window.doDeleteFixedCost = async (id, modalId) => {
  await deleteFixedCost(id)
  toast('Deleted','info')
  closeModal(modalId)
  await renderFixedCosts()
}

// ── WISHLIST ACTIONS ──────────────────────────────────────────────────────────
function openAddWishItem() {
  const icons = ['🛍️','📱','💻','🎮','👟','🎧','📷','🚗','✈️','🏠','📚','⌚','🎸','🏋️','🍕']
  const accOptions = state.accounts.filter(a=>a.type!=='credit_card'&&a.is_active)
    .map(a=>`<option value="${a.id}">${a.name} (${fmt.currency(a.balance)})</option>`).join('')

  showModal('Add to Wish List', `
    <div class="flex-row" style="flex-wrap:wrap;gap:8px;margin-bottom:4px">
      ${icons.map(ic=>`<div onclick="document.getElementById('wish-icon').value='${ic}';document.querySelectorAll('.wib').forEach(e=>e.style.background='transparent');this.style.background='rgba(255,255,255,0.15)'" class="wib" style="width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer">${ic}</div>`).join('')}
    </div>
    <input type="hidden" id="wish-icon" value="🛍️" />
    <div class="input-group">
      <label class="input-label">Name *</label>
      <input type="text" class="input" id="wish-name" placeholder="e.g. New iPhone…" />
    </div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Price (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span>
        <input type="number" class="input" id="wish-price" step="0.01" placeholder="0.00" /></div>
      </div>
      <div class="input-group">
        <label class="input-label">Priority</label>
        <select class="select" id="wish-priority">
          <option value="1">🔥 High</option>
          <option value="2" selected>⭐ Medium</option>
          <option value="3">💤 Low</option>
        </select>
      </div>
    </div>
    <div class="input-group">
      <label class="input-label">Track progress with</label>
      <select class="select" id="wish-track">
        <option value="">📊 Total balance</option>
        ${accOptions}
      </select>
    </div>
    <div class="input-group">
      <label class="input-label">Notes</label>
      <input type="text" class="input" id="wish-notes" placeholder="Optional notes…" />
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitAddWishItem('__MODAL_ID__')">Add</button>`)
}
window.openAddWishItem = openAddWishItem

window.submitAddWishItem = async (modalId) => {
  const name = document.getElementById('wish-name').value.trim()
  if (!name) { toast('Name required','warning'); return }
  await createWishItem({
    name,
    icon:             document.getElementById('wish-icon').value,
    price:            parseFloat(document.getElementById('wish-price').value) || null,
    priority:         parseInt(document.getElementById('wish-priority').value),
    notes:            document.getElementById('wish-notes').value || null,
    track_account_id: document.getElementById('wish-track').value || null,
  })
  toast('Added to wish list','success')
  closeModal(modalId)
  await renderSavingsGoals()
}

async function openEditWishItem(id) {
  const wishlist = await getWishlist()
  const w = wishlist.find(x => x.id === id)
  if (!w) return
  const icons = ['🛍️','📱','💻','🎮','👟','🎧','📷','🚗','✈️','🏠','📚','⌚','🎸','🏋️','🍕']
  const accOptions = state.accounts.filter(a=>a.type!=='credit_card'&&a.is_active)
    .map(a=>`<option value="${a.id}" ${w.track_account_id===a.id?'selected':''}>${a.name} (${fmt.currency(a.balance)})</option>`).join('')

  showModal('Edit Wish Item', `
    <div class="flex-row" style="flex-wrap:wrap;gap:8px;margin-bottom:4px">
      ${icons.map(ic=>`<div onclick="document.getElementById('wish-icon-e').value='${ic}';document.querySelectorAll('.wibe').forEach(e=>e.style.background='transparent');this.style.background='rgba(255,255,255,0.15)'" class="wibe" style="width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer;${w.icon===ic?'background:rgba(255,255,255,0.15)':''}">${ic}</div>`).join('')}
    </div>
    <input type="hidden" id="wish-icon-e" value="${w.icon}" />
    <div class="input-group"><label class="input-label">Name</label><input type="text" class="input" id="wish-name-e" value="${w.name}" /></div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Price (€)</label>
        <div class="amount-input-wrap"><span class="amount-prefix">€</span><input type="number" class="input" id="wish-price-e" step="0.01" value="${w.price||''}" /></div>
      </div>
      <div class="input-group">
        <label class="input-label">Priority</label>
        <select class="select" id="wish-priority-e">
          <option value="1" ${w.priority==1?'selected':''}>🔥 High</option>
          <option value="2" ${w.priority==2?'selected':''}>⭐ Medium</option>
          <option value="3" ${w.priority==3?'selected':''}>💤 Low</option>
        </select>
      </div>
    </div>
    <div class="input-group">
      <label class="input-label">Track with</label>
      <select class="select" id="wish-track-e">
        <option value="" ${!w.track_account_id?'selected':''}>📊 Total balance</option>
        ${accOptions}
      </select>
    </div>
    <div class="input-group">
      <label class="input-label">Status</label>
      <select class="select" id="wish-status-e">
        <option value="wanted" ${w.status==='wanted'?'selected':''}>🛍️ Wanted</option>
        <option value="saving" ${w.status==='saving'?'selected':''}>💰 Saving for it</option>
        <option value="bought" ${w.status==='bought'?'selected':''}>✅ Bought</option>
      </select>
    </div>
    <div class="input-group"><label class="input-label">Notes</label><input type="text" class="input" id="wish-notes-e" value="${w.notes||''}" /></div>
  `,`
    <button class="btn btn-danger" onclick="doDeleteWishItem('${id}','__MODAL_ID__')">Delete</button>
    <button class="btn btn-glass"  onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitEditWishItem('${id}','__MODAL_ID__')">Save</button>`)
}
window.openEditWishItem = openEditWishItem

window.submitEditWishItem = async (id, modalId) => {
  await updateWishItem(id, {
    name:             document.getElementById('wish-name-e').value,
    icon:             document.getElementById('wish-icon-e').value,
    price:            parseFloat(document.getElementById('wish-price-e').value) || null,
    priority:         parseInt(document.getElementById('wish-priority-e').value),
    status:           document.getElementById('wish-status-e').value,
    notes:            document.getElementById('wish-notes-e').value || null,
    track_account_id: document.getElementById('wish-track-e').value || null,
  })
  toast('Saved','success')
  closeModal(modalId)
  await renderSavingsGoals()
}

window.doDeleteWishItem = async (id, modalId) => {
  await removeWishItem(id)
  if (modalId) closeModal(modalId)
  toast('Deleted','info')
  await renderSavingsGoals()
}

window.markWishBought = async (id) => {
  await updateWishItem(id, { status: 'bought' })
  toast('🎉 Marked as bought!','success')
  await renderSavingsGoals()
}

// ── CATEGORY ACTIONS ──────────────────────────────────────────────────────────
function openAddCategory(type, parentId = null) {
  showModal('New Category', `
    <div class="input-group">
      <label class="input-label">Name *</label>
      <input type="text" class="input" id="newcat-name" placeholder="e.g. Groceries…" />
    </div>
    <div class="grid-2">
      <div class="input-group">
        <label class="input-label">Type</label>
        <select class="select" id="newcat-type">
          ${['expense','income','savings'].map(t=>`<option value="${t}" ${t===type?'selected':''}>${t.charAt(0).toUpperCase()+t.slice(1)}</option>`).join('')}
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">Icon</label>
        <input type="text" class="input" id="newcat-icon" placeholder="📦" maxlength="2" value="📦" />
      </div>
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitAddCategory('${parentId||''}','__MODAL_ID__')">Add</button>`)
}
window.openAddCategory = openAddCategory

window.submitAddCategory = async (parentId, modalId) => {
  const name = document.getElementById('newcat-name').value.trim()
  if (!name) { toast('Name required','warning'); return }
  await createCategory({
    name,
    type:      document.getElementById('newcat-type').value,
    icon:      document.getElementById('newcat-icon').value || '📦',
    parent_id: parentId || null,
  })
  toast('Category added','success')
  closeModal(modalId)
  await renderCategories()
}

window.doDeleteCategory = async (id) => {
  if (!confirm('Delete this category?')) return
  await deleteCategory(id)
  toast('Deleted','info')
  await renderCategories()
}

// ── SAVINGS GOAL ──────────────────────────────────────────────────────────────
function openSetGoal(accountId) {
  const a = state.accounts.find(x => x.id === accountId)
  showModal(`Set Goal — ${a.name}`, `
    <div class="input-group"><label class="input-label">Goal Name</label><input type="text" class="input" id="goal-name" placeholder="e.g. Emergency Fund…" /></div>
    <div class="input-group">
      <label class="input-label">Target Amount (€) *</label>
      <div class="amount-input-wrap"><span class="amount-prefix">€</span><input type="number" class="input" id="goal-amount" step="0.01" placeholder="e.g. 10000" /></div>
    </div>
    <div class="input-group"><label class="input-label">Deadline (optional)</label><input type="date" class="input" id="goal-deadline" /></div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-primary" onclick="submitGoal('${accountId}','__MODAL_ID__')">Set Goal</button>`)
}
window.openSetGoal = openSetGoal

window.submitGoal = async (id, modalId) => {
  const amount = parseFloat(document.getElementById('goal-amount').value)
  if (!amount) { toast('Target amount required','warning'); return }
  await updateAccount(id, {
    goal_amount:   amount,
    goal_name:     document.getElementById('goal-name').value || null,
    goal_deadline: document.getElementById('goal-deadline').value || null,
  })
  toast('Goal set!','success')
  closeModal(modalId)
  state.accounts = await getAccounts()
  await renderSavingsGoals()
}

// ── RESET ─────────────────────────────────────────────────────────────────────
function openResetConfirm() {
  showModal('⚠️ Reset All Data', `
    <div style="text-align:center;padding:8px 0 16px">
      <div style="font-size:48px;margin-bottom:12px">🗑️</div>
      <div style="font-size:15px;font-weight:600;margin-bottom:8px">This will permanently delete:</div>
      <div style="font-size:13px;color:var(--text-secondary);line-height:1.8">All accounts &amp; balances<br>All transactions &amp; imports<br>All fixed costs<br>All wishlist items<br>All custom categories</div>
      <div style="margin-top:16px;padding:12px;border-radius:12px;background:rgba(255,59,48,0.10);border:1px solid rgba(255,59,48,0.25);font-size:13px;color:var(--tint-red);font-weight:500">This cannot be undone.</div>
    </div>
    <div class="input-group">
      <label class="input-label">Type <strong>RESET</strong> to confirm</label>
      <input type="text" class="input" id="reset-confirm-input" placeholder="RESET" autocomplete="off" />
    </div>
  `,`
    <button class="btn btn-glass" onclick="closeModal('__MODAL_ID__')">Cancel</button>
    <button class="btn btn-danger" onclick="submitReset('__MODAL_ID__')">Wipe Everything</button>`)
}
window.openResetConfirm = openResetConfirm

window.submitReset = async (modalId) => {
  if (document.getElementById('reset-confirm-input').value.trim() !== 'RESET') {
    toast('Type RESET to confirm','warning'); return
  }
  await resetAllData()
  toast('All data wiped','info')
  closeModal(modalId)
  state.accounts = []
  navigate('dashboard')
}

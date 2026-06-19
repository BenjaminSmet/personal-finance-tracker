import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from './firebase.js'
import { seedDefaultCategories } from './db.js'
import { initApp } from './app.js'

const authScreen = document.getElementById('auth-screen')
const appEl      = document.getElementById('app')
const signInBtn  = document.getElementById('google-signin-btn')

signInBtn.addEventListener('click', async () => {
  signInBtn.disabled = true
  signInBtn.innerHTML = '⏳ Signing in…'
  try {
    await signInWithPopup(auth, provider)
  } catch (e) {
    signInBtn.disabled = false
    signInBtn.innerHTML = '<span>🔐</span> Sign in with Google'
    console.error('Sign in error:', e)
    alert('Sign in failed: ' + e.message)
  }
})

onAuthStateChanged(auth, async (user) => {
  if (user) {
    authScreen.style.display = 'none'
    appEl.classList.add('visible')
    document.getElementById('content-area').innerHTML =
      '<div style="padding:60px 0;text-align:center;color:var(--text-tertiary)">⏳ Setting up…</div>'
    try {
      await seedDefaultCategories()
      await initApp()
    } catch (e) {
      console.error('App init error:', e)
      document.getElementById('content-area').innerHTML = `
        <div style="padding:40px 20px;text-align:center">
          <div style="font-size:40px;margin-bottom:12px">⚠️</div>
          <div style="font-size:16px;font-weight:600;margin-bottom:8px">Failed to load</div>
          <div style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">${e.message}</div>
          <div style="font-size:12px;color:var(--text-tertiary)">Check Firestore rules and your .env config</div>
          <button onclick="location.reload()" style="margin-top:20px;padding:10px 20px;border-radius:999px;background:var(--tint-blue);color:#fff;border:none;cursor:pointer;font-size:14px">Retry</button>
        </div>`
    }
  } else {
    authScreen.style.display = 'flex'
    appEl.classList.remove('visible')
  }
})

window.signOut = () => signOut(auth)

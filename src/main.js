import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from './firebase.js'
import { seedDefaultCategories } from './db.js'
import { initApp } from './app.js'

const authScreen = document.getElementById('auth-screen')
const appEl      = document.getElementById('app')
const signInBtn  = document.getElementById('google-signin-btn')

signInBtn.addEventListener('click', async () => {
  signInBtn.disabled = true
  signInBtn.textContent = 'Signing in…'
  try {
    await signInWithPopup(auth, provider)
  } catch (e) {
    signInBtn.disabled = false
    signInBtn.innerHTML = '<span>🔐</span> Sign in with Google'
    console.error(e)
  }
})

onAuthStateChanged(auth, async (user) => {
  if (user) {
    authScreen.style.display = 'none'
    appEl.classList.add('visible')
    await seedDefaultCategories()
    initApp()
  } else {
    authScreen.style.display = 'flex'
    appEl.classList.remove('visible')
  }
})

// Expose sign-out globally for the More page
window.signOut = () => signOut(auth)

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCCic8Y8C2l_3byucPz8misLhbLN9kxdv8",
  authDomain: "personal-finance-tracker-d9f8e.firebaseapp.com",
  projectId: "personal-finance-tracker-d9f8e",
  storageBucket: "personal-finance-tracker-d9f8e.firebasestorage.app",
  messagingSenderId: "226167347334",
  appId: "1:226167347334:web:6553dd455e6452a7669907",
  measurementId: "G-E093GW6L3Q"
};

export const app      = initializeApp(firebaseConfig)
export const auth     = getAuth(app)
export const db       = getFirestore(app)
export const provider = new GoogleAuthProvider()

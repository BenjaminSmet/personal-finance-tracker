# Finance Tracker — Firebase Edition

Personal finance tracker. Runs on GitHub Pages, data in Firestore.

## Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. New project → name it (e.g. `finance-tracker`)
3. **Firestore Database** → Create → Production mode → your region
4. **Authentication** → Get started → Google → Enable
5. **Project Settings** → Your apps → Add web app → copy config values

### 2. Configure Auth Domain
In Firebase Console → Authentication → Settings → **Authorized domains**
Add: `your-github-username.github.io`

### 3. Firestore Security Rules
Firestore → Rules → replace with:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 4. Local Setup
```bash
git clone your-repo
cd finance-firebase
npm install

# Copy and fill in your Firebase config
cp .env.example .env.local
# Edit .env.local with your values from Firebase Console
```

### 5. Run locally
```bash
npm run dev
# → http://localhost:5173
```

### 6. Deploy to GitHub Pages
```bash
# In vite.config.js, set base: '/your-repo-name/'

npm run build
npm run deploy
# → https://your-username.github.io/your-repo-name/
```

## Project Structure
```
src/
  firebase.js   Firebase init
  db.js         All Firestore queries (replaces Express backend)
  app.js        All UI logic
  main.js       Auth entry point
index.html      App shell + CSS
```

## Notes
- All data is scoped per Google account (multi-user safe)
- Categories are seeded automatically on first login
- IBAN detection works during CSV import for auto-transfer linking

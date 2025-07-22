# slidepulse
Slido-like audience engagement web app
// *** README.md ***
# SlidePulse – Live Q&A and Polling App

> Slido‑like audience interaction tool built with **React + Firebase**.

## ✨ Features
* Anonymous join via code or QR
* Live questions (up‑vote, moderate)
* Live polls with instant charts
* Admin dashboard for presenters

## 🚀 Quick Start
```bash
npm install
cp .env.example .env  # add your Firebase keys
npm run dev           # start local dev server
```

### Deploy to Firebase Hosting
```bash
npm run build
firebase init hosting  # choose "dist" when prompted
npm run deploy
```

## Folder Structure
```
slidepulse/
  ├── public/
  ├── src/
  └── ...
```# SlidePulse – Live Q&A + Polling Web App (Slido Clone)

> Anonymous audience interaction during live events

## ✅ Features
- 🔐 Anonymous join (no login needed)
- 📱 QR Code + Join by Code support
- ❓ Live questions and voting
- 📊 Poll creation and results viewing
- ⚡ Real-time updates (Firebase)

## 🚀 Live Demo (Optional)
Coming soon...

## 🛠️ Tech Stack
- React + Vite
- Firebase (Firestore, Hosting, Auth – anonymous only)
- TailwindCSS
- React Router
- qrcode.react

## 📦 Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/slidepulse.git
cd slidepulse
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Firebase
Create a Firebase project → Enable Anonymous Auth + Firestore Database

Create `.env` file in root:
```env
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
```

### 4. Start local dev server
```bash
npm run dev
```

## 🔒 Hosting
Use Firebase Hosting (no backend needed)
```bash
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 📁 Folder Structure
```
📦slidepulse
 ┣ 📁components
 ┣ 📁pages
 ┣ 📁services
 ┣ 📄routes.jsx
 ┣ 📄main.jsx
 ┣ 📄App.jsx
 ┣ 📄index.css
 ┣ 📄firebase.js
```

## ✨ Credits
- Built with ❤️ by [Your Name]
- Inspired by Slido, Mentimeter

---

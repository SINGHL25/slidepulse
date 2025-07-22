// *** src/firebase.js ***
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getDatabase, ref, push, onValue, update } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

// ensure anonymous login before any DB ops
export async function anonymousSignIn() {
  try {
    await signInAnonymously(auth);
  } catch (e) {
    console.error('Anon sign‑in error', e);
  }
}

// helper: create room
export function createRoom(title) {
  const roomRef = push(ref(db, 'rooms'));
  update(roomRef, { title, createdAt: Date.now() });
  return roomRef.key;
}

// helper: post question
export function postQuestion(roomId, text) {
  const qRef = push(ref(db, `rooms/${roomId}/questions`));
  update(qRef, { text, votes: 0, createdAt: Date.now() });
}

// helper: vote question
export function voteQuestion(roomId, qid) {
  const qRef = ref(db, `rooms/${roomId}/questions/${qid}/votes`);
  onValue(qRef, (snap) => {
    const current = snap.val() ?? 0;
    update(ref(db, `rooms/${roomId}/questions/${qid}`), { votes: current + 1 });
  }, { onlyOnce: true });
}

// helper: create poll
export function createPoll(roomId, question, options) {
  const pRef = push(ref(db, `rooms/${roomId}/polls`));
  const optObj = Object.fromEntries(options.map((o) => [o, 0]));
  update(pRef, { question, options: optObj, createdAt: Date.now() });
}

// helper: vote poll
export function votePoll(roomId, pollId, option) {
  const countRef = ref(db, `rooms/${roomId}/polls/${pollId}/options/${option}`);
  onValue(countRef, (snap) => {
    const current = snap.val() ?? 0;
    update(countRef, current + 1);
  }, { onlyOnce: true });
}

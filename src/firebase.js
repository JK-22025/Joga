import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push, set, update, remove, onValue } from 'firebase/database';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyChefueKVyfrIQW1Dko7tuFsQz1aqKRqd4",
  authDomain: "joga-2dc8d.firebaseapp.com",
  databaseURL: "https://joga-2dc8d-default-rtdb.firebaseio.com", // Add this line
  projectId: "joga-2dc8d",
  storageBucket: "joga-2dc8d.appspot.com", // Fix typo in storageBucket
  messagingSenderId: "751842796639",
  appId: "1:751842796639:web:1c2e896294d80ef3b8a7ea",
  measurementId: "G-NQ98DDH1CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { auth, database, ref, push, set, update, remove, onValue };
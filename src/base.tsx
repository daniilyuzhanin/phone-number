import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_API__STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_API_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
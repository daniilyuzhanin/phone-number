// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_API__STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_API_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_API_MEASUREMENT_ID,
// };

// export const app = initializeApp(firebaseConfig);
// export const database = getDatabase(app);

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSsuJlp1AzrwwXRiPZVAfbU4_UqVatsGg",
  authDomain: "phone-number-2021.firebaseapp.com",
  databaseURL: "https://phone-number-2021-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "phone-number-2021",
  storageBucket: "phone-number-2021.appspot.com",
  messagingSenderId: "978707599583",
  appId: "1:978707599583:web:91920118342224988ad96a",
  measurementId: "G-ZN03PTBTED"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

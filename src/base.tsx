import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAm9NO92QSg88HPMX1qvBdsoKjwzYNzdS4",
  authDomain: "phone-number-2022j.firebaseapp.com",
  databaseURL: "https://phone-number-2022j-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "phone-number-2022j",
  storageBucket: "phone-number-2022j.appspot.com",
  messagingSenderId: "945722419097",
  appId: "1:945722419097:web:5a5a4d45c2e61b40d29508"
};
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
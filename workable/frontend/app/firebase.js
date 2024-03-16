// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBrzHrxPp8XGqRoqiz2MriRb-m6O0Y5qE",
  authDomain: "workable-60c0d.firebaseapp.com",
  projectId: "workable-60c0d",
  storageBucket: "workable-60c0d.appspot.com",
  messagingSenderId: "655921732130",
  appId: "1:655921732130:web:a647006786ca56beaa087b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
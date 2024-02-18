// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "ecommerceoath.firebaseapp.com",
  projectId: "ecommerceoath",
  storageBucket: "ecommerceoath.appspot.com",
  messagingSenderId: "1085112700470",
  appId: "1:1085112700470:web:1f60c2a650cb0a7c815297",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

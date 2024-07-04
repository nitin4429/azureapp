// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-38dcf.firebaseapp.com",
  projectId: "mern-estate-38dcf",
  storageBucket: "mern-estate-38dcf.appspot.com",
  messagingSenderId: "375263900817",
  appId: "1:375263900817:web:8ee0316a5bc3ee1544fb30"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
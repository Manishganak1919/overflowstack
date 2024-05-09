// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bdf4a.firebaseapp.com",
  projectId: "mern-blog-bdf4a",
  storageBucket: "mern-blog-bdf4a.appspot.com",
  messagingSenderId: "84408859709",
  appId: "1:84408859709:web:cba15e88220e0d826dbe54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
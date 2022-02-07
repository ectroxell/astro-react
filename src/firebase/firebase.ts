// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf6W8tb_c2bixbgC-5vcVsvgkUM3LWMJc",
  authDomain: "astro-react-c12a5.firebaseapp.com",
  projectId: "astro-react-c12a5",
  storageBucket: "astro-react-c12a5.appspot.com",
  messagingSenderId: "217366656751",
  appId: "1:217366656751:web:008a7e61f64382d44c4d1a",
  measurementId: "G-ZY653BQKF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
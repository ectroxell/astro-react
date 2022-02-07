import { initializeApp } from "firebase/app";
import { getDatabase, query, ref } from 'firebase/database';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

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
const db = getDatabase(app);
const auth = getAuth(app);

// functions
// const snapshotToArray = (snapshot: any) => Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));

// export const getUsers = (): User[] => {
//   const usersRef = ref(db, 'users');
//   return snapshotToArray(usersRef).map((user: any) => {
//     return {
//       id: user.snapshot.key,
//       email: user.snapshot.val().email
//     } as User;
//   });
// };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvp4piU5asmX8QZ_rsx9oNJEdsDOD_5Uw",
  authDomain: "coffee-car-app.firebaseapp.com",
  projectId: "coffee-car-app",
  storageBucket: "coffee-car-app.appspot.com",
  messagingSenderId: "676602281107",
  appId: "1:676602281107:web:0d886496b14c4890796166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()

export const auth = getAuth(app)

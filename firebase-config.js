import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'; // If you also use Firebase Storage
import { getFirestore } from 'firebase/firestore'; // Ensure this import
import {  collection, doc, setDoc, getDoc } from 'firebase/firestore';


// import firebase from "firebase";
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBGX2aVZDOYXEX8vq7uXe3R_pWpc9BL-60",
  authDomain: "facebook-clone-21a74.firebaseapp.com",
  projectId: "facebook-clone-21a74",
  storageBucket: "facebook-clone-21a74.appspot.com",
  messagingSenderId: "669463286063",
  appId: "1:669463286063:web:dc37af845f845c5903d1da",
  measurementId: "G-Z193C6ZPTW"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


// storage


// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Storage
export const storage = getStorage(app);
export { collection, doc, setDoc, getDoc }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDqb5LXXnfUJNBJ-XN0r7SWspppRvkD3Og",
  authDomain: "deploy-test-f5186.firebaseapp.com",
  projectId: "deploy-test-f5186",
  storageBucket: "deploy-test-f5186.firebasestorage.app",
  messagingSenderId: "585917513373",
  appId: "1:585917513373:web:1e5ae4edf0e4e3bd58de74",
  measurementId: "G-35PL2PG1TC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

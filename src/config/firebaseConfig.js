// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvcTPNbkneqjoqGT7RCAA2-sGsK77Gn_Q",
  authDomain: "watches-app-405da.firebaseapp.com",
  projectId: "watches-app-405da",
  storageBucket: "watches-app-405da.firebasestorage.app",
  messagingSenderId: "1070938717845",
  appId: "1:1070938717845:web:0675aeca4903600da6659c",
  measurementId: "G-0NTPJN85YS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

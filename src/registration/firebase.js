// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8RkDVzNN419mfPnmGKPhWC_UKgE4vjQE",
  authDomain: "auth-dev-940b9.firebaseapp.com",
  projectId: "auth-dev-940b9",
  storageBucket: "auth-dev-940b9.appspot.com",
  messagingSenderId: "994337120048",
  appId: "1:994337120048:web:62ea099530f4dffff9b2f5",
  measurementId: "G-YFSDE22MH6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

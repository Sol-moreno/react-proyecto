

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgtM2AI_XcAFkGTtTJhXWJvupJ02KwP3Y",
  authDomain: "react-lepetite.firebaseapp.com",
  projectId: "react-lepetite",
  storageBucket: "react-lepetite.appspot.com",
  messagingSenderId: "663622544729",
  appId: "1:663622544729:web:ddb1d65e79b79a5d13f048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//database//
export const db = getFirestore(app)
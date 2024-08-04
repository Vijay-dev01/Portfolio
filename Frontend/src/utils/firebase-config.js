import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQY02uHWBEfOCLB1pLu3lqKdJFpK0FARo",
  authDomain: "portfolio-3045b.firebaseapp.com",
  projectId: "portfolio-3045b",
  storageBucket: "portfolio-3045b.appspot.com",
  messagingSenderId: "600802790173",
  appId: "1:600802790173:web:ce3f22f39f5bb932016ff4",
  measurementId: "G-XEBBF7EW72"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
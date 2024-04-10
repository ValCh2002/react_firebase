import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBa5VwVHqKSWpZqP4ur3gfMq4HwZ7D9DHw",
  authDomain: "my-project-3e2af.firebaseapp.com",
  projectId: "my-project-3e2af",
  storageBucket: "my-project-3e2af.appspot.com",
  messagingSenderId: "686282194553",
  appId: "1:686282194553:web:f189a3675fc9f590bfdea8",
  measurementId: "G-XGZJD4CWY0"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVOQxSI5zDULD-WOjtmFx4szSZJwuZFEI",
  authDomain: "todo-app-17ce4.firebaseapp.com",
  projectId: "todo-app-17ce4",
  storageBucket: "todo-app-17ce4.appspot.com",
  messagingSenderId: "263693425281",
  appId: "1:263693425281:web:52dbbc54887ba970910b80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
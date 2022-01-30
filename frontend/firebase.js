// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3foazLQzxJ801KzfPLkGooZGAhhrpRmk",
    authDomain: "instagram-2-32cbc.firebaseapp.com",
    projectId: "instagram-2-32cbc",
    storageBucket: "instagram-2-32cbc.appspot.com",
    messagingSenderId: "366220422702",
    appId: "1:366220422702:web:8976032cbabd3eef2039bf"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBndw2-BxuwJNovWTd6wkpSvnvHu9VHspw",
  authDomain: "nexaai-ea90a.firebaseapp.com",
  projectId: "nexaai-ea90a",
  storageBucket: "nexaai-ea90a.firebasestorage.app",
  messagingSenderId: "347784154831",
  appId: "1:347784154831:web:f3cc6bbd6e4da0fa10f1ba",
  measurementId: "G-YMGKG5M2GR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDYa3Vmkm8d53MeVJWtD6_9UsUsIJIgj7c",
  authDomain: "dragon-news-fa592.firebaseapp.com",
  projectId: "dragon-news-fa592",
  storageBucket: "dragon-news-fa592.firebasestorage.app",
  messagingSenderId: "999127182026",
  appId: "1:999127182026:web:ce4e701df92dc15ba7e233"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWwyC2Wh0qnczb2AFWue1R2BQyFYYKT-E",
  authDomain: "spa-blog-c5ae3.firebaseapp.com",
  projectId: "spa-blog-c5ae3",
  storageBucket: "spa-blog-c5ae3.appspot.com",
  messagingSenderId: "1019771817743",
  appId: "1:1019771817743:web:930b30549e6729198cb87a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth()

export { auth }
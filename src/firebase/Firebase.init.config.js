// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIcHkOQeJpcXf923brjRv7h19_-X2KHvY",
  authDomain: "billing-system-1101a.firebaseapp.com",
  projectId: "billing-system-1101a",
  storageBucket: "billing-system-1101a.firebasestorage.app",
  messagingSenderId: "729414867790",
  appId: "1:729414867790:web:054cc82f79abe74c5c9c1f"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export {app}
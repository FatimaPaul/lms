// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgA5XCEfbByl7q8aY68WdmTvIgA0ad3pE",
  authDomain: "learningmanagementsystem-aaf25.firebaseapp.com",
  projectId: "learningmanagementsystem-aaf25",
  storageBucket: "learningmanagementsystem-aaf25.appspot.com",
  messagingSenderId: "1049538177676",
  appId: "1:1049538177676:web:a38144bd5ce7e7b3a9a9a9",
  measurementId: "G-13G6HD6JFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

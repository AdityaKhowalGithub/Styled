// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2PNkfwZTp-7jLRbTKW_4J6VuVSNLhY6c",
  authDomain: "styled-app.firebaseapp.com",
  projectId: "styled-app",
  storageBucket: "styled-app.appspot.com",
  messagingSenderId: "995344126354",
  appId: "1:995344126354:web:2b45f5af79dd2d7f29714b",
  measurementId: "G-PV12N95TMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";


// const firebaseConfig = {
// apiKey: "AIzaSyA2PNkfwZTp-7jLRbTKW_4J6VuVSNLhY6c",
// authDomain: "styled-app.firebaseapp.com",
// projectId: "styled-app",
// storageBucket: "styled-app.appspot.com",
// messagingSenderId: "995344126354",
// appId: "1:995344126354:web:2b45f5af79dd2d7f29714b",
// measurementId: "G-PV12N95TMM"
// };


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// export { app, auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';  // Import AsyncStorage

// Your web app's Firebase configuration
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
// const analytics = getAnalytics(app);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };


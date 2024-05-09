import firebase, { initializeApp } from "firebase/app";
import {getStorage, ref} from "firebase/storage"
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID, WEB_CLIENT_ID } from '@.env';

// GoogleSignin.configure({
// webClientId: WEB_CLIENT_ID,
// });

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_APP_ID,
    measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID
 
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

const storage = getStorage();

const storageRef = ref(storage);



const imagesRef = ref(storage, 'images');

const getUserImagesRef = () => {
    const user = auth.currentUser;
    if (user) {
        return ref(storage, `images/${user.uid}`);
    }
    return null;
};

export { app, auth, firebase, storageRef, imagesRef, getUserImagesRef };


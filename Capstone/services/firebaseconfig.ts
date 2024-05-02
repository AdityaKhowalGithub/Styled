import firebase, { initializeApp } from "firebase/app";
import {getStorage, ref} from "firebase/storage"
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID, WEB_CLIENT_ID } from '@env';

// GoogleSignin.configure({
// webClientId: WEB_CLIENT_ID,
// });

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

const storage = getStorage();

const storageRef = ref(storage);

const imagesRef = ref(storage, 'images');

export { app, auth, firebase, storageRef, imagesRef };


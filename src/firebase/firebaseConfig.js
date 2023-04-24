import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

//web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_RECT_APP_API_KEY,
    authDomain: import.meta.env.VITE_RECT_APP_AUTHDOMAIN,
    projectId: import.meta.env.VITE_RECT_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_RECT_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_RECT_APP_MASSAGINGSENDER_ID,
    appId: import.meta.env.VITE_RECT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app
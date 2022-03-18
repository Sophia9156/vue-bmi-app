import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const database = getDatabase(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
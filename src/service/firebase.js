import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADBZzKfwD1HO_5J1DdHofgtoa_tAAAobc",
  authDomain: "vue-bmi-app.firebaseapp.com",
  projectId: "vue-bmi-app",
  storageBucket: "vue-bmi-app.appspot.com",
  messagingSenderId: "15897707091",
  appId: "1:15897707091:web:1f64107695adebfe50fca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const database = getDatabase(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
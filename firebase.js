

// Inicaliza la appd e firebase
import { initializeApp } from "firebase/app";

//es el metodo ara autenticacion
import { getAuth } from "firebase/auth";

//es el metodo para la base de datos
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

//credencias
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {auth, db, storage}
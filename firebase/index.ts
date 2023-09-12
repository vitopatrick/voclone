import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyBrcfjNiWeDQzEK6gTJSObWJXnAstuGv_M",
  authDomain: "coinsexchange-15216.firebaseapp.com",
  projectId: "coinsexchange-15216",
  storageBucket: "coinsexchange-15216.appspot.com",
  messagingSenderId: "1033989116384",
  appId: "1:1033989116384:web:93053f976bedcd2c819b85",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);

// NEW comment
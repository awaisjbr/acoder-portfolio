import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDTi9pyDHBLZNE7tcTpmOLputKeczrTxbE",
  authDomain: "a-portfolio-bc08b.firebaseapp.com",
  projectId: "a-portfolio-bc08b",
  storageBucket: "a-portfolio-bc08b.appspot.com",
  messagingSenderId: "47186579239",
  appId: "1:47186579239:web:a5506456f6d35239996302",
  measurementId: "G-5MQHKDJT40"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

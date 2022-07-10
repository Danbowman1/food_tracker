
import { initializeApp } from "firebase/app";
import {getFirestore} from'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0_zG3izpRvN0pID_jxeur1GVLKcNTM-4",
    authDomain: "food-truck-tracker-app.firebaseapp.com",
    projectId: "food-truck-tracker-app",
    storageBucket: "food-truck-tracker-app.appspot.com",
    messagingSenderId: "447635493729",
    appId: "1:447635493729:web:dcd332bf57f9b661d02b20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore
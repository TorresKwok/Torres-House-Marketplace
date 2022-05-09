// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjHF1SeFGmFINzX_mlMrrNZK1SZRn23Mw",
    authDomain: "torres-house-marketplace-app.firebaseapp.com",
    projectId: "torres-house-marketplace-app",
    storageBucket: "torres-house-marketplace-app.appspot.com",
    messagingSenderId: "845343131417",
    appId: "1:845343131417:web:c2806f9cb1580abaeee788",
    measurementId: "G-3HYSWLX8QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()
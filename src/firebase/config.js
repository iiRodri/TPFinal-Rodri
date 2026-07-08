// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp7TUDXavi1SII13gMmbjKCfxgUMxFBV4",
    authDomain: "tp-final-180ef.firebaseapp.com",
    projectId: "tp-final-180ef",
    storageBucket: "tp-final-180ef.firebasestorage.app",
    messagingSenderId: "968075041743",
    appId: "1:968075041743:web:ffafe8ad3e982801ae90ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {db, auth};
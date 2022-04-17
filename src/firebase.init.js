// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtpDHpscNJ-jsJypNy-MfYQCwW39x4azY",
    authDomain: "make-your-body-fit.firebaseapp.com",
    projectId: "make-your-body-fit",
    storageBucket: "make-your-body-fit.appspot.com",
    messagingSenderId: "810218578467",
    appId: "1:810218578467:web:69105d125061d096148796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmFgrek3kj21B0qGV_Pl41_23AE2rDonA",
    authDomain: "slack-clone-2d669.firebaseapp.com",
    projectId: "slack-clone-2d669",
    storageBucket: "slack-clone-2d669.appspot.com",
    messagingSenderId: "93751296461",
    appId: "1:93751296461:web:eba4f888b5eaf887940484",
    measurementId: "G-7YZKWEC6KN"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

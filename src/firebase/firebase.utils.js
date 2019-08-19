import firebase from "firebase/app";


import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyBggBKvKaGO_iZq3Ei7e7LL4n0-Di4sT_Y",
    authDomain: "nexus-clothing-db.firebaseapp.com",
    databaseURL: "https://nexus-clothing-db.firebaseio.com",
    projectId: "nexus-clothing-db",
    storageBucket: "",
    messagingSenderId: "188732667123",
    appId: "1:188732667123:web:1586d08adf4f41a2"
};


// Initialize Firebase
firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();


provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
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





// Firebase Authentication
export const auth = firebase.auth();


// Firebase Cloud firestore
export const firestore = firebase.firestore();





provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => {
    if (!auth.currentUser) {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var userInfo = result.user;
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // [START_EXCLUDE]
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have already signed up with a different auth provider for that email.');
                // If you are using multiple auth providers on your app you should handle linking
                // the user's accounts here.
            } else {
                console.error(error);
            }

        })
    }
}


export default firebase;




export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    };

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const{ displayName, email,photoURL, emailVerified} = userAuth
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                photoURL ,
                ...additionalData,
            })
        }catch(error){
            console.log("Error creating user" + userAuth)
        }

    }

    console.log(snapShot)

    return userRef

} 
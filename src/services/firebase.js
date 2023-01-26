import * as firebase from "firebase/app"
import "firebase/firestore"
const app = firebase.initializeApp({
    apiKey: "AIzaSyDkuwv7u4Slp9iVUZ02s8kCr2Tu5B0Io0o",
    authDomain: "vitanet-commerce.firebaseapp.com",
    projectId: "vitanet-commerce",
    storageBucket: "vitanet-commerce.appspot.com",
    messagingSenderId: "120700532456",
    appId: "1:120700532456:web:23d14e740ac653d983bb5d"
})

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}
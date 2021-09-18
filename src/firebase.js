import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider  } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyD47G_iZbIYN29low1ZxO_w-WCU2NRnfNw",
    authDomain: "clone-f3220.firebaseapp.com",
    projectId: "clone-f3220",
    storageBucket: "clone-f3220.appspot.com",
    messagingSenderId: "935541900241",
    appId: "1:935541900241:web:0fa2e35bd54b6ce99696f0"
};

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth()
// const provider = new GoogleAuthProvider();

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export { db, auth, provider }


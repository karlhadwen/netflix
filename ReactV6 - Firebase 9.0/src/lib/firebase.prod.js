//.prod means its our production version

import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// import {seedDatabase} from '../seed';
// Only run this once to seed the Firestore

// config with keys etc
const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}

const firebase = initializeApp(config);
const auth = getAuth(firebase);
const db = getFirestore(firebase);

// seedDatabase(db);

export { firebase, auth, db };
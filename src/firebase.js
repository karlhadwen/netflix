import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDAU60M2FDHNsYt9uGMpRezw3FGVIX6Jrs',
  authDomain: 'netflix-c8ae9.firebaseapp.com',
  databaseURL: 'https://netflix-c8ae9.firebaseio.com',
  projectId: 'netflix-c8ae9',
  storageBucket: 'netflix-c8ae9.appspot.com',
  messagingSenderId: '590575805931',
  appId: '1:590575805931:web:f809092b6cd55306fa25ae',
});

export { firebaseConfig as firebase };

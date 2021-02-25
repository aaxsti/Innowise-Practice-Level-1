import firebase from "firebase";
import {firebaseConfig} from './firebaseSecret';

// Web app`s Firebase init
const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Init Firebase
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app(); // if already initialized, use that one
// }

// Getting database
const db = firebaseApp.firestore();

export default db;
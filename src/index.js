import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'
import {BrowserRouter} from "react-router-dom";

// Web app`s Firebase config
let firebaseConfig = {
    apiKey: "AIzaSyA9Cbx9k89yvmwxhxlHkFVYbYYSneStxBg",
    authDomain: "clever-to-do-list.firebaseapp.com",
    projectId: "clever-to-do-list",
    storageBucket: "clever-to-do-list.appspot.com",
    messagingSenderId: "91984790754",
    appId: "1:91984790754:web:f4fb8b15a6a7f90b80cabb",
    measurementId: "G-20E45ZB1MY"
};

// Init Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

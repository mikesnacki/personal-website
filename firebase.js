
import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';


const app = firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: "https://contact-form-247318.firebaseio.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBIkQzCtCvO4NW6OfOO0hYKz-n1ypK1pW8",
    authDomain: "ghost-lamp-test.firebaseapp.com",
    databaseURL: "https://ghost-lamp-test.firebaseio.com",
    projectId: "ghost-lamp-test",
    storageBucket: "ghost-lamp-test.appspot.com",
    messagingSenderId: "440202893922"
};

export const FirebaseApp = firebase.initializeApp(config);
export const FirebaseDB = firebase.database();
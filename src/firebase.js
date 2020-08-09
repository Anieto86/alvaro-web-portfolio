//Used to grab onto Firebase connection
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6C8hEeIgvb4FD0PJUKmcITeHuZx5k9VY",
    authDomain: "porfolio-alvaro-nieto.firebaseapp.com",
    databaseURL: "https://porfolio-alvaro-nieto.firebaseio.com",
    projectId: "porfolio-alvaro-nieto",
    storageBucket: "porfolio-alvaro-nieto.appspot.com",
    messagingSenderId: "246897688557",
    appId: "1:246897688557:web:cf36e1aa6ea2f491bc31e4",
    measurementId: "G-QMXE3YWBTJ"
});


// Initialize Firebase
var db = firebaseApp.firestore();

export { db };
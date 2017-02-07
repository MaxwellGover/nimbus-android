import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyCdf33DKFogszzji-RILe2b7xrxMq6l0Ik",
    authDomain: "nimbus-c7e27.firebaseapp.com",
    databaseURL: "https://nimbus-c7e27.firebaseio.com",
    storageBucket: "nimbus-c7e27.appspot.com",
    messagingSenderId: "328906360268"
});

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()

export { ref, firebaseAuth }

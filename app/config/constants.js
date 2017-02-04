import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyAkFIFhHAnCx3noJjS0rKkZifisXa-Uprc",
    authDomain: "nimbus-53d0f.firebaseapp.com",
    databaseURL: "https://nimbus-53d0f.firebaseio.com",
    storageBucket: "nimbus-53d0f.appspot.com",
    messagingSenderId: "581128088752"
});

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()

export { ref, firebaseAuth }

import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBsNZp-vMZhOicqwdyCxNJgtyahsO0tqQA",
    authDomain: "pokedex-d6391.firebaseapp.com",
    databaseURL: "https://pokedex-d6391.firebaseio.com",
    projectId: "pokedex-d6391",
    storageBucket: "pokedex-d6391.appspot.com",
    messagingSenderId: "782693123579",
    appId: "1:782693123579:web:4d90e5aca1dc682c6c775e"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
import firebase from "firebase/compat/app";
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgiGTJRT9HvxLQEnZ9Lv8YlJxJl6BsSPY",
  authDomain: "fotografiabyyolo.firebaseapp.com",
  projectId: "fotografiabyyolo",
  storageBucket: "fotografiabyyolo.appspot.com",
  messagingSenderId: "524350225876",
  appId: "1:524350225876:web:eca32a791b66fc158cea41"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export{
  storage, firestore as default
}
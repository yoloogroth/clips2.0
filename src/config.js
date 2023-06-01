import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgiGTJRT9HvxLQEnZ9Lv8YlJxJl6BsSPY",
    authDomain: "fotografiabyyolo.firebaseapp.com",
    projectId: "fotografiabyyolo",
    storageBucket: "fotografiabyyolo.appspot.com",
    messagingSenderId: "524350225876",
    appId: "1:524350225876:web:eca32a791b66fc158cea41"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};
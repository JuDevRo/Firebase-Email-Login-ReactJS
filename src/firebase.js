import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDsh4RZd8rxj6C3FKp_SPJD_3JMBvjjDyM",
    authDomain: "email-login-react.firebaseapp.com",
    projectId: "email-login-react",
    storageBucket: "email-login-react.appspot.com",
    messagingSenderId: "731476182781",
    appId: "1:731476182781:web:a280800a83127d23936094"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };
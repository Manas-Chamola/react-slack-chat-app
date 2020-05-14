import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCGZjRjPgnhZ8ogwCAxamYYnEl4iIFuTtQ",
  authDomain: "react-slack-app-e4588.firebaseapp.com",
  databaseURL: "https://react-slack-app-e4588.firebaseio.com",
  projectId: "react-slack-app-e4588",
  storageBucket: "react-slack-app-e4588.appspot.com",
  messagingSenderId: "356216974534",
  appId: "1:356216974534:web:3057970a3681e7e387bbc7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
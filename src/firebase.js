import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDhWdS-N1iYnQRL3LKPeLdDjWzCCqNMRao",
    authDomain: "slack-clone-11829.firebaseapp.com",
    databaseURL: "https://slack-clone-11829.firebaseio.com",
    projectId: "slack-clone-11829",
    storageBucket: "slack-clone-11829.appspot.com",
    messagingSenderId: "939769417946",
    appId: "1:939769417946:web:c43ee1d5f81956d40715e3"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase
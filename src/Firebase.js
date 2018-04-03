import firebase from 'firebase';

  var config = {
     apiKey: "AIzaSyAqlf2RJRfDbLMWX4UxhvYJm9O2yVeadPw",
    authDomain: "messageboard-128d8.firebaseapp.com",
    databaseURL: "https://messageboard-128d8.firebaseio.com",
    projectId: "messageboard-128d8",
    storageBucket: "messageboard-128d8.appspot.com",
    messagingSenderId: "995180118491"
  };

  
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
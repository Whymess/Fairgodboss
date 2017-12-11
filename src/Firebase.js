import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyCIY-D9CiuvTaXvQ-1C5J9nLMyg1L625XM",
    authDomain: "messageboard-541de.firebaseapp.com",
    databaseURL: "https://messageboard-541de.firebaseio.com",
    projectId: "messageboard-541de",
    storageBucket: "messageboard-541de.appspot.com",
    messagingSenderId: "1009062380695"
  };

  
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
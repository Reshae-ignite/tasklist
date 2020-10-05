import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCDj7ISWvB1z0_fj_mgEy3cuQnmLPrONn4",
    authDomain: "todoapp-65dee.firebaseapp.com",
    databaseURL: "https://todoapp-65dee.firebaseio.com",
    projectId: "todoapp-65dee",
    storageBucket: "todoapp-65dee.appspot.com",
    messagingSenderId: "1032391151949",
    appId: "1:1032391151949:web:0ac501bd6d82dc9b28a704",
    measurementId: "G-DSW0PQT1W7"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  const db = fire.firestore();

  export default db;
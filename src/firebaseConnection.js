import firebase from 'firebase';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCYcmMz6c902kY6YKeQTtIXO1WecBW2LJY",
  authDomain: "meuapp-52fbb.firebaseapp.com",
  databaseURL: "https://meuapp-52fbb.firebaseio.com",
  projectId: "meuapp-52fbb",
  storageBucket: "meuapp-52fbb.appspot.com",
  messagingSenderId: "534848418150",
  appId: "1:534848418150:web:2b7848db63b9a2baab18a7",
  measurementId: "G-71S0JH509N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
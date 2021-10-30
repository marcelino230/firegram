import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC9Ayv9MPGZ_sojaxf7pG_DPeNayFdFVes",
  authDomain: "marcel-firegram.firebaseapp.com",
  databaseURL: "https://marcel-firegram-default-rtdb.firebaseio.com",
  projectId: "marcel-firegram",
  storageBucket: "marcel-firegram.appspot.com",
  messagingSenderId: "696328326155",
  appId: "1:696328326155:web:752a34d8da9dd17e50cb0e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
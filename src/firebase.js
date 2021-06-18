import firebase from "firebase";
import "firebase/storage";

firebase.initializeApp({
  apiKey: "AIzaSyBz_vAN3NLG-2Jn5JO_knQ7op2NKr9h27M",
  authDomain: "porthos-71cbd.firebaseapp.com",
  projectId: "porthos-71cbd",
  storageBucket: "porthos-71cbd.appspot.com",
  messagingSenderId: "633456398456",
  appId: "1:633456398456:web:e04858164b9e8363fbdd8d",
  measurementId: "G-XW592HQ3T0",
});
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

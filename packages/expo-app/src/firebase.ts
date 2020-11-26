import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-iwFaoZROGoAawT8vtWbHi7L1aCjSjMw",
  authDomain: "code-of-everand-game.firebaseapp.com",
  databaseURL: "https://code-of-everand-game.firebaseio.com",
  projectId: "code-of-everand-game",
  storageBucket: "code-of-everand-game.appspot.com",
  messagingSenderId: "1011943438159",
  appId: "1:1011943438159:web:e13eb5eab85f9545a5773a",
  measurementId: "G-K3D4RVPDYG"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
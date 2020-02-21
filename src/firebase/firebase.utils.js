import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCIDvGL8XrjDD76HZYgS23g70D8rt0hpds",
  authDomain: "react-shop-db-6011a.firebaseapp.com",
  databaseURL: "https://react-shop-db-6011a.firebaseio.com",
  projectId: "react-shop-db-6011a",
  storageBucket: "react-shop-db-6011a.appspot.com",
  messagingSenderId: "492266450023",
  appId: "1:492266450023:web:6316283d604bbd80c678c2",
  measurementId: "G-ZR56CPZ1QT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
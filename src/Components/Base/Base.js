import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyC_QFr5a0EfMjij1TbubY1WeW72rZir0do",
  authDomain: "hotel-book-aj.firebaseapp.com",
  projectId: "hotel-book-aj",
  storageBucket: "hotel-book-aj.appspot.com",
  messagingSenderId: "877693495323",
  appId: "1:877693495323:web:9051d23440cf0988b270be",
});

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from "firebase/app";

import * as auth from "firebase/auth";
import * as db from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR0mucha946FZZBL9sP4eDJD_f-OpF-Ws",
  authDomain: "productcompany-2fdda.firebaseapp.com",
  projectId: "productcompany-2fdda",
  storageBucket: "productcompany-2fdda.appspot.com",
  messagingSenderId: "568339263155",
  appId: "1:568339263155:web:2efcdae7818a0eaeff4ac6",
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const authService = auth;
export const dbServices = db;

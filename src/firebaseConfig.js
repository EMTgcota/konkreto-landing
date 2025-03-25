import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5buggP6XNBPFycqSlfnM4tykJskevWlY",
  authDomain: "konkreto-cf366.firebaseapp.com",
  databaseURL: "https://konkreto-cf366-default-rtdb.firebaseio.com",
  projectId: "konkreto-cf366",
  storageBucket: "konkreto-cf366.appspot.com",
  messagingSenderId: "569959575712",
  appId: "1:569959575712:web:1d8c6e816e2de6fa8919c5",
  measurementId: "G-KXGYE0QDTW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

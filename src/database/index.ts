import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const fireBaseApp = initializeApp({
  apiKey: "AIzaSyC2jC1IY7VB9PifoHv49pl3iP36znq6f7k",
  authDomain: "my-multi-step-form.firebaseapp.com",
  projectId: "my-multi-step-form",
  storageBucket: "my-multi-step-form.appspot.com",
  messagingSenderId: "371763360664",
  appId: "1:371763360664:web:6f16b4ca6a1e9ec82471ed",
  measurementId: "G-VH1345MD51"
}); 

export const database = getFirestore(fireBaseApp)
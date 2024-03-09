// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence,initializeAuth} from 'firebase/auth'
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDzsH5vnw8judoQZIw3P3Q1_H07fM4ncg8",
  authDomain: "fir-chat-e45f2.firebaseapp.com",
  projectId: "fir-chat-e45f2",
  storageBucket: "fir-chat-e45f2.appspot.com",
  messagingSenderId: "219704061015",
  appId: "1:219704061015:web:292bec5939a67c31680712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
  persistence:getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app)
export const usersRef=collection(db,'users');
export const roomRef = collection(db,'rooms');
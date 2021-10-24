import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDK8LAlKCS6iKpoDyKZMrFoVsEFL8nWNlU",
  authDomain: "audiofile-61a00.firebaseapp.com",
  projectId: "audiofile-61a00",
  storageBucket: "audiofile-61a00.appspot.com",
  messagingSenderId: "589039475285",
  appId: "1:589039475285:web:67f59156185737c98e92dc"
});

export const database = getFirestore(firebaseConfig);
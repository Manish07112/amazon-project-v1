import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQEV_5GRuOTcl5n-u0UDZIHnYJ0VOQtu4",
  authDomain: "project-3998a.firebaseapp.com",
  projectId: "project-3998a",
  storageBucket: "project-3998a.appspot.com",
  messagingSenderId: "582647952825",
  appId: "1:582647952825:web:9251b349d061f149d2b268"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };
import firebase from "firebase/app";
import "firebase/database";

console.log("hello", process.env.REACT_APP_PROJECT_ID);
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDRER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

// Initialize Firebase
export default app.database().ref();

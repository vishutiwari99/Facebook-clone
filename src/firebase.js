import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARKg_Ao19sn3_e7Y6B22e7PvRVoCMjeAA",
  authDomain: "facebook-clone-6c552.firebaseapp.com",
  databaseURL: "https://facebook-clone-6c552.firebaseio.com",
  projectId: "facebook-clone-6c552",
  storageBucket: "facebook-clone-6c552.appspot.com",
  messagingSenderId: "79861102850",
  appId: "1:79861102850:web:29860041f3dc4a7f8c2a1b",
  measurementId: "G-3BV3GX68G3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

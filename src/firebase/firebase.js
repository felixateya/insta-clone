import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "",
  authDomain: "insta-clone-cedab.firebaseapp.com",
  projectId: "insta-clone-cedab",
  storageBucket: "insta-clone-cedab.firebasestorage.app",
  messagingSenderId: "467223863702",
  appId: "1:467223863702:web:8197bba855ff2846f07db7",
  measurementId: "G-XKXK4P2K0R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)



export {app,auth, firestore, storage}

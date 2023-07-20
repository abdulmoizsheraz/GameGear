// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuaiRog-OJLPYMGJd-rDGlT1VF9M7zayU",
  authDomain: "gamegear-fb7cd.firebaseapp.com",
  projectId: "gamegear-fb7cd",
  storageBucket: "gamegear-fb7cd.appspot.com",
  messagingSenderId: "315882829057",
  appId: "1:315882829057:web:9deac2eec16c76ce965700",
  measurementId: "G-ZGVTBSNLXR"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export default app;
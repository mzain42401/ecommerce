import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB7H-SXi2lxH6UnG5H_30Qz-uRLMDezSMI",
  authDomain: "ecommerce-bbc7f.firebaseapp.com",
  projectId: "ecommerce-bbc7f",
  storageBucket: "ecommerce-bbc7f.appspot.com",
  messagingSenderId: "228320938120",
  appId: "1:228320938120:web:905cb04b6561cad043f73d",
  measurementId: "G-SXFDRL9LKM"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const fireStore=getFirestore(app)
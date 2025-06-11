import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBL-qoLONSBQgrXemscykcqUnnMjxG5Ors",
  authDomain: "acme-735a8.firebaseapp.com",
  projectId: "acme-735a8",
  storageBucket: "acme-735a8.appspot.com",
  messagingSenderId: "94456368206",
  appId: "1:94456368206:web:15fa3e0ffea253eefac71f",
  measurementId: "G-PLDDTN87BQ",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

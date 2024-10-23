// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4F7vqVZVoFmKQhAfOUVEVnzIrP8CaKiQ",
  authDomain: "c-urself-cb733.firebaseapp.com",
  projectId: "c-urself-cb733",
  storageBucket: "c-urself-cb733.appspot.com",
  messagingSenderId: "125429159712",
  appId: "1:125429159712:web:579695b1662908378ea945",
  measurementId: "G-CNG0TW6DYH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

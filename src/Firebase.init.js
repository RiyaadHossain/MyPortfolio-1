import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDqVkqDJNORWBl-QRbGjhzIv0DeE0zeE0",
  authDomain: "portfolio-riyad.firebaseapp.com",
  projectId: "portfolio-riyad",
  storageBucket: "portfolio-riyad.appspot.com",
  messagingSenderId: "54028855705",
  appId: "1:54028855705:web:51f5af4f9339acf904cb08"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

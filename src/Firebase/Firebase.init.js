import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9UarRyq8cPQLGTTT2bOrqbrcQBYeuoag",
  authDomain: "riyadhossain-dev.firebaseapp.com",
  projectId: "riyadhossain-dev",
  storageBucket: "riyadhossain-dev.appspot.com",
  messagingSenderId: "878132052785",
  appId: "1:878132052785:web:c34577ffc199ddc54de610",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

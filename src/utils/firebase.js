// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWr64nHZslo9zFDWytxLuCCJlTDXz0en0",
  authDomain: "netflixgpt-bbd37.firebaseapp.com",
  projectId: "netflixgpt-bbd37",
  storageBucket: "netflixgpt-bbd37.appspot.com",
  messagingSenderId: "173923943953",
  appId: "1:173923943953:web:356a1239df50e8eaad53b0",
  measurementId: "G-NRQ7L1F06Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
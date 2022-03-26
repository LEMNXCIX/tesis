// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIiBlaCAytB2b0N4LIAAq5HtEChk_iQfE",
  authDomain: "tienda-neutra.firebaseapp.com",
  projectId: "tienda-neutra",
  storageBucket: "tienda-neutra.appspot.com",
  messagingSenderId: "369880329148",
  appId: "1:369880329148:web:317232bdadd237dd4ad9b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
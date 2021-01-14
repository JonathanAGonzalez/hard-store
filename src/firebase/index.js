import firebase from "firebase/app";
import "@firebase/firestore";

const app = {
  apiKey: "AIzaSyDWMC-hVOMUOHbp4WuRiJ-E0ZRYCj7oD3o",
  authDomain: "ecommercehardstore.firebaseapp.com",
  projectId: "ecommercehardstore",
  storageBucket: "ecommercehardstore.appspot.com",
  messagingSenderId: "533736288400",
  appId: "1:533736288400:web:def83980c1e7cf44302815",
};

firebase.initializeApp(app);

export { firebase };

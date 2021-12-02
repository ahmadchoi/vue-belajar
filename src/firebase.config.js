// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiOD8jqe52KDbrXaqXRL-JviO9iDgSgZI",
  authDomain: "todo-vue-d9f02.firebaseapp.com",
  projectId: "todo-vue-d9f02",
  storageBucket: "todo-vue-d9f02.appspot.com",
  messagingSenderId: "214860528019",
  appId: "1:214860528019:web:5cc41372de457daac81066",
  measurementId: "G-K4HVQC2SR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app
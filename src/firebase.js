import firebase from "firebase";

const firebaseConfig = {
  // apiKey: "API_KEY",
  // authDomain: "PROJECT_ID.firebaseapp.com",
  // databaseURL: "https://PROJECT_ID.firebaseio.com",
  // projectId: "PROJECT_ID",
  // storageBucket: "PROJECT_ID.appspot.com",
  // messagingSenderId: "SENDER_ID",
  // appId: "APP_ID",
  // measurementId: "G-MEASUREMENT_ID",
  apiKey: "AIzaSyDwpmkd0Fc3lrB_86-DHwnTCoantJrnyak",
  authDomain: "whatsapp-46524.firebaseapp.com",
  projectId: "whatsapp-46524",
  storageBucket: "whatsapp-46524.appspot.com",
  messagingSenderId: "158927597954",
  appId: "1:158927597954:web:287cdf01d7dfcc5ddfdf9b",
  measurementId: "G-LJQCMED081",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, firebase };
export default db;

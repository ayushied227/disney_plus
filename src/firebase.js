import firebase from "firebase";
import 'firebase/database'; // If using Firebase database
import 'firebase/storage'; // If using Firebase storage

const firebaseConfig = {
    apiKey: "AIzaSyANvZsc6aT0NBws5j5tds5d76GxtOYXlfU",
    authDomain: "disneyplus-clone-227.firebaseapp.com",
    projectId: "disneyplus-clone-227",
    storageBucket: "disneyplus-clone-227.appspot.com",
    messagingSenderId: "121630679876",
    appId: "1:121630679876:web:058192ddc10322332cad11",
    measurementId: "G-JLZ6FPBEL3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
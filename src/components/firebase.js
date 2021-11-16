import firebase from "firebase/app"
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCn74M37LyKeawBRRAf-W2N8gqJQWiK9w0",
    authDomain: "vivamos-bariloche.firebaseapp.com",
    projectId: "vivamos-bariloche",
    storageBucket: "vivamos-bariloche.appspot.com",
    messagingSenderId: "913460838973",
    appId: "1:913460838973:web:7014d4ea3d9bc88d022054"
  }
const app = firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore(app)
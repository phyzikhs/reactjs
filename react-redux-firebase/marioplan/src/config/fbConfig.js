import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyDzUkTWrBVLIF7Hay84XWDvo76HB65WrkE",
  authDomain: "ngelemar-weapons-marioplan.firebaseapp.com",
  projectId: "ngelemar-weapons-marioplan",
  storageBucket: "ngelemar-weapons-marioplan.appspot.com",
  messagingSenderId: "496121618095",
  appId: "1:496121618095:web:8cef22b321f7a3b4abbe5a",
  measurementId: "G-MCXK5P620S"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true }) // no need, new version of firebase does not need this line

export default firebase;
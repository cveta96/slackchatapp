import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAn-0LWv28s3_DyVnwwL9yqa_Qhrd4GlpY",
  authDomain: "reactchatapp-a9a30.firebaseapp.com",
  databaseURL: "https://reactchatapp-a9a30.firebaseio.com",
  projectId: "reactchatapp-a9a30",
  storageBucket: "reactchatapp-a9a30.appspot.com",
  messagingSenderId: "231886938758"
};

firebase.initializeApp(config);

export default firebase;

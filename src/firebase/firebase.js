import * as firebase from "firebase/app";
import "firebase/database";

var config = {
  apiKey: "AIzaSyDlBdjxk6bsxFOBEbH2KuWWS59k3EMeUUU",
  authDomain: "budget-3db62.firebaseapp.com",
  databaseURL: "https://budget-3db62.firebaseio.com",
  projectId: "budget-3db62",
  storageBucket: "budget-3db62.appspot.com",
  messagingSenderId: "381593832065",
  appId: "1:381593832065:web:fed424c3b9d1e8b4"
};


firebase.initializeApp(config);

const database = firebase.database();


export { firebase, database as default };


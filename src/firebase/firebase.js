import * as firebase from "firebase/app";
import "firebase/database";



firebase.initializeApp(config);

const database = firebase.database();


export { firebase, database as default };


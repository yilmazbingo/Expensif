import * as firebase from "firebase";

const config = {
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

export { firebase, database };

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });
// database.ref("expenses").push({
//   description: "coffee",
//   note: "nothing",
//   createdAt: 2344,
//   price: 12
// });
// database.ref("expenses").push({
//   description: "tes",
//   note: "nothing",
//   createdAt: 25544,
//   price: 42
// });
// database.ref("expenses").push({
//   description: "bill",
//   note: "nothing",
//   createdAt: 2344,
//   price: 120
// });

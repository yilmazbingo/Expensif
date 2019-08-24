import * as firebase from "firebase";



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

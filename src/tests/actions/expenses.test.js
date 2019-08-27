import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import { exportAllDeclaration } from "@babel/types";
import expenses from "../fixtures/expenses"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import database from "../../firebase/firebase"


//we are creating configuration
const createMockStore = configureMockStore([thunk])

test("should remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should edit expense action object", () => {
  const action = editExpense("123abc", { note: "update this" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "update this" }
  });
});

//this addexpense action is no longer responsible because with firebase we created startAddExpense
//setting the defaults is its job now.

// test("should add expense action object with provided values", () => {
//   const expenseData = {
//     description: "coffee",
//     amount: 12,
//     note: "this morning",
//     createdAt: 1000
//   };
//   const action = addExpense(expenseData);
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: { ...expenseData, id: expect.any(String) }
//   });
// });

test("should set up expense action object with default values", () => {
  //expenses has id propperty and firebase expects an id
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

//test cases for async generator

test("should add expense to databse and store", (done) => {
  const store = createMockStore({}) //this is the mock store

  const expenseData = { description: "ram", amount: 3000, notes: "expensive", createdAt: 30000 }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions() //this will return array of actions
    //if you check the firebase there is only dispatch call
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE", expense: {
        id: expect.any(String), ...expenseData
      }
    })

    //fetching the data to see if it is saved
    database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()// this goes inside async func
    })

  })

  //how we do something when it is done running. we have an async code but we dont have a way to really set up an async test case. the goal here is to wait for everything to complete. 
})

test("should add expense with defaults to databse and store", () => {

})
import uuid from "uuid";
import database from "../firebase/firebase";

// ADD_EXPENSE
//it has an object to be dispatched. this will actually will change the redux store
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

//this will just going to start that process off. it is going to actually dispatch addExpense
//this will return a function. this is the function that is going to  actually work since we set up the middleware for redux-thunk.
//this function internally called by redux
//first we are gonna write the data to firebase and then we will call addExpense
export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    //we returned this so we can use it in promise chaining. so we can use in async test cases
    return database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

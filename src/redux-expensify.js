import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//ADD-EXPENSE ACTION GENERATOR
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//REMOVE-expense action generator
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//edit-expense action generator
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//expenses reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//action generators for filter object

const setTextFilter = (text = "") => {
  return { type: "SET_TEXT_FILTER", text };
};

const sortByAmount = () => {
  return { type: "SORT_BY_AMOUNT" };
};
const sortByDate = () => {
  return { type: "SORT_BY_DATE" };
};

const setStartDate = date => {
  return { type: "SET_START_DATE", date };
};

const setEndDate = date => {
  return { type: "SET_END_DATE", date };
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.date };
    case "SET_END_DATE":
      return { ...state, endDate: action.date };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate; //if undefined, returns true
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        a.amount < b.amount ? 1 : -1;
      }
    });
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);
console.log(store.getState());
//first track the changes and then add an expense
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
//ACTIONS for expense

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ desription: "coffee", amount: 300, createdAt: -1000 })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// console.log(store.getState());

//actions for filter array

store.dispatch(setTextFilter("rent"));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

const demoState = {
  expenses: [
    {
      id: "any number",
      description: "januarry  rent",
      note: "final payment ",
      amount: 54500, //currency in pennies
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};

import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const result = expensesReducer(undefined, { type: "@@INIT" });
  expect(result).toEqual([]);
});

test("should remove expense by id", () => {
  const action = { type: "REMOVE_EXPENSE", id: expenses[1].id };
  const result = expensesReducer(expenses, action);
  expect(result).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id is not found", () => {
  const action = { type: "REMOVE_EXPENSE", id: "-1" };
  const result = expensesReducer(expenses, action);
  expect(result).toEqual([...expenses]);
});

test("should add expense to the array ", () => {
  const expense = {
    id: "1",
    description: "bill",
    note: "",
    amount: 120,
    createdAt: 100
  };
  const action = { type: "ADD_EXPENSE", expense };
  const result = expensesReducer(expenses, action);
  expect(result).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "1",
    updates: {
      id: "5",
      description: "gummy",
      note: "ger",
      amount: 120,
      createdAt: 0
    }
  };
  const result = expensesReducer(expenses, action);
  expect(result[0]).toEqual(action.updates);
});

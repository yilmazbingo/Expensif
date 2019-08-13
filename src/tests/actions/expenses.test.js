import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import { exportAllDeclaration } from "@babel/types";

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

test("should add expense action object with provided values", () => {
  const expenseData = {
    description: "coffee",
    amount: 12,
    note: "this morning",
    createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) }
  });
});

test("should set up expense action object with default values", () => {
  const expenseData = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0
  };
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) }
  });
});

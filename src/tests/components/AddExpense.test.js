import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import AddExpense from "../../components/ExpenseForm";
import expense from "../fixtures/expenses";

let startAddExpense, history, wrapper;

//before is a global lifecycle method. it runs once before each test case
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test("should render AddExpense page correctly", () => {
  expect(wrapper).toMatchSnaphot();
});

test("should handle onSubmit", () => {
  wrapper.find(startAddExpense).prop("onSubmit")(expense[1]);
  expect(history.push).toHaveBeenCalledWith("/");
});

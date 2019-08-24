import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import AddExpense from "../../components/ExpenseForm";
import expense from "../fixtures/expenses";

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test("should render AddExpense page correctly", () => {
  expect(wrapper).toMatchSnaphot;
});

test("should handle onSUbmit", () => {
  wrapper.find(AddExpense).prop("onSubmit")(expense[1]);
  expect(history.push).toHaveBeenCalledWith("/");
});

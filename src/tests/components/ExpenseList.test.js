import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpeseList";
import expenses from "../fixtures/expenses";
// import toJSON from "enzyme-to-json";

test("should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseList with 'no expense' title", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

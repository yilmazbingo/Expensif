import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStatetoProp = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    filters: state.filters
  };
};
export default connect(mapStatetoProp)(ExpenseList);
//this is whre we provide the information about what we want to connect.
//component needs only a subset of the store

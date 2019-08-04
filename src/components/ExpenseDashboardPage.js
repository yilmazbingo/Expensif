import React from "react";
import ExpenseList from "./ExpeseList";
import ExpenseListFilters from "./ExpenseListFilters";
const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;

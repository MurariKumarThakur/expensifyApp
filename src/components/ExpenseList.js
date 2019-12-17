import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
export const ExpenseList = props => (
  <div>
    <h1>This is ExpenseList</h1>
    {props.expenses.length == 0 ? (
      <p>No Expenses Found </p>
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);
const mapStateToProps = state => {
  console.log("state is ", state);
  return {
    expenses: selectExpenses(state.expenses, state.filter)
  };
};
export default connect(mapStateToProps)(ExpenseList);

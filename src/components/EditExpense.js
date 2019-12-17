import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";
const EditPage = props => {
  // console.log(props);

  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));

          props.history.push("/");

          // dispatch action to edit the expense
          // redirect to the dashboard

          console.log("updatedForm", expense);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};
const mapStateProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateProps)(EditPage);

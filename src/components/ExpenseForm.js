import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
const now = moment();
const formatedDate = now.format("DD/MM/YYYY");
console.log(formatedDate);

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAT: props.expense ? moment(props.expense.createdAT) : moment(),
      calenderFocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = createdAT => {
    if (createdAT) {
      this.setState(() => ({ createdAT }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    let error;

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Descption and Amount is mandatory field pls Provide"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAT: this.state.createdAT.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAT}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <br />
          <textarea
            placeholder="Add a note for your expense(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

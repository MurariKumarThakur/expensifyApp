import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filter";
class ExpenseListFilter extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div>
        <label>
          Enter Text :
          <input
            type="text"
            value={this.props.filter.text}
            onChange={e => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
          />
        </label>

        <select
          value={this.props.filter.sortBy}
          onChange={e => {
            if (e.target.value == "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value == "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date"> Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filter.startDate}
          endDate={this.props.filter.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          showClearDates={true}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};
export default connect(mapStateToProps)(ExpenseListFilter);

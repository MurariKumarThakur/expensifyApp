import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate
} from "../../actions/filter";
import moment from "moment";

test("should generate setStartDate action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate setEndDate action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});
test("should generate setTextFilter action object", () => {
  const action = setTextFilter("Murari Kumar");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Murari Kumar"
  });
});
test("should generate default setTextFilter action object ", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should generate sortByDate action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});
test("should generate sortByAmount action object", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});

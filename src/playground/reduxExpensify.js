import { createStore, combineReducers } from "redux";

import uuid from "uuid";
import { STATUS_CODES } from "http";

// Add_Expense
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAT = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAT
  }
});

// Remove_Expense

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT_EXPENSE

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
//SET_TEXT_FILTER

// const setTextFilter = (text = "") => ({
//   type: "SET_TEXT_FILTER",
//   text
// });
// //SORT_BY_DATE

// const sortByDate = () => ({
//   type: "SORT_BY_DATE"
// });

// //SORT_BY_AMOUNT

// const sortByAmount = () => ({
//   type: "SORT_BY_AMOUNT"
// });

// //SET_START_DATE

// const setStartDate = startDate => ({
//   type: "SET_START_DATE",
//   startDate
// });
// const setEndDate = endDate => ({
//   type: "SET_END_DATE",
//   endDate
// });

//SET_END_DATE

//Expense Reducer
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return [...state, action.expense];

//     case "REMOVE_EXPENSE":
//       return state.filter(({ id }) => id !== action.id);
//     case "EDIT_EXPENSE":
//       return state.map(expense => {
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.updates
//           };
//         } else {
//           return expense;
//         }
//       });

//     default:
//       return state;
//   }
// };

// const filterReducerDefaultState = {
//   text: "",
//   sortBy: "date",
//   startDate: undefined,
//   endDate: undefined
// };
// const filterReducer = (state = filterReducerDefaultState, action) => {
//   switch (action.type) {
//     case "SET_TEXT_FILTER":
//       return {
//         ...state,
//         text: action.text
//       };
//     case "SORT_BY_AMOUNT":
//       return {
//         ...state,
//         sortBy: "amount"
//       };
//     case "SORT_BY_DATE":
//       return {
//         ...state,
//         sortBy: "Date"
//       };
//     case "SET_START_DATE":
//       return {
//         ...state,
//         startDate: action.startDate
//       };
//     case "SET_END_DATE":
//       return {
//         ...state,
//         endDate: action.endDate
//       };

//     default:
//       return state;
//   }
// };

//get visiableExpense
// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses
//     .filter(expense => {
//       const startDateMatch =
//         typeof startDate !== "number" || expense.createdAT >= startDate;
//       const endDateMatch =
//         typeof endDate !== "number" || expense.createdAT <= endDate;
//       const textMatch = expense.description
//         .toLowerCase()
//         .includes(text.toLowerCase());

//       return startDateMatch && endDateMatch && textMatch;
//     })
//     .sort((a, b) => {
//       if (sortBy === "date") {
//         return a.createdAT < b.createdAT ? 1 : -1;
//       } else if (sortBy === "amount") {
//         return a.amount < b.amount ? 1 : -1;
//       }
//     });
// };
/*
figure out if expenses.description as the text variable string inside of it 
> includes 
> convert both strings to lower case 



*/

// store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visiableExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log("visiable expenses -> ", visiableExpenses);
});

const exp1 = store.dispatch(
  addExpense({ description: "Rent", amount: 500, createdAT: 1000 })
);

const exp2 = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAT: -1000 })
);

// store.dispatch(removeExpense({ id: exp1.expense.id }));
// store.dispatch(editExpense(exp2.expense.id, { amount: 500 }));
//store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()); //date

//store.dispatch(setStartDate(0)); //startDate 125
//store.dispatch(setStartDate()); //startDate undefined
//store.dispatch(setEndDate(1250)); //endDate 1250

// const demoState = {
//   expenses: [
//     {
//       id: "poijasdfhwer",
//       description: "January Rent",
//       note: "This is was the final payment for that address",
//       amount: 54444,
//       createdAT: 0
//     }
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "amount", //date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };

console.log("ReduxExpensify...");

const user = {
  name: "Murari",
  age: 24
};
console.log({
  ...user,
  location: "patna",
  age: 27
});

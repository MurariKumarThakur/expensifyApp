import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import { Provider } from "react-redux";

import getVisibleExpenses from "./selectors/expenses";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filter";

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visiableExpenses = getVisibleExpenses(state.expenses, state.filter);
  //console.log("visiable expenses -> ", visiableExpenses);
});

store.dispatch(addExpense({ description: "Water", amount: 100 }));

store.dispatch(addExpense({ description: "Gas", createdAT: 2000 }));

store.dispatch(addExpense({ description: "rent", amount: 300 }));

store.dispatch(addExpense({ description: "fruits", amount: 400 }));

//store.dispatch(setTextFilter("gas"));
// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 3000);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

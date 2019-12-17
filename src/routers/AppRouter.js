import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import AddExpense from "../components/AddExpense";
import Edit from "../components/EditExpense";
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/help" component={Help} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

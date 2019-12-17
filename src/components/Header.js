import React from "react";
import { NavLink } from "react-router-dom";
const num = 45;
const Header = () => (
  <header>
    <h1>Expensify app</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home page
    </NavLink>

    <NavLink to="/create" activeClassName="is-active">
      Create Expense Page
    </NavLink>
    <NavLink to="/edit/89" activeClassName="is-active">
      Edit page
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

export default Header;

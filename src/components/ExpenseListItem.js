// export a stateless function component
// description , amount, createdAt

import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
const ExpenseListItem = ({ id, description, amount, createdAT, note }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>

    <p>
      {amount}-{createdAT}-{note} <br />
    </p>
  </div>
);

export default ExpenseListItem;

import { createStore, combineReducers } from "redux";

import uuid from "uuid";
import { STATUS_CODES } from "http";


// Add_Expense
export const addExpense = ({
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

export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

//EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
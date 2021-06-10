import React from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

const Newexpense = (props) => {
  const saveEpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveEpenseDataHandler} />
    </div>
  );
};

export default Newexpense;

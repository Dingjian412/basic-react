import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";
import AddNewForm from "./AddNewForm.js";

const Newexpense = (props) => {
  const [isAddForm, setisAddForm] = useState(false);

  const saveEpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
  };

  const switchFormHandler = (props) => {
    setisAddForm(props);
  };

  return (
    <div className="new-expense">
      {isAddForm ? (
        <ExpenseForm
          onSaveExpenseData={saveEpenseDataHandler}
          onSwitchForm={switchFormHandler}
        />
      ) : (
        <AddNewForm onSwitchForm={switchFormHandler} />
      )}
    </div>
  );
};

export default Newexpense;

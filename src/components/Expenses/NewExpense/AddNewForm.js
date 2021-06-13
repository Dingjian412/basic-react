import React from "react";
import "./NewExpense.css";

const AddNewForm = (props) => {
  const clickHandler = () => {
    console.log("clicked");
    props.onSwitchForm(true);
  };

  return (
    <div className="new-expense__controls">
      <div className="new-expense__actions">
        <button onClick={clickHandler}>Add New Expense</button>
      </div>
    </div>
  );
};
export default AddNewForm;

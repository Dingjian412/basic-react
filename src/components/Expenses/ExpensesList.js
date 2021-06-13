import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((x) => (
        <ExpenseItem
          key={x.id}
          title={x.title}
          amount={x.amount}
          date={x.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

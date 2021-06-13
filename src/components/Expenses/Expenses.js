import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./NewExpense/ExpensesFilter.js";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        {props.items.map((x) => (
          <ExpenseItem
            key={x.id}
            title={x.title}
            amount={x.amount}
            date={x.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

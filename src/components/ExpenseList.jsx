import React from "react";
import { FixedSizeList as List } from "react-window";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, deleteExpense }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      <ExpenseItem expense={expenses[index]} deleteExpense={deleteExpense} />
    </div>
  );

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <List
          height={400} // Adjust based on your layout
          itemCount={expenses.length}
          itemSize={35} // Adjust based on your item height
          width="100%"
        >
          {Row}
        </List>
      )}
    </div>
  );
};

export default ExpenseList;

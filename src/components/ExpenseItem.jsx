import React from "react";

const ExpenseItem = React.memo(({ expense, deleteExpense }) => {
  return (
    <div className="expense-item">
      <span>{expense.name}:</span>
      <span>&#8377; {expense.amount.toFixed(2)}</span>
      <button onClick={() => deleteExpense(expense.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
});

export default ExpenseItem;

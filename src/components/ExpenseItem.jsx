import React from "react";

const ExpenseItem = React.memo(({ expense, deleteExpense }) => {
  return (
    <div className="expense-item">
      <span>{expense.name}:</span>
      <span>&#8377; {expense.amount.toFixed(2)}</span>
      <button onClick={() => deleteExpense(expense.id)} className="delete-btn">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
});

export default ExpenseItem;

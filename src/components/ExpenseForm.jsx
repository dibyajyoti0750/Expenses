import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");

  const handleExpenseNameChange = (e) => {
    setExpenseName(e.target.value);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value === "" ? "" : parseFloat(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseName && !isNaN(amount) && amount > 0) {
      addExpense({ name: expenseName, amount });
      setExpenseName("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Name"
        value={expenseName}
        onChange={handleExpenseNameChange}
        autoFocus
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
        step="0.01"
        min="0.01"
        required
      />
      <button type="submit">
        <b>Add Expense</b>
      </button>
    </form>
  );
};

export default ExpenseForm;

import React from "react";

const SavingsSection = ({ totalExpenses, budget, savings }) => {
  const savingsPercentage = budget > 0 ? (savings / budget) * 100 : 0;

  return (
    <div className="savings-section">
      <h2>Savings Overview</h2>
      <div className="savings-info">
        <p>Total Expenses: &#8377; {totalExpenses.toFixed(2)}</p>
        <p>Remaining Budget: &#8377; {savings.toFixed(2)}</p>
        <p>Savings Percentage: {savingsPercentage.toFixed(2)}%</p>
      </div>
      <div className="savings-bar">
        <div
          className="savings-progress"
          style={{ width: `${Math.max(0, Math.min(100, savingsPercentage))}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SavingsSection;

import React, { useState } from "react";

const BudgetSection = ({ budget, setBudget }) => {
  const [editMode, setEditMode] = useState(false);
  const [tempBudget, setTempBudget] = useState(budget);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget(parseFloat(tempBudget));
    setEditMode(false);
  };

  return (
    <div className="budget-section">
      <h2>Monthly Budget</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={tempBudget}
            onChange={(e) => setTempBudget(e.target.value)}
            step="0.01"
            min="0"
            required
          />
          <button type="submit">
            <b>Save</b>
          </button>
          <button type="button" onClick={() => setEditMode(false)}>
            <b>Cancel</b>
          </button>
        </form>
      ) : (
        <div className="budget-display">
          <span className="budget-amount">&#8377; {budget.toFixed(2)}</span>
          <button className="edit-budget-btn" onClick={() => setEditMode(true)}>
            <b>Edit Budget</b>
          </button>
        </div>
      )}
    </div>
  );
};

export default BudgetSection;

import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import BudgetSection from "./components/BudgetSection";
import SavingsSection from "./components/SavingsSection";

function App() {
  const [expenses, setExpenses] = useState([]); // Resetting to an empty array
  const [budget, setBudget] = useState(0); // Resetting to 0

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const savings = budget - totalAmount;

  return (
    <div className="container">
      <Header />
      <BudgetSection budget={budget} setBudget={setBudget} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseChart expenses={expenses} budget={budget} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <SavingsSection
        totalExpenses={totalAmount}
        budget={budget}
        savings={savings}
      />
    </div>
  );
}

export default App;

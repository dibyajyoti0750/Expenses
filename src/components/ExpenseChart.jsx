import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const ExpenseChart = ({ expenses, budget }) => {
  const data = expenses.reduce((acc, expense) => {
    const existingCategory = acc.find((item) => item.name === expense.name);
    if (existingCategory) {
      existingCategory.value += expense.amount;
    } else {
      acc.push({ name: expense.name, value: expense.amount });
    }
    return acc;
  }, []);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const remaining = Math.max(0, budget - totalExpenses);

  if (remaining > 0) {
    data.push({ name: "Remaining Budget", value: remaining });
  }

  return (
    <div className="expense-chart">
      <h2>Expense Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;

import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import TotalExpenses from './TotalExpenses';
import AddExpenseForm from './AddExpenseForm';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <AddExpenseForm onAddExpense={addExpense} />
      <ExpensesList expenses={expenses} />
      <TotalExpenses expenses={expenses} />
    </div>
  );
};

export default App;
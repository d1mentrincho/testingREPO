import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {
  return (
    <div>
      <h2>Список витрат</h2>
      <ul>
        {expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
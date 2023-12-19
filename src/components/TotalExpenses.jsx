import React from 'react';

const TotalExpenses = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div>
      <h2>Загальна сума витрат: {total}</h2>
    </div>
  );
};

export default TotalExpenses;
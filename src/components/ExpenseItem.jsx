import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <span>{`${expense.description} - `}</span>
      <span>{`${expense.amount} USD`}</span>
    </li>
  );
};

export default ExpenseItem;
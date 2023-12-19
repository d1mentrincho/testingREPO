import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Перевірка на пусті поля
    if (!description || !amount) {
      alert('Будь ласка, введіть опис та суму витрат.');
      return;
    }

    const newExpense = {
      description,
      amount: parseFloat(amount),
    };

    // Передача нової витрати до головного компонента
    onAddExpense(newExpense);

    // Очистка полів форми
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Додати нову витрату</h2>
      <label>
        Опис:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Сума:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type="submit">Додати витрату</button>
    </form>
  );
};

export default AddExpenseForm;
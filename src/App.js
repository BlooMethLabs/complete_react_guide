import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 'ex1', title: 'Car', date: new Date(2022, 4, 8), price: '12999' },
    { id: 'ex2', title: 'Bike', date: new Date(2012, 9, 18), price: '4599' },
    { id: 'ex3', title: 'Truck', date: new Date(2014, 12, 29), price: '18999' },
  ]);

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

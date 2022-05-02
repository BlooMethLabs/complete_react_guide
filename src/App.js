import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { title: 'Car', date: new Date(2022, 4, 8), price: '12999' },
    { title: 'Bike', date: new Date(2012, 9, 18), price: '4599' },
    { title: 'Truck', date: new Date(2014, 12, 29), price: '18999' },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

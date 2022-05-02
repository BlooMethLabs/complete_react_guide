import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { title: 'Car', date: new Date(2022, 4, 8), price: '12999' },
    { title: 'Bike', date: new Date(2012, 9, 18), price: '4599' },
    { title: 'Truck', date: new Date(2014, 12, 29), price: '18999' },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

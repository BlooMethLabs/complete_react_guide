import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState();
  const filterChangeHandler = (year) => {
    console.log(typeof expenses[0].date);
    console.log(year);
    setFilterYear(year);
  };
  let items = props.items;
  if (filterYear) {
    items = items.filter(
      (items) => String(items.date.getFullYear()) === filterYear,
    );
  }
  let expenses = items.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      date={item.date}
      price={item.price}
    />
  ));
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      {expenses}
    </Card>
  );
};
export default Expenses;

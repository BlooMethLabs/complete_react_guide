import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState();
  const filterChangeHandler = (year) => {
    console.log(year);
    setFilterYear(year);
  };
  let items = props.items;
  if (filterYear) {
    items = items.filter(
      (items) => String(items.date.getFullYear()) === filterYear,
    );
  }
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpensesList items={items} />
    </Card>
  );
};
export default Expenses;

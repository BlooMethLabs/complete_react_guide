import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p>No expenses for that year.</p>;
  }
  return props.items.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      date={item.date}
      price={item.price}
    />
  ));
};

export default ExpensesList;

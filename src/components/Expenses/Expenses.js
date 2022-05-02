import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const expenses = props.items.map((item) => (
      <ExpenseItem
        title={item.title}
        date={item.date}
        price={item.price}
      />
    ));
  return (
    <Card className='expenses'>
      {expenses}
    </Card>
  )
}

export default Expenses;

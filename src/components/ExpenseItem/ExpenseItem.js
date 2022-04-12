import './ExpenseItem.css';

function ExpenseItem(props) {
  const date = props.date.toISOString();
  return (
    <div className="expense-item">
      <div>{date}</div>
      <div className="expense-item__dexcription">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

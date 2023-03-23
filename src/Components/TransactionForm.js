import { useState } from "react";
const TransactionForm = ({ addTransaction }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
  };

  return (
    <form className="transactionForm" onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        value={formValues.desc}
        onChange={changeHandler}
      />
      <input
        type="number"
        name="amount"
        value={formValues.amount}
        onChange={changeHandler}
      />
      <div className="radioContainer">
        <input
          id="expense"
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
        />
        <label htmlFor="expense">Expense</label>
        <input
          id="income"
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "income"}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button>Add transactions</button>
    </form>
  );
};

export default TransactionForm;

import { useState } from "react";
const TransactionForm = () => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <form className="transactionForm">
      <input
        type="text"
        name="desc"
        value={formValues.desc}
        onChange={changeHandler}
      />
      <input type="number" name="amount" onChange={changeHandler} />
      <div className="radioContainer">
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
        />
        <label name="expense">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
        />
        <label name="income">Income</label>
      </div>
      <button>Add transactions</button>
    </form>
  );
};

export default TransactionForm;

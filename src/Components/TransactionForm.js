import { useState } from "react";
const TransactionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formValues.desc && formValues.amount) {
      addTransaction(formValues);
      setIsShow(false);
    } else {
      alert("Please check the inputs and try again!");
    }
  };

  return (
    <form className="transactionForm" onSubmit={submitHandler}>
      <input
        type="number"
        name="amount"
        value={formValues.amount}
        onChange={changeHandler}
        placeholder="Amount"
      />

      <input
        type="text"
        name="desc"
        value={formValues.desc}
        onChange={changeHandler}
        placeholder="Description"
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

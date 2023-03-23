import { useState } from "react";
import TransactionForm from "./TransactionForm";

const OverviewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="topSection">
        <h3>Balance : {income - expense} </h3>
        <button
          className={isShow && "cancelBtn"}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? "CANCEL" : "ADD"}
        </button>
      </div>
      {isShow && (
        <TransactionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}
      <div className="resultSection">
        <div className="expenseBox">
          <p>Expense</p>
          <h3 id="expense"> ${expense} </h3>
        </div>
        <div className="expenseBox">
          <p>Income</p>
          <h3 id="income"> ${income} </h3>
        </div>
      </div>
    </>
  );
};

export default OverviewComponent;

import { useState } from "react";

const OverviewComponent = ({ income, expense }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="topSection">
        <h3>Balance : {income - expense} </h3>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "CANCEL" : "ADD"}
        </button>
      </div>
      <div className="resultSection">
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
    </>
  );
};

export default OverviewComponent;

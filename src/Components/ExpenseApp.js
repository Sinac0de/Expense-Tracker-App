import { useState } from "react";
import TransactionsComponent from "./TransactionsComponent";
import OverviewComponent from "./OverviewComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    const data = { ...formValues, id: Date.now() };
    setTransactions([...transactions, data]);
  };

  return (
    <section>
      <OverviewComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransactionsComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;

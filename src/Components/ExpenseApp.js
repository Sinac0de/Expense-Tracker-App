import { useState } from "react";
import TransactionsComponent from "./TransactionsComponent";
import OverviewComponent from "./OverviewComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  return (
    <section>
      <OverviewComponent income={income} expense={expense} />
      <TransactionsComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;

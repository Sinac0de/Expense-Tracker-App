import { useState } from "react";
import TransactionsCompoenent from "./TransactionsComponent";
import OverviewComponent from "./OverviewComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  return (
    <section>
      <OverviewComponent income={income} expense={expense} />
      <TransactionsCompoenent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;

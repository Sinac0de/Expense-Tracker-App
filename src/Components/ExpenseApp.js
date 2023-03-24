import { useEffect, useState } from "react";
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

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? (exp += parseFloat(t.amount))
        : (inc += parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

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

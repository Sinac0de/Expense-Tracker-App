import { useEffect, useState } from "react";

const TransactionsComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTrans, setFilteredTrans] = useState(transactions);

  const filterTransactions = (search) => {
    if (!search) {
      setFilteredTrans(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTrans(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  if (!transactions.length) return <h4>Add some transactions</h4>;

  return (
    <section>
      <h3 className="sectionHeader">Transactions</h3>
      <input
        type="search"
        className="searchInput"
        value={searchItem}
        onChange={changeHandler}
        placeholder="Search for a transaction"
      />
      {filteredTrans.length ? (
        filteredTrans.map((t) => (
          <div
            key={t.id}
            className="transaction"
            style={{ borderRight: t.type !== "expense" && "5px solid green" }}
          >
            <span>{t.desc}</span>
            <span>${t.amount}</span>
          </div>
        ))
      ) : (
        <p className="searchNotFound">No items match!</p>
      )}
    </section>
  );
};

export default TransactionsComponent;

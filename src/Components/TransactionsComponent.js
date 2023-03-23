const TransactionsComponent = ({ transactions }) => {
  return (
    <section>
      <h3 className="sectionHeader">Transactions</h3>
      {transactions.map((t) => (
        <div
          key={t.id}
          className="transaction"
          style={{ borderRight: t.type !== "expense" && "5px solid green" }}
        >
          <span>{t.desc}</span>
          <span>${t.amount}</span>
        </div>
      ))}
    </section>
  );
};

export default TransactionsComponent;

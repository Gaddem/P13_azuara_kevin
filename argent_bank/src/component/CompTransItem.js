import React from "react";

const CompTransItem = (props) => {
  const { title, amount, balanceType } = props;

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{balanceType}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button disabled={true} className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default CompTransItem;

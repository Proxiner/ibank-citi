import React from "react";
import styles from "../layout/_Transactions.module.scss";

function TransactionCard({iconBG, imageSrc, title, date, price}) {
  return (
    <div className={styles.transactionCard}>
      <div className={styles.mainDetail}>
        <div
          className={styles.iconContainer}
          style={{ backgroundColor: iconBG }}
        >
          <img src={imageSrc} />
        </div>
        <div className={styles.transactionCardTitle}>
          <h1>{title}</h1>
          <span>{date}</span>
        </div>
      </div>
      <span className={styles.price}>
        {price}
      </span>
    </div>
  );
}

export default TransactionCard;

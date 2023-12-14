import React from "react";
import styles from "../layouts/_Transactions.module.scss";
import kingIcon from '../assets/king.png'

function TransactionCard({iconBG, imageSrc, title, date, price, mostValuable}) {
  return (
    <div className={styles.transactionCard}>
      {mostValuable && <img alt="King Icon" src={kingIcon} className={styles.kingIcon} />}
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

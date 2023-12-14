import React from "react";
import styles from "./_MyCards.module.scss";

function Deposit() {
  return (
    <div className={styles.deposit}>
      <section className={styles.inputPart}>
        <input
          type="text"
          placeholder="100000"
          className={styles.depositInput}
        />
        <button className={styles.depositButton}>Deposit</button>
      </section>
      <div className={styles.suggestions}>
        <span>200,000$</span>
        <span>1200,000$</span>
        <span>900,000$</span>
        <span>500,000$</span>
        <span>100,000$</span>
        <span>1900,000$</span>
        <button className={styles.btn}>...</button>
      </div>
    </div>
  );
}

export default Deposit;

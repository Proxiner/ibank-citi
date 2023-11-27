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
      <span className={styles.moneySuggestions}>200,000$</span>
      <span className={styles.moneySuggestions}>1200,000$</span>
      <span className={styles.moneySuggestions}>900,000$</span>
      <span className={styles.moneySuggestions}>500,000$</span>
      <span className={styles.moneySuggestions}>100,000$</span>
      <span className={styles.moneySuggestions}>1900,000$</span>
        <button className={styles.btn}>...</button>
      </div>
    </div>
  );
}

export default Deposit;

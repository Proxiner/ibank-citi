import React, { useContext } from "react";
import styles from "./_MyCards.module.scss";
import { addCart } from "../App";

function Deposit() {
  const { cartMoney, setCartMoney } = useContext(addCart);

  const moneySuggestionsHandler = (e) => {
    setCartMoney( cartMoney + Number(e.target.value))
  };

  return (
    <div className={styles.deposit}>
      <form
        className={styles.inputPart}
        onSubmit={(e) => {
          e.preventDefault();
          setCartMoney(
            Number(e.currentTarget.firstElementChild.value) + cartMoney
          );
        }}
      >
        <input
          defaultValue={0}
          min={0}
          type="number"
          placeholder="100000"
          className={styles.depositInput}
        />
        <button type="submit" className={styles.depositButton}>
          Deposit
        </button>
      </form>
      <div className={styles.suggestions}>
        <span onClick={moneySuggestionsHandler}>200,000$</span>
        <span onClick={moneySuggestionsHandler}>1200,000$</span>
        <span onClick={moneySuggestionsHandler}>900,000$</span>
        <span onClick={moneySuggestionsHandler}>500,000$</span>
        <span onClick={moneySuggestionsHandler}>100,000$</span>
        <span onClick={moneySuggestionsHandler}>1900,000$</span>
        <button className={styles.btn}>...</button>
      </div>
    </div>
  );
}

export default Deposit;

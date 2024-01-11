import React, { useContext, useRef } from "react";
import styles from "./_MyCards.module.scss";
import { addCart } from "../App";

function Deposit() {
  const inputRef = useRef();
  const { cartMoney, setCartMoney } = useContext(addCart);

  const moneySuggestionsHandler = (e) => {
    let price = Number(e.target.textContent);
    inputRef.current.value = price;
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
          ref={inputRef}
          className={styles.depositInput}
        />
        <button type="submit" className={styles.depositButton}>
          Deposit
        </button>
      </form>
      <div className={styles.suggestions}>
        <span onClick={moneySuggestionsHandler}>{200000}</span>
        <span onClick={moneySuggestionsHandler}>{1200000}</span>
        <span onClick={moneySuggestionsHandler}>{900000}</span>
        <span onClick={moneySuggestionsHandler}>{500000}</span>
        <span onClick={moneySuggestionsHandler}>{100000}</span>
        <span onClick={moneySuggestionsHandler}>{1900000}</span>
        <button className={styles.btn}>...</button>
      </div>
    </div>
  );
}

export default Deposit;
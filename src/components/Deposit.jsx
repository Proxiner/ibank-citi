import React, { useContext, useRef } from "react";
import styles from "./_MyCards.module.scss";
import { addCart } from "../pages/Home";

function Deposit() {
  const inputRef = useRef();
  const { cartMoney, setCartMoney, darkMode } = useContext(addCart);

  const moneySuggestionsHandler = (e) => {
    let price = Number(e.target.textContent);
    inputRef.current.value = price;
  };

  return (
    <div className={styles.depositContainer}>
      <div
        className={`${styles.deposit} ${
          darkMode ? "_MyCards_darkMode__DY253" : ""
        }`}
      >
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
            className={`${styles.depositInput} ${
              darkMode ? "_MyCards_darkMode__DY253" : ""
            }`}
          />
          <button type="submit" className={styles.depositButton}>
            Deposit
          </button>
        </form>
        <div className={styles.suggestions}>
          <span onClick={moneySuggestionsHandler} className={` ${
          darkMode ? "_MyCards_darkMode__DY253" : ""
        }`}>{200000}</span>
          <span onClick={moneySuggestionsHandler} className={` ${
          darkMode ? "_MyCards_darkMode__DY253" : ""
        }`}>{1200000}</span>
          <span onClick={moneySuggestionsHandler} className={` ${
          darkMode ? "_MyCards_darkMode__DY253" : ""
        }`}>{900000}</span>
          <span onClick={moneySuggestionsHandler} className={` ${
          darkMode ? "_MyCards_darkMode__DY253" : ""
        }`}>{500000}</span>
          <span onClick={moneySuggestionsHandler} className={` ${
          darkMode ? "_MyCards_darkMode__DY253" : ""
        }`}>{100000}</span>
          <span onClick={moneySuggestionsHandler} className={` ${
          darkMode ? "_MyCards_darkMode__DY253" : ""
        }`}>{1900000}</span>
          <button className={styles.btn}>...</button>
        </div>
      </div>
    </div>
  );
}

export default Deposit;

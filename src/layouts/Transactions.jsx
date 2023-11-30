import React, { useState } from "react";
import styles from "./_Transactions.module.scss";
import TransactionCard from "../components/TransactionCard";
import dribbbleIcon from "../assets/dribble.svg";
import spotifyIcon from "../assets/spotify.svg";
import BeIcon from "../assets/be.svg";
import NemIcon from "../assets/nem.svg";
import { v4 } from "uuid";

function Transactions() {
  const [transaction, setTransaction] = useState([
    {
      iconBG: "#FF075C61",
      title: "Dribbble",
      date: "28 September 2022",
      price: "$2100,000",
      imageSrc: dribbbleIcon,
      mostValuable: true
    },
    {
      iconBG: "#1DD46061",
      title: "Spotify",
      date: "28 September 2022",
      price: "$160,000",
      imageSrc: spotifyIcon,
      mostValuable: false
    },
    {
      iconBG: "#9791FC61",
      title: "Behance",
      date: "28 September 2022",
      price: "$100,000",
      imageSrc:BeIcon,
      mostValuable: false
    },
    {
      iconBG: "#D0D61761",
      title: "Nem(IR)",
      date: "28 September 2022",
      price: "$20,000",
      imageSrc: NemIcon,
      mostValuable: false
    },
  ]);
  return (
    <>
      <section className={styles.transactions}>
        <div className={styles.title}>
          <h1>Transactions</h1>
          <span>(Recent)</span>
        </div>
        <div className={styles.cardContainer}>
          {transaction.map((transaction) => (
            <TransactionCard key={v4()} {...transaction} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Transactions;

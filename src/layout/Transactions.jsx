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
      price: "$2111100,000",
      imageSrc: dribbbleIcon
    },
    {
      iconBG: "#1DD46061",
      title: "Erfan",
      date: "28 September 2022",
      price: "$200,000",
      imageSrc: spotifyIcon
    },
    {
      iconBG: "#9791FC61",
      title: "Ali",
      date: "28 September 2022",
      price: "$200,000",
      imageSrc:BeIcon
    },
    {
      iconBG: "#D0D61761",
      title: "Nase",
      date: "28 September 2022",
      price: "$200,000",
      imageSrc: NemIcon
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

          {/* <TransactionCard
          iconBG={"#FF075C61"}
          title={"Dribbble"}
          date={"28 September 2022"}
          price={"$200,000 {USA}"}
        />
        <TransactionCard
          iconBG={"#1DD46061"}
          title={"Spotify"}
          date={"28 September 2022"}
          price={"$185,000,000"}
        />
        <TransactionCard
          iconBG={"#9791FC61"}
          title={"Dribbble"}
          date={"28 September 2022"}
          price={"$197,000"}
        />
        <TransactionCard
          iconBG={"#D0D61761"}
          title={"NEM (XEM)"}
          date={"28 September 2022"}
          price={"$30,000"}
        /> */}
        </div>
      </section>
      <section></section>
    </>
  );
}

export default Transactions;

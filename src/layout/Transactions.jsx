import React, { useState } from "react";
import styles from "./_Transactions.module.scss";
import TransactionCard from "../components/TransactionCard";
import dribbbleIcon from "../assets/dribble.svg";
import spotifyIcon from "../assets/spotify.svg";
import BeIcon from "../assets/be.svg";
import NemIcon from "../assets/nem.svg";

function Transactions() {
  const [transactions, setTransactions] = useState([
    {
      iconBG: "#FF075C61",
      imageSrc: dribbbleIcon,
      title: "Dribbble",
      date: "28 September 2022",
      price: "$200,000 {USA}",
    },
    {
      iconBG: "#1DD46061",
      imageSrc: "spotifyIcon",
      title: "Spotify",
      date: "28 September 2022",
      price: "$185,000,000",
    },

    {
      iconBG: "#9791FC61",
      imageSrc: "BeIcon",
      title: "Dribbble",
      date: "28 September 2022",
      price: "$197,000",
    },
    {

      iconBG: "##D0D61761",
      imageSrc: "NemIcon",
      title: "NEM (XEM)",
      date: "28 September 2022",
      price: "$30,000",
    },
  ])
  return (
    <>
      <section className={styles.transactions}>
        <div className={styles.title}>
          <h1>Transactions</h1>
          <span>(Recent)</span>
        </div>
        <div className={styles.cardContainer}>

          return
          {/* <TransactionCard
            iconBG={"#FF075C61"}
            imageSrc={dribbbleIcon}
            title={"Dribbble"}
            date={"28 September 2022"}
            price={"$200,000 {USA}"}
          />
          <TransactionCard
            iconBG={"#1DD46061"}
            imageSrc={spotifyIcon}
            title={"Spotify"}
            date={"28 September 2022"}
            price={"$185,000,000"}
          />
          <TransactionCard
            iconBG={"#9791FC61"}
            imageSrc={BeIcon}
            title={"Dribbble"}
            date={"28 September 2022"}
            price={"$197,000"}
          />
          <TransactionCard
            iconBG={"#D0D61761"}
            imageSrc={NemIcon}
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

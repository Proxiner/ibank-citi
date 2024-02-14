import React, { useEffect, useRef, useState } from "react";
import styles from "./_Transactions.module.scss";
import TransactionCard from "../components/TransactionCard";
import dribbbleIcon from "../assets/dribble.svg";
import spotifyIcon from "../assets/spotify.svg";
import BeIcon from "../assets/be.svg";
import NemIcon from "../assets/nem.svg";
import { v4 } from "uuid";

function Transactions() {

  async function fetchData() {
    const response = await fetch("https://api.slingacademy.com/v1/sample-data/products")
    const data = response.json()
    const result = data
    return result
  }
  const cards = useRef()
  useEffect(() => {
    async function fetchDataAndUpdate() {
      const data = await fetchData()
      cards.current.children[0].lastElementChild.textContent = `$${data.products[0].price},000`
      cards.current.children[1].lastElementChild.textContent = `$${data.products[1].price},000`
      cards.current.children[2].lastElementChild.textContent = `$${data.products[2].price},000`
      cards.current.children[3].lastElementChild.textContent = `$${data.products[3].price},000`
    }

    fetchDataAndUpdate()
  }, [])

  const [transaction, setTransaction] = useState([
    {
      iconBG: "#FF075C61",
      title: "Dribbble",
      date: "28 September 2022",
      price: "$200,000",
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
      imageSrc: BeIcon,
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
        <div className={styles.cardContainer} ref={cards}>
          {transaction.map((transaction) => (
            <TransactionCard key={v4()} {...transaction} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Transactions;

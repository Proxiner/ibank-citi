import React, { useState } from "react";

import styles from "./_PopularContacts.module.scss";

import Contacts from "../components/Contacts";
import johnDoe from "../../assets/john-doe.svg";
import sarahFlorance from "../../assets/sarah-florance.svg";
// import Search from "../components/Search";

const PopularContacts = () => {
  const showHistory = false;

  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = [
    {
      profile: johnDoe,
      contactName: "John Doe",
      cardNumber: "**** 2020",
      showHistory: showHistory,
    },
    {
      profile: sarahFlorance,
      contactName: "Sarah Florance",
      cardNumber: "**** 3030",
      showHistory: showHistory,
    },
  ].filter((contact) =>
    contact.contactName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2> Popular Contacts </h2>

     {/* <Search/> */}
     
      <section className={styles.contacts}>
        {filteredContacts.map((contact) => (
          <div className={styles.contact} key={contact.contactName}>
            <Contacts {...contact} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PopularContacts;

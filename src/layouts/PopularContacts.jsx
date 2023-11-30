import React from "react";

import styles from "./_PopularContacts.module.scss";

import Contacts from "../components/Contacts";
import johnDoe from "../assets/john-doe.svg";
import sarahFlorance from "../assets/sarah-florance.svg";

const PopularContacts = () => {

  return (
    <div className={styles.container}>
      <h2> Popular Contacts </h2>
      <section className={styles.contacts}>
        <div className={styles.contact}>
          <Contacts contactName='John Doe' cardNumber='**** 6390' profile={johnDoe}/>
        </div>
        <div className={styles.contact}>
          <Contacts contactName='Sarah Florance' cardNumber='**** 6473' profile={sarahFlorance}/>
        </div>
      </section>
    </div>
  );
};

export default PopularContacts;

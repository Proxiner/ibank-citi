import React from "react";

import styles from "./_Contacts.module.scss";

const Contacts = ({ profile, contactName, cardNumber, time , showHistory , clock }) => {
  return (
    <div className={styles.container}>
      <section className={styles.profile}>
        <img src={profile} alt="profile container" />
      </section>

      <section className={styles.info}>
        <h3>{contactName}</h3>
        <span>{cardNumber}</span>
      </section>

      {showHistory && (
        <div className={styles.history}>
          {time}
          {clock && <span>{clock}</span>}
        </div>
      )}

    </div>
  );
};

export default Contacts;

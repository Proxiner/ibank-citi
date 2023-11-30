import React from "react";
import Contacts from "../components/Contacts";
import styles from "./_ContactList.module.scss";

const ContactList = ({ contacts, searchQuery }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.contactName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2>Contact List</h2>
      {filteredContacts.length > 0 ? (
        <section className={styles.contacts}>
          {filteredContacts.map((contact) => (
            <div className={styles.contact} key={contact.contactName}>
              <Contacts {...contact} />
            </div>
          ))}
        </section>
      ) : (
        <p>No matching contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;
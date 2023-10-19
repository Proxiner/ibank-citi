import React, { useState } from "react";

import ContactList from "./scss/layout/ContactList";
import PopularContacts from "./scss/layout/PopularContacts";
import Search from "./scss/components/Search";

import styles from './App.module.scss';

import frankWilliam from "./assets/frank-william.svg";
import nickKrankston from "./assets/nick-krankston.svg";
import johnDoe from "./assets/john-doe.svg";
import sarahFlorance from "./assets/sarah-florance.svg";

const CONTACTS = [
  {
    profile: frankWilliam,
    contactName: "Frank William",
    cardNumber: "**** 6920",
    time: "07:07",
    clock: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.754"
        height="18.754"
        viewBox="0 0 18.754 18.754"
      >
        <path
          d="M8.4,16.8a8.4,8.4,0,1,1,8.4-8.4A8.407,8.407,0,0,1,8.4,16.8Zm0-15.628A7.228,7.228,0,1,0,15.628,8.4,7.237,7.237,0,0,0,8.4,1.172Z"
          transform="translate(0.977 0.977)"
          fill="#c7c7c7"
        />
        <path
          d="M3.766,7.166a.523.523,0,0,1-.3-.086L1.047,5.634A2.3,2.3,0,0,1,0,3.79V.586A.59.59,0,0,1,.586,0a.59.59,0,0,1,.586.586v3.2a1.155,1.155,0,0,0,.477.836L4.071,6.072a.585.585,0,0,1,.2.8A.6.6,0,0,1,3.766,7.166Z"
          transform="translate(8.51 5.282)"
          fill="#c7c7c7"
        />
        <path d="M0,0H18.754V18.754H0Z" fill="none" opacity="0" />
      </svg>
    ),
    showHistory: true,
  },
  {
    profile: nickKrankston,
    contactName: "Nick Krankston",
    cardNumber: "**** 1240",
    time: "",
    clock: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.754"
        height="18.754"
        viewBox="0 0 18.754 18.754"
      >
        <path
          d="M8.4,16.8a8.4,8.4,0,1,1,8.4-8.4A8.407,8.407,0,0,1,8.4,16.8Zm0-15.628A7.228,7.228,0,1,0,15.628,8.4,7.237,7.237,0,0,0,8.4,1.172Z"
          transform="translate(0.977 0.977)"
          fill="#c7c7c7"
        />
        <path
          d="M3.766,7.166a.523.523,0,0,1-.3-.086L1.047,5.634A2.3,2.3,0,0,1,0,3.79V.586A.59.59,0,0,1,.586,0a.59.59,0,0,1,.586.586v3.2a1.155,1.155,0,0,0,.477.836L4.071,6.072a.585.585,0,0,1,.2.8A.6.6,0,0,1,3.766,7.166Z"
          transform="translate(8.51 5.282)"
          fill="#c7c7c7"
        />
        <path d="M0,0H18.754V18.754H0Z" fill="none" opacity="0" />
      </svg>
    ),
    showHistory: false,
  },
  {
    profile: johnDoe,
    contactName: "John Doe",
    cardNumber: "**** 2020",
    time: "",
    clock: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.754"
        height="18.754"
        viewBox="0 0 18.754 18.754"
      >
        <path
          d="M8.4,16.8a8.4,8.4,0,1,1,8.4-8.4A8.407,8.407,0,0,1,8.4,16.8Zm0-15.628A7.228,7.228,0,1,0,15.628,8.4,7.237,7.237,0,0,0,8.4,1.172Z"
          transform="translate(0.977 0.977)"
          fill="#c7c7c7"
        />
        <path
          d="M3.766,7.166a.523.523,0,0,1-.3-.086L1.047,5.634A2.3,2.3,0,0,1,0,3.79V.586A.59.59,0,0,1,.586,0a.59.59,0,0,1,.586.586v3.2a1.155,1.155,0,0,0,.477.836L4.071,6.072a.585.585,0,0,1,.2.8A.6.6,0,0,1,3.766,7.166Z"
          transform="translate(8.51 5.282)"
          fill="#c7c7c7"
        />
        <path d="M0,0H18.754V18.754H0Z" fill="none" opacity="0" />
      </svg>
    ),
    showHistory: false,
  },
  {
    profile: sarahFlorance,
    contactName: "Sarah Florance",
    cardNumber: "**** 3030",
    time: "",
    clock: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.754"
        height="18.754"
        viewBox="0 0 18.754 18.754"
      >
        <path
          d="M8.4,16.8a8.4,8.4,0,1,1,8.4-8.4A8.407,8.407,0,0,1,8.4,16.8Zm0-15.628A7.228,7.228,0,1,0,15.628,8.4,7.237,7.237,0,0,0,8.4,1.172Z"
          transform="translate(0.977 0.977)"
          fill="#c7c7c7"
        />
        <path
          d="M3.766,7.166a.523.523,0,0,1-.3-.086L1.047,5.634A2.3,2.3,0,0,1,0,3.79V.586A.59.59,0,0,1,.586,0a.59.59,0,0,1,.586.586v3.2a1.155,1.155,0,0,0,.477.836L4.071,6.072a.585.585,0,0,1,.2.8A.6.6,0,0,1,3.766,7.166Z"
          transform="translate(8.51 5.282)"
          fill="#c7c7c7"
        />
        <path d="M0,0H18.754V18.754H0Z" fill="none" opacity="0" />
      </svg>
    ),
    showHistory: false,
  },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles.container}>
      <Search
        value={searchQuery}
        placeholder="Search contacts..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <PopularContacts contacts={CONTACTS} searchQuery={searchQuery} />
      <ContactList contacts={CONTACTS} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
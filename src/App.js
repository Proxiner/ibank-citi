import React, { useState } from "react";

import styles from "./App.module.scss";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import QuickTransfer from "./components/QuickTransfer";
import MyCards from "./components/MyCards";
// import Deposit from "./components/Deposit";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarSection}>
        <Navbar />
      </div>

      <div className={styles.sidebarContainer}>
        <Sidebar className={styles.Sidebar} />
      </div>

      <div className={styles.transferSection}>
        <QuickTransfer className={styles.Transfer} />
      </div>

      <div className={styles.myCardsSection}>
        <MyCards />
      </div>
    </div>
  );
};

export default App;

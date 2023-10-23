import React from "react";

import styles from "./App.module.scss";
import Navbar from "./scss/layout/Navbar";
import Sidebar from "./scss/layout/Sidebar";
import QuickTransfer from "./components/QuickTransfer";
import Deposit from "./components/Deposit";
import MyCards from "./components/MyCards";

const App = () => {
  return (
    <div className={styles.container}>
      <Sidebar className={styles.Sidebar} />

      <main className={styles.main}>
        <Navbar />

        <section className={styles.section}>
          <QuickTransfer className={styles.Transfer} />
          <MyCards/>
        </section>
      </main>

    </div >
  );
};

export default App;

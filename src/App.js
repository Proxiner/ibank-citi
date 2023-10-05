import React from "react";

import styles from "./App.module.scss";
import Navbar from "./scss/layout/Navbar";
import Sidebar from "./scss/layout/Sidebar";
import QuickTransfer from "./components/QuickTransfer";

const App = () => {
  return (
    <div className={styles.container}>
<Navbar />
<main>

       <Sidebar className={styles.Sidebar}/>
       <QuickTransfer className={styles.Transfer}/>
</main>

    </div>
  );
};

export default App;

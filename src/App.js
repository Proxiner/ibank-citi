import React from "react";

import styles from "./App.module.scss";
import Navbar from "./app/layout/Navbar";
import Sidebar from "./app/layout/Sidebar";

const App = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default App;

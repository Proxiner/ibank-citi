import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import searchIcon from "../../assets/search.svg";
import sun from "../../assets/sun.svg";

function Navbar() {
  const [justifyContent, setJustifyContent] = useState("flex-start");

  const handleClick = () => {
    setJustifyContent(
      justifyContent === "flex-start" ? "flex-end" : "flex-start"
    );
  };
  return (
    <nav className={styles.navbar}>
      {/* left side of navbar */}
      <div className={styles.logo}>
        <h1 className={styles.logoImage}>B</h1>
        <h3 className={styles.logoText}>iBank Citi</h3>
      </div>

      {/* right side of navbar */}
      <div className={styles.action}>
        <form action="#">
          <div className={styles.input}>
            <img src={searchIcon} alt="" />
            <input
              type="text"
              className={styles.inputText}
              placeholder="Type here to search"
            />
          </div>
        </form>
        <div
          className={styles.themeToggleBox}
          style={{ justifyContent: justifyContent }}
        >
          <button className={styles.themeToggler} onClick={handleClick}>
            <img src={sun} className={styles.sun} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

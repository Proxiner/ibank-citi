import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import searchIcon from "../assets/search.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import Group from "../assets/Group 1.svg"
function Navbar() {
  const [darkModeToggler, setDarkModeToggler] = useState("4px");

  const handleClick = () => {
    setDarkModeToggler(darkModeToggler === "4px" ? "18px" : "4px");
  };
  return (
    <nav>
      {/* left side of navbar */}
      <div className={styles.logo}>
        <h1 className={styles.logoImage}>B</h1>
        <h3 className={styles.logoText}>iBank Citi</h3>
      </div>


      {/* right side of navbar */}
      <div className={styles.action}>
        <form action="#">
          <div className={styles.input}>
            <img src={searchIcon} alt="Search Icon" />
            <input
              type="text"
              className={styles.inputText}
              placeholder="Type here to search"
            />
          </div>

        </form>
        <div className={styles.themeToggleBox}>
          <button
            className={styles.themeToggler}
            style={{ right: darkModeToggler }}
            onClick={handleClick}
          >
            {darkModeToggler === "4px" ? (
              <img src={sun} className="sun" alt="Sun Icon" />
            ) : (
              <img src={moon} alt="Moon Icon" />
            )}
          </button>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;

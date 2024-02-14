import React, { useContext, useState } from "react";
import styles from "./Navbar.module.scss";
import searchIcon from "../assets/search.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { addCart } from "../pages/Home";

function Navbar() {
  const { darkMode, handleModeChange } = useContext(addCart);
  const [darkModeToggler, setDarkModeToggler] = useState("4px");

  const handleClick = () => {
    setDarkModeToggler(darkModeToggler === "4px" ? "18px" : "4px");
    handleModeChange();
  };

  return (
    <nav>
      {/* left side of navbar */}
      <div className={`${styles.logo}`}>
        <h1 className={styles.logoImage}>B</h1>
        <h3
          className={`styles.logoText ${
            darkMode ? "Navbar_darkMode__2jQk1" : ""
          }`}
        >
          iBank Citi
        </h3>
      </div>

      {/* right side of navbar */}
      <div className={`${styles.action}`}>
        <button
          className={styles.menu}
          onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
          aria-label="Main Menu"
        >
          <svg width="35" height="35" viewBox="0 0 100 100">
            <path
              className={`${styles.line} ${styles.line1}`}
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path
              className={`${styles.line} ${styles.line2}`}
              d="M 20,50 H 80"
            />
            <path
              className={`${styles.line} ${styles.line3}`}
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>

        <form action="#">
          <div className={styles.input}>
            <img
              src={searchIcon}
              alt="Search Icon"
              className={`${darkMode ? "Navbar_darkMode__2jQk1" : ""}`}
            />
            <input
              type="text"
              className={`${styles.inputText} ${
                darkMode ? "Navbar_darkMode__2jQk1" : ""
              }`}
              placeholder="Type here to search"
            />
          </div>
        </form>
        <div
          className={`${styles.themeToggleBox} ${
            darkMode ? "Navbar_darkMode__2jQk1" : ""
          }`}
        >
          <button
            className={`${styles.themeToggler} ${
              darkMode ? "Navbar_darkMode__2jQk1" : ""
            }`}
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

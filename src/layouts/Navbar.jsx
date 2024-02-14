import React, { useContext, useState } from "react";
import styles from "./Navbar.module.scss";
import searchIcon from "../assets/search.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { addCart } from "../pages/Home";

function Navbar() {
  const { darkMode, handleModeChange } = useContext(addCart)
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
        <h3 className={`styles.logoText ${darkMode ? 'Navbar_darkMode__2jQk1' : ''}`}>iBank Citi</h3>
      </div>

      {/* right side of navbar */}
      <div
        className={`${styles.action}`}
      >
        <form action="#">
          <div className={styles.input}>
            <img src={searchIcon} alt="Search Icon" className={`${darkMode ? 'Navbar_darkMode__2jQk1' : ''}`} />
            <input
              type="text"
              className={`${styles.inputText} ${darkMode ? 'Navbar_darkMode__2jQk1' : ''}`}
              placeholder="Type here to search"
            />
          </div>
        </form>
        <div className={`${styles.themeToggleBox} ${darkMode ? 'Navbar_darkMode__2jQk1' : ''}`}>
          <button
            className={`${styles.themeToggler} ${darkMode ? 'Navbar_darkMode__2jQk1' : ''}`}
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

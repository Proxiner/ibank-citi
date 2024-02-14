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
        <form action="#">
          <div className={styles.input}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.762"
              height="25.762"
              viewBox="0 0 25.762 25.762"
            >
              <g
                id="vuesax_outline_search-normal"
                data-name="vuesax/outline/search-normal"
                transform="translate(-108 -188)"
              >
                <g id="search-normal" transform="translate(108 188)">
                  <path
                    id="Vector"
                    d="M10.466,20.931A10.466,10.466,0,1,1,20.931,10.466,10.472,10.472,0,0,1,10.466,20.931Zm0-19.321a8.856,8.856,0,1,0,8.856,8.856A8.864,8.864,0,0,0,10.466,1.61Z"
                    transform="translate(1.342 1.342)"
                    fill={`${darkMode ? "#fff" : "#292d32"}`}
                  />
                  <path
                    id="Vector-2"
                    data-name="Vector"
                    d="M2.328,5.142a1.762,1.762,0,0,1-.247-.021C1.577,5.056.664,4.712.149,3.177A2.432,2.432,0,0,1,.417.955,2.438,2.438,0,0,1,2.446,0a2.492,2.492,0,0,1,2.34,1.159,2.528,2.528,0,0,1-.333,2.6A2.582,2.582,0,0,1,2.328,5.142ZM1.684,2.673c.182.558.44.837.612.859s.494-.182.827-.666c.311-.462.333-.794.258-.945S3,1.61,2.446,1.61a.867.867,0,0,0-.719.29A.858.858,0,0,0,1.684,2.673Z"
                    transform="translate(19.312 19.321)"
                    fill={`${darkMode ? "#fff" : "#292d32"}`}
                  />
                  <path
                    id="Vector-3"
                    data-name="Vector"
                    d="M0,0H25.762V25.762H0Z"
                    fill="none"
                    opacity="0"
                  />
                </g>
              </g>
            </svg>

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

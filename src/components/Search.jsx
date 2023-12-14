import React, { useState } from "react";
import filterIcon from "../assets/filter-icon.svg";
import styles from "./_Search.module.scss";

const Search = ({ value, placeholder, onChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <img alt="Filter Icon" src={filterIcon} onClick={handleClick} />
      {isFilterOpen && (
        <div className={styles.filterBox}>
          <button className={styles.filterBtn}>
            Sort by Name
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              style={{width: '15px', opacity: '.5'}}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <button className={styles.filterBtn}>
            Sort by Date
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              style={{width: '15px', opacity: '.5'}}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;

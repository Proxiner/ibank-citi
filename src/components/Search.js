import React from "react";

import styles from "./_Search.module.scss";

const Search = ({ value, placeholder, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;

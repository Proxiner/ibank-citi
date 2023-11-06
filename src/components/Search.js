import React from "react";

import styles from './_Search.module.scss';

const Search = ({ value, placeholder, onChange }) => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;
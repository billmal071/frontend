import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

const SearchBar = function () {
  return (
    <div id={styles.searchbar}>
      <form className={styles.searchForm}>
        <Image width="18" height="20" src="/svg/search-icon.svg" className={styles.searchForm_icon} />
        <input type="search" className={styles.searchForm_input} placeholder="I'm searching for..." />
        <button className={`btn bg-primary ${styles.searchForm_btn}`}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

import React from 'react';
import css from './SearchBar.module.css';

function SearchBar({ onChangeSearch }) {
  return (
    <div className={css.section}>
      <input
        type="text"
        name="query"
        placeholder=" 🔍  Search you trip"
        onChange={onChangeSearch}
        className={css.searchBar}
      />
    </div>
  );
}

export default SearchBar;

import React from 'react';

function SearchBar({ onChangeSearch }) {
  return (
    <div>
      <input
        type="text"
        name="query"
        placeholder="Search you trip"
        onChange={onChangeSearch}
      />
    </div>
  );
}

export default SearchBar;

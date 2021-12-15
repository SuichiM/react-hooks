import React from "react";

const Search = ({search, handleSearch}) => {
  return (
    <div className="search">
      <input type="text" value={search} onChange={handleSearch} />
    </div>
  );
};

export default Search;

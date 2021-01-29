import React from "react";
import "./App.css";

function Search({ handleInput, search }) {
  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchInput"
        onChange={handleInput}
        onKeyPress={search}
      />
    </div>
  );
}

export default Search;

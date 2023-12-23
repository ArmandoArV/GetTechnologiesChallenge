import React, { useState } from "react";
import "./SearchComponent.css";

const SearchComponent = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("nombre");

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchCriteriaChange = (e) => {
    setSearchCriteria(e.target.value);
  };

  const handleSearch = () => {
    onSearch({ criteria: searchCriteria, text: searchText });
  };

  return (
    <div className="searchComponent">
      <input
        type="text"
        className="searchComponent__input"
        placeholder={`Search by ${searchCriteria}`}
        value={searchText}
        onChange={handleSearchTextChange}
      />

      <select
        className="searchComponent__select"
        value={searchCriteria}
        onChange={handleSearchCriteriaChange}
      >
        <option value="id">Id</option>
        <option value="cargo">Cargo</option>
        <option value="nombre">Nombre</option>
      </select>

      <button className="searchComponent__button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;

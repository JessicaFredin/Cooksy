/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchField({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="relative flex items-center h-[50px]">
      <form
        onSubmit={handleSearch}
        className="flex items-center h-[50px] w-full bg-white shadow-md rounded-full border border-black"
        style={{ overflow: "hidden" }}
      >
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for ingredient or category"
          className="flex-1 h-full px-6 py-2 text-gray-600 placeholder-gray-300 text-sm focus:outline-none bg-transparent"
        />

        <button
          type="submit"
          className="absolute right-2 w-[35px] h-[35px] bg-pink-500 rounded-full flex items-center justify-center shadow-sm"
        >
          <FontAwesomeIcon icon={faSearch} className="text-white text-base" />
        </button>
      </form>
    </div>
  );
}

export default SearchField;

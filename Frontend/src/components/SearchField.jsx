/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchField({ onSearch }) {
  const [query, setQuery] = useState(""); // State för att spåra användarens sökfråga

  const handleInputChange = (e) => {
    setQuery(e.target.value); // Uppdaterar state med den text från input
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Förhindrar sidans omladdning vid formulärinskick
    if (onSearch) {
      onSearch(query); // Anropar föräldrakomponentens sökfunktion med användarens fråga
    }
  };

  return (
    <div className="relative flex items-center h-[50px]">
      <form
        onSubmit={handleSearch}
        className="flex items-center h-[50px] w-full bg-white shadow-md rounded-full border border-black"
        style={{ overflow: "hidden" }}
      >
        {/* Inputfält för sökfrågan */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for ingredient or category"
          className="flex-1 h-full px-6 py-2 text-gray-600 placeholder-gray-300 text-sm focus:outline-none bg-transparent"
        />
        {/* Sökknapp */}
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

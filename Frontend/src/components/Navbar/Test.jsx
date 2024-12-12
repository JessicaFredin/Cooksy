/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

function Search({ onSearch }) {
	const [isOpen, setIsOpen] = useState(false); // Tracks if the search bar is open
	const [query, setQuery] = useState(""); // Holds the search input

	// Toggle search bar visibility and reset the input when closing
	const toggleSearch = () => {
		setIsOpen(!isOpen);
		if (isOpen) {
			setQuery(""); // Clear query when closing the search bar
		}
	};

	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		if (onSearch) {
			onSearch(query); // Pass the search query to the parent component
		}
	};

	return (
		<div
			className={`relative flex items-center transition-all duration-300 h-[35px] ${
				isOpen
					? "w-[250px] bg-white shadow-md rounded-full"
					: "w-[40px]"
			}`}
		>
			<form onSubmit={handleSearch} className="flex items-center w-full">
				{/* Input Field (only visible when the search bar is open) */}
				{isOpen && (
					<input
						type="text"
						value={query}
						onChange={handleInputChange}
						placeholder="Search for recipe"
						className="flex-1 h-full px-6 text-gray-400 placeholder-gray-100 focus:outline-none bg-transparent"
					/>
				)}
				{/* Search Icon or Close Icon */}
				<button
					type="button"
					onClick={toggleSearch}
					className="absolute right-2 w-[25px] h-[25px] bg-pink-500 rounded-full flex items-center justify-center shadow-sm"
				>
					<FontAwesomeIcon
						icon={isOpen ? faTimes : faSearch} // Show the "X" icon when open, otherwise show the search icon
						className="text-white text-sm"
					/>
				</button>
			</form>
		</div>
	);
}

export default Search;

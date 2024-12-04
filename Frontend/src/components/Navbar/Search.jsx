/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

function Search({ onSearch }) {
	// const [query, setQuery] = useState("");

	// const handleInputChange = (e) => {
	// 	setQuery(e.target.value);
	// };

	// const handleSearch = (e) => {
	// 	e.preventDefault();
	// 	if (onSearch) {
	// 		onSearch(query); // Pass the search query to the parent component or context
	// 	}
	// };


    	const [isOpen, setIsOpen] = useState(false);
		const [query, setQuery] = useState("");

		// Handle toggle for the search bar
		const toggleSearch = () => {
			setIsOpen(!isOpen);
			setQuery(""); // Clear the input when toggling
		};

		const handleInputChange = (e) => {
			setQuery(e.target.value);
		};

		const handleSearch = (e) => {
			e.preventDefault();
			if (onSearch) {
				onSearch(query); // Pass the search query to the parent component or context
			}
    };
    
	return (
        <div className="relative flex items-center bg-white rounded-full shadow-md w-[250px] h-[35px]">
            
			<form onSubmit={handleSearch} className="flex items-center">
				<input
					type="text"
					value={query}
					onChange={handleInputChange}
					placeholder="Search for recipe"
					className="flex-1 h-full rounded-full px-6 bg-white text-gray-400 placeholder-gray-100 focus:outline-none"
				/>
				<button
					type="submit"
					className="absolute right-2 w-[25px] h-[25px] bg-pink-500 rounded-full flex items-center justify-center shadow-sm"
				>
					<FontAwesomeIcon icon={faSearch} className="text-white text-sm" />
				</button>
			</form>
		</div>
	);
};

export default Search;

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
		<div className="relative flex items-center h-[35px]">
			{/* Sökbaren som dyker upp när man trycker på förstoringsglaset*/}
			<form
				onSubmit={handleSearch}
				className={`absolute right-[30px] flex items-center h-[35px] bg-white shadow-md rounded-full transition-all duration-300 ${
					isOpen ? "w-[250px] opacity-100" : "w-0 opacity-0"
				}`}
				style={{ overflow: "hidden" }}
			>
				{isOpen && (
					<>
						{/* Input Field */}
						<input
							type="text"
							value={query}
							onChange={handleInputChange}
							placeholder="Search for recipe..."
							className="flex-1 h-full px-6 text-gray-400 placeholder-gray-200 focus:outline-none bg-transparent"
						/>
						{/* Sökknapp */}
						<button
							type="submit"
							className="absolute right-2 w-[25px] h-[25px] bg-pink-500 rounded-full flex items-center justify-center shadow-sm"
						>
							<FontAwesomeIcon
								icon={faSearch}
								className="text-white text-sm"
							/>
						</button>
					</>
				)}
			</form>

			{/* Förstoringsglaset för att sökbaren ska dyka upp */}
			<button
				type="button"
				onClick={toggleSearch}
				className="z-10 w-[35px] h-[35px] bg-transparent rounded-full flex items-center justify-center transition-transform duration-300"
			>
				<FontAwesomeIcon
					icon={isOpen ? faTimes : faSearch}
					className="text-black"
				/>
			</button>
		</div>
	);
}

export default Search;

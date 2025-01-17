/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; 

// Komponent för sökfältet
function SearchField({ onSearch }) {
	const [input, setInput] = useState(""); // Lokal state för att hantera användarens inmatning
	const navigate = useNavigate(); // För att programatiskt navigera till andra sidor

	const handleSubmit = (e) => {
		e.preventDefault(); // Förhindrar standardformulärbeteende (sida laddas inte om)
		if (input.trim() && onSearch) {
			// Om användaren har angett något och en onSearch-funktion skickats via props
			onSearch(input.trim()); // Trigga sökfunktionen och skicka det trimmade värdet
			navigate(`/search?query=${input.trim()}`); // Navigera till sökresultatsidan med query-parametern
		}
	};

	return (
		<div className="relative flex items-center h-[50px]">
			{/* Formulär för sökning */}
			<form
				onSubmit={handleSubmit}
				className="flex items-center h-[50px] w-full bg-white shadow-md rounded-full border border-black"
				style={{ overflow: "hidden" }}
			>   
			{/* Inmatningsfält för sökning */}
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)} // Uppdaterar input när användaren skriver
					placeholder="Search for ingredient, category, or profile"
					className="flex-1 h-full px-6 py-2 text-gray-600 placeholder-gray-300 text-sm focus:outline-none bg-transparent"
				/>
				{/* Sökknapp */}
				<button
					type="submit"
					className="absolute right-2 w-[35px] h-[35px] bg-pink-500 rounded-full flex items-center justify-center shadow-sm"
				>
					{/* Sökikonen */}
					<FontAwesomeIcon icon={faSearch} className="text-white text-base" />
				</button>
			</form>
		</div>
	);
}

export default SearchField;

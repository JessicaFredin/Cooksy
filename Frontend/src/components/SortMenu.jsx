import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SortMenu = () => {
	// State för att hålla reda på om dropdown-menyn är öppen eller stängd
	const [open, setOpen] = useState(false);
	// State för att lagra det valda alternativet
	const [selected, setSelected] = useState("Sort by:");

	// Array med sorteringsalternativ
	const options = [
		"Popularity",
		"Alphabetically (a-z)",
		"Most viewed",
		"Trending",
		"Highest ranked",
		"Newest",
	];

	return (
		<div className="relative inline-block">
			{/* Knapp för att öppna/stänga dropdown-menyn */}
			<button
				onClick={() => setOpen(!open)}
				className="bg-green-300 text-black rounded-full px-4 md:px-6 py-2 flex items-center space-x-2"
			>
				<span>{selected}</span>
				<span>
					<FontAwesomeIcon icon={faChevronDown} />
				</span>
			</button>
			{/* Dropdown-menyn */}
			{open && (
				<ul className="absolute left-0 bg-white w-full shadow-lg rounded-md mt-2 z-20">
					{options.map((option, index) => (
						<li
							key={index} // nyckelvärde för varje alternativ
							onClick={() => {
								setSelected(option); // Uppdatera valt alternativ
								setOpen(false); // Stäng dropdown efter val
							}}
							className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SortMenu;

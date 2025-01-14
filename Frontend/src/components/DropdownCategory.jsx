/* eslint-disable react/prop-types */
import { useState } from "react";
import SelectButton from "./SelectButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
 
//Tar emot props , title, optopm, isLast
const DropdownCategory = ({ title, options, isLast }) => {
	// Lokal state för att hantera om dropdownen är öppen eller stängd
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="my-4">
			 {/* Kategorititel med en knapp för att expandera/minimera dropdownen */}
			<button
				onClick={() => setIsOpen(!isOpen)} // Växla mellan öppen/stängd status
				className="w-full flex justify-between items-center px-2 py-3 text-lg font-medium text-gray-800"
			>
				{title}
				<FontAwesomeIcon
					icon={faChevronDown}
					className={`transition-transform ${
						isOpen ? "rotate-180" : "rotate-0" // Ikonen roteras baserat på om dropdownen är öppen/stängd
					}`}
				/>
			</button>

			{/* Alternativen som visas när dropdownen är öppen */}
			{isOpen && (
				<div className="flex flex-wrap gap-3 px-2 py-2">
					{/* Skapar en SelectButton-komponent för varje alternativ */}
					{options.map((option, index) => (
						<SelectButton title={option} key={index} />
					))}
				</div>
			)}

			{/* Divider för att separera kategorier, renderas endast om det inte är den sista alternativet */}
			{!isLast && <hr className="mt-4 border-gray-300" />}
		</div>
	);
};

export default DropdownCategory;

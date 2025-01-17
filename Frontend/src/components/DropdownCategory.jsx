/* eslint-disable react/prop-types */
import { useState } from "react";
import SelectButton from "./SelectButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
//Tar emot props title, option, isLast, onSelect
const DropdownCategory = ({ title, options, isLast, onSelect }) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="my-4">
			{/* Knapp för att öpnna dropdown */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex justify-between items-center px-2 py-3 text-lg font-medium text-gray-800"
			>
				{title}
				<FontAwesomeIcon
					icon={faChevronDown}
					className={`transition-transform ${
						isOpen ? "rotate-180" : "rotate-0"
					}`}
				/>
			</button>
			{/* Filter alternativen som finns med i dropdown*/}
			{isOpen && (
				<div className="flex flex-wrap gap-3 px-2 py-2">
					{options.map((option, index) => (
						<SelectButton
							key={index}
							title={option}
							onClick={() => onSelect(title, option)} // ✅ Pass click handler
						/>
					))}
				</div>
			)}

			{!isLast && <hr className="mt-4 border-gray-300" />}
		</div>
	);
};

export default DropdownCategory;

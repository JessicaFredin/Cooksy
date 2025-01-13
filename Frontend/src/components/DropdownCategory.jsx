/* eslint-disable react/prop-types */
import { useState } from "react";
import SelectButton from "./SelectButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DropdownCategory = ({ title, options, isLast }) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="my-4">
			{/* Category Header */}
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

			{/* Filter Options */}
			{isOpen && (
				<div className="flex flex-wrap gap-3 px-2 py-2">
					{options.map((option, index) => (
						<SelectButton title={option} key={index} />
					))}
				</div>
			)}

			{/* Divider */}
			{!isLast && <hr className="mt-4 border-gray-300" />}
		</div>
	);
};

export default DropdownCategory;

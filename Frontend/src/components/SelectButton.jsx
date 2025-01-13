/* eslint-disable react/prop-types */
import { useState } from "react";

const SelectButton = ({ title }) => {
	const [isSelected, setIsSelected] = useState(false);

	return (
		<div
			className={`px-2 border-2 border-pink-200 rounded-xl cursor-pointer transition-all duration-300 
      ${isSelected ? "bg-pink-200 text-white" : "bg-white hover:bg-pink-100 "}`}
			onClick={() => setIsSelected(!isSelected)}
		>
			<h3 className="flex items-center justify-center py-2 whitespace-nowrap">
				{title}
			</h3>
		</div>
	);
};

export default SelectButton;
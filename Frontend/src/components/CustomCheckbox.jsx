/* eslint-disable react/prop-types */
import { useState } from "react";
import { CheckIcon } from "../assets/icons/CheckIcon";

const CustomCheckbox = ({ labelUnit, labelIngredient, checked, onChange }) => {
	const [isChecked, setIsChecked] = useState(checked || false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
		if (onChange) onChange(!isChecked);
	};

	return (
		<div className="flex items-center space-x-3 z-10 relative right-4 ">
			{/* Checkbox */}
			<div
				className={`w-7 h-7 flex items-center justify-center border-2 rounded-md ${
					isChecked
						? "border-green-500 bg-green-100"
						: "border-gray-300 bg-white"
				}`}
				onClick={handleCheckboxChange}
				style={{ cursor: "pointer" }}
			>
				{isChecked && <CheckIcon />}
			</div>

			{/* Labels */}
			<div className="flex items-center space-x-2">
				<span
					className={`font-bold text-lg ${
						isChecked
							? "line-through text-gray-400"
							: "text-gray-800"
					}`}
				>
					{labelUnit}
				</span>
				<span
					className={`text-lg ${
						isChecked
							? "line-through text-gray-400"
							: "text-gray-800"
					}`}
				>
					{labelIngredient}
				</span>
			</div>
		</div>
	);
};

export default CustomCheckbox;

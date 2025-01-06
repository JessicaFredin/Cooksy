/* eslint-disable react/prop-types */
import { useState } from "react";

const CustomCheckbox = ({ labelUnit, labelIngredient, checked, onChange }) => {
	const [isChecked, setIsChecked] = useState(checked || false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
		if (onChange) onChange(!isChecked);
	};

	return (
		<div className="flex items-center space-x-3">
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
				{isChecked && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 text-green-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				)}
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
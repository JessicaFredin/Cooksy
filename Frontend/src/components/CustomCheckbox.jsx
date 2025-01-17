/* eslint-disable react/prop-types */
import { useState } from "react";
import { CheckIcon } from "../assets/icons/CheckIcon";
//Tar emot props labelUnit, labelIngredient, checked, onchange
const CustomCheckbox = ({ labelUnit, labelIngredient, checked, onChange }) => {
	// Lokal state för att hantera om checkboxen är markerad
	const [isChecked, setIsChecked] = useState(checked || false);
    {/*handleCheckboxChange - Hanterar klick på checkboxen,  Uppdaterar isChecked state, Kör onChange callback med den nya statusen (true/false).*/}
	const handleCheckboxChange = () => {
		setIsChecked(!isChecked); // Byter status på checkboxen
		if (onChange) onChange(!isChecked); // Om onChange är definierad, kör den med den nya statusen
	};

	return (
		<div className="flex items-center space-x-3 z-10 relative right-4 ">
			{/* Checkbox */}
			<div
				className={`w-7 h-7 flex items-center justify-center border-2 rounded-md shrink-0 ${
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
				{/* Enhetsetikett */}
				<span
					className={`font-bold text-lg ${
						isChecked
							? "line-through text-gray-200" // Markerad, Stryks över och gråas ut
							: "text-gray-800" // Ej markerad, Standard svart text
					}`}
				>
					{labelUnit}
				</span>
				<span
					className={`text-lg ${
						isChecked
							? "line-through text-gray-200"
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





// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import { CheckIcon } from "../assets/icons/CheckIcon";

// const CustomCheckbox = ({ labelUnit, labelIngredient, checked, onChange }) => {
//     const [isChecked, setIsChecked] = useState(checked || false);

//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked);
//         if (onChange) onChange(!isChecked);
//     };

//     return (
//         <div className="flex items-center space-x-3">
//             {/* Checkbox */}
//             <div
//                 className={`w-7 h-7 flex items-center justify-center border-2 rounded-md shrink-0 ${
//                     isChecked
//                         ? "border-green-500 bg-green-100"
//                         : "border-gray-300 bg-white"
//                 }`}
//                 onClick={handleCheckboxChange}
//                 style={{ cursor: "pointer" }}
//             >
//                 {isChecked && <CheckIcon />}
//             </div>

//             {/* Labels */}
//             <div className="flex items-center space-x-2">
//                 <span
//                     className={`font-bold text-sm md:text-base ${
//                         isChecked
//                             ? "line-through text-gray-400"
//                             : "text-gray-800"
//                     } whitespace-nowrap`}
//                 >
//                     {labelUnit}
//                 </span>
//                 <span
//                     className={`text-sm md:text-base ${
//                         isChecked
//                             ? "line-through text-gray-400"
//                             : "text-gray-800"
//                     } whitespace-nowrap`}
//                 >
//                     {labelIngredient}
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default CustomCheckbox;

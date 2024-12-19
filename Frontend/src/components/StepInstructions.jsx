// // import { useState } from "react";
// // import Button from "./Button";

// // function StepInstructions() {
// // 	// Håller stegen i en lista
// // 	const [steps, setSteps] = useState([""]);

// // 	// Lägger till ett nytt steg
// // 	const addStep = () => {
// // 		setSteps([...steps, ""]);
// // 	};

// // 	// Tar bort ett specifikt steg
// // 	const removeStep = (index) => {
// // 		const updatedSteps = steps.filter((_, i) => i !== index);
// // 		setSteps(updatedSteps);
// // 	};

// // 	// Hanterar input för varje steg
// // 	const handleStepChange = (index, value) => {
// // 		const updatedSteps = [...steps];
// // 		updatedSteps[index] = value;
// // 		setSteps(updatedSteps);
// // 	};

// // 	return (
// // 		<div className="">
// // 			<h2 className="font-bold text-lg mb-4">Instructions</h2>
// // 			{steps.map((step, index) => (
// // 				<div key={index} className="flex items-center mb-2">
// // 					<span className="mr-2 font-bold">{index + 1}.</span>
// // 					<input
// // 						type="text"
// // 						value={step}
// // 						onChange={(e) =>
// // 							handleStepChange(index, e.target.value)
// // 						}
// // 						placeholder="Text"
// // 						className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
// // 					/>
// // 					{/* Ta bort knapp */}
// // 					{steps.length > 1 && (
// // 						<Button
// // 							onClick={(e) => {
// // 								e.preventDefault(); // Prevent form submission
// // 								removeStep(index);
// // 							}}
// // 							className="ml-2 !bg-transparent hover:text-black"
// // 						>
// // 							🗑️
// // 						</Button>
// // 					)}
// // 				</div>
// // 			))}

// 			// {/* Lägg till knapp ett till steg */}
// 			// <Button
// 			// 	size="medium"
// 			// 	onClick={(e) => {
// 			// 		e.preventDefault(); // Prevent form submission
// 			// 		addStep();
// 			// 	}}
// 			// 	className="bg-whiteFull !text-pink-500 border w-full rounded-lg font-semibold hover:!bg-gray-100 "
// 			// >
// 			// 	Add Step +
// 			// </Button>
// // 		</div>
// // 	);
// // }

// // export default StepInstructions;




// import { useState } from "react";
// import Button from "./Button";

// function StepInstructions() {
//     // Holds steps in a list
//     const [steps, setSteps] = useState([""]);

//     // Add a new step
//     const addStep = () => {
//         setSteps([...steps, ""]);
//     };

//     // Remove a specific step
//     const removeStep = (index) => {
//         const updatedSteps = steps.filter((_, i) => i !== index);
//         setSteps(updatedSteps);
//     };

//     // Handle input for each step
//     const handleStepChange = (index, value) => {
//         const updatedSteps = [...steps];
//         updatedSteps[index] = value;
//         setSteps(updatedSteps);
//     };

//     return (
//         <div className="">
//             <h2 className="font-bold text-lg mb-4">Instructions</h2>
//             {steps.map((step, index) => (
//                 <div key={index} className="relative flex items-center mb-2">
//                     <span className="mr-2 font-bold">{index + 1}.</span>
//                     {/* Input with Trash Icon */}
//                     <div className="relative flex-1">
//                         <input
//                             type="text"
//                             value={step}
//                             onChange={(e) =>
//                                 handleStepChange(index, e.target.value)
//                             }
//                             placeholder="Text"
//                             className="w-full border rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400"
//                         />
//                         {/* Trash Icon */}
//                         {steps.length > 1 && (
//                             <button
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     removeStep(index);
//                                 }}
//                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-500 hover:text-pink-700"
//                             >
//                                 🗑️
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             ))}

//             {/* Add Step Button */}
//             <div className="flex justify-end mt-2">
//                 <Button
//                     size="medium"
//                     onClick={(e) => {
//                         e.preventDefault();
//                         addStep();
//                     }}
//                     className="bg-whiteFull !text-pink-500 border w-full md:w-auto rounded-lg font-semibold hover:!bg-gray-100 text-center"
//                 >
//                     Add Step +
//                 </Button>
//             </div>
//         </div>
//     );
// }

// export default StepInstructions;




import { useState } from "react";
import Button from "./Button";
import { TrashIcon } from "../assets/icons/TrashIcon";

function StepInstructions() {
	const [steps, setSteps] = useState([""]);

	const addStep = () => {
		setSteps([...steps, ""]);
	};

	const removeStep = (index) => {
		const updatedSteps = steps.filter((_, i) => i !== index);
		setSteps(updatedSteps);
	};

	const handleStepChange = (index, value) => {
		const updatedSteps = [...steps];
		updatedSteps[index] = value;
		setSteps(updatedSteps);
	};

	return (
		<div className="">
			<h2 className="font-bold text-lg mb-4">Instructions</h2>

			{/* Steps List */}
			{steps.map((step, index) => (
				<div key={index} className="relative flex items-center mb-2">
					<span className="mr-2 font-bold">{index + 1}.</span>
					<div className="relative flex-1">
						<input
							type="text"
							value={step}
							onChange={(e) =>
								handleStepChange(index, e.target.value)
							}
							placeholder="Text"
							className="w-full border rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-black/30"
						/>
						{steps.length > 1 && (
							<button
								onClick={(e) => {
									e.preventDefault();
									removeStep(index);
								}}
								className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-500 hover:text-pink-700"
							>
								<TrashIcon className="text-red-500"/>
							</button>
						)}
					</div>
				</div>
			))}

			{/* Add Step Button Aligned with Inputs */}
			<div className="flex items-center mt-2">
				{/* Empty Spacer for Number Alignment */}
				<span className="mr-2 font-bold invisible">0.</span>
				<div className="flex-1">
					<Button
						size="medium"
						onClick={(e) => {
							e.preventDefault();
							addStep();
						}}
						className="w-full bg-whiteFull !text-pink-500 border rounded-lg font-semibold hover:!bg-gray-100 text-center p-2"
					>
						Add Step +
					</Button>
				</div>
			</div>
		</div>
	);
}

export default StepInstructions;

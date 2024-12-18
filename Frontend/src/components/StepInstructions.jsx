import { useState } from "react";
import Button from "./Button";

function StepInstructions() {
	// Håller stegen i en lista
	const [steps, setSteps] = useState([""]);

	// Lägger till ett nytt steg
	const addStep = () => {
		setSteps([...steps, ""]);
	};

	// Tar bort ett specifikt steg
	const removeStep = (index) => {
		const updatedSteps = steps.filter((_, i) => i !== index);
		setSteps(updatedSteps);
	};

	// Hanterar input för varje steg
	const handleStepChange = (index, value) => {
		const updatedSteps = [...steps];
		updatedSteps[index] = value;
		setSteps(updatedSteps);
	};

	return (
		<div className="max-w-md mx-auto p-4">
			<h2 className="font-bold text-lg mb-4">Instructions</h2>
			{steps.map((step, index) => (
				<div key={index} className="flex items-center mb-2">
					<span className="mr-2 font-bold">{index + 1}.</span>
					<input
						type="text"
						value={step}
						onChange={(e) =>
							handleStepChange(index, e.target.value)
						}
						placeholder="Text"
						className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
					/>
					{/* Ta bort knapp */}
					{steps.length > 1 && (
						<Button
							onClick={(e) => {
								e.preventDefault(); // Prevent form submission
								removeStep(index);
							}}
							className="ml-2 !bg-transparent hover:text-black"
						>
							🗑️
						</Button>
					)}
				</div>
			))}

			{/* Lägg till knapp ett till steg */}
			<Button
				size="medium"
				onClick={(e) => {
					e.preventDefault(); // Prevent form submission
					addStep();
				}}
				className="bg-whiteFull !text-pink-500 border w-full rounded-lg font-semibold hover:!bg-gray-100 "
			>
				Add Step +
			</Button>
		</div>
	);
}

export default StepInstructions;

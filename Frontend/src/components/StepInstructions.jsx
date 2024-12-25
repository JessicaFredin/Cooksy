import { useState } from "react";
import Button from "./Button";
import { TrashIcon } from "../assets/icons/TrashIcon";

function StepInstructions({ instructions, setInstructions }) {
	const [error, setError] = useState("");

	// Ensure there's always one default step
	if (instructions.length === 0) {
		setInstructions([{ text: "" }]);
	}

	const addStep = () => {
		setInstructions([...instructions, { text: "" }]);
		setError("");
	};

	const removeStep = (index) => {
		if (instructions.length > 1) {
			const updatedSteps = instructions.filter((_, i) => i !== index);
			setInstructions(updatedSteps);
		}
	};

	const handleStepChange = (index, value) => {
		const updatedSteps = [...instructions];
		updatedSteps[index].text = value;
		setInstructions(updatedSteps);

		// Check if the last step is empty
		if (instructions[instructions.length - 1]?.text.trim() === "") {
			setError("The last instruction cannot be empty.");
		} else {
			setError("");
		}
	};

	return (
		<div>
			<h2 className="font-bold text-lg mb-4">Instructions</h2>
			{instructions.map((step, index) => (
				<div key={index} className="relative flex items-center mb-2">
					<span className="mr-2 font-bold">{index + 1}.</span>
					<div className="relative flex-1">
						<input
							type="text"
							value={step.text}
							onChange={(e) =>
								handleStepChange(index, e.target.value)
							}
							placeholder="Instruction text"
							className="w-full border rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-black/30"
						/>
						{/* Show remove button only if more than one instruction exists */}
						{instructions.length > 1 &&
							index !== instructions.length - 1 && (
								<button
									onClick={(e) => {
										e.preventDefault();
										removeStep(index);
									}}
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-500 hover:text-pink-700"
								>
									<TrashIcon className="text-red-500" />
								</button>
							)}
					</div>
				</div>
			))}
			{error && <p className="text-red-500 text-sm mt-2">{error}</p>}
			<div className="flex items-center mt-2">
				<Button
					size="medium"
					onClick={(e) => {
						e.preventDefault();
						addStep();
					}}
					className="w-[calc(100%-1.5rem)] ml-[1.5rem] bg-whiteFull !text-pink-500 border rounded-lg font-semibold hover:!bg-gray-100 text-center p-2"
				>
					Add Step +
				</Button>
			</div>
		</div>
	);
}

export default StepInstructions;

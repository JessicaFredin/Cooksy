/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import { TrashIcon } from "../assets/icons/TrashIcon";

function StepInstructions({ instructions, setInstructions }) {
	const [error, setError] = useState("");

	// Säkerställer att det alltid finns minst ett tomt steg vid renderingen
	if (instructions.length === 0) {
		setInstructions([{ text: "" }]);
	}

	const addStep = () => {
		setInstructions([...instructions, { text: "" }]); // Lägg till en ny tom instruktion
		setError("");
	};
    // Ta bort ett specifikt steg från listan
	const removeStep = (index) => {
		if (instructions.length > 1) {
			const updatedSteps = instructions.filter((_, i) => i !== index);
			setInstructions(updatedSteps);
		}
	};
    // Uppdatera texten för ett specifikt steg
	const handleStepChange = (index, value) => {
		const updatedSteps = [...instructions];
		updatedSteps[index].text = value;
		setInstructions(updatedSteps);

		// Kontrollerar om det sista steget är tomt
		if (instructions[instructions.length - 1]?.text.trim() === "") {
			setError("The last instruction cannot be empty.");
		} else {
			setError("");
		}
	};

	return (
		<div>
			<h2 className="font-bold text-lg mb-4">Instructions</h2>
			{/* Renderar varje instruktion */}
			{instructions.map((step, index) => (
				<div key={index} className="relative flex items-center mb-2">
					<span className="mr-2 font-bold">{index + 1}.</span>
					<div className="relative flex-1">
						{/* Inputfält för att redigera instruktionen */}
						<input
							type="text"
							value={step.text}
							onChange={(e) =>
								handleStepChange(index, e.target.value)
							}
							placeholder="Instruction text"
							className="w-full border rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-black/30"
						/>
						{/* Visa ta bort- knappen om det finns fler än ett steg och det inte är det sista steget */}
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
			{/* Visa ett felmeddelande om något går fel */}
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

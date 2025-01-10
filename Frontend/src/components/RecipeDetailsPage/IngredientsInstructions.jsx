// /* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import { DoneIcon } from "../../assets/icons/DoneIcon";
// import { InstructionsIcon } from "../../assets/icons/InstructionsIcon";
// import CustomCheckbox from "../CustomCheckbox";

// function IngredientsInstructions({ ingredients, instructions }) {
// 	const [completedIngredients, setCompletedIngredients] = useState([]);
// 	const [completedInstructions, setCompletedInstructions] = useState([]);
// 	const [activeTab, setActiveTab] = useState("ingredients");
// 	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

// 	// Update screen size on resize
// 	useEffect(() => {
// 		const handleResize = () => {
// 			const isNowDesktop = window.innerWidth >= 768;
// 			setIsDesktop(isNowDesktop);

// 			// Ensure both sections are shown on desktop
// 			if (isNowDesktop) {
// 				setActiveTab("");
// 			} else {
// 				// Switch to ingredients tab on mobile
// 				setActiveTab((prev) => (prev === "" ? "ingredients" : prev));
// 			}
// 		};

// 		window.addEventListener("resize", handleResize);
// 		return () => window.removeEventListener("resize", handleResize);
// 	}, []);

// 	const toggleCompletion = (type, index) => {
// 		if (type === "ingredients") {
// 			setCompletedIngredients((prev) =>
// 				prev.includes(index)
// 					? prev.filter((i) => i !== index)
// 					: [...prev, index]
// 			);
// 		} else if (type === "instructions") {
// 			setCompletedInstructions((prev) =>
// 				prev.includes(index)
// 					? prev.filter((i) => i !== index)
// 					: [...prev, index]
// 			);
// 		}
// 	};

// 	return (
// 		<div className="flex flex-col md:flex-row">
// 			{/* Mobile tabs */}
// 			{!isDesktop && (
// 				<div className="flex justify-center p-4">
// 					<button
// 						onClick={() => setActiveTab("ingredients")}
// 						className={`font-medium px-10 py-2 rounded-l-2xl border-2 border-green-500 ${
// 							activeTab === "ingredients"
// 								? "bg-green-400"
// 								: "bg-green-300"
// 						}`}
// 					>
// 						Ingredients
// 					</button>
// 					<button
// 						onClick={() => setActiveTab("instructions")}
// 						className={`font-medium px-10 py-2 rounded-r-2xl border-2 border-green-500 ${
// 							activeTab === "instructions"
// 								? "bg-green-400"
// 								: "bg-green-300"
// 						}`}
// 					>
// 						Instructions
// 					</button>
// 				</div>
// 			)}

// 			{/* Ingredients Section */}
// 			{(isDesktop || activeTab === "ingredients") && (
// 				<div className="bg-green-200 p-6 flex-1 rounded-xl">
// 					<h3 className="text-2xl font-semibold mb-5">Ingredients</h3>
// 					<ul className="text-sm text-gray-700 space-y-5">
// 						{ingredients.map((ingredient, index) => (
// 							<li key={index}>
// 								<CustomCheckbox
// 									labelUnit={`${ingredient.amount} ${ingredient.unit}`}
// 									labelIngredient={ingredient.ingredient_name}
// 									checked={completedIngredients.includes(
// 										index
// 									)}
// 									onChange={() =>
// 										toggleCompletion("ingredients", index)
// 									}
// 								/>
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 			)}

// 			{/* Instructions Section */}
// 			{(isDesktop || activeTab === "instructions") && (
// 				<div className="bg-white p-6 flex-1 rounded-2xl">
// 					<div className="my-6 flex items-center">
// 						<InstructionsIcon />
// 						<h5 className="text-2xl ms-2 font-semibold">
// 							Instructions
// 						</h5>
// 					</div>
// 					<ul className="space-y-4">
// 						<div className="border-l-4 border-dotted border-gray-200 space-y-10 relative ms-3">
// 							{instructions.map((instruction, index) => (
// 								<li key={index}>
// 									<CustomCheckbox
// 										labelUnit=""
// 										labelIngredient={instruction.text}
// 										checked={completedInstructions.includes(
// 											index
// 										)}
// 										onChange={() =>
// 											toggleCompletion(
// 												"instructions",
// 												index
// 											)
// 										}
// 									/>
// 								</li>
// 							))}
// 						</div>
// 					</ul>

// 					<div className="mt-6 flex items-center">
// 						<DoneIcon />
// 						<h5 className="text-xl ms-2 font-semibold">Done!</h5>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

// export default IngredientsInstructions;

/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { DoneIcon } from "../../assets/icons/DoneIcon";
import { InstructionsIcon } from "../../assets/icons/InstructionsIcon";
import CustomCheckbox from "../CustomCheckbox";

function IngredientsInstructions({
	ingredients,
	instructions,
	servingSize,
	portionMultiplier,
}) {
	const [completedIngredients, setCompletedIngredients] = useState([]);
	const [completedInstructions, setCompletedInstructions] = useState([]);
	const [activeTab, setActiveTab] = useState("ingredients");
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

	// Update screen size on resize
	useEffect(() => {
		const handleResize = () => {
			const isNowDesktop = window.innerWidth >= 768;
			setIsDesktop(isNowDesktop);

			// Ensure both sections are shown on desktop
			if (isNowDesktop) {
				setActiveTab("");
			} else {
				// Switch to ingredients tab on mobile
				setActiveTab((prev) => (prev === "" ? "ingredients" : prev));
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleCompletion = (type, index) => {
		if (type === "ingredients") {
			setCompletedIngredients((prev) =>
				prev.includes(index)
					? prev.filter((i) => i !== index)
					: [...prev, index]
			);
		} else if (type === "instructions") {
			setCompletedInstructions((prev) =>
				prev.includes(index)
					? prev.filter((i) => i !== index)
					: [...prev, index]
			);
		}
	};

	return (
		<div className="flex flex-col md:flex-row gap-4">
			{/* Mobile tabs */}
			{!isDesktop && (
				<div className="flex justify-center p-4">
					<button
						onClick={() => setActiveTab("ingredients")}
						className={`font-medium px-10 py-2 rounded-l-2xl border-2 border-green-500 ${
							activeTab === "ingredients"
								? "bg-green-400"
								: "bg-green-300"
						}`}
					>
						Ingredients
					</button>
					<button
						onClick={() => setActiveTab("instructions")}
						className={`font-medium px-10 py-2 rounded-r-2xl border-2 border-green-500 ${
							activeTab === "instructions"
								? "bg-green-400"
								: "bg-green-300"
						}`}
					>
						Instructions
					</button>
				</div>
			)}

			{/* Ingredients Section */}
			{(isDesktop || activeTab === "ingredients") && (
				<div className="bg-green-200 p-6 px-8 flex-1 max-w-md rounded-xl shadow-md">
					<h3 className="text-2xl font-semibold mb-6">Ingredients</h3>
					<ul className="text-sm text-gray-700 space-y-6">
						{ingredients.map((ingredient, index) => (
							<li key={index}>
								<CustomCheckbox
									labelUnit={`${
										(ingredient.amount / servingSize) *
										portionMultiplier
									} ${ingredient.unit}`}
									labelIngredient={ingredient.ingredient_name}
									checked={completedIngredients.includes(
										index
									)}
									onChange={() =>
										toggleCompletion("ingredients", index)
									}
								/>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Instructions Section (Unchanged) */}
			{(isDesktop || activeTab === "instructions") && (
				<div className="bg-white p-6 flex-1 rounded-2xl">
					<div className="my-6 flex items-center">
						<InstructionsIcon />
						<h5 className="text-2xl ms-2 font-semibold">
							Instructions
						</h5>
					</div>
					<ul className="space-y-4">
						<div className="border-l-4 border-dotted border-gray-200 space-y-10 relative ms-3">
							{instructions.map((instruction, index) => (
								<li key={index}>
									<CustomCheckbox
										labelUnit=""
										labelIngredient={instruction.text}
										checked={completedInstructions.includes(
											index
										)}
										onChange={() =>
											toggleCompletion(
												"instructions",
												index
											)
										}
									/>
								</li>
							))}
						</div>
					</ul>

					<div className="mt-6 flex items-center">
						<DoneIcon />
						<h5 className="text-xl ms-2 font-semibold">Done!</h5>
					</div>
				</div>
			)}
		</div>
	);
}

export default IngredientsInstructions;

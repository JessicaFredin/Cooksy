/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import HeadingWithLine from "../components/HeadingWithLine";
import Button from "../components/Button";

function CreateRecipePage() {
	const [ingredients, setIngredients] = useState([
		{ volume: "", unit: "", name: "" },
	]);
	const [steps, setSteps] = useState([""]);

	const addIngredient = () => {
		setIngredients([...ingredients, { volume: "", unit: "", name: "" }]);
	};

	const addStep = () => {
		setSteps([...steps, ""]);
	};

	return (
		<div className="grid grid-cols-12 gap-x-4 py-12">
			{/* Grid Background */}
			{/* <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-25 w-full">
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
			</div> */}

			{/* Page Container */}
			<div className="col-start-2 col-span-10 max-w-4xl">
				<div>
					<HeadingWithLine text="Create your own recipe" />
				</div>

				<form className="grid gap-6">
					{/* Recipe Title */}
					<div className="space-y-5 w-1/2">
						<div>
							<label className="block font-semibold mb-2">
								Recipe Title
							</label>
							<input
								type="text"
								placeholder="Enter title"
								className="w-full border rounded-lg p-2 shadow-lg border-black placeholder-black/30"
							/>
						</div>

						{/* Upload Image */}
						<div>
							<label className="block font-semibold mb-2">
								Upload Image
							</label>
							<div className="border-dashed border-2 rounded-lg p-6 flex justify-center items-center">
								<input
									type="file"
									className="hidden"
									id="upload-image"
								/>
								<label
									htmlFor="upload-image"
									className="cursor-pointer text-gray-500"
								>
									<div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-12 w-12"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 16.5V20h3.5l10-10-3.5-3.5L3 16.5z"
											/>
										</svg>
									</div>
									<span className="block mt-2">
										Upload Image
									</span>
								</label>
							</div>
						</div>

						{/* Recipe Description */}
						<div className="relative">
							<label className="block font-semibold mb-2">
								Describe your recipe
							</label>
							<textarea
								placeholder="Write your recipe description"
								className="w-full border placeholder-black/30 rounded-lg p-2"
								rows="4"
							></textarea>
							<span className="absolute bottom-4 right-4 text-xs text-gray-500 ">
								(max 100 characters)
							</span>
						</div>

						{/* Serving Size and Cooking Time */}
						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block font-semibold mb-2">
									Serving Size
								</label>
								<input
									type="number"
									min="1"
									placeholder="e.g. 4"
									className="w-full border placeholder-black/30 rounded-lg p-2"
								/>
							</div>
							<div>
								<label className="block font-semibold mb-2">
									Cooking Time (min)
								</label>
								<input
									type="number"
									min="0"
									placeholder="e.g. 30"
									className="w-full border placeholder-black/30 rounded-lg p-2"
								/>
							</div>
						</div>

						{/* Ingredients */}
						<div>
							<label className="block font-semibold mb-2">
								Ingredients
							</label>
							{ingredients.map((ingredient, index) => (
								<div
									className="grid grid-cols-12 gap-4 mb-2"
									key={index}
								>
									<input
										type="text"
										placeholder="Volume"
										className="col-span-3 border rounded-lg p-2"
									/>
									<input
										type="text"
										placeholder="Unit"
										className="col-span-3 border rounded-lg p-2"
									/>
									<input
										type="text"
										placeholder="Name"
										className="col-span-6 border rounded-lg p-2"
									/>
								</div>
							))}

							<Button
								size="medium"
								onClick={addIngredient}
								className="bg-whiteFull !text-pink-500 border w-full rounded-lg font-semibold hover:bg-black/10 "
							>
								Add Ingredient +
							</Button>
						</div>

						{/* Nutrition Information */}
						<div>
							<label className="block font-semibold mb-2">
								Nutrition Information
							</label>
							<div className="grid grid-cols-4 gap-4">
								<input
									type="number"
									placeholder="Protein"
									className="border rounded-lg p-2"
								/>
								<input
									type="number"
									placeholder="Carbs"
									className="border rounded-lg p-2"
								/>
								<input
									type="number"
									placeholder="Fat"
									className="border rounded-lg p-2"
								/>
								<input
									type="number"
									placeholder="Energy (kcal)"
									className="border rounded-lg p-2"
								/>
							</div>
						</div>

						{/* Instructions */}
						<div>
							<label className="block font-semibold mb-2">
								Instructions
							</label>
							{steps.map((step, index) => (
								<div className="mb-2" key={index}>
									<textarea
										className="w-full border rounded-lg p-2"
										placeholder={`Step ${index + 1}`}
										rows="2"
									></textarea>
								</div>
							))}
							<button
								type="button"
								onClick={addStep}
								className="text-pink-500 font-semibold"
							>
								+ Add Step
							</button>
						</div>

						{/* Categories */}
						<div>
							<label className="block font-semibold mb-2">
								Add Category
							</label>
							<div className="flex flex-wrap gap-2">
								<button
									type="button"
									className="px-3 py-1 bg-gray-200 rounded-lg"
								>
									Low-carb
								</button>
								<button
									type="button"
									className="px-3 py-1 bg-gray-200 rounded-lg"
								>
									High-protein
								</button>
								<button
									type="button"
									className="px-3 py-1 bg-gray-200 rounded-lg"
								>
									Vegan
								</button>
							</div>
						</div>

						{/* Sharing Options */}
						<div>
							<label className="block font-semibold mb-2">
								Sharing Options
							</label>
							<div className="flex space-x-4">
								<label>
									<input
										type="radio"
										name="sharing"
										value="private"
									/>
									<span className="ml-2">Private</span>
								</label>
								<label>
									<input
										type="radio"
										name="sharing"
										value="public"
									/>
									<span className="ml-2">Public</span>
								</label>
							</div>
						</div>

						{/* Submit Button */}
						<div>
							<button
								type="submit"
								className="w-full bg-pink-500 text-white py-2 rounded-lg"
							>
								Post Recipe
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateRecipePage;

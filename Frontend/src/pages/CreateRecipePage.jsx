import { useState } from "react";
import HeadingWithLine from "../components/HeadingWithLine";
import Button from "../components/Button";
import NutritionInformation from "../components/NutritionInformation";
import StepInstructions from "../components/StepInstructions";
import SelectButton from "../components/SelectButton";
import Ingredients from "../components/Ingredients";
import SharingOptions from "../components/SharingOptions";
import UploadImg from "../assets/images/UploadImg.png";

function CreateRecipePage() {
	const [ingredients, setIngredients] = useState([
		{ volume: "", unit: "", name: "" },
	]);

	const [sharingOption, setSharingOption] = useState("public");

	const handleSharingChange = (event) => {
		setSharingOption(event.target.value);
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
			<div className="col-start-2 col-span-10">
				<div>
					<HeadingWithLine text="Create your own recipe" />
				</div>

				<form className="grid gap-6">
					{/* Recipe Title */}
					<div className="space-y-10 lg:w-1/2">
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
							<div className="lg:h-4/5 rounded-lg">
								<input
									type="file"
									className="hidden"
									id="upload-image"
								/>
								<label
									htmlFor="upload-image"
									className="cursor-pointer text-gray-500"
								>
									<div>
										<img src={UploadImg}/>
									</div>
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
						<div className="w-1/2 grid grid-rows-2 gap-4">
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
						{/* Ingredients Section */}
						<div className="space-y-10">
							<Ingredients
								ingredients={ingredients}
								setIngredients={setIngredients}
							/>
						</div>
						{/* Nutrition Information */}
						<div className="space-y-4">
							<NutritionInformation
								ingredients={ingredients}
								setIngredients={setIngredients}
							/>
						</div>

						{/* Instructions */}
						<div className="space-y-10">
							{/* Step Instructions */}
							<StepInstructions />
						</div>

						{/* Categories */}
						<div className="space-y-4">
							<label className="font-bold text-lg mb-4">
								Add Category
							</label>
							<div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4">
								<SelectButton title="Low-calorie" />
								<SelectButton title="Low-sugar" />
								<SelectButton title="High-fiber" />
								<SelectButton title="Low-carb" />
								<SelectButton title="High protein" />
								<SelectButton title="American" />
							</div>
						</div>

						{/* Sharing Options */}
						<div>
							<SharingOptions
								selectedOption={sharingOption}
								onChange={handleSharingChange}
							/>
						</div>

						{/* Submit Button */}
						<div>
							<Button size="mediumMoreWidth">Post Recipe</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateRecipePage;

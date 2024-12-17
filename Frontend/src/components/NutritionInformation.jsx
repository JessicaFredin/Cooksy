/* eslint-disable react/prop-types */
import { useState } from "react";

function NutritionInformation({ ingredients }) {
	const [nutritionValues, setNutritionValues] = useState({
		protein: 0,
		carbs: 0,
		fat: 0,
		energy: 0,
	});

	// Mock Calculation Function
	const calculateNutrition = () => {
		let protein = 0,
			carbs = 0,
			fat = 0,
			energy = 0;

		ingredients.forEach((ingredient) => {
			// Replace this with real ingredient logic or API
			if (ingredient.unit === "Gram") {
				protein += 2; // Mock protein per gram
				carbs += 3;
				fat += 1;
				energy += 20;
			} else if (ingredient.unit === "Liter") {
				protein += 5;
				carbs += 4;
				fat += 2;
				energy += 50;
			}
		});

		setNutritionValues({
			protein,
			carbs,
			fat,
			energy,
		});
	};

	return (
		<div className="space-y-4">
			{/* Title */}
			<div className="flex items-center justify-between">
				<h3 className="font-semibold text-lg">Nutrition Information</h3>
				<button
					onClick={calculateNutrition}
					className="bg-pink-500 hover:bg-pink-600 text-white text-sm py-1 px-4 rounded-full"
				>
					Calculate nutrition value
				</button>
			</div>

			{/* Nutrition Display */}
			<div className="grid grid-cols-6 gap-x-2 items-center">
				<label className="col-span-1 font-medium">Protein</label>
				<div className="col-span-4 border-b-2 border-black/30 py-1">
					{nutritionValues.protein}{" "}
				</div>
				<span className="col-span-1 text-sm font-semibold">g</span>

				<label className="col-span-1 font-medium">Carbs</label>
				<div className="col-span-4 border-b-2 border-black/30 py-1">
					{nutritionValues.carbs}
				</div>
				<span className="col-span-1 text-sm font-semibold">g</span>

				<label className="col-span-1 font-medium">Fat</label>
				<div className="col-span-4 border-b-2 border-black/30 py-1">
					{nutritionValues.fat}
				</div>
				<span className="col-span-1 text-sm font-semibold">g</span>

				<label className="col-span-1 font-medium">Energy</label>
				<div className="col-span-4 flex items-center gap-x-2">
					<div className="w-1/2 border-b-2 border-black/30 py-1">
						{nutritionValues.energy}
					</div>
					<span className="font-semibold">/</span>
					<div className="w-1/2 border-b-2 border-black/30 py-1">
						{nutritionValues.energy * 4.18}{" "}
					</div>
				</div>
				<span className="col-span-1 text-sm font-semibold">
					kJ/kcal
				</span>
			</div>

			{/* Nutrition Substances */}
			<div className="mt-4">
				<label className="font-medium block mb-2">
					Nutrition substances
				</label>
				<div className="border-t-2 border-black w-full h-24"></div>
			</div>
		</div>
	);
}

export default NutritionInformation;

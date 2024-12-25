import { useState } from "react";
import axios from "axios";

function NutritionInformation({ ingredients, setNutrition }) {
	const [nutritionValues, setNutritionValues] = useState({
		protein: 0,
		carbs: 0,
		fat: 0,
		energy: 0,
	});
	const [loading, setLoading] = useState(false);

	const calculateNutrition = async (event) => {
		event.preventDefault();
		setLoading(true);
		let protein = 0,
			carbs = 0,
			fat = 0,
			energy = 0;

		for (const ingredient of ingredients) {
			if (!ingredient.volume || !ingredient.unit || !ingredient.name) {
				alert("Please fill out all fields for each ingredient.");
				setLoading(false);
				return;
			}

			try {
				const response = await axios.get(
					`${
						import.meta.env.VITE_APP_SPOONACULAR_BASE_URL
					}/food/ingredients/${ingredient.id}/information`,
					{
						params: {
							amount: ingredient.volume,
							unit: ingredient.unit,
							apiKey: import.meta.env
								.VITE_APP_SPOONACULAR_API_KEY,
						},
					}
				);

				const nutrients = response.data.nutrition.nutrients || [];
				protein +=
					nutrients.find((n) => n.name === "Protein")?.amount || 0;
				carbs +=
					nutrients.find((n) => n.name === "Carbohydrates")?.amount ||
					0;
				fat += nutrients.find((n) => n.name === "Fat")?.amount || 0;
				energy +=
					nutrients.find((n) => n.name === "Calories")?.amount || 0;
			} catch (error) {
				console.error("Error fetching nutrition information:", error);
			}
		}

		const finalNutrition = {
			protein,
			carbs,
			fat,
			energy: energy, // Convert calories to kJ
		};

		setNutritionValues(finalNutrition);
		setNutrition(finalNutrition); // Update parent state
		setLoading(false);
	};

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h3 className="font-semibold text-lg">Nutrition Information</h3>
				<button
					onClick={calculateNutrition}
					className="bg-pink-500 hover:bg-pink-600 text-white text-sm py-1 px-4 rounded-full"
				>
					Calculate nutrition value
				</button>
			</div>

			{loading && (
				<p className="text-center">Calculating nutrition values...</p>
			)}

			<div className="grid grid-cols-6 gap-x-2 items-center">
				<label className="col-span-1 font-medium">Protein</label>
				<div className="col-span-4 border-b-2 border-black/30 py-1">
					{nutritionValues.protein.toFixed(1)}
				</div>
				<span className="col-span-1 text-sm font-semibold">g</span>

				<label className="col-span-1 font-medium">Carbs</label>
				<div className="col-span-4 border-b-2 border-black/30 py-1">
					{nutritionValues.carbs.toFixed(1)}
				</div>
				<span className="col-span-1 text-sm font-semibold">g</span>

				<label className="col-span-1 font-medium">Fat</label>
				<div className="col-span-4 border-b-2 border-black/30 py-1">
					{nutritionValues.fat.toFixed(1)}
				</div>
				<span className="col-span-1 text-sm font-semibold">g</span>

				<label className="col-span-1 font-medium">Energy</label>
				<div className="col-span-4 flex items-center gap-x-2">
					<div className="w-1/2 border-b-2 border-black/30 py-1">
						{(nutritionValues.energy * 4.18).toFixed(1)}
					</div>
					<span className="font-semibold">/</span>
					<div className="w-1/2 border-b-2 border-black/30 py-1">
						{nutritionValues.energy.toFixed(1)}
					</div>
				</div>
				<span className="col-span-1 text-sm font-semibold">
					kJ/kcal
				</span>
			</div>
		</div>
	);
}

export default NutritionInformation;

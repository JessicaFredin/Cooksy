/* eslint-disable react/prop-types */
import Button from "./Button";

function Ingredients({ ingredients, setIngredients }) {
	// List of unit options for the dropdown
	const unitOptions = [
		"gram",
		"kilogram",
		"milliliter",
		"liter",
		"cup",
		"tablespoon",
		"teaspoon",
		"piece",
		"slice",
		"pinch",
		"oz",
		"lb",
		"quart",
		"pint",
		"gallon",
	];

	// Add a new ingredient
	const addIngredient = () => {
		setIngredients([...ingredients, { volume: "", unit: "", name: "" }]);
	};

	// Remove an ingredient
	const removeIngredient = (index) => {
		const updatedIngredients = ingredients.filter((_, i) => i !== index);
		setIngredients(updatedIngredients);
	};

	// Handle changes in input fields dynamically
	const handleIngredientChange = (index, field, value) => {
		const updatedIngredients = [...ingredients];
		updatedIngredients[index][field] = value;
		setIngredients(updatedIngredients);
	};

	return (
		<div>
			<label className="block font-semibold mb-2">Ingredients</label>
			{ingredients.map((ingredient, index) => (
				<div
					className="grid grid-cols-12 gap-4 mb-2 items-center"
					key={index}
				>
					{/* Volume Input */}
					<input
						type="text"
						placeholder="Volume"
						value={ingredient.volume}
						onChange={(e) =>
							handleIngredientChange(
								index,
								"volume",
								e.target.value
							)
						}
						className="col-span-3 border rounded-lg p-2 placeholder:text-black/30"
					/>

					{/* Unit Dropdown */}
					<select
						value={ingredient.unit}
						onChange={(e) =>
							handleIngredientChange(
								index,
								"unit",
								e.target.value
							)
						}
						className="col-span-3 border rounded-lg p-2 bg-whiteFull"
					>
						<option value="" disabled>
							Unit
						</option>
						{unitOptions.map((unit) => (
							<option key={unit} value={unit}>
								{unit.charAt(0).toUpperCase() + unit.slice(1)}
							</option>
						))}
					</select>

					{/* Name Input */}
					<input
						type="text"
						placeholder="Name"
						value={ingredient.name}
						onChange={(e) =>
							handleIngredientChange(
								index,
								"name",
								e.target.value
							)
						}
						className="col-span-5 border rounded-lg p-2 placeholder:text-black/30"
					/>

					{/* Remove Ingredient Button */}
					{ingredients.length > 1 && (
						<Button
							onClick={(e) => {
								e.preventDefault(); // Prevent form submission
								removeIngredient(index);
							}}
							className="ml-2 !bg-transparent hover:text-black"
						>
							🗑️
						</Button>
					)}
				</div>
			))}

			{/* Add Ingredient Button */}
			<Button
				size="medium"
				onClick={(e) => {
					e.preventDefault(); // Prevent form submission
					addIngredient();
				}}
				className="bg-whiteFull !text-pink-500 border w-full rounded-lg font-semibold hover:!bg-gray-100"
			>
				Add Ingredient +
			</Button>
		</div>
	);
}

export default Ingredients;

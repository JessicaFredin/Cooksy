import React, { useState, useEffect } from "react";
import Button from "./Button";
import axios from "axios";

function Ingredients({ ingredients, setIngredients }) {
	const [searchResults, setSearchResults] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
	const [availableUnits, setAvailableUnits] = useState({});

	// Debounce mechanism for API calls
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (searchQuery) {
				fetchIngredientSuggestions(searchQuery);
			}
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [searchQuery]);

	// Fetch ingredient suggestions from the API
	const fetchIngredientSuggestions = async (query) => {
		try {
			const response = await axios.get(
				`${
					import.meta.env.VITE_APP_SPOONACULAR_BASE_URL
				}/food/ingredients/autocomplete`,
				{
					params: {
						apiKey: import.meta.env.VITE_APP_SPOONACULAR_API_KEY,
						metaInformation: true,
						query,
						number: 10,
					},
				}
			);
			setSearchResults(response.data);
		} catch (error) {
			console.error("Error fetching ingredient suggestions:", error);
		}
	};

	// Fetch ingredient information for available units
	const fetchIngredientInformation = async (ingredientId, index) => {
		try {
			const response = await axios.get(
				`${
					import.meta.env.VITE_APP_SPOONACULAR_BASE_URL
				}/food/ingredients/${ingredientId}/information`,
				{
					params: {
						apiKey: import.meta.env.VITE_APP_SPOONACULAR_API_KEY,
					},
				}
			);
			const units = response.data.possibleUnits || [];
			setAvailableUnits((prev) => ({ ...prev, [index]: units }));
		} catch (error) {
			console.error("Error fetching ingredient information:", error);
		}
	};

	// Add a new ingredient
	const addIngredient = () => {
		setIngredients([
			...ingredients,
			{ volume: "", unit: "", name: "", id: null },
		]);
	};

	// Remove an ingredient
	const removeIngredient = (index) => {
		const updatedIngredients = ingredients.filter((_, i) => i !== index);
		setIngredients(updatedIngredients);
		setAvailableUnits((prev) => {
			const updatedUnits = { ...prev };
			delete updatedUnits[index];
			return updatedUnits;
		});
	};

	// Handle changes in input fields dynamically
	const handleIngredientChange = (index, field, value) => {
		const updatedIngredients = [...ingredients];
		updatedIngredients[index][field] = value;
		setIngredients(updatedIngredients);
	};

	// Handle selecting an ingredient from the dropdown
	const handleSelectIngredient = (index, selectedIngredient) => {
		const updatedIngredients = [...ingredients];
		updatedIngredients[index].name = selectedIngredient.name;
		updatedIngredients[index].id = selectedIngredient.id;
		setIngredients(updatedIngredients);
		setActiveDropdownIndex(null); // Close the dropdown

		// Fetch available units for the selected ingredient
		fetchIngredientInformation(selectedIngredient.id, index);
	};

	return (
		<div>
			<label className="block font-semibold mb-2">Ingredients</label>
			{ingredients.map((ingredient, index) => (
				<div
					className="grid grid-cols-12 gap-4 mb-2 items-center relative"
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
						{(availableUnits[index] || ["gram", "kilogram"]).map(
							(unit) => (
								<option key={unit} value={unit}>
									{unit.charAt(0).toUpperCase() +
										unit.slice(1)}
								</option>
							)
						)}
					</select>

					{/* Name Input */}
					<div className="col-span-5 relative">
						<input
							type="text"
							placeholder="Name"
							value={ingredient.name}
							onChange={(e) => {
								handleIngredientChange(
									index,
									"name",
									e.target.value
								);
								setSearchQuery(e.target.value);
								setActiveDropdownIndex(index);
							}}
							className="border rounded-lg p-2 w-full placeholder:text-black/30"
						/>

						{/* Suggestions Dropdown */}
						{activeDropdownIndex === index &&
							searchResults.length > 0 && (
								<ul className="absolute top-full left-0 right-0 bg-white border rounded-lg shadow-md max-h-40 overflow-y-auto z-10">
									{searchResults.map((result) => (
										<li
											key={result.id}
											className="p-2 hover:bg-gray-100 cursor-pointer"
											onClick={() =>
												handleSelectIngredient(
													index,
													result
												)
											}
										>
											{result.name}
										</li>
									))}
								</ul>
							)}
					</div>

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

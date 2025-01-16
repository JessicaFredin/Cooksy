/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "./Button";
import axios from "axios";

function Ingredients({ ingredients, setIngredients }) {
	const [searchResults, setSearchResults] = useState([]); // API-svar för ingrediensförslag
	const [searchQuery, setSearchQuery] = useState(""); // Håller söksträngen som användaren skriver
	const [activeDropdownIndex, setActiveDropdownIndex] = useState(null); // Spårar aktiv dropdown
	const [availableUnits, setAvailableUnits] = useState({}); // Lagrar möjliga måttenheter för ingredienser

	// Debounce mekanism för API-anrop för ingrediensförslag
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (searchQuery) {
				fetchIngredientSuggestions(searchQuery); // Hämtar API-data efter 1 sekunds fördröjning
			}
		}, 1000);

		return () => clearTimeout(delayDebounceFn); // Rensar timeout om searchQuery ändras
	}, [searchQuery]);

	//Hämtar ingrediensförslag från API
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
						number: 10, // Begränsar antalet förslag
					},
				}
			);
			setSearchResults(response.data);
		} catch (error) {
			console.error("Error fetching ingredient suggestions:", error);
		}
	};

	// Hämtar information om ingrediens och dess möjliga måttenheter
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

	//Lägger till en ny ingrediens
	const addIngredient = () => {
		setIngredients([
			...ingredients,
			{ volume: "", unit: "", name: "", id: null },
		]);
	};

	//Tar bort en ingrediens
	const removeIngredient = (index) => {
		const updatedIngredients = ingredients.filter((_, i) => i !== index);
		setIngredients(updatedIngredients);
		setAvailableUnits((prev) => {
			const updatedUnits = { ...prev };
			delete updatedUnits[index];
			return updatedUnits;
		});
	};

	// Hanterar ändringar i inputfält dynamiskt
	const handleIngredientChange = (index, field, value) => {
		const updatedIngredients = [...ingredients];
		updatedIngredients[index][field] = value;
		setIngredients(updatedIngredients);
	};

	// Väljer en ingrediens från dropdownen
	const handleSelectIngredient = (index, selectedIngredient) => {
		const updatedIngredients = [...ingredients];
		updatedIngredients[index].name = selectedIngredient.name;
		updatedIngredients[index].id = selectedIngredient.id;
		setIngredients(updatedIngredients);
		setActiveDropdownIndex(null); // stänger dropdown

		// Hämtar tillgängliga enheter för den valda ingrediensen.
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
					{/* Volym Input */}
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

					{/* Dropdown för enhet */}
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

					{/* Input för namn */}
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

						{/* Dropdown för förslag */}
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

					{/* Ta bort ingrediens-knapp */}
					{ingredients.length > 1 && (
						<Button
							onClick={(e) => {
								e.preventDefault(); // Förhindrar form-submission
								removeIngredient(index);
							}}
							className="ml-2 !bg-transparent hover:text-black"
						>
							🗑️
						</Button>
					)}
				</div>
			))}

			{/* Lägg till ingredienser - knapp*/}
			<Button
				size="medium"
				onClick={(e) => {
					e.preventDefault(); // Förhindrar form-submission
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

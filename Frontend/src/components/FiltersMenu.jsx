import { useState, useEffect } from "react";
import DropdownCategory from "./DropdownCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FilterIcon } from "../assets/icons/FilterIcon";
import axios from "axios";
// import { useRecipes } from "../contexts/RecipesContext";

function FiltersMenu() {
	const [isOpen, setIsOpen] = useState(false); // Anger om menyn är öppen eller inte.
	const [isVisible, setIsVisible] = useState(false); // Styr om menyn ska animeras in/ut
	const [categories, setCategories] = useState([]);
	// const [selectedFilters, setSelectedFilters] = useState({});
	// const [recipeCount, setRecipeCount] = useState(0);
	// const { setFilteredRecipes } = useRecipes(); // ✅ Use global state

	useEffect(() => {
		const fetchFilters = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_APP_BACKEND_URL}/filters`
				);

				const formattedCategories = Object.entries(response.data).map(
					([title, options]) => ({
						title,
						options,
					})
				);
				setCategories(formattedCategories);
			} catch (error) {
				console.error("Error fetching filters:", error);
			}
		};

		fetchFilters();
	}, []);

	// // Data för filtreringskategorier och deras alternativ
	// const categories = [
	// 	{
	// 		title: "Calories (per portion)",
	// 		options: [
	// 			"0-100 kcal",
	// 			"100-200 kcal",
	// 			"200-400 kcal",
	// 			"400-600 kcal",
	// 			"600-800 kcal",
	// 			"800+ kcal",
	// 		],
	// 	},
	// 	{
	// 		title: "Time",
	// 		options: [
	// 			"0-30 min",
	// 			"31-60 min",
	// 			"61-90 min",
	// 			"91-120 min",
	// 			"121-150 min",
	// 			"150+ min",
	// 		],
	// 	},
	// 	{
	// 		title: "Meal Type",
	// 		options: ["Breakfast", "Lunch", "Dinner", "Snacks"],
	// 	},
	// 	{
	// 		title: "Diet",
	// 		options: ["Vegan", "Vegetarian", "Keto", "Paleo"],
	// 	},
	// 	{
	// 		title: "Protein Type",
	// 		options: [
	// 			"Chicken",
	// 			"Beef",
	// 			"Fish",
	// 			"Lentils",
	// 			"Seafood",
	// 			"Egg",
	// 			"Lamb",
	// 		],
	// 	},
	// 	{
	// 		title: "Recipes Without",
	// 		options: [
	// 			"Dairy",
	// 			"Eggs",
	// 			"Nuts",
	// 			"Gluten",
	// 			"Fish",
	// 			"Seeds",
	// 			"Flour",
	// 			"Milk",
	// 			"Cheese",
	// 			"Sugar",
	// 			"Soy",
	// 			"Cream",
	// 		],
	// 	},
	// 	{
	// 		title: "World Cuisine",
	// 		options: [
	// 			"Italian",
	// 			"Indian",
	// 			"Chinese",
	// 			"Mexican",
	// 			"Swedish",
	// 			"Asian",
	// 			"American",
	// 			"Middle Eastern",
	// 		],
	// 	},
	// 	{
	// 		title: "Ingredient",
	// 		options: ["Tomatoes", "Cheese", "Chicken", "Basil"],
	// 	},
	// ];

	// Funtion för att öppna menyn
	const openMenu = () => {
		setIsOpen(true); //isOpen till true för att visa menun
		setTimeout(() => setIsVisible(true), 10); // isVisible till true med en liten fördröjning för att trigga animeringen
	};

	//Hanterar stängning av menyn
	const closeMenu = () => {
		setIsVisible(false); // isVisible till false för att starta slide-out-animationen
		setTimeout(() => setIsOpen(false), 300); // Väntar på animationen
	};

	// const handleFilterChange = async (category, option) => {
	// 	console.log("here");
	// 	const updatedFilters = { ...selectedFilters, [category]: option };
	// 	setSelectedFilters(updatedFilters);

	// 	try {
	// 		const params = new URLSearchParams(updatedFilters).toString();
	// 		console.log(params);
	// 		const response = await axios.get(
	// 			`${
	// 				import.meta.env.VITE_APP_BACKEND_URL
	// 			}/filters/recipes/count?${params}`
	// 		);
	// 		setRecipeCount(response.data.count);
	// 	} catch (error) {
	// 		console.error("Error fetching recipe count:", error);
	// 	}
	// };

	const applyFilters = async () => {
		try {
			// const params = new URLSearchParams(selectedFilters).toString();
			// const response = await axios.get(
			// 	`${
			// 		import.meta.env.VITE_APP_BACKEND_URL
			// 	}/filters/recipes?${params}`
			// );
			// setFilteredRecipes(response.data);
			closeMenu(); // Close filter menu after applying
		} catch (error) {
			console.error("Error applying filters:", error);
		}
	};

	return (
		<div className={isOpen ? "" : "h-auto overflow-auto"}>
			{/* Knapp för att öppna filtret */}
			<button
				onClick={openMenu}
				className="px-8 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-md flex items-center"
			>
				Filter
				<span>
					<FilterIcon className="ml-4" />
				</span>
			</button>

			{/* Om filtret är öppet visas menyn */}
			{isOpen && (
				<>
					{/* Overlay för mörk bakgrund */}
					<div
						onClick={closeMenu}
						className="fixed inset-0 bg-black bg-opacity-50 z-10"
					></div>

					{/* Sidomenyn */}
					<div
						className={`fixed top-0 left-0 w-1/4 h-screen bg-white shadow-lg z-50 overflow-y-auto transform transition-transform duration-300 ${
							isVisible ? "translate-x-0" : "-translate-x-full"
						}`}
					>
						{/* Menyns header */}
						<div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-20">
							<h2 className="text-2xl font-semibold text-gray-800">
								Filter
							</h2>
							<button onClick={closeMenu}>
								<FontAwesomeIcon icon={faTimes} size="lg" />
							</button>
						</div>

						{/* Renderar kategorier och deras alternativ */}
						<div className="p-4">
							{/* {categories.map((category, index) => (
								<DropdownCategory
									key={index}
									title={category.title}
									options={category.options}
									isLast={index === categories.length - 1}
								/>
							))} */}

							{categories.map((category, index) => (
								<DropdownCategory
									key={index}
									title={category.title}
									options={category.options}
									isLast={index === categories.length - 1}
									// onSelect={handleFilterChange} // ✅ Pass the filter change handler
								/>
							))}

							{/* Apply-knapp för att tillämpa filtren */}
							<div className="mt-6">
								<button
									onClick={applyFilters}
									className="w-full px-6 py-3 bg-pink-500 text-white font-semibold rounded-full flex items-center justify-center gap-2"
								>
									85 recipes found
									<FontAwesomeIcon icon={faArrowRight} />
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default FiltersMenu;

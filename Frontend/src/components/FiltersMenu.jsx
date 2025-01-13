import { useState } from "react";
import DropdownCategory from "./DropdownCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FilterIcon } from "../assets/icons/FilterIcon";

function FiltersMenu() {
	const [isOpen, setIsOpen] = useState(false); // Controls visibility
	const [isVisible, setIsVisible] = useState(false); // Controls animation

	const categories = [
		{
			title: "Calories (per portion)",
			options: [
				"0-100 kcal",
				"100-200 kcal",
				"200-400 kcal",
				"400-600 kcal",
				"600-800 kcal",
				"800+ kcal",
			],
		},
		{
			title: "Time",
			options: [
				"0-30 min",
				"31-60 min",
				"61-90 min",
				"91-120 min",
				"121-150 min",
				"150+ min",
			],
		},
		{
			title: "Meal Type",
			options: ["Breakfast", "Lunch", "Dinner", "Snacks"],
		},
		{
			title: "Diet",
			options: ["Vegan", "Vegetarian", "Keto", "Paleo"],
		},
		{
			title: "Protein Type",
			options: [
				"Chicken",
				"Beef",
				"Fish",
				"Lentils",
				"Seafood",
				"Egg",
				"Lamb",
			],
		},
		{
			title: "Recipes Without",
			options: [
				"Dairy",
				"Eggs",
				"Nuts",
				"Gluten",
				"Fish",
				"Seeds",
				"Flour",
				"Milk",
				"Cheese",
				"Sugar",
				"Soy",
				"Cream",
			],
		},
		{
			title: "World Cuisine",
			options: [
				"Italian",
				"Indian",
				"Chinese",
				"Mexican",
				"Swedish",
				"Asian",
				"American",
				"Middle Eastern",
			],
		},
		{
			title: "Ingredient",
			options: ["Tomatoes", "Cheese", "Chicken", "Basil"],
		},
	];

	// Handle opening the filter
	const openMenu = () => {
		setIsOpen(true);
		setTimeout(() => setIsVisible(true), 10); // Delay to trigger slide-in
	};

	// Handle closing the filter
	const closeMenu = () => {
		setIsVisible(false); // Trigger slide-out
		setTimeout(() => setIsOpen(false), 300); // Wait for animation before unmounting
	};

	return (
		<div
			className={
				isOpen ? "h-screen overflow-hidden" : "h-auto overflow-auto"
			}
		>
			{/* Button to toggle dropdown */}
			<button
				onClick={openMenu}
				className="px-8 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-md flex items-center"
			>
				Filter
				<span>
					<FilterIcon className="ml-4" />
				</span>
			</button>

			{/* Overlay and Sliding Dropdown */}
			{isOpen && (
				<>
					{/* Overlay */}
					<div
						onClick={closeMenu}
						className="fixed inset-0 bg-black bg-opacity-50 z-10"
					></div>

					{/* Sliding Dropdown Menu */}
					<div
						className={`fixed top-0 left-0 w-1/4 h-screen bg-white shadow-lg z-50 overflow-y-auto transform transition-transform duration-300 ${
							isVisible ? "translate-x-0" : "-translate-x-full"
						}`}
					>
						{/* Header */}
						<div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-20">
							<h2 className="text-2xl font-semibold text-gray-800">
								Filter
							</h2>
							<button onClick={closeMenu}>
								<FontAwesomeIcon icon={faTimes} size="lg" />
							</button>
						</div>

						{/* Categories */}
						<div className="p-4">
							{categories.map((category, index) => (
								<DropdownCategory
									key={index}
									title={category.title}
									options={category.options}
									isLast={index === categories.length - 1}
								/>
							))}

							{/* Apply Button */}
							<div className="mt-6">
								<button className="w-full px-6 py-3 bg-pink-500 text-white font-semibold rounded-full flex items-center justify-center gap-2">
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

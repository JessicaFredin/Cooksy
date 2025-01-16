/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import RecipeCard from "./RecipeCard"; // Anta att RecipeCard är din komponent


const RecipeCarousel = ({ recipes }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [recipesPerPage, setRecipesPerPage] = useState(4);

	// Funktion för att uppdatera antalet kort baserat på skärmstorlek
	const updateRecipesPerPage = () => {
		if (window.innerWidth < 570) {
			setRecipesPerPage(1); // 1 kort för små skärmar
		} else if (window.innerWidth < 768) {
			setRecipesPerPage(2); // 2 kort för lite större skärmar
		} else if (window.innerWidth < 1024) {
			setRecipesPerPage(3); // 3 kort för mellanstora skärmar
		} else {
			setRecipesPerPage(4); // 4 kort för stora skärmar
		}
	};

	// Lägg till en event listener för att lyssna på skärmstorleksändringar
	useEffect(() => {
		updateRecipesPerPage();
		window.addEventListener("resize", updateRecipesPerPage);

		// Rensa event listener vid unmount
		return () => window.removeEventListener("resize", updateRecipesPerPage);
	}, []);

	// Calculate total number of pages
	const totalPages = Math.ceil(recipes.length / recipesPerPage);

	// Get the recipes to display on the current page
	const currentRecipes = recipes.slice(
		currentIndex * recipesPerPage,
		(currentIndex + 1) * recipesPerPage
	);

	// Handle navigation
	const nextPage = () => {
		if (currentIndex < totalPages - 1) {
			setCurrentIndex((prev) => prev + 1);
		}
	};

	const prevPage = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prev) => prev - 1);
		}
	};

	return (
		<div className="relative w-full grid grid-cols-12 items-center">
			{/* Navigation Buttons */}
			<button
				onClick={prevPage}
				className="absolute left-2 md:left-8 lg:left-14 top-1/2 transform -translate-y-1/2 bg-whiteFull rounded-full shadow-md w-10 h-10 flex items-center justify-center z-10"
				disabled={currentIndex === 0}
			>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>

			<div className="col-start-2 col-span-10 flex items-center gap-2 overflow-hidden">
				{currentRecipes.map((recipe, index) => (
					<div
						key={index}
						className={`w-full ${
							recipesPerPage === 1
								? "sm:w-full"
								: recipesPerPage === 2
								? "sm:w-1/2"
								: recipesPerPage === 3
								? "sm:w-1/3"
								: "sm:w-1/4"
						} flex-shrink-0`}
					>
			

						<RecipeCard
							key={recipe.id}
							id={recipe.id}
							image={`${import.meta.env.VITE_APP_BACKEND_URL}${
								recipe.image_url
							}`}
							dishName={recipe.title}
							categoryName={recipe.category_name}
							time={`${recipe.cooking_time_minutes} min`}
							authorName={`${recipe.first_name} ${recipe.last_name}`}
							authorImage={`${
								import.meta.env.VITE_APP_BACKEND_URL
							}${recipe.profile_picture_url}`}
							rating={parseFloat(recipe.average_rating).toFixed(
								1
							)}
							reviews={recipe.review_count || 0}
							commentsCount={recipe.total_comments || 0}
						/>
					</div>
				))}
			</div>
			<button
				onClick={nextPage}
				className="absolute right-2 md:right-8 lg:right-14 top-1/2 transform -translate-y-1/2 bg-whiteFull rounded-full shadow-md w-10 h-10 flex items-center justify-center z-10"
				disabled={currentIndex === totalPages - 1}
			>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>

			{/* Pagination Dots */}
			<div className="col-start-2 col-span-10 flex justify-center mt-8 space-x-2">
				{Array.from({ length: totalPages }).map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-3 h-3 rounded-full ${
							currentIndex === index
								? "bg-green-500"
								: "bg-gray-200"
						}`}
					></button>
				))}
			</div>
		</div>
	);
};

export default RecipeCarousel;

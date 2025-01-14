/* eslint-disable react/prop-types */
import food1 from "../assets/images/food1.jpg";
import profile1 from "../assets/images/profile1.jpg";
import React, { useState, useEffect } from "react";
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
							image={food1}
							dishName={recipe.name}
							categoryName={recipe.category}
							time={recipe.time}
							authorName="Lisa Karlsson"
							authorImage={profile1}
							rating={recipe.rating}
							reviews={recipe.reviews}
							commentsCount={recipe.comments}
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

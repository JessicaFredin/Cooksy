/* eslint-disable react/prop-types */
import { useState } from "react";
import RecipeCard from "./RecipeCard";
import food1 from "../assets/images/food1.jpg";
import profile1 from "../assets/images/profile1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const RecipeCarousel = ({ recipes }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const recipesPerPage = 4;

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
				className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-whiteFull rounded-full shadow-md w-10 h-10 flex items-center justify-center z-10"
				disabled={currentIndex === 0}
			>
				<FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
			<div className="col-start-2 col-span-10 flex items-center gap-4 overflow-hidden">
				{currentRecipes.map((recipe, index) => (
					<div key={index} className="w-full sm:w-1/4 flex-shrink-0">
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
				className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-whiteFull rounded-full shadow-md w-10 h-10 flex items-center justify-center z-10"
				disabled={currentIndex === totalPages - 1}
			>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>

			{/* Pagination Dots */}
			<div className="col-start-2 col-span-10 flex justify-center mt-4 space-x-2">
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

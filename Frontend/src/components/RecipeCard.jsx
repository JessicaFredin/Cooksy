/* eslint-disable react/prop-types */
import HeartFavourites from "./HeartFavourites";
import AddToMealPlanner from "./AddToMealPlanner";
import StarRating from "./StarRating"; // Import your StarRating component
import { MeatIcon } from "../assets/icons/MeatIcon";
import { ChickenIcon } from "../assets/icons/ChickenIcon";
import { FishIcon } from "../assets/icons/FishIcon";
import { VegetableIcon } from "../assets/icons/VegetableIcon";
import { SeafoodIcon } from "../assets/icons/SeafoodIcon";
import { DrinksIcon } from "../assets/icons/DrinksIcon";
import { TimeIcon } from "../assets/icons/TimeIcon";
import { CommentIcon } from "../assets/icons/CommentIcon";
import { Link } from "react-router-dom"; // Import Link for navigation

const categoryIconMap = {
	Meat: MeatIcon,
	Poultry: ChickenIcon,
	Fish: FishIcon,
	Vegetable: VegetableIcon,
	Seafood: SeafoodIcon,
	Drinks: DrinksIcon,
};

function RecipeCard({
	id,
	image,
	dishName,
	categoryName,
	time,
	authorName,
	authorImage,
	reviews,
	rating,
	commentsCount,
}) {
	const CategoryIcon = categoryIconMap[categoryName] || MeatIcon;

	return (
		<Link
			to={`/recipe/${id}`} // Navigate to the recipe details page with the recipe ID
			className="w-72 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative hover:shadow-xl transition-shadow duration-300"
		>
			{/* Image Section */}
			<div className="relative h-48">
				<img
					src={image}
					alt={dishName}
					className="w-full h-full object-cover"
				/>
				<div className="flex justify-end">
					<button
						className="absolute top-2 p-2 rounded-full shadow-md "
						onClick={(e) => e.stopPropagation()} // Prevents the button click from triggering the card click
					>
						<HeartFavourites />
					</button>
					<button
						className="absolute top-14 p-2 rounded-full shadow-md"
						onClick={(e) => e.stopPropagation()} // Prevents the button click from triggering the card click
					>
						<AddToMealPlanner />
					</button>
				</div>

				{/* Author Section */}
				<div className="relative">
					<div className="absolute bottom-0 right-0 bg-green-500 text-black px-4 flex items-center w-[calc(100%-30%)] rounded-tl-lg">
						<p className="text-sm flex-grow">{authorName}</p>
						<div className="absolute -top-3 right-2 w-10 h-10 rounded-lg overflow-hidden border-2 border-white">
							<img
								src={authorImage}
								alt={authorName}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className="p-4 flex flex-col flex-grow">
				{/* Title Section */}
				<div className="h-12 mb-8">
					<h3 className="text-lg text-gray-800 line-clamp-2">
						{dishName}
					</h3>
				</div>
				{/* Category and Time */}
				<div className="flex justify-between items-center text-gray-600 mt-2">
					<div className="flex items-center space-x-1">
						<CategoryIcon /> {/* Dynamically render the icon */}
						<span>{categoryName}</span>
					</div>
					<div className="flex items-center space-x-1">
						<TimeIcon />
						<span>{time}</span>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-gray-200 my-2"></div>

				{/* Rating and Favorites */}
				<div className="flex justify-between items-center">
					<div className="flex items-center space-x-1">
						<StarRating totalStars={5} staticRating={rating} />
						<span className="text-sm text-gray-600">
							({reviews})
						</span>
					</div>

					<div className="flex items-center space-x-1">
						<CommentIcon />
						<span className="text-sm text-gray-600">
							{commentsCount}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default RecipeCard;

// // Detta receptkort fungerar för pop mealplan

// import { useState } from "react";
// import HeartFavourites from "./HeartFavourites";
// import AddToMealPlanner from "./AddToMealPlanner";
// import StarRating from "./StarRating";
// import { MeatIcon } from "../assets/icons/MeatIcon";
// import { ChickenIcon } from "../assets/icons/ChickenIcon";
// import { FishIcon } from "../assets/icons/FishIcon";
// import { VegetableIcon } from "../assets/icons/VegetableIcon";
// import { SeafoodIcon } from "../assets/icons/SeafoodIcon";
// import { TimeIcon } from "../assets/icons/TimeIcon";
// import { CommentIcon } from "../assets/icons/CommentIcon";
// import { Link } from "react-router-dom";
// import PopMealPlan from "./PopMealPlan";
// import CloseButton from "./CloseButton";

// const categoryIconMap = {
//   Meat: MeatIcon,
//   Poultry: ChickenIcon,
//   Fish: FishIcon,
//   Vegetable: VegetableIcon,
//   Seafood: SeafoodIcon,
// };

// function RecipeCard({
// 	id,
// 	image,
// 	dishName,
// 	categoryName,
// 	time,
// 	authorName,
// 	authorImage,
// 	reviews,
// 	rating,
// 	commentsCount,
// 	size = "medium",
// 	disableHover = false,
// 	disableActions = false,
// 	showCloseButton = false, // Ny prop för CloseButton
//   }) {
// 	const [showMealPlan, setShowMealPlan] = useState(false);
// 	const [selectedRecipe, setSelectedRecipe] = useState(null);
  
// 	const CategoryIcon = categoryIconMap[categoryName] || MeatIcon;
  
// 	const handleAddToMealPlanner = (e) => {
// 	  e.preventDefault();
// 	  e.stopPropagation();
// 	  setSelectedRecipe({
// 		id,
// 		image,
// 		dishName,
// 		categoryName,
// 		time,
// 		authorName,
// 		authorImage,
// 		reviews,
// 		rating,
// 		commentsCount,
// 	  });
// 	  setShowMealPlan(true);
// 	};
  
// 	const handleDragStart = (e) => {
// 	  const recipeData = JSON.stringify({
// 		id,
// 		image,
// 		dishName,
// 		categoryName,
// 		time,
// 		authorName,
// 		authorImage,
// 		reviews,
// 		rating,
// 		commentsCount,
// 	  });
// 	  e.dataTransfer.setData("recipeData", recipeData);
// 	};
  
// 	const sizeClasses = {
// 		large: {
// 		  container: "w-80 h-[24rem]", // Fast bredd och höjd för large
// 		  image: "h-48 w-full object-cover",
// 		  text: "text-lg",
// 		  icon: "w-6 h-6",
// 		},
// 		medium: {
// 		  container: "w-60 h-[20rem]", // Medium-storlek med mer kompakt layout
// 		  image: "h-40 w-full object-cover",
// 		  text: "text-sm",
// 		  icon: "w-5 h-5",
// 		},
// 		small: {
// 		  container: "w-auto h-[18rem]", // Small-storlek med mindre bredd och höjd
// 		  image: "h-32 w-full object-cover",
// 		  text: "text-xs",
// 		  icon: "w-4 h-4",
// 		},
// 		mini: {
// 		  container: "w-auto h-[12rem]", // Mini-storlek för små kort
// 		  image: "h-24 w-full object-cover",
// 		  text: "text-xs",
// 		  icon: "w-3 h-3",
// 		},
// 	  }
  
// 	const currentSize = sizeClasses[size];
  
// 	return (
// 	  <>
// 		<Link
// 		  to={`/recipe/${id}`}
// 		  className={`${currentSize.container} bg-white rounded-lg shadow-lg flex flex-col relative ${
// 			disableHover ? "" : "hover:shadow-xl transition-shadow duration-300"
// 		  } overflow-hidden`}
// 		  draggable="true"
// 		  onDragStart={handleDragStart}
// 		>
// 		  <div className={`relative ${currentSize.image}`}>
// 			<img
// 			  src={image}
// 			  alt={dishName}
// 			  className="w-full h-full object-cover"
// 			/>
// 			{!disableHover && (
// 			  <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-2xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
// 				View Recipe
// 			  </div>
// 			)}
// 			{/* Visa CloseButton istället för HeartFavourites om showCloseButton är true */}
// 			<div className="absolute top-2 right-2 flex flex-col space-y-2">
// 			  {showCloseButton ? (
// 				<CloseButton
// 				  size={size}
// 				  onClick={(e) => {
// 					e.stopPropagation();
// 					console.log("Close button clicked!");
// 				  }}
// 				/>
// 			  ) : (
// 				!disableActions && (
// 				  <button
// 					className="p-2 rounded-full shadow-md"
// 					onClick={(e) => e.stopPropagation()}
// 				  >
// 					<HeartFavourites size={size} />
// 				  </button>
// 				)
// 			  )}
// 			  {!disableActions && (
// 				<button
// 				  className="p-2 rounded-full shadow-md"
// 				  onClick={handleAddToMealPlanner}
// 				>
// 				  <AddToMealPlanner size={size} />
// 				</button>
// 			  )}
// 			</div>
// 		  </div>
// 		  <div className="p-4 flex flex-col justify-between flex-grow">
// 			<h3
// 			  className={`${currentSize.text} text-gray-800 line-clamp-2 min-h-[48px]`}
// 			>
// 			  {dishName}
// 			</h3>
// 			<div className="flex justify-between items-center text-gray-600 mt-2">
// 			  <div className="flex items-center space-x-1">
// 				<CategoryIcon className={currentSize.icon} />
// 				<span className={currentSize.text}>{categoryName}</span>
// 			  </div>
// 			  <div className="flex items-center space-x-1">
// 				<TimeIcon className={currentSize.icon} />
// 				<span className={currentSize.text}>{time}</span>
// 			  </div>
// 			</div>
// 			<div className="border-t border-gray-200 my-2"></div>
// 			<div className="flex justify-between items-center mt-1">
// 			  <div className="flex items-center space-x-1">
// 				<StarRating
// 				  totalStars={5}
// 				  staticRating={rating}
// 				  size={currentSize.icon}
// 				/>
// 				<span className={`${currentSize.text} text-gray-600`}>
// 				  ({reviews})
// 				</span>
// 			  </div>
// 			  <div className="flex items-center space-x-1">
// 				<CommentIcon className={currentSize.icon} />
// 				<span className={`${currentSize.text} text-gray-600`}>
// 				  {commentsCount}
// 				</span>
// 			  </div>
// 			</div>
// 		  </div>
// 		</Link>
// 		{showMealPlan && (
// 		  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// 			<div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-4xl">
// 			  <button
// 				className="absolute top-4 right-4 bg-green-400 text-black px-4 py-2 rounded-full"
// 				onClick={() => setShowMealPlan(false)}
// 			  >
// 				X
// 			  </button>
// 			  <PopMealPlan selectedRecipe={selectedRecipe} />
// 			</div>
// 		  </div>
// 		)}
// 	  </>
// 	);
//   }
  
//   export default RecipeCard;
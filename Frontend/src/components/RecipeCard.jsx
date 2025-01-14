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

// /* eslint-disable react/prop-types */
// import HeartFavourites from "./HeartFavourites";
// import AddToMealPlanner from "./AddToMealPlanner";
// import StarRating from "./StarRating";
// import { MeatIcon } from "../assets/icons/MeatIcon";
// import { ChickenIcon } from "../assets/icons/ChickenIcon";
// import { FishIcon } from "../assets/icons/FishIcon";
// import { VegetableIcon } from "../assets/icons/VegetableIcon";
// import { SeafoodIcon } from "../assets/icons/SeafoodIcon";
// import { DrinksIcon } from "../assets/icons/DrinksIcon";
// import { TimeIcon } from "../assets/icons/TimeIcon";
// import { CommentIcon } from "../assets/icons/CommentIcon";
// import { Link } from "react-router-dom";

// // Category Icon Mapping
// const categoryIconMap = {
// 	Meat: MeatIcon,
// 	Poultry: ChickenIcon,
// 	Fish: FishIcon,
// 	Vegetable: VegetableIcon,
// 	Seafood: SeafoodIcon,
// 	Drinks: DrinksIcon,
// };

// // Size Variants (Restored and Extended)
// const sizeVariants = {
// 	mini: {
// 		container: "w-36",        // Very small card
// 		imageHeight: "h-24",      // Smaller image
// 		textSize: "text-xs",      // Extra small text
// 		iconSize: "w-4 h-4",      // Tiny icons
// 		buttonSize: "p-1",        // Small button padding
// 	},
// 	small: {
// 		container: "w-48",
// 		imageHeight: "h-32",
// 		textSize: "text-sm",
// 		iconSize: "w-5 h-5",
// 		buttonSize: "p-1.5",
// 	},
// 	medium: {
// 		container: "w-72",  // SAME as original design
// 		imageHeight: "h-48",
// 		textSize: "text-lg",
// 		iconSize: "w-6 h-6",
// 		buttonSize: "p-2",
// 	},
// 	large: {
// 		container: "w-96",
// 		imageHeight: "h-64",
// 		textSize: "text-xl",
// 		iconSize: "w-8 h-8",
// 		buttonSize: "p-3",
// 	},
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
// 	size = "medium", // Default is medium
// }) {
// 	const CategoryIcon = categoryIconMap[categoryName] || MeatIcon;
// 	const currentSize = sizeVariants[size];

// 	return (
// 		<Link
// 			to={`/recipe/${id}`}
// 			className={`${currentSize.container} bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative hover:shadow-xl transition-transform duration-300 transform hover:scale-105`}
// 		>
// 			{/* Image Section */}
// 			<div className={`relative ${currentSize.imageHeight} overflow-hidden group`}>
// 				<img
// 					src={image}
// 					alt={dishName}
// 					className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
// 				/>

// 				{/* Restored Heart and Add Icons */}
// 				<div className="absolute top-2 right-2 flex flex-col space-y-2">
// 					{/* Heart Icon (Restored) */}
// 					<div className="absolute top-2 right-2">
// 						<HeartFavourites size={size} />
// 					</div>

// 					{/* Add to Meal Planner Icon (Restored) */}
// 					<div className="absolute top-12 right-2">
// 						<AddToMealPlanner size={size} />
// 					</div>
// 				</div>

// 				{/* Author Section */}
// 				<div className="absolute bottom-0 right-0 bg-green-500 text-black px-4 flex items-center w-[calc(100%-30%)] rounded-tl-lg">
// 					<p className="text-sm flex-grow">{authorName}</p>
// 					<div className="absolute -top-3 right-2 w-8 h-8 rounded-lg overflow-hidden border-2 border-white">
// 						<img
// 							src={authorImage}
// 							alt={authorName}
// 							className="w-full h-full object-cover"
// 						/>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Content Section */}
// 			<div className="p-4 flex flex-col flex-grow">
// 				{/* Recipe Title */}
// 				<div className="h-12 mb-8">
// 					<h3 className={`${currentSize.textSize} text-gray-800 line-clamp-2`}>
// 						{dishName}
// 					</h3>
// 				</div>

// 				{/* Category and Time */}
// 				<div className="flex justify-between items-center text-gray-600 mt-2">
// 					<div className="flex items-center space-x-1">
// 						<CategoryIcon />
// 						<span>{categoryName}</span>
// 					</div>
// 					<div className="flex items-center space-x-1">
// 						<TimeIcon />
// 						<span>{time}</span>
// 					</div>
// 				</div>

// 				{/* Divider */}
// 				<div className="border-t border-gray-200 my-2"></div>

// 				{/* Rating and Comments */}
// 				<div className="flex justify-between items-center">
// 					<div className="flex items-center space-x-1">
// 						<StarRating totalStars={5} staticRating={rating} />
// 						<span className="text-sm text-gray-600">({reviews})</span>
// 					</div>

// 					<div className="flex items-center space-x-1">
// 						<CommentIcon />
// 						<span className="text-sm text-gray-600">{commentsCount}</span>
// 					</div>
// 				</div>
// 			</div>
// 		</Link>
// 	);
// }

// export default RecipeCard;

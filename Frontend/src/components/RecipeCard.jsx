// /* eslint-disable react/prop-types */

// import HeartFavourites from "./HeartFavourites";
// import StarRating from "./StarRating";
// import AddToMealPlanner from "./AddToMealPlanner";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDrumstickBite, faClock } from "@fortawesome/free-solid-svg-icons";
// import profile1 from "../assets/images/profile1.jpg";
// import recept1 from "../assets/images/recept1.jpg";

// const RecipeCard = ({ size = "small" }) => {
// 	const isLarge = size === "large";

// 	// Adjust dimensions for the smaller size
// 	const cardWidth = isLarge ? "w-[359px]" : "w-[250px]";
// 	const cardHeight = isLarge ? "h-[463px]" : "h-[320px]";
// 	const imageHeight = isLarge ? "h-[276px]" : "h-[192px]";
// 	const textSize = isLarge ? "text-lg" : "text-base";

// 	const recipeData = {
// 		image: recept1,
// 		name: "Recipe Name",
// 		category: "Meat",
// 		time: "60 min",
// 		author: "Lisa Karlsson",
// 		authorImage: profile1,
// 		reviews: isLarge ? 87 : 5,
// 	};

// 	return (
// 		<div
// 			className={`relative ${cardWidth} ${cardHeight} bg-white rounded-lg shadow-md overflow-hidden flex flex-col`}
// 		>
// 			{/* Image Section */}
// 			<div className={`relative ${imageHeight} overflow-hidden group`}>
// 				<img
// 					src={recipeData.image}
// 					alt={recipeData.name}
// 					className="w-full h-full object-cover"
// 				/>
// 				{/* Overlay on hover */}
// 				<div className="absolute inset-0 bg-[#333333]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// 					<span className="text-[#FAFAFA] text-4xl font-semibold">
// 						View Recipe
// 					</span>
// 				</div>
// 				{/* Heart Icon */}
// 				<div className="absolute top-2 right-2">
// 					<HeartFavourites size={"small"} />
// 				</div>
// 				{/* Add to Meal Planner Icon */}
// 				<div className="absolute top-12 right-2">
// 					<AddToMealPlanner size="small" />
// 				</div>
// 				{/* Author Section */}
// 				<div className="absolute bottom-0 right-0 bg-[#A8D400] text-white px-4 flex items-center w-[calc(100%-40%)] rounded-tl-[10px]">
// 					<p className="text-sm flex-grow ml-2">
// 						{recipeData.author}
// 					</p>
// 					<div className="relative">
// 						<img
// 							src={recipeData.authorImage}
// 							alt={recipeData.author}
// 							className="w-8 h-8 rounded-[10px]"
// 						/>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Content Section */}
// 			<div className="p-1 flex flex-col flex-grow">
// 				{/* Recipe Name */}
// 				<div>
// 					<h2
// 						className={`text-gray-900 font-semibold ${textSize} mb-2`}
// 					>
// 						{recipeData.name}
// 					</h2>
// 				</div>
// 				{/* Space between recipe name and bottom */}
// 				<div className="flex-grow"></div>

// 				{/* Bottom Section */}
// 				<div className="mt-auto">
// 					{/* Icon Row */}
// 					<div className="flex justify-between items-center pb-2">
// 						<div className="flex items-center text-s text-gray-600">
// 							<FontAwesomeIcon
// 								icon={faDrumstickBite}
// 								className="text-[#333333] mr-2"
// 							/>
// 							<span>{recipeData.category}</span>
// 						</div>
// 						<div className="flex items-center text-s text-gray-600">
// 							<FontAwesomeIcon
// 								icon={faClock}
// 								className="text-[#333333] mr-2"
// 							/>
// 							<span>{recipeData.time}</span>
// 						</div>
// 					</div>
// 					{/* Divider Line */}
// 					<div className="border-b border-gray-300 mb-2"></div>
// 					{/* Rating and Reviews */}
// 					<div className="flex justify-between items-center p-1">
// 						<StarRating
// 							totalStars={5}
// 							size={isLarge ? "1rem" : "0.75rem"}
//             />

// 						<p className="text-s text-black">
// 							{recipeData.reviews} reviews
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default RecipeCard;

/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating"; // Import your StarRating component
import { MeatIcon } from "../assets/icons/MeatIcon";
import { ChickenIcon } from "../assets/icons/ChickenIcon";
import { FishIcon } from "../assets/icons/FishIcon";
import { VegetableIcon } from "../assets/icons/VegetableIcon";
import { SeafoodIcon } from "../assets/icons/SeafoodIcon";
import { TimeIcon } from "../assets/icons/TimeIcon";
import { CommentIcon } from "../assets/icons/CommentIcon";
import { Link } from "react-router-dom"; // Import Link for navigation

const categoryIconMap = {
	Meat: MeatIcon,
	Poultry: ChickenIcon,
	Fish: FishIcon,
	Vegetable: VegetableIcon,
	Seafood: SeafoodIcon
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
				<button
					className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md w-8 h-8 flex items-center justify-center"
					onClick={(e) => e.stopPropagation()} // Prevents the button click from triggering the card click
				>
					<FontAwesomeIcon icon={faHeart} className="text-pink-500" />
				</button>
				<button
					className="absolute top-14 right-2 bg-white p-2 rounded-full shadow-md w-8 h-8 flex items-center justify-center"
					onClick={(e) => e.stopPropagation()} // Prevents the button click from triggering the card click
				>
					<FontAwesomeIcon icon={faPlus} className="text-pink-500" />
				</button>

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

//Denna fungerar för popmealplan 

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
// import StarRating from "./StarRating";
// import { MeatIcon } from "../assets/icons/MeatIcon";
// import { TimeIcon } from "../assets/icons/TimeIcon";
// import { CommentIcon } from "../assets/icons/CommentIcon";
// import PopMealPlan from "./PopMealPlan";

// const RecipeCard = ({
//     id,
//     image,
//     dishName,
//     categoryName,
//     time,
//     authorName,
//     authorImage,
//     reviews,
//     rating,
//     commentsCount,
//     size = "default", // Ny prop för storlek
// }) => {
//     const [isPopupVisible, setIsPopupVisible] = useState(false);

//     const togglePopup = (e) => {
//         e.stopPropagation();
//         setIsPopupVisible((prevState) => !prevState);
//     };

//     // Drag and Drop Handlers
//     const handleDragStart = (e) => {
//         e.dataTransfer.setData(
//             "recipeData",
//             JSON.stringify({
//                 id,
//                 dishName,
//                 image,
//                 categoryName,
//                 time,
//                 authorName,
//                 reviews,
//                 rating,
//             })
//         );
//     };

//     // Dynamiska klasser beroende på storlek
//     const cardClasses = size === "small" ? "w-full h-full p-2" : "w-72";
//     const imageHeight = size === "small" ? "h-32" : "h-48";
//     const textSize = size === "small" ? "text-sm" : "text-lg";

//     return (
//         <div
//             className={`${cardClasses} bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative`}
//             draggable
//             onDragStart={handleDragStart}
//         >
//             {/* Image Section */}
//             <div className={`relative ${imageHeight}`}>
//                 <img
//                     src={image}
//                     alt={dishName}
//                     className="w-full h-full object-cover"
//                 />
//                 <button
//                     className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md w-8 h-8 flex items-center justify-center"
//                     onClick={(e) => e.stopPropagation()}
//                 >
//                     <FontAwesomeIcon icon={faHeart} className="text-pink-500" />
//                 </button>
//                 <button
//                     className="absolute top-14 right-2 bg-white p-2 rounded-full shadow-md w-8 h-8 flex items-center justify-center"
//                     onClick={togglePopup}
//                 >
//                     <FontAwesomeIcon icon={faPlus} className="text-pink-500" />
//                 </button>
//             </div>

//             {/* Content Section */}
//             <div className="p-4 flex flex-col flex-grow">
//                 <div className={`h-12 mb-8 ${textSize}`}>
//                     <h3 className={`line-clamp-2 ${textSize} text-gray-800`}>
//                         {dishName}
//                     </h3>
//                 </div>
//                 <div className="flex justify-between items-center text-gray-600 mt-2">
//                     <div className="flex items-center space-x-1">
//                         <MeatIcon />
//                         <span>{categoryName}</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                         <TimeIcon />
//                         <span>{time}</span>
//                     </div>
//                 </div>
//                 <div className="border-t border-gray-200 my-2"></div>
//                 <div className="flex justify-between items-center">
//                     <div className="flex items-center space-x-1">
//                         <StarRating totalStars={5} staticRating={rating} />
//                         <span className={`text-sm text-gray-600`}>
//                             ({reviews})
//                         </span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                         <CommentIcon />
//                         <span className={`text-sm text-gray-600`}>
//                             {commentsCount}
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             {/* Popup */}
//             {isPopupVisible && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//                     <div className="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-5xl">
//                         <PopMealPlan />
//                         <button
//                             className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
//                             onClick={togglePopup}
//                         >
//                             &times;
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RecipeCard;

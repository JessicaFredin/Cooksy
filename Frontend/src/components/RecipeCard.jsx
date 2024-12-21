/* eslint-disable react/prop-types */

import HeartFavourites from "./HeartFavourites";
import StarRating from "./StarRating";
import AddToMealPlanner from "./AddToMealPlanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite, faClock } from "@fortawesome/free-solid-svg-icons";
import profile1 from "../assets/images/profile1.jpg";
import recept1 from "../assets/images/recept1.jpg";

const RecipeCard = ({ size = "small" }) => {
	const isLarge = size === "large";

	// Adjust dimensions for the smaller size
	const cardWidth = isLarge ? "w-[359px]" : "w-[250px]";
	const cardHeight = isLarge ? "h-[463px]" : "h-[320px]";
	const imageHeight = isLarge ? "h-[276px]" : "h-[192px]";
	const textSize = isLarge ? "text-lg" : "text-base";

	const recipeData = {
		image: recept1,
		name: "Recipe Name",
		category: "Meat",
		time: "60 min",
		author: "Lisa Karlsson",
		authorImage: profile1,
		reviews: isLarge ? 87 : 5,
	};

	return (
		<div
			className={`relative ${cardWidth} ${cardHeight} bg-white rounded-lg shadow-md overflow-hidden flex flex-col`}
		>
			{/* Image Section */}
			<div className={`relative ${imageHeight} overflow-hidden group`}>
				<img
					src={recipeData.image}
					alt={recipeData.name}
					className="w-full h-full object-cover"
				/>
				{/* Overlay on hover */}
				<div className="absolute inset-0 bg-[#333333]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<span className="text-[#FAFAFA] text-4xl font-semibold">
						View Recipe
					</span>
				</div>
				{/* Heart Icon */}
				<div className="absolute top-2 right-2">
					<HeartFavourites size={"small"} />
				</div>
				{/* Add to Meal Planner Icon */}
				<div className="absolute top-12 right-2">
					<AddToMealPlanner size="small" />
				</div>
				{/* Author Section */}
				<div className="absolute bottom-0 right-0 bg-[#A8D400] text-white px-4 flex items-center w-[calc(100%-40%)] rounded-tl-[10px]">
					<p className="text-sm flex-grow ml-2">
						{recipeData.author}
					</p>
					<div className="relative">
						<img
							src={recipeData.authorImage}
							alt={recipeData.author}
							className="w-8 h-8 rounded-[10px]"
						/>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className="p-1 flex flex-col flex-grow">
				{/* Recipe Name */}
				<div>
					<h2
						className={`text-gray-900 font-semibold ${textSize} mb-2`}
					>
						{recipeData.name}
					</h2>
				</div>
				{/* Space between recipe name and bottom */}
				<div className="flex-grow"></div>

				{/* Bottom Section */}
				<div className="mt-auto">
					{/* Icon Row */}
					<div className="flex justify-between items-center pb-2">
						<div className="flex items-center text-s text-gray-600">
							<FontAwesomeIcon
								icon={faDrumstickBite}
								className="text-[#333333] mr-2"
							/>
							<span>{recipeData.category}</span>
						</div>
						<div className="flex items-center text-s text-gray-600">
							<FontAwesomeIcon
								icon={faClock}
								className="text-[#333333] mr-2"
							/>
							<span>{recipeData.time}</span>
						</div>
					</div>
					{/* Divider Line */}
					<div className="border-b border-gray-300 mb-2"></div>
					{/* Rating and Reviews */}
					<div className="flex justify-between items-center p-1">
						<StarRating
							totalStars={5}
							size={isLarge ? "1rem" : "0.75rem"}
            />
            
						<p className="text-s text-black">
							{recipeData.reviews} reviews
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;

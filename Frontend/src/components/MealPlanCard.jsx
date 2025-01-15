import { useState } from "react"; // Import useState
import StarRating from "./StarRating"; // Import your StarRating component
import { MeatIcon } from "../assets/icons/MeatIcon";
import { ChickenIcon } from "../assets/icons/ChickenIcon";
import { FishIcon } from "../assets/icons/FishIcon";
import { VegetableIcon } from "../assets/icons/VegetableIcon";
import { SeafoodIcon } from "../assets/icons/SeafoodIcon";
import { TimeIcon } from "../assets/icons/TimeIcon";
import { CommentIcon } from "../assets/icons/CommentIcon";

const categoryIconMap = {
	Meat: MeatIcon,
	Poultry: ChickenIcon,
	Fish: FishIcon,
	Vegetable: VegetableIcon,
	Seafood: SeafoodIcon,
};

function MealPlanCard({
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
	description, // Ny prop för beskrivning
}) {
	const CategoryIcon = categoryIconMap[categoryName] || MeatIcon;

	return (
		<>
			<div className="w-40 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative hover:shadow-xl transition-shadow duration-300">
				{/* Image Section */}
				<div className="relative h-30">
					<img
						src={image}
						alt={dishName}
						className="w-full h-full object-cover"
					/>
					{/* Author Section */}
					<div className="relative">
						<div className="absolute bottom-0 right-0 bg-green-500 text-black px-4 flex items-center w-[calc(100%-15%)] rounded-tl-lg">
							<p className="text-xs flex-grow ">{authorName}</p>
							<div className="absolute -top-3 right-1 w-10 h-10 rounded-lg overflow-hidden border-2 border-white">
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
					<div className="h-10 mb-2">
						<h3 className="text-sm text-gray-800 line-clamp-2">
							{dishName}
						</h3>
					</div>
					<div className="flex justify-between items-center text-gray-600 mt-2">
						<div className="flex items-center space-x-1">
							<CategoryIcon />
							<span className="text-xs">{categoryName}</span>
						</div>
						<div className="flex items-center space-x-1">
							<TimeIcon />
							<span className="text-xs">{time}</span>
						</div>
					</div>
					<div className="border-t border-gray-200 my-2"></div>
					<div className="flex justify-between items-center">
						<div className="flex items-center space-x-1">
							<StarRating totalStars={5} staticRating={rating} size="0.6rem" />
							<span className="text-xs text-gray-600">
								({reviews})
							</span>
						</div>
						<div className="flex items-center space-x-1">
							<CommentIcon />
							<span className="text-xs text-gray-600">
								{commentsCount}
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MealPlanCard;
// /* eslint-disable react/prop-types */
// import HeartFavourites from "./HeartFavourites";
// import AddToMealPlanner from "./AddToMealPlanner";
// import StarRating from "./StarRating"; // Import your StarRating component
// import { MeatIcon } from "../assets/icons/MeatIcon";
// import { ChickenIcon } from "../assets/icons/ChickenIcon";
// import { FishIcon } from "../assets/icons/FishIcon";
// import { VegetableIcon } from "../assets/icons/VegetableIcon";
// import { SeafoodIcon } from "../assets/icons/SeafoodIcon";
// import { DrinksIcon } from "../assets/icons/DrinksIcon";
// import { TimeIcon } from "../assets/icons/TimeIcon";
// import { CommentIcon } from "../assets/icons/CommentIcon";
// import { Link } from "react-router-dom"; // Import Link for navigation

// const categoryIconMap = {
// 	Meat: MeatIcon,
// 	Poultry: ChickenIcon,
// 	Fish: FishIcon,
// 	Vegetable: VegetableIcon,
// 	Seafood: SeafoodIcon,
// 	Drinks: DrinksIcon,
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
// 	description, // Ny prop för beskrivning
// }) {
// 	const CategoryIcon = categoryIconMap[categoryName] || MeatIcon;

// 	return (
// 		<Link
// 			to={`/recipe/${id}`} // Navigate to the recipe details page with the recipe ID
// 			className="w-72 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative hover:shadow-xl transition-shadow duration-300"
// 		>
// 			{/* Image Section */}
// 			<div className="relative h-48">
// 				<img
// 					src={image}
// 					alt={dishName}
// 					className="w-full h-full object-cover"
// 				/>
// 				<div className="flex justify-end">
// 					<button
// 						className="absolute top-2 p-2 rounded-full shadow-md "
// 						onClick={(e) => e.stopPropagation()} // Prevents the button click from triggering the card click
// 					>
// 						<HeartFavourites />
// 					</button>
// 					<button
// 						className="absolute top-14 p-2 rounded-full shadow-md"
// 						onClick={(e) => e.stopPropagation()} // Prevents the button click from triggering the card click
// 					>
// 						<AddToMealPlanner />
// 					</button>
// 				</div>

// 				{/* Author Section */}
// 				<div className="relative">
// 					<div className="absolute bottom-0 right-0 bg-green-500 text-black px-4 flex items-center w-[calc(100%-30%)] rounded-tl-lg">
// 						<p className="text-sm flex-grow">{authorName}</p>
// 						<div className="absolute -top-3 right-2 w-10 h-10 rounded-lg overflow-hidden border-2 border-white">
// 							<img
// 								src={authorImage}
// 								alt={authorName}
// 								className="w-full h-full object-cover"
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Content Section */}
// 			<div className="p-4 flex flex-col flex-grow">
// 				{/* Title Section */}
// 				<div className="h-12 mb-8">
// 					<h3 className="text-lg text-gray-800 line-clamp-2">
// 						{dishName}
// 					</h3>
// 					<p className="text-sm text-gray-600 mt-1 line-clamp-3">{description}</p> {/* Renderar beskrivning */}
// 				</div>
// 				{/* Category and Time */}
// 				<div className="flex justify-between items-center text-gray-600 mt-2">
// 					<div className="flex items-center space-x-1">
// 						<CategoryIcon /> {/* Dynamically render the icon */}
// 						<span>{categoryName}</span>
// 					</div>
// 					<div className="flex items-center space-x-1">
// 						<TimeIcon />
// 						<span>{time}</span>
// 					</div>
// 				</div>

// 				{/* Divider */}
// 				<div className="border-t border-gray-200 my-2"></div>

// 				{/* Rating and Favorites */}
// 				<div className="flex justify-between items-center">
// 					<div className="flex items-center space-x-1">
// 						<StarRating totalStars={5} staticRating={rating} />
// 						<span className="text-sm text-gray-600">
// 							({reviews})
// 						</span>
// 					</div>

// 					<div className="flex items-center space-x-1">
// 						<CommentIcon />
// 						<span className="text-sm text-gray-600">
// 							{commentsCount}
// 						</span>
// 					</div>
// 				</div>
// 			</div>
// 		</Link>
// 	);
// }

// export default RecipeCard;

/* eslint-disable react/prop-types */
import { useState } from "react"; // Import useState
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PopMealPlan from "./PopMealPlan"; // Import PopMealPlan
import SaveInFolderPopup from "./SaveInFolderPopup";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { TrashIcon } from "../assets/icons/TrashIcon";
import { useNavigate } from "react-router-dom";

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
	description, // Ny prop för beskrivning
	isOwner,
	onDelete,
}) {
	const navigate = useNavigate(); // ✅ Initialize navigate

	const CategoryIcon = categoryIconMap[categoryName] || MeatIcon;
	const [showMealPlan, setShowMealPlan] = useState(false); // State for PopMealPlan visibility
	const [showSaveInFolder, setShowSaveInFolder] = useState(false);

	const handleSaveInFolder = (e) => {
		e.preventDefault(); // Prevent navigation
		e.stopPropagation(); // Prevent Link click
		setShowSaveInFolder(true); // Close the popup
	};

	// Function to handle AddToMealPlanner click
	const handleAddToMealPlanner = (e) => {
		e.preventDefault(); // Prevent navigation
		e.stopPropagation(); // Prevent Link click
		setShowMealPlan(true); // Show PopMealPlan
	};

	const handleEdit = (e) => {
		e.preventDefault();
		e.stopPropagation();
		navigate("/add-recipe", {
			state: {
				id,
			},
		});
	};

	return (
		<>
			<Link
				to={`/recipe/${id}`}
				className="w-72 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative hover:shadow-xl transition-shadow duration-300"
			>
				{/* Image Section */}
				<div className="relative h-48">
					<img
						src={image}
						alt={dishName}
						className="w-full h-full object-cover"
					/>

					{/* <div className="flex justify-end">
						<button
							className="absolute top-2 p-2 rounded-full shadow-md"
							onClick={handleSaveInFolder}
						>
							<HeartFavourites />
						</button>
						<button
							className="absolute top-14 p-2 rounded-full shadow-md"
							onClick={handleAddToMealPlanner} // Show PopMealPlan
						>
							<AddToMealPlanner />
						</button>
					</div> */}

					<div className="flex justify-end">
						{isOwner ? (
							<>
								{/* ✅ Delete Button */}
								<button
									className="absolute top-2 right-2 p-1 rounded-full shadow-md bg-white text-red-500 w-8 h-8 flex items-center justify-center"
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										onDelete(id);
									}}
								>
									<TrashIcon />
								</button>

								{/* ✅ Edit Button */}
								<button
									className="absolute top-12 right-2 p-1 rounded-full shadow-md bg-white text-red-500 w-8 h-8 flex items-center justify-center"
									onClick={(e) => {
										handleEdit(e);
									}}
								>
									<FontAwesomeIcon icon={faEdit} />
								</button>
							</>
						) : (
							<>
								{/* ❤️ Default Heart Button */}
								<button
									className="absolute top-2 p-2 rounded-full shadow-md"
									onClick={handleSaveInFolder}
								>
									<HeartFavourites />
								</button>

								{/* ➕ Default Add to Meal Planner Button */}
								<button
									className="absolute top-14 p-2 rounded-full shadow-md"
									onClick={handleAddToMealPlanner} // Show PopMealPlan
								>
									<AddToMealPlanner />
								</button>
							</>
						)}
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
					<div className="h-12 mb-8">
						<h3 className="text-lg text-gray-800 line-clamp-2">
							{dishName}
						</h3>
						<p className="text-sm text-gray-600 mt-1 line-clamp-3">
							{description}
						</p>
					</div>
					<div className="flex justify-between items-center text-gray-600 mt-2">
						<div className="flex items-center space-x-1">
							<CategoryIcon />
							<span>{categoryName}</span>
						</div>
						<div className="flex items-center space-x-1">
							<TimeIcon />
							<span>{time}</span>
						</div>
					</div>
					<div className="border-t border-gray-200 my-2"></div>
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

			{/* PopMealPlan Modal */}
			{showMealPlan && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="mt-8 md-mt-0 bg-white p-6 rounded-lg shadow-lg relative w-[90%] max-w-4xl">
						<button
							className="absolute top-3 right-3 text-black px-2 py-1 rounded-full text-xs bg-green-500"
							onClick={() => setShowMealPlan(false)} // Close PopMealPlan
						>
							<FontAwesomeIcon
								icon={faXmark}
								className="text-gray-600 text-xs"
							/>
						</button>
						<PopMealPlan />
					</div>
				</div>
			)}
			{showSaveInFolder && (
				<SaveInFolderPopup onClose={() => setShowSaveInFolder(false)} />
			)}
		</>
	);
}

export default RecipeCard;

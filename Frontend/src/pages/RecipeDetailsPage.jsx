import { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "../components/StarRating";
import RecipeShortInfoBox from "../components/RecipeDetailsPage/RecipeShortInfoBox";
import Warning from "../components/RecipeDetailsPage/Warning";
import IngredientsInstructions from "../components/RecipeDetailsPage/IngredientsInstructions";
import NutritionalValueDropdown from "../components/RecipeDetailsPage/NutritionalValueDropdown";
import NutritionInfo from "../components/RecipeDetailsPage/NutritionInfo";
import PortionBar from "../components/RecipeDetailsPage/PortionBar";
import RecipeImage from "../components/RecipeDetailsPage/RecipeImage";
import { useParams } from "react-router-dom";
// import { useRatings } from "../contexts/RecipesContext";
import { useAuth } from "../contexts/AuthContext";

function RecipeDetailsPage() {
	const { id } = useParams();
	const { isLoggedIn, user } = useAuth(); // Use AuthContext
	const [userRating, setUserRating] = useState(null); // Store the user's rating
	const [hoveredStar, setHoveredStar] = useState(0);
	const [recipe, setRecipe] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [portionMultiplier, setPortionMultiplier] = useState(2);
	const [averageRating, setAverageRating] = useState(0);
	const [reviewCount, setReviewCount] = useState(0);

	useEffect(() => {
		const fetchRecipe = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_APP_BACKEND_URL}/recipes/${id}`
				);
				setRecipe(response.data);
			} catch (error) {
				console.error("Error fetching recipe details:", error);
				setError("Failed to load recipe details.");
			} finally {
				setLoading(false);
			}
		};

		fetchRecipe();
	}, [id]);

	useEffect(() => {
		const fetchRatings = async () => {
			try {
				const response = await axios.get(
					`${
						import.meta.env.VITE_APP_BACKEND_URL
					}/recipes/${id}/ratings`
				);
				setAverageRating(response.data.average_rating);
				setReviewCount(response.data.review_count);
			} catch (error) {
				console.error("Error fetching ratings:", error);
			}
		};

		fetchRatings();
	}, [id]);

	if (loading) {
		return <p>Loading recipe details...</p>;
	}

	if (!recipe) {
		return <p>Recipe not found.</p>;
	}

	if (error) {
		return <p className="text-red-500">{error}</p>;
	}

	const handlePortionChange = (newPortion) => {
		setPortionMultiplier(newPortion / recipe.serving_size);
	};

	// const handleRatingChange = (newRating) => {
	// 	setUserRating(newRating);
	// 	console.log("User selected rating:", newRating);
	// 	// You can send this value to the backend or update a global state
	// };

	const handleRatingChange = async (newRating) => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_APP_BACKEND_URL}/recipes/${id}/rate`,
				{ rating: newRating },
				{
					headers: {
						Authorization: `Bearer ${user?.token}`, // Ensure the token is included
					},
				}
			);
			setAverageRating(response.data.average_rating);
			setReviewCount(response.data.review_count);
			setUserRating(newRating); // Update user rating locally
		} catch (error) {
			console.error("Error submitting rating:", error);
			alert("You need to be logged in to rate this recipe.");
		}
	};

	return (
		<div className="grid grid-cols-12 gap-6 md:gap-y-4 mt-20">
			<div className="flex items-center col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-1  md:self-start lg:row-span-1">
				{/* <StarRating
					totalStars={5}
					staticRating={4}
					// staticRating={ratings[id] || 0}
					// onChange={handleRatingChange} // Pass this function to capture changes
				/>
				<h5 className="mt-1 ml-2">(84)</h5> */}

				{/* Static Star Rating Display */}
				<StarRating totalStars={5} staticRating={averageRating} />
				<h5 className="mt-1 ml-2">({reviewCount} reviews)</h5>
			</div>

			<h1 className="text-4xl font-bold col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-2 lg:row-span-1 lg:text-5xl">
				{recipe.title}
			</h1>

			<div className="col-start-2 col-span-10 md:col-start-6 md:col-span-6 md:row-start-1 md:row-span-3 lg:row-start-1 lg:row-span-5">
				<RecipeImage
					imageUrl={`${import.meta.env.VITE_APP_BACKEND_URL}${
						recipe.image_url
					}`}
					title={recipe.title}
					firstName={recipe.first_name}
					lastName={recipe.last_name}
					profilePicture={`${import.meta.env.VITE_APP_BACKEND_URL}${
						recipe.profile_picture_url
					}`}
				/>
			</div>

			<div className="col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-3 lg:row-start-3 lg:row-span-1 lg:col-span-3 lg:col-start-2">
				<RecipeShortInfoBox id={id} />
			</div>

			<p className="col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-4 lg:row-start-4 lg:row-span-1 lg:text-lg">
				{recipe.description}
			</p>

			<div className="col-start-2 col-span-6 md:col-start-2 md:col-span-4 md:row-start-5 lg:row-start-5 lg:col-start-2 lg:col-span-2 grid grid-cols-2">
				<Warning title="Lactose" isPresent={recipe.lactose} />
				<Warning title="Gluten" isPresent={recipe.gluten} />
			</div>

			<div className="col-start-2 col-span-10 md:col-start-6 md:col-span-6 md:row-start-4 md:row-span-3 lg:row-start-6  lg:row-span-1">
				<NutritionInfo id={id} />
			</div>
			<div className="col-start-2 col-span-10 md:row-start-7">
				<PortionBar
					currentPortion={recipe.serving_size * portionMultiplier}
					onPortionChange={handlePortionChange}
				/>
			</div>
			<div className="col-start-2 col-span-10">
				<IngredientsInstructions
					ingredients={recipe.ingredients}
					instructions={recipe.instructions}
				/>
{/* 
				<IngredientsInstructions
					ingredients={recipe.ingredients.map((ingredient) => ({
						...ingredient,
						amount: ingredient.amount * portionMultiplier,
					}))}
					instructions={recipe.instructions}
				/> */}
			</div>
			<div className="col-start-2 col-span-10">
				<NutritionalValueDropdown
					protein={recipe.protein}
					carbs={recipe.carbs}
					fat={recipe.fat}
					energyKJ={recipe.energy_kj}
					energyKCAL={recipe.energy_kcal}
				/>
			</div>

			<div className="col-start-2 col-span-10 grid ">
				{" "}
				<NutritionalValueDropdown id={id} />
				<div className=" md:col-start-2 mt-10 md:mt-0 flex flex-col items-center">
					<h3 className="font-bold text-2xl">Rate this recipe</h3>

					{/* <StarRating
						totalStars={5}
						onRatingChange={handleRatingChange} // Pass the callback
					/>
					{userRating > 0 && (
						<p className="mt-1 text-gray-600">
							{{
								1: "Very bad!",
								2: "Bad",
								3: "Good",
								4: "Very good",
								5: "Excellent",
							}[userRating] || ""}
						</p>
					)} */}

					{/* <StarRating
						totalStars={5}
						onRatingChange={handleRatingChange} // Pass the callback
						onHoverChange={setHoveredStar} // Track hover changes
					/> */}

					{isLoggedIn ? (
						<div className="mt-4">
							<StarRating
								totalStars={5}
								onRatingChange={handleRatingChange}
								onHoverChange={setHoveredStar}
							/>
							<p className="my-1 text-gray-600">
								{{
									0: "",
									1: "Very bad!",
									2: "Bad",
									3: "Good",
									4: "Very good",
									5: "Excellent!",
								}[hoveredStar || userRating] || ""}
							</p>
						</div>
					) : (
						<p className="text-gray-500 mt-4">
							Log in to rate this recipe.
						</p>
					)}

				
				</div>
			</div>
		</div>
	);
}

export default RecipeDetailsPage;

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
import { useAuth } from "../contexts/AuthContext";
import { usePopup } from "../contexts/PopupContext";
import LoginForm from "../components/LoginForm";
import CommentSection from "../components/CommentSection";
import RecipeSwoosh from "../assets/svg/RecipeSwoosh";

// Receptdetaljsida
function RecipeDetailsPage() {
	const { id } = useParams();
	const { isLoggedIn } = useAuth(); // Use AuthContext
	const [userRating, setUserRating] = useState(0); // Store the user's rating
	const [hoveredStar, setHoveredStar] = useState(0);
	const [recipe, setRecipe] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [portionMultiplier, setPortionMultiplier] = useState(2);
	const [averageRating, setAverageRating] = useState(0);
	const [reviewCount, setReviewCount] = useState(0);
	const { openPopup } = usePopup();

	// Hämtar receptdetaljer
	useEffect(() => {
		const fetchRecipe = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_APP_BACKEND_URL}/recipes/${id}`
				);
				setRecipe(response.data);

				// Once we have the recipe, set portionMultiplier = its serving_size
				if (response.data.serving_size) {
					setPortionMultiplier(response.data.serving_size);
				}
			} catch (error) {
				console.error("Error fetching recipe details:", error);
				setError("Failed to load recipe details.");
			} finally {
				setLoading(false);
			}
		};

		fetchRecipe();
	}, [id]);
	// Hämtar medelbetyg och antal recensioner
	useEffect(() => {
		const fetchUserRating = async () => {
			try {
				const response = await axios.get(
					`${
						import.meta.env.VITE_APP_BACKEND_URL
					}/recipes/${id}/userRating`,
					{
						withCredentials: true,
					}
				);

				setUserRating(response.data.user_rating);
				console.log(response.data.user_rating);
			} catch (error) {
				console.error("Error fetching user rating:", error);
				setError("Failed to load user rating.");
			}
		};

		fetchUserRating();
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
	// Visa laddningsindikator, felmeddelande eller innehåll
	if (loading) {
		return <p>Loading recipe details...</p>;
	}

	if (!recipe) {
		return <p>Recipe not found.</p>;
	}

	if (error) {
		return <p className="text-red-500">{error}</p>;
	}
	// Hanterar ändring av portioner
	const handlePortionChange = (newPortion) => {
		setPortionMultiplier(newPortion);
	};

	// Hanterar ändring av betyg
	const handleRatingChange = async (newRating) => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_APP_BACKEND_URL}/recipes/${id}/rate`,
				{ rating: newRating },
				{
					withCredentials: true,
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
		<div className="relative">
			{/* Swoosh Background */}
			<div className="absolute -top-[400px] -right-[150px] w-full h-auto z-0 overflow-hidden">
				<RecipeSwoosh />
			</div>

			<div className="grid grid-cols-12 gap-6 md:gap-y-4 mt-20">
				{/* Medelbetyg och recensioner */}
				<div className="flex items-center col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-1  md:self-start lg:row-span-1">
					<StarRating totalStars={5} staticRating={averageRating} />
					<h5 className="mt-1 ml-2">({reviewCount} reviews)</h5>
				</div>
				{/* Recepttitel */}
				<h1 className="text-4xl font-bold col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-2 lg:row-span-1 lg:text-5xl">
					{recipe.title}
				</h1>

				<div className="col-start-2 col-span-10 md:col-start-6 md:col-span-6 md:row-start-1 md:row-span-3 lg:row-start-1 lg:row-span-5">
					<RecipeImage
						imageUrl={`${import.meta.env.VITE_APP_BACKEND_URL}${
							recipe.image_url
						}`}
						title={recipe.title}
						firstName={recipe.user_first_name}
						lastName={recipe.user_last_name}
						profilePicture={`${
							import.meta.env.VITE_APP_BACKEND_URL
						}${recipe.user_profile_picture}`}
					/>
				</div>
				{/* Kort info om receptet */}
				<div className="col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-3 lg:row-start-3 lg:row-span-1 lg:col-span-3 lg:col-start-2">
					<RecipeShortInfoBox
						category={recipe.category_name} // e.g., "Poultry"
						cookingTime={recipe.cooking_time_minutes} // e.g., "30"
						ingredientsCount={recipe.ingredients.length} // e.g., 12
					/>
				</div>

				<p className="col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-4 lg:row-start-4 lg:row-span-1 lg:text-lg">
					{recipe.description}
				</p>
				{/* Allergivarningar */}
				<div className="col-start-2 col-span-6 md:col-start-2 md:col-span-4 md:row-start-5 lg:row-start-5 lg:col-start-2 lg:col-span-2 grid grid-cols-2">
					<Warning title="Lactose" isPresent={recipe.lactose} />
					<Warning title="Gluten" isPresent={recipe.gluten} />
				</div>
				{/* Näringsinformation */}
				<div className="col-start-2 col-span-10 md:col-start-6 md:col-span-6 md:row-start-4 md:row-span-3 lg:row-start-6  lg:row-span-1">
					<NutritionInfo id={id} />
				</div>
				{/* Ändra portioner */}
				<div className="col-start-2 col-span-10 md:row-start-7">
					<PortionBar
						currentPortion={recipe.serving_size}
						onPortionChange={handlePortionChange}
					/>
				</div>
				{/* Ingredienser och instruktioner */}
				<div className="col-start-2 col-span-10">
					<IngredientsInstructions
						ingredients={recipe.ingredients || []}
						instructions={recipe.instructions || []}
						servingSize={recipe.serving_size}
						portionMultiplier={portionMultiplier}
					/>
				</div>
				{/* Näringsvärden dropdown */}
				<div className="col-start-2 col-span-10">
					<NutritionalValueDropdown
						protein={recipe.protein}
						carbs={recipe.Carbs}
						fat={recipe.fat}
						energyKJ={recipe.energyKJ}
						energyKCAL={recipe.energyKCAL}
					/>
				</div>
				{/* Betygsättning */}
				<div className="col-start-2 col-span-10 grid ">
					<div className=" md:col-start-2 mt-10 md:mt-0 flex flex-col items-center">
						<h3 className="font-bold text-2xl">Rate this recipe</h3>

						{isLoggedIn ? (
							<div className="mt-4 flex flex-col items-center">
								<StarRating
									totalStars={5}
									onRatingChange={handleRatingChange}
									onHoverChange={setHoveredStar}
									initialRating={userRating}
								/>

								<p className="mt-2 text-gray-600 text-center">
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
								<a
									href="#"
									className="text-blue-500 underline cursor-pointer"
									onClick={() => openPopup(<LoginForm />)}
								>
									Log in to rate this recipe.
								</a>
							</p>
						)}
					</div>
				</div>
			</div>

			<div className="py-5">
				<div className="bg-gray-200 flex justify-center w-full h-[70px]">
					Ad
				</div>
			</div>
			{/* Kommentarsektion */}
			<CommentSection />
		</div>
	);
}

export default RecipeDetailsPage;

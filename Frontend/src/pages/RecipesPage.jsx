import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import HeadingWithLine from "../components/HeadingWithLine";
import axios from "axios";
import SortMenu from "../components/SortMenu";
import FiltersMenu from "../components/FiltersMenu";
import SearchField from "../components/SearchField"


const RecipePage = () => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_APP_BACKEND_URL}/recipes`
				);
				setRecipes(response.data);
			} catch (error) {
				console.error("Error fetching recipes:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchRecipes();
	}, []);

	if (loading) {
		return <p className="text-center">Loading recipes...</p>;
	}

	return (
		<div className="mx-auto py-8 grid grid-cols-12 gap-6">
			{/* Page Title */}
			<div className="col-start-2 col-span-3">
				<HeadingWithLine text="Recipes" />
			</div>

			<div className="col-start-2 col-span-10">
				<div className="flex justify-between items-center space-x-4">
					<FiltersMenu />
					
					<div className="w-1/2">
					<SearchField />
					</div>

					<SortMenu />
				</div>
			</div>

			{/* Recipe Grid */}
			<div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{recipes.map((recipe) => (
					<RecipeCard
						key={recipe.id}
						id={recipe.id}
						image={`${import.meta.env.VITE_APP_BACKEND_URL}${
							recipe.image_url
						}`}
						dishName={recipe.title}
						categoryName={recipe.category_name}
						time={`${recipe.cooking_time_minutes} min`}
						authorName={`${recipe.first_name} ${recipe.last_name}`}
						authorImage={`${import.meta.env.VITE_APP_BACKEND_URL}${
							recipe.profile_picture_url
						}`}
						// Correct average rating (rounded to 1 decimal)
						rating={parseFloat(recipe.average_rating).toFixed(1)}
						// Correct review count (distinct users who reviewed)
						reviews={recipe.review_count || 0}
						// Correct comment count (comments + replies)
						commentsCount={recipe.total_comments || 0}
					/>
				))}
			</div>
		</div>
	);
};

export default RecipePage;

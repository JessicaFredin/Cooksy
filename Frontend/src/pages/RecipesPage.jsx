// // import RecipeCard from "../components/RecipeCard";
// // import HeadingWithLine from "../components/HeadingWithLine";
// // import { MeatIcon } from "../assets/icons/MeatIcon";
// // import { ChickenIcon } from "../assets/icons/ChickenIcon";
// // import { FishIcon } from "../assets/icons/FishIcon";
// // import { VegetableIcon } from "../assets/icons/VegetableIcon";
// // import food1 from "../assets/images/food1.jpg";
// // import profile1 from "../assets/images/profile1.jpg";

// // const RecipePage = () => {
// // 	// Dummy data för att visa korten
// // 	const recipes = [
// // 		{
// // 			id: 1,
// // 			name: "Shishkebab med baba ganoush",
// // 			icon: <MeatIcon />,
// // 			category: "Meat",
// // 			time: "90 min",
// // 			rating: 2,
// // 			reviews: 25,
// // 			comments: 5,
// // 		},
// // 		{
// // 			id: 2,
// // 			name: "Cheeseburger pasta skillet (one pot)",
// // 			icon: <MeatIcon />,
// // 			category: "Meat",
// // 			time: "30 min",
// // 			rating: 5,
// // 			reviews: 36,
// // 			comments: 10,
// // 		},
// // 		{
// // 			id: 3,
// // 			name: "Smashed burger med extra ost",
// // 			icon: <ChickenIcon />,
// // 			category: "Chicken",
// // 			time: "60 min",
// // 			rating: 4,
// // 			reviews: 55,
// // 			comments: 7,
// // 		},
// // 		{
// // 			id: 4,
// // 			name: "Sushi",
// // 			icon: <FishIcon />,
// // 			category: "Fish",
// // 			time: "80 min",
// // 			rating: 1,
// // 			reviews: 15,
// // 			comments: 8,
// // 		},
// // 		{
// // 			id: 5,
// // 			name: "Chickpea and harissa stew with herby yoghurt",
// // 			icon: <VegetableIcon />,
// // 			category: "Vegetable",
// // 			time: "45 min",
// // 			rating: 3,
// // 			reviews: 125,
// // 			comments: 6,
// // 		},
// // 		{
// // 			id: 6,
// // 			name: "Shrimp salad",
// // 			icon: <FishIcon />,
// // 			category: "Fish",
// // 			time: "120 min",
// // 			rating: 3,
// // 			reviews: 37,
// // 			comments: 19,
// // 		},
// // 		{
// // 			id: 7,
// // 			name: "Steamed mussels in tomato cream sauce",
// // 			icon: <VegetableIcon />,
// // 			category: "Vegetable",
// // 			time: "75 min",
// // 			rating: 2,
// // 			reviews: 78,
// // 			comments: 35,
// // 		},
// // 		{
// // 			id: 8,
// // 			name: "Chicken and asparagus",
// // 			icon: <ChickenIcon />,
// // 			category: "Chicken",
// // 			time: "90 min",
// // 			rating: 3,
// // 			reviews: 356,
// // 			comments: 77,
// // 		},
// // 		{
// // 			id: 9,
// // 			name: "Steamed mussels in tomato cream sauce",
// // 			icon: <VegetableIcon />,
// // 			category: "Vegetable",
// // 			time: "100 min",
// // 			rating: 4,
// // 			reviews: 545,
// // 			comments: 89,
// // 		},
// // 	];

// // 	return (
// // 		<div className="mx-auto py-8 grid grid-cols-12 gap-6">
// // 			{/* Page Title */}
// // 			<div className="col-start-2 col-span-3">
// // 				<HeadingWithLine text="Recipes" />
// // 			</div>

// // 			{/* Recipe Grid */}
// // 			<div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // 				{recipes.map((recipe, index) => (
// // 					<RecipeCard
// // 						key={index}
// // 						image={food1}
// // 						dishName={recipe.name}
// // 						categoryIcon={recipe.icon} // Change this to other icons dynamically
// // 						categoryName={recipe.category}
// // 						time={recipe.time}
// // 						authorName="Lisa Karlsson"
// // 						authorImage={profile1}
// // 						rating={recipe.rating}
// // 						reviews={recipe.reviews}
// // 						commentsCount={recipe.comments}
// // 					/>
// // 				))}
// // 			</div>
// // 		</div>

// // 		// <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">

// // 		// 	<div className="col-start-2 col-span-3">
// // 		// 		<HeadingWithLine text="Recipes" />
// // 		//   </div>

// // 		// 	<RecipeCard
// // 		// 		image={food1}
// // 		// 		dishName="Shishkebab med baba ganoush"
// // 		// 		categoryIcon={MeatIcon} // Change this to other icons dynamically
// // 		// 		categoryName="Meat"
// // 		// 		time="90 min"
// // 		// 		authorName="Lisa Karlsson"
// // 		// 		authorImage={profile1}
// // 		// 		rating={2}
// // 		// 		reviews={15}
// // 		// 		commentsCount={3}
// // 		// 	/>
// // 		// </div>
// // 	);
// // };

// // export default RecipePage;

// import { useEffect, useState } from "react";
// import RecipeCard from "../components/RecipeCard";
// import HeadingWithLine from "../components/HeadingWithLine";
// import axios from "axios";

// const RecipePage = () => {
// 	const [recipes, setRecipes] = useState([]);
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		// Fetch recipes from the API
// 		const fetchRecipes = async () => {
// 			try {
// 				const response = await axios.get("/recipes"); // Replace with your API endpoint
// 				const data = await response.json();
// 				setRecipes(data); // Update the recipes state
// 			} catch (error) {
// 				console.error("Error fetching recipes:", error);
// 			} finally {
// 				setLoading(false); // Stop loading spinner
// 			}
// 		};

// 		fetchRecipes();
// 	}, []);

// 	if (loading) {
// 		return <p className="text-center">Loading recipes...</p>
// 		// Optional loading state
// 	}

// 	return (
// 		<div className="mx-auto py-8 grid grid-cols-12 gap-6">
// 			{/* Page Title */}
// 			<div className="col-start-2 col-span-3">
// 				<HeadingWithLine text="Recipes" />
// 			</div>

// 			{/* Recipe Grid */}
// 			<div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// 				{recipes.map((recipe) => (
// 					<RecipeCard
// 						key={recipe.id}
// 						image={recipe.image_url} // Update with the correct field name from your DB
// 						dishName={recipe.title}
// 						categoryName={recipe.category_name} // Add correct mapping
// 						time={`${recipe.time_in_minutes} min`} // Example if time is in minutes
// 						authorName="Lisa Karlsson" // Replace with actual data if available
// 						authorImage="/path/to/default-image.jpg" // Default author image or dynamic field
// 						rating={recipe.rating} // Ensure the API provides this
// 						reviews={recipe.reviews_count || 0}
// 						commentsCount={recipe.comments_count || 0}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default RecipePage;

import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import HeadingWithLine from "../components/HeadingWithLine";
import axios from "axios";
import profile1 from "../assets/images/profile1.jpg";

const RecipePage = () => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				// GET /recipes from your backend
				const response = await axios.get(
					import.meta.env.VITE_APP_BACKEND_URL + "/recipes"
				);
				console.log("response.data:", response.data); // Inspect the shape here
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

			{/* Recipe Grid */}
			<div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{recipes.map((recipe) => (
					<RecipeCard
						key={recipe.id}
						id={recipe.id}
						// image={recipe.image_url}
						image={`${import.meta.env.VITE_APP_BACKEND_URL}${
							recipe.image_url
						}`}
						dishName={recipe.title}
						categoryName={recipe.category_name}
						time={`${recipe.cooking_time_minutes} min`}
						authorName={`${recipe.first_name} ${recipe.last_name}`}
						// authorImage={recipe.profile_image || profile1}
						authorImage={`${import.meta.env.VITE_APP_BACKEND_URL}${
							recipe.profile_picture_url
						}`}
						rating={0} // If you want a default or dynamic rating
						reviews={0} // Or fetch from DB if you have them
						commentsCount={0} // Or fetch from DB if you have them
					/>
				))}
			</div>
		</div>
	);
};

export default RecipePage;

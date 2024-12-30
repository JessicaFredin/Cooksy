/* eslint-disable react/prop-types */
// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
// import { createContext, useContext, useState } from "react";

// const RatingsContext = createContext();

// export const useRatings = () => useContext(RatingsContext);

// export const RatingsProvider = ({ children }) => {
// 	const [ratings, setRatings] = useState({});

// 	const updateRating = (id, rating) => {
// 		setRatings((prev) => ({ ...prev, [id]: rating }));
// 	};

// 	return (
// 		<RatingsContext.Provider value={{ ratings, updateRating }}>
// 			{children}
// 		</RatingsContext.Provider>
// 	);
// };





import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const RecipesContext = createContext();

export const useRecipes = () => useContext(RecipesContext);

export const RecipesProvider = ({ children }) => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(false);

	// Fetch recipes from the backend
	const fetchRecipes = async () => {
		setLoading(true);
		try {
			const response = await axios.get("/api/recipes"); // Adjust the endpoint as per your backend
			setRecipes(response.data);
		} catch (error) {
			console.error("Error fetching recipes:", error);
		} finally {
			setLoading(false);
		}
	};

	// Add a new recipe (called when a recipe is added in CreateRecipePage)
	const addRecipe = (newRecipe) => {
		setRecipes((prev) => [newRecipe, ...prev]);
	};

	useEffect(() => {
		fetchRecipes();
	}, []);

	return (
		<RecipesContext.Provider
			value={{ recipes, addRecipe, fetchRecipes, loading }}
		>
			{children}
		</RecipesContext.Provider>
	);
};

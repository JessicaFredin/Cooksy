/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const RecipesContext = createContext();

export const useRecipes = () => useContext(RecipesContext);

export const RecipesProvider = ({ children }) => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filteredRecipes, setFilteredRecipes] = useState([]); 

	// Fetch recipes from the backend
	const fetchRecipes = async () => {
		setLoading(true);
		try {
			const response = await axios.get("/recipes"); // Adjust the endpoint as per your backend
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
			value={{
				recipes,
				setRecipes,
				addRecipe,
				fetchRecipes,
				loading,
				filteredRecipes,
				setFilteredRecipes,
			}}
		>
			{children}
		</RecipesContext.Provider>
	);
};

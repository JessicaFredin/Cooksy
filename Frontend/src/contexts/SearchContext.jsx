/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import axios from "axios";

// Create the context
const SearchContext = createContext();

// Custom hook for easier access
export const useSearch = () => useContext(SearchContext);

// Provider Component
export const SearchProvider = ({ children }) => {
	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState({
		recipes: [],
		profiles: [],
		articles: [],
	});
	const [loading, setLoading] = useState(false);

	// Handle search request
	const handleSearch = async (searchQuery) => {
		setQuery(searchQuery);
		setLoading(true);

		try {
			const response = await axios.get(
				`${import.meta.env.VITE_APP_BACKEND_URL}/search/${searchQuery}`
			);

			const { recipes, profiles, articles } = response.data;

			setSearchResults({
				recipes: recipes || [],
				profiles: profiles || [],
				articles: articles || [],
			});
		} catch (error) {
			console.error("Search failed:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<SearchContext.Provider
			value={{ query, searchResults, loading, handleSearch }}
		>
			{children}
		</SearchContext.Provider>
	);
};

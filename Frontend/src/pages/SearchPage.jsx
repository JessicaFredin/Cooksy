// // // import { useState } from "react";
// // // import RecipeCard from "../components/RecipeCard";
// // // import { MeatIcon } from "../assets/icons/MeatIcon";
// // // import { ChickenIcon } from "../assets/icons/ChickenIcon";
// // // import { FishIcon } from "../assets/icons/FishIcon";
// // // import { VegetableIcon } from "../assets/icons/VegetableIcon";
// // // import Food1 from "../assets/images/food1.jpg";
// // // import Blogpost from "../components/Blogpost";
// // // import GreenRing from "../assets/svg/GreenRing";
// // // import SortMenu from "../components/SortMenu";
// // // import FiltersMenu from "../components/FiltersMenu";
// // // import HeadingWithLine from "../components/HeadingWithLine";
// // // import ProfileCard from "../components/ProfileCard"
// // // import NoResultsImg from "../assets/images/NoResults.png"

// // // const SearchPage = () => {
// // //    // Håller reda på vilken flik som är aktiv: "recipes", "profiles" eller "articles"
// // //   const [activeTab, setActiveTab] = useState("recipes");
// // //   // Sökterm som används för att visa antalet resultat
// // //   const searchResults="protein"
// // //   // Receptdata för att simulera receptresultat
// // //   const recipes = [
// // //             {
// // //                 id: 1,
// // //                 name: "Shishkebab med baba ganoush",
// // //                 icon: <MeatIcon />,
// // //                 category: "Meat",
// // //                 time: "90 min",
// // //                 rating: 2,
// // //                 reviews: 25,
// // //                 comments: 5,
// // //             },
// // //             {
// // //                 id: 2,
// // //                 name: "Cheeseburger pasta skillet (one pot)",
// // //                 icon: <MeatIcon />,
// // //                 category: "Meat",
// // //                 time: "30 min",
// // //                 rating: 5,
// // //                 reviews: 36,
// // //                 comments: 10,
// // //             },
// // //             {
// // //                 id: 3,
// // //                 name: "Smashed burger med extra ost",
// // //                 icon: <ChickenIcon />,
// // //                 category: "Chicken",
// // //                 time: "60 min",
// // //                 rating: 4,
// // //                 reviews: 55,
// // //                 comments: 7,
// // //             },
// // //             {
// // //                 id: 4,
// // //                 name: "Sushi",
// // //                 icon: <FishIcon />,
// // //                 category: "Fish",
// // //                 time: "80 min",
// // //                 rating: 1,
// // //                 reviews: 15,
// // //                 comments: 8,
// // //             },
// // //             {
// // //                 id: 5,
// // //                 name: "Chickpea and harissa stew with herby yoghurt",
// // //                 icon: <VegetableIcon />,
// // //                 category: "Vegetable",
// // //                 time: "45 min",
// // //                 rating: 3,
// // //                 reviews: 125,
// // //                 comments: 6,
// // //             },
// // //             {
// // //                 id: 6,
// // //                 name: "Shrimp salad",
// // //                 icon: <FishIcon />,
// // //                 category: "Fish",
// // //                 time: "120 min",
// // //                 rating: 3,
// // //                 reviews: 37,
// // //                 comments: 19,
// // //             }
// // //   ]
// // //   // i nuläget Tom array för att simulera profildata
// // //   const profiles = []
// // //   //Array for artikeldata - för att simulera artiklar
// // //   const profiles1 = [
// // //     { name: "Alice", id: "1"},
// // //     { name: "Bob", id: "2"},
// // //     { name: "Charlie", id: "3"},
// // //     { name: "Alice", id: "4"},
// // //     { name: "Bob", id: "5"},
// // //     { name: "Charlie", id: "6"}
// // //   ];

// // //   // Funktion för att rendera innehåll baserat på aktiv flik
// // //   const renderContent = () => {
// // //     // Om den aktiva fliken är "recipes"
// // //     if (activeTab === "recipes") {
// // //       return (
// // //         <div className="col-start-2 col-span-10">
// // //   {recipes.length === 0 ? (
// // //     // Om det inte finns några recept i `recipes`-arrayen visa meddealndet nedan
// // //     <div className="flex flex-col justify-center items-center">
// // //     <h3 className="text-center font-medium md:text-3xl font-pacifico m-16">No recipe found</h3>
// // //     {/* Bild som visas om inga resultat finns */}
// // //     <img
// // //     className="md:w-2/3"
// // //       src={NoResulteImg}
// // //     />
// // //     </div>
// // //   ) : (
// // //     // Om recept finns, rendera dem i ett grid-layout
// // //     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
// // //       {recipes.map((recipe, index) => (
// // //         <div key={index} className="flex justify-center">
// // //           <RecipeCard
// // //             image={Food1} // Importera eller använd relevant bild här.
// // //             dishName={recipe.name}
// // //             categoryName={recipe.category}
// // //             time={recipe.time}
// // //             authorName="Lisa karlsson"
// // //             authorImage={Food1}
// // //             rating={recipe.rating}
// // //             reviews={recipe.reviews}
// // //             commentsCount={recipe.comments}
// // //           />
// // //         </div>
// // //       ))}
// // //     </div>
// // //   )}
// // // </div>
// // //       );
// // //       // Om den aktiva fliken är "profiles"
// // //     } else if (activeTab === "profiles") {
// // //       return (
// // //         <div className="col-start-2 col-span-10">
// // //   {profiles.length === 0 ? (
// // //     // Om det inte finns några profiler i `profiles`-arrayen - visa meddelandet nedan
// // //     <div className="flex flex-col justify-center items-center">
// // //     <h3 className="text-center font-medium md:text-3xl font-pacifico m-16">No profile found</h3>
// // //     {/* Bild som visas om inga resultat finns */}
// // //     <img
// // //     className="md:w-2/3"
// // //       src={NoResulteImg}
// // //     />
// // //     </div>
// // //   ) : (
// // //         <div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
// // //           {profiles.map((profile) => (
// // //             <div key={profile.index} className="flex justify-center">
// // //             <ProfileCard
// // //             name={profile.name} {/* Renderar profilkort */}
// // //             />
// // //             </div>
// // //           ))}
// // //         </div>
// // //          )}
// // // </div>
// // //       );
// // //     // Om den aktiva fliken är "articles"
// // //     } else if (activeTab === "articles") {
// // //       return (
// // //         <div className="col-start-2 col-span-10">
// // //   {profiles.length === 0 ? (
// // //     // Om det inte finns några artiklar - visa meddelandet nedan
// // //     <div className="flex flex-col justify-center items-center">
// // //     <h3 className="text-center font-medium md:text-3xl font-pacifico m-16">No articles found</h3>
// // //     {/* Bild som visas om inga resultat finns */}
// // //     <img
// // //     className="md:w-2/3"
// // //       src={NoResulteImg}
// // //     />
// // //     </div>
// // //   ) : (
// // //     <div className="space-y-6">
// // //     {profiles.map((profile) => (
// // //       <div key={profile.index}>
// // //       <Blogpost
// // //       titel={profile.name} {/* Renderar inlägg */}
// // //       />
// // //       </div>
// // //     ))}
// // //     </div>
// // //          )}
// // //          </div>
// // //       );
// // //     }
// // //   };

// // //   return (
// // //     <div className="grid grid-cols-12 gap-x-4 mt-32">
// // //       <div className="col-start-2 col-span-10">
// // //         {/* Rubrik med antal sökresultat */}
// // //         <HeadingWithLine text={`(1085) results for “${searchResults}”`} />
// // //       </div>
// // //       {/* Sekundär navigation */}
// // //       <div className="col-start-2 col-span-10 space-x-4 flex justify-between md:justify-start lg:space-x-20 mt-10">
// // //       <GreenRing
// // //         text="Recipes"
// // //         onClick={() => setActiveTab("recipes")}
// // //         isActive={activeTab === "recipes"}
// // //       />
// // //       <GreenRing
// // //         text="Profiles"
// // //         onClick={() => setActiveTab("profiles")}
// // //         isActive={activeTab === "profiles"}
// // //       />
// // //       <GreenRing
// // //         text="Articles"
// // //         onClick={() => setActiveTab("articles")}
// // //         isActive={activeTab === "articles"}
// // //       />
// // //       </div>
// // //       {/* Sorterings- och filtreringsmenyer */}
// // //       <div className="col-start-2 col-span-10 flex items-center justify-between mt-12 mb-8 " >
// // //         <FiltersMenu/>
// // //         <SortMenu/>
// // //       </div>
// // //       {/* Renderar innehållet baserat på aktiv flik */}
// // //       <div className="col-start-2 col-span-10">{renderContent()}</div>
// // //     </div>
// // //   );
// // // };

// // // export default SearchPage;

// // import { useState } from "react";
// // import axios from "axios";
// // import RecipeCard from "../components/RecipeCard";
// // import ProfileCard from "../components/ProfileCard";
// // import Blogpost from "../components/Blogpost";
// // import SearchField from "../components/SearchField";
// // import HeadingWithLine from "../components/HeadingWithLine";
// // import FiltersMenu from "../components/FiltersMenu";
// // import SortMenu from "../components/SortMenu";
// // import NoResultsImg from "../assets/images/NoResults.png";

// // const SearchPage = () => {
// // 	const [activeTab, setActiveTab] = useState("recipes");
// // 	const [searchResults, setSearchResults] = useState({
// // 		recipes: [],
// // 		profiles: [],
// // 		articles: [],
// // 	});
// // 	const [loading, setLoading] = useState(false);
// // 	const [query, setQuery] = useState("");
// // 	const [recipes, setRecipes] = useState("");
// // 	const [profiles, setProfiles] = useState("");
// // 	const [articles, setArticles] = useState("");

// // 	// const handleSearch = async (searchQuery) => {
// // 	// 	setQuery(searchQuery);
// // 	// 	setLoading(true);

// // 	// 	try {
// // 	// 		const response = await axios.get(
// // 	// 			`${import.meta.env.VITE_APP_BACKEND_URL}/search`,
// // 	// 			{ params: { query: searchQuery } }
// // 	// 		);
// // 	// 		setSearchResults(response.data);
// // 	// 	} catch (error) {
// // 	// 		console.error("Error fetching search results:", error);
// // 	// 	} finally {
// // 	// 		setLoading(false);
// // 	// 	}
// // 	// };

// // 	const handleSearch = async (query) => {
// // 		try {
// // 			const response = await axios.get(
// // 				`${import.meta.env.VITE_APP_BACKEND_URL}/search?query=${query}`
// // 			);

// // 			// Example response destructuring
// // 			const { recipes, profiles, articles } = response.data;

// // 			// Handle data (update state)
// // 			setRecipes(recipes);
// // 			setProfiles(profiles);
// // 			setArticles(articles);
// // 		} catch (error) {
// // 			console.error("Search failed:", error);
// // 		}
// // 	};

// // 	const renderContent = () => {
// // 		const currentResults = searchResults[activeTab];

// // 		if (loading) {
// // 			return <p className="text-center">Loading results...</p>;
// // 		}

// // 		if (!currentResults || currentResults.length === 0) {
// // 			return (
// // 				<div className="flex flex-col justify-center items-center">
// // 					<h3 className="text-center font-medium md:text-3xl font-pacifico m-16">
// // 						No {activeTab} found for {query}
// // 					</h3>
// // 					<img
// // 						className="md:w-2/3"
// // 						src={NoResultsImg}
// // 						alt="No Results"
// // 					/>
// // 				</div>
// // 			);
// // 		}

// // 		// Render results based on the active tab
// // 		if (activeTab === "recipes") {
// // 			return (
// // 				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
// // 					{currentResults.map((recipe) => (
// // 						<RecipeCard
// // 							key={recipe.id}
// // 							image={recipe.image_url}
// // 							dishName={recipe.title}
// // 							categoryName={recipe.category}
// // 							time={`${recipe.cooking_time_minutes} min`}
// // 						/>
// // 					))}
// // 				</div>
// // 			);
// // 		} else if (activeTab === "profiles") {
// // 			return (
// // 				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
// // 					{currentResults.map((profile) => (
// // 						<ProfileCard
// // 							key={profile.id}
// // 							name={`${profile.first_name} ${profile.last_name}`}
// // 						/>
// // 					))}
// // 				</div>
// // 			);
// // 		} else if (activeTab === "articles") {
// // 			return currentResults.map((article) => (
// // 				<Blogpost key={article.id} title={article.title} />
// // 			));
// // 		}
// // 	};

// // 	return (
// // 		<div className="grid grid-cols-12 gap-x-4 mt-32">
// // 			<div className="col-start-2 col-span-10">
// // 				<SearchField onSearch={handleSearch} />
// // 				<HeadingWithLine text={`Results for "${query}"`} />
// // 			</div>

// // 			{/* Navigation Tabs */}
// // 			<div className="col-start-2 col-span-10 space-x-4 flex justify-start mt-10">
// // 				<button onClick={() => setActiveTab("recipes")}>Recipes</button>
// // 				<button onClick={() => setActiveTab("profiles")}>
// // 					Profiles
// // 				</button>
// // 				<button onClick={() => setActiveTab("articles")}>
// // 					Articles
// // 				</button>
// // 			</div>

// // 			{/* Filters */}
// // 			<div className="col-start-2 col-span-10 flex items-center justify-between mt-12 mb-8">
// // 				<FiltersMenu />
// // 				<SortMenu />
// // 			</div>

// // 			{/* Search Results */}
// // 			<div className="col-start-2 col-span-10">{renderContent()}</div>
// // 		</div>
// // 	);
// // };

// // export default SearchPage;




// import { useState } from "react";
// import axios from "axios";
// import RecipeCard from "../components/RecipeCard";
// import ProfileCard from "../components/ProfileCard";
// import Blogpost from "../components/Blogpost";
// import SearchField from "../components/SearchField";
// import HeadingWithLine from "../components/HeadingWithLine";
// import FiltersMenu from "../components/FiltersMenu";
// import SortMenu from "../components/SortMenu";
// import NoResultsImg from "../assets/images/NoResults.png";
// import GreenRing from "../assets/svg/GreenRing";

// const SearchPage = () => {
// 	const [activeTab, setActiveTab] = useState("recipes");
// 	const [searchResults, setSearchResults] = useState({
// 		recipes: [],
// 		profiles: [],
// 		articles: [],
// 	});
// 	const [loading, setLoading] = useState(false);
// 	const [query, setQuery] = useState("");

// 	// Search Handler
// 	const handleSearch = async (searchQuery) => {
// 		setQuery(searchQuery);
// 		setLoading(true);

// 		try {
// 			const response = await axios.get(
// 				`${import.meta.env.VITE_APP_BACKEND_URL}/search/${searchQuery}`
// 			);

// 			const { recipes, profiles, articles } = response.data;
// 			console.log(response.data);
// 			setSearchResults({
// 				recipes: recipes || [],
// 				profiles: profiles || [],
// 				articles: articles || [],
// 			});
// 		} catch (error) {
// 			console.error("Search failed:", error);
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	// Render content based on active tab
// 	const renderContent = () => {
// 		const currentResults = searchResults[activeTab];

// 		if (loading) {
// 			return <p className="text-center">Loading results...</p>;
// 		}

// 		if (!currentResults || currentResults.length === 0) {
// 			return (
// 				<div className="flex flex-col justify-center items-center">
// 					<h3 className="text-center font-medium md:text-3xl font-pacifico m-16">
// 						No {activeTab} found for "{query}"
// 					</h3>
// 					<img
// 						className="md:w-2/3"
// 						src={NoResultsImg}
// 						alt="No Results"
// 					/>
// 				</div>
// 			);
// 		}

// 		// Render Recipes
// 		if (activeTab === "recipes") {
// 			return (
// 				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
// 					{currentResults.map((recipe) => (
// 						<RecipeCard
// 							key={recipe.id}
// 							image={`${import.meta.env.VITE_APP_BACKEND_URL}${
// 								recipe.image_url
// 							}`}
// 							dishName={recipe.title}
// 							categoryName={recipe.category_name}
// 							time={`${recipe.cooking_time_minutes} min`}
// 							authorName={`${recipe.first_name} ${recipe.last_name}`}
// 							authorImage={`${
// 								import.meta.env.VITE_APP_BACKEND_URL
// 							}${recipe.profile_picture_url}`}
// 							rating={parseFloat(recipe.average_rating).toFixed(
// 								1
// 							)}
// 							reviews={recipe.review_count || 0}
// 							commentsCount={recipe.total_comments || 0}
// 						/>
// 					))}
// 				</div>
// 			);
// 		}

// 		// Render Profiles
// 		if (activeTab === "profiles") {
// 			return (
// 				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
// 					{currentResults.map((profile) => (
// 						<ProfileCard
// 							key={profile.id}
// 							name={`${profile.first_name} ${profile.last_name}`}
// 							profileImage={`${
// 								import.meta.env.VITE_APP_BACKEND_URL
// 							}${profile.profile_picture_url}`}
// 							bio={profile.bio}
// 						/>
// 					))}
// 				</div>
// 			);
// 		}

// 		// Render Articles
// 		if (activeTab === "articles") {
// 			return (
// 				<div className="space-y-6">
// 					{currentResults.map((article) => (
// 						<Blogpost
// 							key={article.id}
// 							title={article.title}
// 							description={article.description}
// 							image={`${import.meta.env.VITE_APP_BACKEND_URL}${
// 								article.image_url
// 							}`}
// 							content={article.content}
// 						/>
// 					))}
// 				</div>
// 			);
// 		}
// 	};

// 	return (
// 		<div className="grid grid-cols-12 gap-x-4 mt-32">
// 			{/* Search Field */}
// 			<div className="col-start-2 col-span-10">
// 				<SearchField onSearch={handleSearch} />
// 				<HeadingWithLine text={`Results for "${query}"`} />
// 			</div>

// 			{/* Navigation Tabs */}
// 			<div className="col-start-2 col-span-10 space-x-4 flex justify-start mt-10">
// 				<GreenRing
// 					text="Recipes"
// 					onClick={() => setActiveTab("recipes")}
// 					isActive={activeTab === "recipes"}
// 				/>
// 				<GreenRing
// 					text="Profiles"
// 					onClick={() => setActiveTab("profiles")}
// 					isActive={activeTab === "profiles"}
// 				/>
// 				<GreenRing
// 					text="Articles"
// 					onClick={() => setActiveTab("articles")}
// 					isActive={activeTab === "articles"}
// 				/>
// 			</div>

// 			{/* Filters and Sorting */}
// 			<div className="col-start-2 col-span-10 flex items-center justify-between mt-12 mb-8">
// 				<FiltersMenu />
// 				<SortMenu />
// 			</div>

// 			{/* Render Search Results */}
// 			<div className="col-start-2 col-span-10">{renderContent()}</div>
// 		</div>
// 	);
// };

// export default SearchPage;








// import { useState } from "react";
// import { useSearch } from "../context/SearchContext";
// import RecipeCard from "../components/RecipeCard";
// import ProfileCard from "../components/ProfileCard";
// import Blogpost from "../components/Blogpost";
// import SearchField from "../components/SearchField";
// import HeadingWithLine from "../components/HeadingWithLine";
// import NoResultsImg from "../assets/images/NoResults.png";
// import GreenRing from "../assets/svg/GreenRing";

// const SearchPage = () => {
// 	const { query, searchResults, loading } = useSearch();
// 	const [activeTab, setActiveTab] = useState("recipes");

// 	const renderContent = () => {
// 		const currentResults = searchResults[activeTab];

// 		if (loading) {
// 			return <p className="text-center">Loading results...</p>;
// 		}

// 		if (!currentResults || currentResults.length === 0) {
// 			return (
// 				<div className="flex flex-col justify-center items-center">
// 					<h3 className="text-center font-medium md:text-3xl font-pacifico m-16">
// 						No {activeTab} found for "{query}"
// 					</h3>
// 					<img
// 						className="md:w-2/3"
// 						src={NoResultsImg}
// 						alt="No Results"
// 					/>
// 				</div>
// 			);
// 		}

// 		// Render content based on active tab
// 		if (activeTab === "recipes") {
// 			return (
// 				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
// 					{currentResults.map((recipe) => (
// 						<RecipeCard
// 							key={recipe.id}
// 							image={recipe.image_url}
// 							dishName={recipe.title}
// 							categoryName={recipe.category}
// 							time={`${recipe.cooking_time_minutes} min`}
// 						/>
// 					))}
// 				</div>
// 			);
// 		} else if (activeTab === "profiles") {
// 			return (
// 				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
// 					{currentResults.map((profile) => (
// 						<ProfileCard
// 							key={profile.id}
// 							name={`${profile.first_name} ${profile.last_name}`}
// 						/>
// 					))}
// 				</div>
// 			);
// 		} else if (activeTab === "articles") {
// 			return currentResults.map((article) => (
// 				<Blogpost key={article.id} title={article.title} />
// 			));
// 		}
// 	};

// 	return (
// 		<div className="grid grid-cols-12 gap-x-4 mt-32">
// 			<div className="col-start-2 col-span-10">
// 				<SearchField />
// 				<HeadingWithLine text={`Results for "${query}"`} />
// 			</div>

// 			<div className="col-start-2 col-span-10 space-x-4 flex justify-start mt-10">
// 				<GreenRing
// 					text="Recipes"
// 					onClick={() => setActiveTab("recipes")}
// 				/>
// 				<GreenRing
// 					text="Profiles"
// 					onClick={() => setActiveTab("profiles")}
// 				/>
// 				<GreenRing
// 					text="Articles"
// 					onClick={() => setActiveTab("articles")}
// 				/>
// 			</div>

// 			<div className="col-start-2 col-span-10">{renderContent()}</div>
// 		</div>
// 	);
// };

// export default SearchPage;





import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";
import HeadingWithLine from "../components/HeadingWithLine";
import NoResultsImg from "../assets/images/NoResults.png";
import RecipeCard from "../components/RecipeCard";
import ProfileCard from "../components/ProfileCard";
import Blogpost from "../components/Blogpost";

const SearchPage = () => {
	const { searchResults, handleSearch, loading } = useSearch();
	const location = useLocation();

	// Extract query from URL
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get("query");

	useEffect(() => {
		if (query) {
			console.log("Triggering search for query:", query);
			handleSearch(query); // 🔥 Trigger search on page load
		}
	}, [query]);

	const renderContent = () => {
		console.log("Search Results:", searchResults);

		if (loading) {
			return <p className="text-center">Loading results...</p>;
		}

		// Check if searchResults is valid and not empty
		if (
			!searchResults ||
			(!searchResults.recipes.length &&
				!searchResults.profiles.length &&
				!searchResults.articles.length)
		) {
			return (
				<div className="flex flex-col justify-center items-center">
					<h3 className="text-center font-medium md:text-3xl font-pacifico m-16">
						No results found for "{query}"
					</h3>
					<img
						className="md:w-2/3"
						src={NoResultsImg}
						alt="No Results"
					/>
				</div>
			);
		}

		return (
			<div className="space-y-10">
				{/* 🔥 Recipes Section */}
				{searchResults.recipes.length > 0 && (
					<div>
						<HeadingWithLine text="Recipes" />
						<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
							{searchResults.recipes.map((recipe) => (
								<RecipeCard
									key={recipe.id}
									image={recipe.image_url}
									dishName={recipe.title}
									categoryName={recipe.category_name}
									time={`${recipe.cooking_time_minutes} min`}
									rating={parseFloat(
										recipe.average_rating
									).toFixed(1)}
									reviews={recipe.review_count || 0}
									commentsCount={recipe.total_comments || 0}
								/>
							))}
						</div>
					</div>
				)}

				{/* 🔥 Profiles Section */}
				{searchResults.profiles.length > 0 && (
					<div>
						<HeadingWithLine text="Profiles" />
						<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
							{searchResults.profiles.map((profile) => (
								<ProfileCard
									key={profile.id}
									name={`${profile.first_name} ${profile.last_name}`}
									profileImage={profile.profile_picture_url}
								/>
							))}
						</div>
					</div>
				)}

				{/* 🔥 Articles Section */}
				{searchResults.articles.length > 0 && (
					<div>
						<HeadingWithLine text="Articles" />
						<div className="space-y-6">
							{searchResults.articles.map((article) => (
								<Blogpost
									key={article.id}
									title={article.title}
									description={article.description}
									image={article.image_url}
									content={article.content}
								/>
							))}
						</div>
					</div>
				)}
			</div>
		);
	};

	return (
		<div className="grid grid-cols-12 gap-x-4 mt-32">
			<div className="col-start-2 col-span-10">
				<HeadingWithLine text={`Results for "${query}"`} />
			</div>

			<div className="col-start-2 col-span-10">{renderContent()}</div>
		</div>
	);
};

export default SearchPage;
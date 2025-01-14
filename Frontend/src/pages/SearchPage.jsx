import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";
import RecipeCard from "../components/RecipeCard";
import ProfileCard from "../components/ProfileCard";
import Blogpost from "../components/Blogpost";
import HeadingWithLine from "../components/HeadingWithLine";
import NoResultsImg from "../assets/images/NoResults.png";
import GreenRing from "../assets/svg/GreenRing";
import FiltersMenu from "../components/FiltersMenu";
import SortMenu from "../components/SortMenu";

const SearchPage = () => {
	const { searchResults, handleSearch, loading } = useSearch();
	const [activeTab, setActiveTab] = useState("recipes");
	const location = useLocation();

	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get("query");

	useEffect(() => {
		if (query) {
			handleSearch(query); // Fetch search results
		}
	}, [query]);

	const renderContent = () => {
    const currentResults = searchResults[activeTab];
    console.log(currentResults);

		if (loading) {
			return <p className="text-center">Loading results...</p>;
		}

		if (!currentResults || currentResults.length === 0) {
			return (
				<div className="flex flex-col justify-center items-center">
					<h3 className="text-center font-medium md:text-3xl font-pacifico m-16">
						No {activeTab} found for &quot;{query}&quot;
					</h3>
					<img
						className="md:w-2/3"
						src={NoResultsImg}
						alt="No Results"
					/>
				</div>
			);
		}

		// Render Recipes
		if (activeTab === "recipes") {
			return (
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
					{currentResults.map((recipe) => (
						// <RecipeCard
						// 	key={recipe.id}
						// 	image={recipe.image_url}
						// 	dishName={recipe.title}
						// 	categoryName={recipe.category}
						// 	time={`${recipe.cooking_time_minutes} min`}
						// 	rating={recipe.average_rating}
						// 	reviews={recipe.review_count}
						//   commentsCount={recipe.total_comments}
						// />
            

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
							authorImage={`${
								import.meta.env.VITE_APP_BACKEND_URL
							}${recipe.profile_picture_url}`}
							rating={parseFloat(recipe.average_rating).toFixed(
								1
							)} // Correct average rating (rounded to 1 decimal)
							reviews={recipe.review_count || 0} // Correct review count (distinct users who reviewed)
							commentsCount={recipe.total_comments || 0} // Correct comment count (comments + replies)
						/>
					))}
				</div>
			);
		}

		// Render Profiles
		if (activeTab === "profiles") {
			return (
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
					{currentResults.map((profile) => (
						<ProfileCard
							key={profile.id}
							name={`${profile.first_name} ${profile.last_name}`}
							profileImage={profile.profile_picture_url}
							bio={profile.bio}
						/>
					))}
				</div>
			);
		}

		// Render Articles
		if (activeTab === "articles") {
			return (
				<div className="space-y-6">
					{currentResults.map((article) => (
						<Blogpost
							key={article.id}
							title={article.title}
							description={article.description}
							image={article.image_url}
							content={article.content}
						/>
					))}
				</div>
			);
		}
	};

	return (
		<div className="grid grid-cols-12 gap-x-4 mt-32">
			{/* Header */}
			<div className="col-start-2 col-span-10">
				<HeadingWithLine text={`Results for "${query}"`} />
			</div>

			{/* Navigation Tabs */}
			<div className="col-start-2 col-span-10 space-x-4 flex justify-start mt-10">
				<GreenRing
					text="Recipes"
					onClick={() => setActiveTab("recipes")}
					isActive={activeTab === "recipes"}
				/>
				<GreenRing
					text="Profiles"
					onClick={() => setActiveTab("profiles")}
					isActive={activeTab === "profiles"}
				/>
				<GreenRing
					text="Articles"
					onClick={() => setActiveTab("articles")}
					isActive={activeTab === "articles"}
				/>
			</div>

			{/* Filters */}
			<div className="col-start-2 col-span-10 flex items-center justify-between mt-12 mb-8">
				<FiltersMenu />
				<SortMenu />
			</div>

			{/* Render Search Results */}
			<div className="col-start-2 col-span-10">{renderContent()}</div>
		</div>
	);
};

export default SearchPage;

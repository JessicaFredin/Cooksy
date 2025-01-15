// import { useParams } from 'react-router-dom';
// import HeadingWithLine from "../components/HeadingWithLine";
// import Button from "../components/Button";
// import SortMenu from "../components/SortMenu";
// import FiltersMenu from "../components/FiltersMenu";
// import RecipeCard from "../components/RecipeCard";
// import { useData } from "../contexts/DataContext";

// function OtherProfilePage() {
//     const { data } = useData();
//     const { id } = useParams(); // Get the ID from the URL
//     const { profiles, recipes } = data;

//     // Find the correct profile by ID (if profiles is an array)
//     const profile = profiles.find((p) => p.id === parseInt(id));

//     if (!profile) {
//         return <p className="text-center mt-32">Profile not found</p>;
//     }

//     return (
//         <div className="my-32 grid grid-cols-12 gap-6">
//             <div className="col-start-2 col-span-10">
//                 <div className="grid grid-cols-12 gap-4">
//                     {/* Profile Image */}
//                     <div className="relative col-span-12 md:col-span-4 h-full">
//                         <img
//                             src={profile.profile_picture_url}
//                             alt={profile.name}
//                             className="rounded-lg h-96 object-cover w-full object-top"
//                         />
//                         <div className="absolute bottom-0 bg-green-300 w-full h-14 rounded-b-lg flex justify-center items-center">
//                             <div className="text-center">
//                                 <h4>Uploaded recipes</h4>
//                                 <h4>{profile.recipes_count}</h4>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Profile Info */}
//                     <div className="col-span-12 md:col-span-8">
//                         <div className="flex flex-col mb-6">
//                             <div className="flex justify-between mb-6">
//                                 <h1 className="text-4xl font-pacifico mb-6">
//                                     {profile.first_name} {profile.last_name}
//                                 </h1>

//                                 <div className="flex flex-col justify-center text-sm text-gray-600">
//                                     <h4 className="font-bold mb-2">
//                                         {profile.followers_count} followers
//                                     </h4>
//                                     <Button size="small">Follow</Button>
//                                 </div>
//                             </div>
//                             <p>{profile.bio}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Recipes Heading */}
//                 <div className="col-start-2 col-span-10 mt-20">
//                     <HeadingWithLine text={`${profile.first_name}'s Recipes`} />
//                 </div>

//                 {/* Filters and Sort Menu */}
//                 <div className="col-start-2 col-span-10 flex items-center justify-between mt-12 mb-8">
//                     <FiltersMenu />
//                     <SortMenu />
//                 </div>

//                 {/* Recipe Cards */}
//                 <div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
//                     {recipes
//                         .filter((recipe) => recipe.user_id === profile.id)
//                         .map((recipe) => (
//                             <RecipeCard
//                                 key={recipe.id}
//                                 image={recipe.image_url}
//                                 dishName={recipe.title}
//                                 categoryName={recipe.category}
//                                 time={`${recipe.cooking_time_minutes} min`}
//                                 authorName={`${profile.first_name} ${profile.last_name}`}
//                                 rating={recipe.average_rating}
//                                 reviews={recipe.review_count}
//                                 commentsCount={recipe.comments_count}
//                             />
//                         ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default OtherProfilePage;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeadingWithLine from "../components/HeadingWithLine";
import Button from "../components/Button";
import SortMenu from "../components/SortMenu";
import FiltersMenu from "../components/FiltersMenu";
import RecipeCard from "../components/RecipeCard";
import PlaceholderProfileImage from "../assets/images/PlaceholderProfileImage.jpg";

function OtherProfilePage() {
	const { id } = useParams(); // Get user ID from URL
	const [profile, setProfile] = useState(null);
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchProfileAndRecipes = async () => {
			try {
				setLoading(true);

				// ✅ Fetch the user's profile
				const profileResponse = await axios.get(
					`${import.meta.env.VITE_APP_BACKEND_URL}/user/${id}`
				);
				setProfile(profileResponse.data);

				// ✅ Fetch the user's uploaded recipes
				const recipesResponse = await axios.get(
					`${
						import.meta.env.VITE_APP_BACKEND_URL
					}/recipes?user_id=${id}`
				);

				setRecipes(
					Array.isArray(recipesResponse.data)
						? recipesResponse.data.filter(
								(recipe) => recipe.user_id === parseInt(id)
						  )
						: []
				);

                
			} catch (err) {
				console.error("Error fetching data:", err);
				setError("Failed to load profile or recipes.");
			} finally {
				setLoading(false);
			}
		};

		fetchProfileAndRecipes();
	}, [id]);

	// ✅ Handle loading state
	if (loading) {
		return <p className="text-center mt-32">Loading...</p>;
	}

	// ✅ Handle error state
	if (error) {
		return <p className="text-center mt-32 text-red-500">{error}</p>;
	}

	// ✅ Handle no profile found
	if (!profile) {
		return <p className="text-center mt-32">Profile not found</p>;
	}

	// ✅ Construct the correct profile picture URL
	const profileImageUrl = profile.profile_picture_url
		? `${import.meta.env.VITE_APP_BACKEND_URL}${
				profile.profile_picture_url
		  }`
		: PlaceholderProfileImage;

	return (
		<div className="my-32 grid grid-cols-12 gap-6">
			<div className="col-start-2 col-span-10">
				<div className="grid grid-cols-12 gap-4">
					{/* ✅ Profile Image */}
					<div className="relative col-span-12 md:col-span-4 h-full">
						<img
							src={profileImageUrl}
							alt={`${profile.first_name} ${profile.last_name}`}
							className="rounded-lg h-96 object-cover w-full object-top"
						/>
						<div className="absolute bottom-0 bg-green-300 w-full h-14 rounded-b-lg flex justify-center items-center">
							<div className="text-center">
								<h4>Uploaded Recipes</h4>
								<h4>{recipes.length}</h4>
							</div>
						</div>
					</div>

					{/* ✅ Profile Info */}
					<div className="col-span-12 md:col-span-8">
						<h1 className="text-4xl font-pacifico">
							{profile.first_name} {profile.last_name}
						</h1>
						<p className="mt-4 text-gray-700">
							{profile.bio || "No bio available."}
						</p>

						<Button size="small" className="mt-6">
							Follow
						</Button>
					</div>
				</div>

				{/* ✅ Recipes Heading */}
				<HeadingWithLine text={`${profile.first_name}'s Recipes`} />

				{/* ✅ Filters and Sort Menu */}
				<div className="flex items-center justify-between mt-12 mb-8">
					<FiltersMenu />
					<SortMenu />
				</div>

				{/* ✅ Recipes Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{recipes.length > 0 ? (
						recipes.map((recipe) => (
							// <RecipeCard
							// 	key={recipe.id}
							// 	image={`${import.meta.env.VITE_APP_BACKEND_URL}${
							// 		recipe.image_url
							// 	}`}
							// 	dishName={recipe.title}
							// 	categoryName={recipe.category_name}
							// 	time={`${recipe.cooking_time_minutes} min`}
							// 	authorName={`${profile.first_name} ${profile.last_name}`}
							// />

							<RecipeCard
								key={recipe.id}
								id={recipe.id}
								image={`${
									import.meta.env.VITE_APP_BACKEND_URL
								}${recipe.image_url}`}
								dishName={recipe.title}
								categoryName={recipe.category_name}
								time={`${recipe.cooking_time_minutes} min`}
								authorName={`${profile.first_name} ${profile.last_name}`}
								authorImage={`${
									import.meta.env.VITE_APP_BACKEND_URL
								}${recipe.profile_picture_url}`}
								rating={parseFloat(
									recipe.average_rating
								).toFixed(1)}
								reviews={recipe.review_count || 0}
								commentsCount={recipe.total_comments || 0}
							/>
						))
					) : (
						<p className="text-center col-span-full">
							No recipes uploaded yet.
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default OtherProfilePage;

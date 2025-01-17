import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeadingWithLine from "../components/HeadingWithLine";
import Button from "../components/Button";
import SortMenu from "../components/SortMenu";
import FiltersMenu from "../components/FiltersMenu";
import RecipeCard from "../components/RecipeCard";
import PlaceholderProfileImage from "../assets/images/PlaceholderProfileImage.jpg";
import { PeopleIcon } from "../assets/icons/PeopleIcon";

function OtherProfilePage() {
	const { id } = useParams();  // Hämta användar-ID från URL
	const [profile, setProfile] = useState(null);
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
    //Hämta profil och recept från API när komponenten laddas eller när `id` ändras
	useEffect(() => {
		const fetchProfileAndRecipes = async () => {
			try {
				setLoading(true);

				//Hämta användarens profil
				const profileResponse = await axios.get(
					`${import.meta.env.VITE_APP_BACKEND_URL}/user/${id}`
				);
				setProfile(profileResponse.data);

				//  Hämta användarens uppladdade recept
				const recipesResponse = await axios.get(
					`${
						import.meta.env.VITE_APP_BACKEND_URL
					}/recipes?user_id=${id}`
				);
                // Filtrera recepten för att säkerställa att de tillhör den aktuella användaren
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

	// Visa laddningsindikator om data laddas
	if (loading) {
		return <p className="text-center mt-32">Loading...</p>;
	}

	// Hantera felstatus och visa meddelande
	if (error) {
		return <p className="text-center mt-32 text-red-500">{error}</p>;
	}

	// Visa meddelande om profilen inte hittas
	if (!profile) {
		return <p className="text-center mt-32">Profile not found</p>;
	}

	// Skapa korrekt URL för profilbilden eller använd en standardbild
	const profileImageUrl = profile.profile_picture_url
		? `${import.meta.env.VITE_APP_BACKEND_URL}${
				profile.profile_picture_url
		  }`
		: PlaceholderProfileImage;

	return (
		<div className="my-32 grid grid-cols-12 gap-6">
			<div className="col-start-2 col-span-10">
				<div className="grid grid-cols-12 gap-4">
					{/* Profil bild */}
					<div className="relative col-span-12 md:col-span-4 h-full">
						<img
							src={profileImageUrl}
							alt={`${profile.first_name} ${profile.last_name}`}
							className="rounded-lg h-96 object-cover w-full"
						/>
						<div className="absolute bottom-0 bg-green-300 w-full h-14 rounded-b-lg flex justify-center items-center">
							<div className="text-center font-semibold">
								<h4>Uploaded Recipes: {recipes.length}</h4>
								
							</div>
						</div>
					</div>

					{/* Profil Info */}
					<div className="col-span-12 md:col-span-8 flex justify-between items-start">
						<div>
							<h1 className="text-4xl font-pacifico">
								{profile.first_name} {profile.last_name}
							</h1>
							<p className="mt-4 text-gray-700">
								{profile.bio || "No bio available."}
							</p>
						</div>

						{/* Följar knapp */}
						<div className="flex flex-col items-end">
							<div className="flex items-center text-sm text-gray-600 mb-2">
								<PeopleIcon className="mr-2" />{" "}
								<h4>{profile.followers_count} followers</h4>
							</div>
							<Button size="small" className="px-6 py-2">
								Follow
							</Button>
						</div>
					</div>
				</div>

				{/* Rubrik för användarens recept */}
				<div className="mt-10">
					<HeadingWithLine
						text={`${profile.first_name}'s Recipes`}
						className="mt-10"
					/>
				</div>
				{/* Filtrering och sorterings Meny */}
				<div className="flex items-center justify-between mt-12 mb-8">
					<FiltersMenu />
					<SortMenu />
				</div>

				{/* Recept grid*/}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{recipes.length > 0 ? (
						recipes.map((recipe) => (
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

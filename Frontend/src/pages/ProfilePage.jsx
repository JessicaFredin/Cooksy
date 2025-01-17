import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import { CameraIcon } from "../assets/icons/Cameraicon";
import RecipeCard from "../components/RecipeCard";

function ProfilePage() {
	//States för att hantera profil och receptdata
	const [profile, setProfile] = useState(null);
	const [recipes, setRecipes] = useState([]); // Dynamic recipes
	const [isEditingBio, setIsEditingBio] = useState(false);
	const [bio, setBio] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [bioLength, setBioLength] = useState(0);
	const [isOverLimit, setIsOverLimit] = useState(false);

	// Hämtar användarens profil och uppladdade recept vid första renderingen
	useEffect(() => {
		const fetchProfileAndRecipes = async () => {
			try {
				// Hämta profilinformation
				const profileRes = await axios.get(
					`${import.meta.env.VITE_APP_BACKEND_URL}/profile`,
					{ withCredentials: true }
				);
				setProfile(profileRes.data); // Sätt profilens data
				setBio(profileRes.data.bio || ""); // Fyll bio om den finns
				setBioLength(
					profileRes.data.bio ? profileRes.data.bio.length : 0
				);

				// Hämta användarens recept
				const recipesRes = await axios.get(
					`${
						import.meta.env.VITE_APP_BACKEND_URL
					}/recipes/my-recipes`,
					{ withCredentials: true }
				);
				setRecipes(recipesRes.data);
				setIsLoading(false);
			} catch (err) {
				console.error("Error fetching profile or recipes:", err);
			}
		};

		fetchProfileAndRecipes();
	}, []);

	// Sparar uppdaterad bio till servern
	const handleBioSave = () => {
		if (bioLength > 1000) return; // Förhindrar sparning om bio överskrider maxlängd

		axios
			.put(
				`${import.meta.env.VITE_APP_BACKEND_URL}/profile/bio`,
				{ bio }, // Skicka den nya bio-texten
				{ withCredentials: true }
			)
			.then((response) => {
				setIsEditingBio(false);  // Stäng redigeringsläge
				setProfile((prev) => ({ ...prev, bio: response.data.bio }));
			})
			.catch((err) => console.error("Error updating bio:", err));
	};

	// Hanterar ändringar i bio-textfältet
	const handleBioChange = (e) => {
		const newBio = e.target.value;
		setBio(newBio);
		setBioLength(newBio.length);
		setIsOverLimit(newBio.length > 1000);
	};

	// Hanterar uppladdning av profilbild
	const handleProfilePictureChange = (e) => {
		const formData = new FormData();
		formData.append("profile_picture", e.target.files[0]);

		axios
			.put(
				`${import.meta.env.VITE_APP_BACKEND_URL}/profile/picture`,
				formData,
				{
					headers: { "Content-Type": "multipart/form-data" },
					withCredentials: true,
				}
			)
			.then((response) => {
				setProfile((prev) => ({
					...prev,
					profile_picture_url: response.data.profilePictureUrl,
				}));
			})
			.catch((err) =>
				console.error("Error updating profile picture:", err)
			);
	};

	// Hanterar borttagning av recept
	const handleDeleteRecipe = (recipeId) => {
		if (window.confirm("Are you sure you want to delete this recipe?")) {
			axios
				.delete(
					`${
						import.meta.env.VITE_APP_BACKEND_URL
					}/recipes/${recipeId}`,
					{
						withCredentials: true,
					}
				)
				.then(() => {
					setRecipes((prevRecipes) =>
						prevRecipes.filter((recipe) => recipe.id !== recipeId)
					);
				})
				.catch((err) => console.error("Error deleting recipe:", err));
		}
	};
    //Visa laddningsstatus
	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="max-w-6xl mx-auto p-8">
			<div className="grid grid-cols-12 gap-4">
				{/* Profil bild */}
				<div className="relative col-span-12 md:col-span-4 h-full">
					<img
						src={
							profile.profile_picture_url
								? `${import.meta.env.VITE_APP_BACKEND_URL}${
										profile.profile_picture_url
								  }`
								: "https://placehold.co/400x400"
						}
						alt="Profile picture"
						className="rounded-lg h-full min-h-[300px] object-cover w-full"
					/>
					<label
						htmlFor="profilePictureInput"
						className="absolute bottom-4 right-4 bg-green-500 p-3 rounded-full cursor-pointer"
					>
						<input
							type="file"
							id="profilePictureInput"
							onChange={handleProfilePictureChange}
							className="hidden"
						/>
						<CameraIcon />
					</label>
				</div>

				{/* Profil Information */}
				<div className="col-span-12 md:col-span-8">
					<h1 className="text-4xl font-pacifico mb-6">
						{profile.first_name} {profile.last_name}
					</h1>

					{/* Bio */}
					<div className="text-gray-700 leading-relaxed">
						{isEditingBio ? (
							<div>
								<textarea
									placeholder="Add your bio here..."
									value={bio}
									onChange={handleBioChange}
									maxLength="1000"
									className={`w-full border rounded-md p-2 ${
										isOverLimit
											? "border-red-500"
											: "border-gray-300"
									}`}
								/>
								<p
									className={`text-sm mt-1 ${
										isOverLimit
											? "text-red-500"
											: "text-gray-600"
									}`}
								>
									{bioLength}/1000 characters
								</p>
								<div className="flex justify-end mt-2">
									<Button
										onClick={handleBioSave}
										size="medium"
										className={`${
											isOverLimit
												? "bg-gray-300 cursor-not-allowed"
												: "bg-green-500"
										} text-white`}
										disabled={isOverLimit}
									>
										Save
									</Button>
									<Button
										onClick={() => setIsEditingBio(false)}
										size="medium"
										className="bg-gray-200 text-black ml-2"
									>
										Cancel
									</Button>
								</div>
							</div>
						) : (
							<div>
								<p>{profile.bio || "No bio available."}</p>
								<div className="flex justify-end">
									<Button
										onClick={() => setIsEditingBio(true)}
										size="medium"
										className="bg-pink-500 text-white"
									>
										Edit
									</Button>
								</div>
							</div>
						)}
					</div>
				</div>

				{/* Användarens recept */}
				<div className="col-span-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-52 ">
					{recipes.map((recipe) => (
						<div key={recipe.id} className="relative">
							<RecipeCard
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
								}${profile.profile_picture_url}`}
								rating={parseFloat(
									recipe.average_rating
								).toFixed(1)}
								reviews={recipe.review_count || 0}
								commentsCount={recipe.total_comments || 0}
								isOwner={true} // Möjliggör redigera och ta bort
								onDelete={handleDeleteRecipe} // Funktion för att ta bort recept
								onEdit={(id) =>
									console.log(`Edit recipe with ID: ${id}`)
								} // Funktion för redigering
							/>
						</div>
						
					))}
				</div>

				
			</div>
		</div>
	);
}

export default ProfilePage;

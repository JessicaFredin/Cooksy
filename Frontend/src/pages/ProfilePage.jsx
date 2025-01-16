// import { useState, useEffect } from "react";
// import axios from "axios";
// import Button from "../components/Button";
// import { CameraIcon } from "../assets/icons/Cameraicon";
// import RecipeCard from "../components/RecipeCard";
// import FiltersMenu from "../components/FiltersMenu";
// import { MeatIcon } from "../assets/icons/MeatIcon";
// import { ChickenIcon } from "../assets/icons/ChickenIcon";
// import { FishIcon } from "../assets/icons/FishIcon";
// import { VegetableIcon } from "../assets/icons/VegetableIcon";
// import Food1 from "../assets/images/food1.jpg";
// import SortMenu from "../components/SortMenu";

// function ProfilePage() {
// 	// State-hantering för användarprofil och bio
// 	const [profile, setProfile] = useState(null);
// 	const [isEditingBio, setIsEditingBio] = useState(false);
// 	const [bio, setBio] = useState(""); // Empty by default
// 	const [isLoading, setIsLoading] = useState(true);
// 	const [bioLength, setBioLength] = useState(0);
// 	const [isOverLimit, setIsOverLimit] = useState(false);
//     // Receptlista att visa på profilsidan
// 	const recipes = [
// 		{
// 			id: 1,
// 			name: "Shishkebab med baba ganoush",
// 			icon: <MeatIcon />,
// 			category: "Meat",
// 			time: "90 min",
// 			rating: 2,
// 			reviews: 25,
// 			comments: 5,
// 		},
// 		{
// 			id: 2,
// 			name: "Cheeseburger pasta skillet (one pot)",
// 			icon: <MeatIcon />,
// 			category: "Meat",
// 			time: "30 min",
// 			rating: 5,
// 			reviews: 36,
// 			comments: 10,
// 		},
// 		{
// 			id: 3,
// 			name: "Smashed burger med extra ost",
// 			icon: <ChickenIcon />,
// 			category: "Chicken",
// 			time: "60 min",
// 			rating: 4,
// 			reviews: 55,
// 			comments: 7,
// 		},
// 		{
// 			id: 4,
// 			name: "Sushi",
// 			icon: <FishIcon />,
// 			category: "Fish",
// 			time: "80 min",
// 			rating: 1,
// 			reviews: 15,
// 			comments: 8,
// 		},
// 		{
// 			id: 5,
// 			name: "Chickpea and harissa stew with herby yoghurt",
// 			icon: <VegetableIcon />,
// 			category: "Vegetable",
// 			time: "45 min",
// 			rating: 3,
// 			reviews: 125,
// 			comments: 6,
// 		},
// 		{
// 			id: 6,
// 			name: "Shrimp salad",
// 			icon: <FishIcon />,
// 			category: "Fish",
// 			time: "120 min",
// 			rating: 3,
// 			reviews: 37,
// 			comments: 19,
// 		},
// 	];

//     // Hämtar användarens profilinformation vid sidladdning
// 	useEffect(() => {
// 		// Fetch user profile
// 		axios
// 			.get(import.meta.env.VITE_APP_BACKEND_URL + "/profile", {
// 				withCredentials: true,
// 			})
// 			.then((response) => {
// 				setProfile(response.data);
// 				setBio(response.data.bio || "");
// 				setBioLength(response.data.bio ? response.data.bio.length : 0);
// 				setIsLoading(false);
// 			})
// 			.catch((err) => console.error("Error fetching profile:", err));
// 	}, []);
//     // Sparar ändrad bio till backend
// 	const handleBioSave = () => {
// 		if (bioLength > 1000) return; // Prevent saving if over limit

// 		axios
// 			.put(
// 				import.meta.env.VITE_APP_BACKEND_URL + "/profile/bio",
// 				{ bio },
// 				{ withCredentials: true }
// 			)
// 			.then((response) => {
// 				setIsEditingBio(false);
// 				setProfile((prev) => ({ ...prev, bio: response.data.bio }));
// 			})
// 			.catch((err) => console.error("Error updating bio:", err));
// 	};
//     // Hanterar ändringar i bio-texten
// 	const handleBioChange = (e) => {
// 		const newBio = e.target.value;
// 		setBio(newBio);
// 		setBioLength(newBio.length);
// 		setIsOverLimit(newBio.length > 1000);
// 	};
//     // Hanterar uppladdning av profilbild
// 	const handleProfilePictureChange = (e) => {
// 		const formData = new FormData();
// 		formData.append("profile_picture", e.target.files[0]);

// 		axios
// 			.put(
// 				import.meta.env.VITE_APP_BACKEND_URL + "/profile/picture",
// 				formData,
// 				{
// 					headers: { "Content-Type": "multipart/form-data" },
// 					withCredentials: true,
// 				}
// 			)
// 			.then((response) => {
// 				setProfile((prev) => ({
// 					...prev,
// 					profile_picture_url: response.data.profilePictureUrl, // Uppdatera profilbildens URL
// 				}));
// 			})
// 			.catch((err) =>
// 				console.error("Error updating profile picture:", err)
// 			);
// 	};
//     // Visa laddningsindikator om data inte är färdigladdad
// 	if (isLoading) return <div>Loading...</div>;

// 	return (
// 		<div className="max-w-6xl mx-auto p-8">
// 			<div className="grid grid-cols-12 gap-4">
// 				{/* Profilbild */}
// 				<div className="relative col-span-12 md:col-span-4 h-full">
// 					<img
// 						src={
// 							profile.profile_picture_url
// 								? `${import.meta.env.VITE_APP_BACKEND_URL}${
// 										profile.profile_picture_url
// 								  }`
// 								: "https://placehold.co/400x400"
// 						}
// 						alt="Profile picture"
// 						className="rounded-lg h-full min-h-[300px] object-cover w-full"
// 					/>
//                     {/* Knapp för att ladda upp ny profilbild */}
// 					<label
// 						htmlFor="profilePictureInput"
// 						className="absolute bottom-4 right-4 bg-green-500 p-3 rounded-full cursor-pointer"
// 					>
// 						<input
// 							type="file"
// 							id="profilePictureInput"
// 							onChange={handleProfilePictureChange}
// 							className="hidden"
// 						/>
// 						<span role="img" aria-label="camera">
// 							<CameraIcon />
// 						</span>
// 					</label>
// 				</div>

// 				{/* Profilinformation */}
// 				<div className="col-span-12 md:col-span-8">
// 					<div className="flex justify-between items-start mb-6">
// 						<div>
// 							<h1 className="text-4xl font-pacifico mb-6">
// 								{profile.first_name} {profile.last_name}
// 							</h1>

// 							<p className="text-sm text-gray-600">
// 								<span className="font-bold">
// 									{profile.followers || 0}
// 								</span>{" "}
// 								followers &middot;{" "}
// 								<span className="font-bold">
// 									{profile.following || 0}
// 								</span>{" "}
// 								following
// 							</p>
// 						</div>
// 					</div>
//                     {/* Bio-sektion */}
// 					<div className="text-gray-700 leading-relaxed">
// 						{isEditingBio ? (
// 							<div>
// 								<textarea
// 									placeholder="Add your bio here..."
// 									value={bio}
// 									onChange={handleBioChange}
// 									maxLength="1000"
// 									className={`w-full border rounded-md p-2 ${
// 										isOverLimit
// 											? "border-red-500"
// 											: "border-gray-300"
// 									}`}
// 								/>
// 								<p
// 									className={`text-sm mt-1 ${
// 										isOverLimit
// 											? "text-red-500"
// 											: "text-gray-600"
// 									}`}
// 								>
// 									{bioLength}/1000 characters
// 								</p>
// 								<div className="flex justify-end mt-2">
// 									<Button
// 										onClick={handleBioSave}
// 										size="medium"
// 										className={`${
// 											isOverLimit
// 												? "bg-gray-300 cursor-not-allowed"
// 												: "bg-green-500"
// 										} text-white`}
// 										disabled={isOverLimit}
// 									>
// 										Save
// 									</Button>
// 									<Button
// 										onClick={() => {
// 											setIsEditingBio(false);
// 											setBioLength(
// 												profile.bio
// 													? profile.bio.length
// 													: 0
// 											);
// 											setBio(profile.bio || "");
// 										}}
// 										size="medium"
// 										className="bg-gray-200 text-black ml-2"
// 									>
// 										Cancel
// 									</Button>
// 								</div>
// 							</div>
// 						) : (
// 							<div>
// 								<p className="mb-4">
// 									{profile.bio || (
// 										<span className="text-gray-400">
// 											{bio}
// 										</span>
// 									)}
// 								</p>
// 								<div className="flex justify-end">
// 									<Button
// 										onClick={() => setIsEditingBio(true)}
// 										size="medium"
// 										className="bg-pink-500 text-white"
// 									>
// 										Edit
// 									</Button>
// 								</div>
// 							</div>
// 						)}
// 					</div>
// 				</div>
// 				{/* Receptlista */}
// 				<div className="col-start-2 col-span-10 flex items-center justify-between mt-12 mb-8 ">
// 					<FiltersMenu />
// 					<SortMenu />
// 				</div>
// 				<div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
// 					{/*Itererar igenom och renderar recept */}
// 					{recipes.map((recipe, index) => (
// 						<div key={index} className="flex justify-center">
// 							<RecipeCard
// 								image={Food1} // Importera eller använd relevant bild här.
// 								dishName={recipe.name}
// 								categoryName={recipe.category}
// 								time={recipe.time}
// 								authorName="Lisa karlsson"
// 								authorImage={Food1}
// 								rating={recipe.rating}
// 								reviews={recipe.reviews}
// 								commentsCount={recipe.comments}
// 							/>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default ProfilePage;

// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import Button from "../components/Button";
// // import { CameraIcon } from "../assets/icons/Cameraicon";
// // import RecipeCard from "../components/RecipeCard";
// // import FiltersMenu from "../components/FiltersMenu";
// // import SortMenu from "../components/SortMenu";

// // function ProfilePage() {
// // 	const [profile, setProfile] = useState(null);
// // 	const [recipes, setRecipes] = useState([]);
// // 	const [isEditingBio, setIsEditingBio] = useState(false);
// // 	const [bio, setBio] = useState("");
// // 	const [isLoading, setIsLoading] = useState(true);
// // 	const [bioLength, setBioLength] = useState(0);
// // 	const [isOverLimit, setIsOverLimit] = useState(false);

// // 	// Fetch user profile and their own recipes
// // 	useEffect(() => {
// // 		const fetchProfileAndRecipes = async () => {
// // 			try {
// // 				// Fetch profile
// // 				const profileRes = await axios.get(
// // 					`${import.meta.env.VITE_APP_BACKEND_URL}/profile`,
// // 					{ withCredentials: true }
// // 				);
// // 				setProfile(profileRes.data);
// // 				setBio(profileRes.data.bio || "");
// // 				setBioLength(
// // 					profileRes.data.bio ? profileRes.data.bio.length : 0
// // 				);

// // 				// Fetch user's own recipes
// // 				const recipesRes = await axios.get(
// // 					`${
// // 						import.meta.env.VITE_APP_BACKEND_URL
// // 					}/recipes/my-recipes`,
// // 					{ withCredentials: true }
// // 				);
// // 				setRecipes(recipesRes.data);
// // 				setIsLoading(false);
// // 			} catch (err) {
// // 				console.error("Error fetching profile or recipes:", err);
// // 			}
// // 		};

// // 		fetchProfileAndRecipes();
// // 	}, []);

// // 	// Save updated bio
// // 	const handleBioSave = () => {
// // 		if (bioLength > 1000) return;

// // 		axios
// // 			.put(
// // 				`${import.meta.env.VITE_APP_BACKEND_URL}/profile/bio`,
// // 				{ bio },
// // 				{ withCredentials: true }
// // 			)
// // 			.then((response) => {
// // 				setIsEditingBio(false);
// // 				setProfile((prev) => ({ ...prev, bio: response.data.bio }));
// // 			})
// // 			.catch((err) => console.error("Error updating bio:", err));
// // 	};

// // 	// Handle bio input change
// // 	const handleBioChange = (e) => {
// // 		const newBio = e.target.value;
// // 		setBio(newBio);
// // 		setBioLength(newBio.length);
// // 		setIsOverLimit(newBio.length > 1000);
// // 	};

// // 	// Handle profile picture update
// // 	const handleProfilePictureChange = (e) => {
// // 		const formData = new FormData();
// // 		formData.append("profile_picture", e.target.files[0]);

// // 		axios
// // 			.put(
// // 				`${import.meta.env.VITE_APP_BACKEND_URL}/profile/picture`,
// // 				formData,
// // 				{
// // 					headers: { "Content-Type": "multipart/form-data" },
// // 					withCredentials: true,
// // 				}
// // 			)
// // 			.then((response) => {
// // 				setProfile((prev) => ({
// // 					...prev,
// // 					profile_picture_url: response.data.profilePictureUrl,
// // 				}));
// // 			})
// // 			.catch((err) =>
// // 				console.error("Error updating profile picture:", err)
// // 			);
// // 	};

// // 	// Handle deleting a recipe
// // 	const handleDeleteRecipe = (recipeId) => {
// // 		if (window.confirm("Are you sure you want to delete this recipe?")) {
// // 			axios
// // 				.delete(
// // 					`${
// // 						import.meta.env.VITE_APP_BACKEND_URL
// // 					}/recipes/${recipeId}`,
// // 					{
// // 						withCredentials: true,
// // 					}
// // 				)
// // 				.then(() => {
// // 					setRecipes((prevRecipes) =>
// // 						prevRecipes.filter((recipe) => recipe.id !== recipeId)
// // 					);
// // 				})
// // 				.catch((err) => console.error("Error deleting recipe:", err));
// // 		}
// // 	};

// // 	if (isLoading) return <div>Loading...</div>;

// // 	return (
// // 		<div className="max-w-6xl mx-auto p-8">
// // 			<div className="grid grid-cols-12 gap-4">
// // 				{/* Profile Picture */}
// // 				<div className="relative col-span-12 md:col-span-4 h-full">
// // 					<img
// // 						src={
// // 							profile.profile_picture_url
// // 								? `${import.meta.env.VITE_APP_BACKEND_URL}${
// // 										profile.profile_picture_url
// // 								  }`
// // 								: "https://placehold.co/400x400"
// // 						}
// // 						alt="Profile picture"
// // 						className="rounded-lg h-full min-h-[300px] object-cover w-full"
// // 					/>
// // 					<label
// // 						htmlFor="profilePictureInput"
// // 						className="absolute bottom-4 right-4 bg-green-500 p-3 rounded-full cursor-pointer"
// // 					>
// // 						<input
// // 							type="file"
// // 							id="profilePictureInput"
// // 							onChange={handleProfilePictureChange}
// // 							className="hidden"
// // 						/>
// // 						<CameraIcon />
// // 					</label>
// // 				</div>

// // 				{/* Profile Information */}
// // 				<div className="col-span-12 md:col-span-8">
// // 					<h1 className="text-4xl font-pacifico mb-6">
// // 						{profile.first_name} {profile.last_name}
// // 					</h1>

// // 					{/* Bio */}
// // 					<div className="text-gray-700 leading-relaxed">
// // 						{isEditingBio ? (
// // 							<div>
// // 								<textarea
// // 									placeholder="Add your bio here..."
// // 									value={bio}
// // 									onChange={handleBioChange}
// // 									maxLength="1000"
// // 									className={`w-full border rounded-md p-2 ${
// // 										isOverLimit
// // 											? "border-red-500"
// // 											: "border-gray-300"
// // 									}`}
// // 								/>
// // 								<p
// // 									className={`text-sm mt-1 ${
// // 										isOverLimit
// // 											? "text-red-500"
// // 											: "text-gray-600"
// // 									}`}
// // 								>
// // 									{bioLength}/1000 characters
// // 								</p>
// // 								<Button
// // 									onClick={handleBioSave}
// // 									size="medium"
// // 									className="bg-green-500 text-white"
// // 								>
// // 									Save
// // 								</Button>
// // 								<Button
// // 									onClick={() => setIsEditingBio(false)}
// // 									size="medium"
// // 									className="bg-gray-200 text-black ml-2"
// // 								>
// // 									Cancel
// // 								</Button>
// // 							</div>
// // 						) : (
// // 							<p>{profile.bio || "No bio available."}</p>
// // 						)}
// // 					</div>
// // 				</div>

// // 				{/* Filters and Sorting */}
// // 				<div className="col-start-2 col-span-10 flex items-center justify-between mt-12 mb-8">
// // 					<FiltersMenu />
// // 					<SortMenu />
// // 				</div>

// // 				{/* User's Recipes */}
// // 				<div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
// // 					{recipes.map((recipe) => (
// // 						<div key={recipe.id} className="relative">
// // 							<RecipeCard
// // 								key={recipe.id}
// // 								id={recipe.id}
// // 								image={`${
// // 									import.meta.env.VITE_APP_BACKEND_URL
// // 								}${recipe.image_url}`}
// // 								dishName={recipe.title}
// // 								categoryName={recipe.category_name}
// // 								time={`${recipe.cooking_time_minutes} min`}
// // 								authorName={`${recipe.first_name} ${recipe.last_name}`}
// // 								authorImage={`${
// // 									import.meta.env.VITE_APP_BACKEND_URL
// // 								}${recipe.profile_picture_url}`}
// // 								// Correct average rating (rounded to 1 decimal)
// // 								rating={parseFloat(
// // 									recipe.average_rating
// // 								).toFixed(1)}
// // 								// Correct review count (distinct users who reviewed)
// // 								reviews={recipe.review_count || 0}
// // 								// Correct comment count (comments + replies)
// // 								commentsCount={recipe.total_comments || 0}
// // 							/>
// // 							<Button
// // 								onClick={() => handleDeleteRecipe(recipe.id)}
// // 								size="small"
// // 								className="absolute top-2 right-2 bg-red-500 text-white"
// // 							>
// // 								Delete
// // 							</Button>
// // 						</div>
// // 					))}
// // 				</div>
// // 			</div>
// // 		</div>
// // 	);
// // }

// // export default ProfilePage;

import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import { CameraIcon } from "../assets/icons/Cameraicon";
import RecipeCard from "../components/RecipeCard";
// import { TrashIcon } from "../assets/icons/TrashIcon";

function ProfilePage() {
	const [profile, setProfile] = useState(null);
	const [recipes, setRecipes] = useState([]); // Dynamic recipes
	const [isEditingBio, setIsEditingBio] = useState(false);
	const [bio, setBio] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [bioLength, setBioLength] = useState(0);
	const [isOverLimit, setIsOverLimit] = useState(false);

	// Fetch user profile and their own recipes
	useEffect(() => {
		const fetchProfileAndRecipes = async () => {
			try {
				// Fetch profile
				const profileRes = await axios.get(
					`${import.meta.env.VITE_APP_BACKEND_URL}/profile`,
					{ withCredentials: true }
				);
				setProfile(profileRes.data);
				setBio(profileRes.data.bio || "");
				setBioLength(
					profileRes.data.bio ? profileRes.data.bio.length : 0
				);

				// Fetch user's own recipes
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

	// Save updated bio
	const handleBioSave = () => {
		if (bioLength > 1000) return;

		axios
			.put(
				`${import.meta.env.VITE_APP_BACKEND_URL}/profile/bio`,
				{ bio },
				{ withCredentials: true }
			)
			.then((response) => {
				setIsEditingBio(false);
				setProfile((prev) => ({ ...prev, bio: response.data.bio }));
			})
			.catch((err) => console.error("Error updating bio:", err));
	};

	// Handle bio input change
	const handleBioChange = (e) => {
		const newBio = e.target.value;
		setBio(newBio);
		setBioLength(newBio.length);
		setIsOverLimit(newBio.length > 1000);
	};

	// Handle profile picture update
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

	// Handle deleting a recipe
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

	// // Edit Recipe (redirect to edit page)
	// const handleEditRecipe = (recipeId) => {
	// 	window.location.href = `/edit-recipe/${recipeId}`;
	// };

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="max-w-6xl mx-auto p-8">
			<div className="grid grid-cols-12 gap-4">
				{/* Profile Picture */}
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

				{/* Profile Information */}
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

				{/* User's Recipes */}
				<div className="col-span-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
					{recipes.map((recipe) => (
						<div key={recipe.id} className="relative">
							{/* <RecipeCard
								image={`${
									import.meta.env.VITE_APP_BACKEND_URL
								}${recipe.image_url}`}
								dishName={recipe.title}
								categoryName={recipe.category_name}
								time={`${recipe.cooking_time_minutes} min`}
								authorName={`${profile.first_name} ${profile.last_name}`}
								rating={parseFloat(
									recipe.average_rating
								).toFixed(1)}
								reviews={recipe.review_count || 0}
							/> */}

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
								isOwner={true} // <-- This enables delete/edit buttons
								onDelete={handleDeleteRecipe} // <-- Delete handler
								onEdit={(id) =>
									console.log(`Edit recipe with ID: ${id}`)
								} // <-- Edit handler (you can replace with navigation)
							/>

							{/* <button
								onClick={() => handleDeleteRecipe(recipe.id)}
								className="absolute top-2 right-2 bg-white rounded-full p-1"
							>
								<TrashIcon className="text-black" />
							</button> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;

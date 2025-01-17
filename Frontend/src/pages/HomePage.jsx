import { useState, useEffect } from "react";
import SearchField from "../components/SearchField";
import CooksyHatImage from "../assets/images/CooksyHat.png";
import SwooshLine from "../assets/svg/SwooshLine";
import HighlightedHeader from "../components/HighlightedHeader";
import HeadingWithLine from "../components/HeadingWithLine";
import RecipeCarousel from "../components/RecipeCarousel";
import Swoosh from "../assets/svg/Swoosh";
import Button from "../components/Button";
import { useSearch } from "../contexts/SearchContext";
import { useData } from "../contexts/DataContext";
import MainIngredient from "../components/MainIngredient";
import Popup from "../components/Popup"; // Importera Popup-komponenten
import { Link } from "react-router-dom";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";
import { TopContributorOne } from "../assets/icons/TopContributorOne";
import { TopContributorTwo } from "../assets/icons/TopContributorTwo";
import { TopContributorThree } from "../assets/icons/TopContributorThree";
import Blogpost from "../components/Blogpost";

function HomePage() {
	const [topContributors, setTopContributors] = useState([]);
	const [loadingContributors, setLoadingContributors] = useState(true);
	const [errorContributors, setErrorContributors] = useState("");
	const { handleSearch } = useSearch(); // 🔥 Get search function from context
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const isLoggedIn = false; // Simulera användarens inloggningsstatus
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const handleAddRecipeClick = () => {
		if (!isLoggedIn) {
			setIsPopupVisible(true); // Visa popup om användaren inte är inloggad
		} else {
			console.log("Navigera till AddRecipePage"); // Byt till navigeringslogik om det behövs
		}
	};

	// Fetch top contributors
	useEffect(() => {
		const fetchTopContributors = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_APP_BACKEND_URL}/top_contributors`
				);
				setTopContributors(response.data.slice(0, 4)); // Show only top 4 on homepage
			} catch (err) {
				console.error("Error fetching top contributors:", err);
				setErrorContributors("Failed to load top contributors.");
			} finally {
				setLoadingContributors(false);
			}
		};

		fetchTopContributors();
	}, []);

	// Hämta recept dynamiskt
	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_APP_BACKEND_URL}/recipes`
				);

				// Shuffle recept och begränsa till 12
				const shuffledRecipes = response.data.sort(
					() => 0.5 - Math.random()
				);
				const limitedRecipes = shuffledRecipes.slice(0, 12);

				setRecipes(limitedRecipes);
			} catch (err) {
				console.error("Error fetching recipes:", err);
				setError("Failed to load recipes.");
			} finally {
				setLoading(false);
			}
		};

		fetchRecipes();
	}, []);
	const { data } = useData();
	if (loading) return <p>Loading recipes...</p>;
	if (error) return <p>{error}</p>;
	if (!data) {
		return <div>No data available.</div>; // Om ingen data finns
	}
	if (loadingContributors) return <p>Loading top contributors...</p>;
	if (errorContributors) return <p>{errorContributors}</p>;

	// Hjälpfunktion för att hämta rankningsikoner
	const getRankIcon = (rank) => {
		switch (rank) {
			case 1:
				return <TopContributorOne />;
			case 2:
				return <TopContributorTwo />;
			case 3:
				return <TopContributorThree />;
			default:
				return null;
		}
	};

	return (
		<div className="overflow-hidden">
			{isPopupVisible && (
				<Popup onClose={() => setIsPopupVisible(false)} />
			)}
			<div className="relative mt-20 grid grid-cols-12 gap-6">
				<div className="relative col-start-2 col-span-6">
					<HighlightedHeader />
					<div className="flex items-center w-full">
						<div className="text-center sm:text-left w-full my-3">
							{/* Skicka handleSearch som en prop */}
							<SearchField onSearch={handleSearch} />
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center col-start-8 col-span-4">
					<img
						src={CooksyHatImage}
						alt="Cooksy Hat"
						className="w-full md:w-5/6 sm:w-2/3 h-auto"
					/>
				</div>
			</div>
			<div className="w-full">
				<SwooshLine />
			</div>
			<div className="grid grid-cols-12 gap-x-4 ">
				<div className="col-start-2 pb-10">
					<HeadingWithLine text="Discover new recipes" />
				</div>
				{/* Recept Grid */}
				<div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				</div>
			</div>

			<div className="col-start-2 col-span-10 flex items-center">
				<RecipeCarousel recipes={recipes} />
			</div>

			<div className="grid grid-cols-12 gap-x-4 py-32">
				<div className="col-start-2 pb-10">
					<HeadingWithLine text="Main Ingredient" />
				</div>

				<div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-4">
					{data.mainIngredients.map((mainIngredient, index) => (
						<MainIngredient
							key={index}
							title={mainIngredient.name}
							image={mainIngredient.img}
						/>
					))}
				</div>
				<div className="col-start-0 col-span-12 relative">
					{/* Swoosh Bakgrund */}
					<Swoosh className="w-full h-auto" />
					{/* Text innehåll */}
					<div className="absolute inset-0 grid grid-cols-12 items-center justify-center">
						<div className="col-start-2 col-span-10 flex flex-col items-center justify-center">
							<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium my-10 md:my-16 font-pacifico">
								Share and publish your own recipes
							</h2>
							<Button onClick={handleAddRecipeClick}>
								Add recipe
							</Button>
						</div>
					</div>
				</div>
				<div className="col-start-2 col-span-10 py-10">
					<HeadingWithLine text="Top Contributors" />
				</div>

				<div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
					{topContributors.map((profile, index) => (
						<div
							key={profile.id}
							className="relative flex justify-center"
						>
							<ProfileCard
								id={profile.id}
								profileImage={`${
									import.meta.env.VITE_APP_BACKEND_URL
								}${profile.profile_image}`}
								name={profile.name}
								recipes={profile.recipe_count}
								followers={0} // Platshållare om följare ännu inte spåras
							/>
							{/* Visa rankningsmärken endast på startsidan */}
							{index < 3 && (
								<div className="absolute -top-3 -right-0 z-20">
									{getRankIcon(index + 1)}
								</div>
							)}
						</div>
					))}
				</div>

				<div className="col-start-2 col-span-10 py-10 flex justify-end">
					<Link to="/top-contributors">
						<Button>See all Top Contributors</Button>
					</Link>
				</div>

				<div className="col-start-2 col-span-10 py-10">
					<HeadingWithLine text="Food and Health: Research & Findings" />
				</div>

				<div className="col-start-2 col-span-10 grid grid-rows-2 gap-4">
					{data.articles.slice(0, 2).map((articel, index) => (
						<Blogpost
							key={index}
							image={articel.img}
							title={articel.title}
							description={articel.description}
							id={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default HomePage;

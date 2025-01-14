import SearchField from "../components/SearchField";
import CooksyHatImage from "../assets/images/CooksyHat.png";
import SwooshLine from "../assets/svg/SwooshLine";
import HighlightedHeader from "../components/HighlightedHeader";
import MainIngredient from "../components/MainIngredient";
import Blogpost from "../components/Blogpost";
import HeadingWithLine from "../components/HeadingWithLine";
import { MeatIcon } from "../assets/icons/MeatIcon";
import { ChickenIcon } from "../assets/icons/ChickenIcon";
import { FishIcon } from "../assets/icons/FishIcon";
import { VegetableIcon } from "../assets/icons/VegetableIcon";
// import food1 from "../assets/images/food1.jpg";
// import profile1 from "../assets/images/profile1.jpg";
// import RecipeCard from "../components/RecipeCard";
import RecipeCarousel from "../components/RecipeCarousel";
import Swoosh from "../assets/svg/Swoosh";
import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";
import { useSearch } from "../contexts/SearchContext";

function HomePage() {
	const { handleSearch } = useSearch(); // 🔥 Get search function from context
	const recipes = [
		{
			id: 1,
			name: "Shishkebab med baba ganoush",
			icon: <MeatIcon />,
			category: "Meat",
			time: "90 min",
			rating: 2,
			reviews: 25,
			comments: 5,
		},
		{
			id: 2,
			name: "Cheeseburger pasta skillet (one pot)",
			icon: <MeatIcon />,
			category: "Meat",
			time: "30 min",
			rating: 5,
			reviews: 36,
			comments: 10,
		},
		{
			id: 3,
			name: "Smashed burger med extra ost",
			icon: <ChickenIcon />,
			category: "Chicken",
			time: "60 min",
			rating: 4,
			reviews: 55,
			comments: 7,
		},
		{
			id: 4,
			name: "Sushi",
			icon: <FishIcon />,
			category: "Fish",
			time: "80 min",
			rating: 1,
			reviews: 15,
			comments: 8,
		},
		{
			id: 5,
			name: "Chickpea and harissa stew with herby yoghurt",
			icon: <VegetableIcon />,
			category: "Vegetable",
			time: "45 min",
			rating: 3,
			reviews: 125,
			comments: 6,
		},
		{
			id: 6,
			name: "Shrimp salad",
			icon: <FishIcon />,
			category: "Fish",
			time: "120 min",
			rating: 3,
			reviews: 37,
			comments: 19,
		},
		{
			id: 7,
			name: "Steamed mussels in tomato cream sauce",
			icon: <VegetableIcon />,
			category: "Vegetable",
			time: "75 min",
			rating: 2,
			reviews: 78,
			comments: 35,
		},
		{
			id: 8,
			name: "Chicken and asparagus",
			icon: <ChickenIcon />,
			category: "Chicken",
			time: "90 min",
			rating: 3,
			reviews: 356,
			comments: 77,
		},
		{
			id: 9,
			name: "Steamed mussels in tomato cream sauce",
			icon: <VegetableIcon />,
			category: "Vegetable",
			time: "100 min",
			rating: 4,
			reviews: 545,
			comments: 89,
		},
	];

	const profiles = [
		{ name: "Liv Thatcher", recipes: 20, followers: 120, following: true },
		{
			name: "Emma Andersson",
			recipes: 20,
			followers: 120,
			following: true,
		},
		{
			name: "Sofia Martinez",
			recipes: 20,
			followers: 120,
			following: true,
		},
		{
			name: "Isabella Sjöqvist",
			recipes: 20,
			followers: 120,
			following: true,
		},
	];

	return (
		<div className="overflow-hidden">
			{/* Grid Background */}
			{/* <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-25 w-full">
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
			</div> */}
			{/* 
			<div className="grid grid-cols-12">
				<div className="relative col-span-12">
					<HighlightedHeader className="w-full">
						Cook, share, and inspire with Cooksy
					</HighlightedHeader>
				</div>
			</div> */}
			{/* <div className="relative mt-20 grid grid-cols-12 gap-6"> */}
			{/* <div className="relative col-start-2 col-span-12 ">
					<HighlightedHeader className="w-full">
						Cook, share, and inspire with Cooksy
					</HighlightedHeader>
					<div className="flex items-center md:me-16 md:col-span-5 md:col-start-2 sm:col-start-1 sm:col-span-10 sm:me-0 w-full">
						<div className="text-center sm:text-left w-1/2 my-3">
							<SearchField />
						</div>
					</div>
				</div> */}
			<div className="relative mt-20 grid grid-cols-12 gap-6">
				<div className="relative col-start-2 col-span-6">
					<HighlightedHeader />
					<div className="flex items-center w-full">
						<div className="text-center sm:text-left w-full my-3">
							{/* ✅ Pass handleSearch as a prop */}
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

				{/* <div className="flex items-center justify-center md:col-start-8 md:col-span-4 sm:col-start-1 sm:col-span-10">
					<img
						src={CooksyHatImage}
						alt="Cooksy Hat"
						className="md:w-5/6 sm:w-2/3 h-auto "
					/>
				</div> */}
			</div>
			<div className="w-full">
				<SwooshLine />
			</div>
			<div className="grid grid-cols-12 gap-x-4 ">
				<div className="col-start-2 pb-10">
					<HeadingWithLine text="Discover new recipes" />
				</div>
				{/* Recipe Grid */}
				<div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{/* {recipes.map((recipe, index) => (
						<RecipeCard
							key={index}
							image={food1}
							dishName={recipe.name}
							categoryIcon={recipe.icon} // Change this to other icons dynamically
							categoryName={recipe.category}
							time={recipe.time}
							authorName="Lisa Karlsson"
							authorImage={profile1}
							rating={recipe.rating}
							reviews={recipe.reviews}
							commentsCount={recipe.comments}
						/>
					))} */}
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
					<MainIngredient />
					<MainIngredient />
					<MainIngredient />
					<MainIngredient />
				</div>
				<div className="col-start-0 col-span-12 relative">
					{/* Swoosh Background */}
					<Swoosh className="w-full h-auto" />
					{/* Text Content */}
					<div className="absolute inset-0 grid grid-cols-12 items-center justify-center">
						<div className="col-start-2 col-span-10 flex flex-col items-center justify-center">
							<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium my-10 md:my-16 font-pacifico">
								Share and publish your own recipes
							</h2>
							<Button>Add recipe</Button>
						</div>
					</div>
				</div>
				<div className="col-start-2 col-span-10 py-10">
					<HeadingWithLine text="Top Contributors" />
				</div>
				<div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
					{/* Justerat gap */}
					{profiles.map((profile, index) => (
						<div key={index} className="flex justify-center">
							<ProfileCard
								name={profile.name}
								recipes={profile.recipes}
								followers={profile.followers}
								following={profile.following}
							/>
						</div>
					))}
				</div>

				<div className="col-start-2 col-span-10 py-10">
					<HeadingWithLine text="Food and Health: Research & Findings" />
				</div>

				<div className="col-start-2 col-span-10 grid grid-rows-2 gap-4">
					<Blogpost />
					<Blogpost />
				</div>
			</div>
		</div>
	);
}

export default HomePage;

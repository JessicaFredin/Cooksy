import RecipeCard from "../components/RecipeCard";
import HeadingWithLine from "../components/HeadingWithLine";
import { MeatIcon } from "../assets/icons/MeatIcon";
import { ChickenIcon } from "../assets/icons/ChickenIcon";
import { FishIcon } from "../assets/icons/FishIcon";
import food1 from "../assets/images/food1.jpg";
import profile1 from "../assets/images/profile1.jpg";

const RecipePage = () => {
	// Dummy data för att visa korten
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
			icon: <ChickenIcon />,
			category: "Chicken",
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
			icon: <ChickenIcon />,
			category: "Chicken",
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
			icon: <ChickenIcon />,
			category: "Chicken",
			time: "100 min",
			rating: 4,
			reviews: 545,
			comments: 89,
		},
	];

 
	return (
		<div className="mx-auto py-8 grid grid-cols-12 gap-6">
			{/* Page Title */}
			<div className="col-start-2 col-span-3">
				<HeadingWithLine text="Recipes" />
			</div>


			{/* Recipe Grid */}
			<div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{recipes.map((recipe, index) => (
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
				))}
			</div>
		</div>

		// <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">

		// 	<div className="col-start-2 col-span-3">
		// 		<HeadingWithLine text="Recipes" />
		//   </div>

		// 	<RecipeCard
		// 		image={food1}
		// 		dishName="Shishkebab med baba ganoush"
		// 		categoryIcon={MeatIcon} // Change this to other icons dynamically
		// 		categoryName="Meat"
		// 		time="90 min"
		// 		authorName="Lisa Karlsson"
		// 		authorImage={profile1}
		// 		rating={2}
		// 		reviews={15}
		// 		commentsCount={3}
		// 	/>
		// </div>
	);
};

export default RecipePage;

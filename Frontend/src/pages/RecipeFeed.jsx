import HeadingWithLine from "../components/HeadingWithLine";
import RecipeCard from "../components/RecipeCard";
import { useData } from "../contexts/DataContext";

const RecipeFeed = () => {
	//Hämtar data, laddningsstatus och fel från DataContext
	const { data, loading, error } = useData();
	//Hanterar laddningsstatus
	if (loading) {
		return <p>Loading recipes...</p>;
	}

	if (error) {
		return <p>Something went wrong: {error.message}</p>;
	}
	//Renderar receptflödet om data finns
	return (
		<div className="grid grid-cols-12 gap-x-4 py-32">
			{/* Rubrik*/}
			<div className="col-start-2 col-span-10">
				<HeadingWithLine text="Recipe Feed" />
			</div>

			{/* Recept kort */}
			<div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 mt-8">
				{data.recipes.map((recipe, index) => (
					<div key={index} className="flex justify-center">
						{/*Renderar receptkort */}
						<RecipeCard
							image={recipe.img}
							dishName={recipe.name}
							categoryName={recipe.category}
							time={recipe.time}
							authorName="Lisa Karlsson"
							authorImage={recipe.img}
							rating={recipe.rating}
							reviews={recipe.reviews}
							commentsCount={recipe.comments}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecipeFeed;

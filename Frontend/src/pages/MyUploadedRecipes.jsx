
import Button from "../components/Button";
import RecipeCard from "../components/RecipeCard";
import HeadingWithLine from "../components/HeadingWithLine";
import { useData } from "../contexts/DataContext";

const MyUploadedRecipes = () => {
	const { data, loading, error } = useData();

	return (
		<div className="grid grid-cols-12 gap-x-4 py-12">
			{/* Rubrik */}
			<div className="col-start-2 col-span-10 mb-20">
				<HeadingWithLine text="My Uploaded recipes" />
			</div>

			{/* Publicerade recept */}
			<div className="col-start-2 col-span-10">
				<h2 className="text-2xl font-semibold mb-4 font-pacifico">
					My Published Recipes
				</h2>
				<div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
					{data.recipes.slice(0, 3).map((recipe, index) => (
						<div key={index} className="flex justify-center">
							<RecipeCard
								image={recipe.img} // Importera eller använd relevant bild här.
								dishName={recipe.name}
								categoryName={recipe.category}
								time={recipe.time}
								authorName="Lisa karlsson"
								authorImage={recipe.img}
								rating={recipe.rating}
								reviews={recipe.reviews}
								commentsCount={recipe.comments}
							/>
						</div>
					))}
				</div>
				<div className="flex justify-end mt-6">
					<Button
						size="medium"
						onClick={() => alert("Load more published recipes")}
					>
						More
					</Button>
				</div>
			</div>

			{/* Privata recept */}
			<div className="col-start-2 col-span-10 mt-12">
				<h2 className="text-2xl font-semibold mb-4 font-pacifico">
					My Private Recipes
				</h2>
				<div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
					{data.recipes.map((recipe, index) => (
						<div key={index} className="flex justify-center">
							<RecipeCard
								image={recipe.img} // Importera eller använd relevant bild här.
								dishName={recipe.name}
								categoryName={recipe.category}
								time={recipe.time}
								authorName="Lisa karlsson"
								authorImage={recipe.img}
								rating={recipe.rating}
								reviews={recipe.reviews}
								commentsCount={recipe.comments}
							/>
						</div>
					))}
				</div>
				<div className="flex justify-end mt-6">
					<Button
						size="medium"
						onClick={() => alert("Load more private recipes")}
					>
						More
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MyUploadedRecipes;

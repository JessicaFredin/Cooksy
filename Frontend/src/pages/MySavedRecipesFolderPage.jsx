import HeadingWithLine from "../components/HeadingWithLine";
import SearchField from "../components/SearchField";
import RecipeCard from "../components/RecipeCard";
import FiltersMenu from "../components/FiltersMenu";
import { useLocation } from "react-router-dom";
import { useData } from "../contexts/DataContext";

const MySavedRecipesFolderPage = () => {
	const { data, loading, error } = useData();

	// Hämtar data om mappen från sidans tillstånd via useLocation
	const location = useLocation();
	const { folder } = location.state || {};
	// Om ingen mappdata hittas, visa ett meddelande
	if (!folder) return <div>Folder not found!</div>;

	return (
		// Huvudlayout för sidan, använder ett grid-system för responsiv design
		<div className="grid-layouten grid grid-cols-12 gap-x-4 py-32">
			<div className="col-start-2 col-span-3">
				<HeadingWithLine
					className="col-start-2"
					text="My saved recipes"
				/>
			</div>
			<div className="md:flex md:justify-between col-start-2 col-span-10 mb-6 md:my-16">
				<div className="mt-8 mb-16 md:m-0 md:order-2 md:w-3/5 lg:w-2/5">
					<SearchField />
				</div>
				<FiltersMenu />
			</div>
			{/* Visar mappnamn och färg */}
			<div
				className={`bg-${folder.color} col-start-2 col-span-10 grid grid-cols-2 rounded-lg p-3 text-lg md:text-2xl px-8 mb-4 font-pacifico`}
			>
				<h3>{folder.name}</h3>
			</div>
			{/* Grid-layout för att visa receptkorten */}
			<div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
				{/* Itererar över recept-arrayen för att generera kort */}
				{data.recipes.map((recipe, index) => (
					<div key={index} className="flex justify-center">
						<RecipeCard
							image={recipe.img} 
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
		</div>
	);
};
export default MySavedRecipesFolderPage;

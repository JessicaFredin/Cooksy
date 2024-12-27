import StarRating from "../components/StarRating";
import RecipeShortInfoBox from "../components/RecipeDetailsPage/RecipeShortInfoBox";
import Warning from "../components/RecipeDetailsPage/Warning";
import IngredientsInstructions from "../components/RecipeDetailsPage/IngredientsInstructions";
import NutritionalValueDropdown from "../components/RecipeDetailsPage/NutritionalValueDropdown";
import NutritionInfo from "../components/RecipeDetailsPage/NutritionInfo";
import PortionBar from "../components/RecipeDetailsPage/PortionBar";
import RecipeImage from "../components/RecipeDetailsPage/RecipeImage";

function RecipeDetailsPage() {
	return (
		<div className="mt-20 grid grid-cols-12 gap-6 md:grid-rows-30 md:gap-y-4 lg:mt-52">
			<div className="flex items-center col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-1  md:self-start lg:row-span-1">
				<StarRating />
				<h5 className="mt-1 ml-2">(84)</h5>
			</div>

			<h1 className="text-4xl font-bold col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-2 lg:row-span-1 lg:text-5xl">
				Curry chicken with paprika rice
			</h1>

			{/* <RecipeImage className="col-start-2 col-span-10 md:col-start-6 md:col-span-6 md:row-start-1 md:row-span-3 lg:row-start-1 lg:row-span-5"> */}
			<RecipeImage />

			<div className="col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-3 lg:row-start-3 lg:row-span-1 lg:col-span-3 lg:col-start-2">
				<RecipeShortInfoBox />
			</div>

			<p className="col-start-2 col-span-10 md:col-start-2 md:col-span-4 md:row-start-4 lg:row-start-4 lg:row-span-1 lg:text-lg">
				Quick chicken stew with only five main ingredients - perfect to
				prepare when dinner has to be on the table quickly! This recipe
				is part of Mathem&apos;s concept - recipes with five main
				ingredients.
			</p>
			<div className="col-start-2 col-span-6 md:col-start-2 md:col-span-4 md:row-start-5 lg:row-start-5 lg:col-start-2 lg:col-span-2 grid grid-cols-2">
				<Warning title="Lactose" />
				<Warning title="Gluten" />
			</div>

			<div className="col-start-2 col-span-10 md:col-start-6 md:col-span-6 md:row-start-4 md:row-span-3 lg:row-start-6  lg:row-span-1">
				<NutritionInfo />
			</div>
			<div className="col-start-2 col-span-10 md:row-start-7">
				<PortionBar />
			</div>
			<div className="col-start-2 col-span-10">
				<IngredientsInstructions />
			</div>
			<div className="col-start-2 col-span-10">
				<NutritionalValueDropdown />
			</div>

			<div className="col-start-2 col-span-10 grid ">
				{" "}
				<NutritionalValueDropdown />
				<div className=" md:col-start-2 mt-10 md:mt-0 flex flex-col items-center">
					<h3 className="font-bold text-2xl">Rate this recipe</h3>
					<StarRating />
				</div>
			</div>
		</div>
	);
}

export default RecipeDetailsPage;

/* eslint-disable react/prop-types */
import { ChickenIcon } from "../../assets/icons/ChickenIcon";
import { FishIcon } from "../../assets/icons/FishIcon";
import { MeatIcon } from "../../assets/icons/MeatIcon";
import { VegetableIcon } from "../../assets/icons/VegetableIcon";
import { SeafoodIcon } from "../../assets/icons/SeafoodIcon";
import { TimeIcon } from "../../assets/icons/TimeIcon";
import { IngredientsIcon } from "../../assets/icons/IngredientsIcon";
import { DrinksIcon } from "../../assets/icons/DrinksIcon";

const categoryIconMap = {
	Meat: MeatIcon,
	Poultry: ChickenIcon,
	Fish: FishIcon,
	Vegetable: VegetableIcon,
     Seafood: SeafoodIcon,
     Drinks: DrinksIcon
};

function RecipeShortInfoBox({ category, cookingTime, ingredientsCount }) {
	const IconComponent = categoryIconMap[category];

	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="flex flex-col items-center justify-center border-2 border-green-500 p-2 rounded-2xl">
				{/* Infomarion om tid,huvudingridient och antalet ingridienser */}
				{IconComponent && <IconComponent />}
				<h4 className="md:text-sm lg:text-lg">{category}</h4>
			</div>
			<div className="flex flex-col items-center justify-center border-2 border-green-500 p-2 rounded-2xl">
				<TimeIcon />
				<h4 className="md:text-sm lg:text-lg">{cookingTime} min</h4>
			</div>
			<div className="flex flex-col items-center justify-center border-2 border-green-500 p-2 rounded-2xl">
				<IngredientsIcon />{" "}
				<h4 className="md:text-sm lg:text-lg">
					{ingredientsCount} ingr.
				</h4>
			</div>
		</div>
	);
}

export default RecipeShortInfoBox;

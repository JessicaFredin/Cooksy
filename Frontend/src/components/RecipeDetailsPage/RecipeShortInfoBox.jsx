import { ChickenIcon } from "../../assets/icons/ChickenIcon";
import { FishIcon } from "../../assets/icons/FishIcon";
import { MeatIcon } from "../../assets/icons/MeatIcon";
import { VegetableIcon } from "../../assets/icons/VegetableIcon";
import { SeafoodIcon } from "../../assets/icons/SeafoodIcon";
import { TimeIcon } from "../../assets/icons/TimeIcon";
import { IngredientsIcon } from "../../assets/icons/IngredientsIcon";

const categoryIconMap = {
	Meat: MeatIcon,
	Poultry: ChickenIcon,
	Fish: FishIcon,
	Vegetable: VegetableIcon,
	Seafood: SeafoodIcon,
};

function RecipeShortInfoBox() {
	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="flex flex-col items-center justify-center border-2 border-green-500 p-2 rounded-2xl">
				{/* <img className="w-10 md:w-7 lg:w-10" src={icon}/> */}
				<ChickenIcon />
				<h4 className="md:text-sm lg:text-lg">Chicken</h4>
			</div>
			<div className="flex flex-col items-center justify-center border-2 border-green-500 p-2 rounded-2xl">
				<TimeIcon />
				<h4 className="md:text-sm lg:text-lg">30 min</h4>
			</div>
			<div className="flex flex-col items-center justify-center border-2 border-green-500 p-2 rounded-2xl">
				<IngredientsIcon />{" "}
				<h4 className="md:text-sm lg:text-lg">12 ingr.</h4>
			</div>
		</div>
	);
}

export default RecipeShortInfoBox;

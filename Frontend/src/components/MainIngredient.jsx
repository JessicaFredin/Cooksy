import { useState } from "react";
import Food1 from "../assets/images/food1.jpg"

//Tar emot props  bild, titel, beskrivning
const MainIngredient = ({ image, title, description }) => {
	return (
		<div className="cursor-pointer">
			<img
        className="rounded-t-xl"
        src={Food1}
        ></img>
			<div className="shadow-lg px-3 py-4 md:text-sm rounded-xl xl:text-xl">
				<h3>Chicken</h3>
			</div>
		</div>
	);
};

export default MainIngredient;

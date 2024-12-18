import React, { useState } from "react";
/*import img from "../assets/images/chicken.jpg"*/

const MainIngredient = ({ image, title, description }) => {
	return (
		<div className="cursor-pointer">
			{/*  <img
        className="rounded-t-xl"
        src={img}
        ></img>*/}
			<div className="shadow-lg px-3 py-4 md:text-sm rounded-xl xl:text-xl">
				<h3>Chicken</h3>
			</div>
		</div>
	);
};

export default MainIngredient;

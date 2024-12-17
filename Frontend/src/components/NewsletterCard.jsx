import { useState } from "react";
import NewsletterCardImg from "../assets/images/NewsletterCardImg.png";

function Newsletter() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div
			className={`relative cursor-pointer transition-all duration-300
      ${isActive ? "border-4 border-lime-400" : "border-0 rounded-2xl border-4 border-white"} 
      rounded-lg shadow-lg`}
			onClick={() => setIsActive(!isActive)}
		>
			<img
				src={NewsletterCardImg}
				alt="food"
				className="w-full h-40 object-cover rounded-t-lg"
			/>

			<h2 className="bg-lime-200 text-gray-700 font-bold text-sm p-2 pl-3 rounded-b-lg">
				High-Protein Recipes
			</h2>

			<div className="p-3 md:h-40 bg-white text-gray-600 text-xs md:text-sm">
				<p>
					Boost your protein intake with tasty, nourishing meals. Get
					recipes that support muscle growth, energy, and
					health—ranging from quick snacks to hearty dinners. Stay
					fueled and satisfied!
				</p>
			</div>
		</div>
	);
}

export default Newsletter;

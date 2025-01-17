import { useState } from "react";

//Tar emot props  Rubrik, beskrivning, bild
function Newsletter({ title, description, img }) {
	const [isActive, setIsActive] = useState(false);
/* Få en grön boarder runt kortet när man trycker på den */
	return (
		<div
			className={`relative cursor-pointer transition-all duration-300
      ${
			isActive
				? "border-4 border-green-100"
				: "rounded-2xl border-4 border-white"
		} 
      rounded-lg shadow-lg`}
			onClick={() => setIsActive(!isActive)}
		>
			{/* Bild beskrivning och rubrik för korten */}
			<img 
				src={img}
				alt="food"
				className="w-full h-40 object-cover rounded-t-lg"
			/>

			<h2 className="bg-green-100 text-gray-700 font-bold text-sm p-2 pl-3 rounded-b-lg">
				{title}
			</h2>

			<div className="p-3 md:h-40 bg-white text-gray-600 text-xs md:text-sm">
				<p>{description}</p>
			</div>
		</div>
	);
}

export default Newsletter;

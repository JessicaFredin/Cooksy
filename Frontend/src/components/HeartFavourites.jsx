/* eslint-disable react/prop-types */
import { useState } from "react";
import { HeartIcon } from "../assets/icons/HeartIcon";

// Funktionell komponent för att hantera favoritmarkeringar med ett hjärta
const HeartFavorites = ({ size = "small" }) => {
	const [isClicked, setIsClicked] = useState(false);

	// Definierar olika storlekar för hjärt-ikonen
	const sizeClasses = {
		small: "w-8 h-8",
		medium: "w-10 h-10",
		large: "w-12 h-12",
	};
	// Bestämmer vilken storlek som ska användas, baserat på props
	const heartSize = sizeClasses[size] || sizeClasses.small;

	return (
		// Yttre container för hjärtikonen
		<div
			className={`flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 bg-white ${heartSize}`}
			onClick={(event) => {
				event.preventDefault();
				setIsClicked((prev) => !prev);
			}}
		>
			{" "}
			{/* Hjärt-ikonen med dynamisk färg baserat på isClicked */}
			<HeartIcon
				stroke={isClicked ? "#E12F6B" : "#E12F6B"}
				fill={isClicked ? "#E12F6B" : "none"}
			/>
		</div>
	);
};

export default HeartFavorites;

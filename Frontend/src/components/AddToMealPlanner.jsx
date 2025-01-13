import React, { useState } from "react";

// Knapp för att lägga till något i en måltidsplanerare, med olika storlekar och visuella tillstånd.
const AddToMealPlanner = ({ size = "small" }) => {
	// Håller reda på om komponenten är i "hover" eller "clicked"-tillstånd
	const [isHovered, setIsHovered] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	// Storleksklasser för knappen baserat på size-prop
	const sizeClasses = {
		small: "w-8 h-8",
		medium: "w-10 h-10",
		large: "w-12 h-12",
	};
    // Hämtar klass för storlek på knappen
	const circleSize = sizeClasses[size] || sizeClasses.small;
	// Hämtar klass för storlek på ikonen
	const iconSize =
		size === "large"
			? "w-6 h-6"
			: size === "medium"
			? "w-5 h-5"
			: "w-4 h-4";

	// Färg på bakgrund beroende på tillstånd
	const bgColor = isClicked
		? "bg-[#A8D400]" // Grön bakgrund när tryckt
		: isHovered
		? "bg-[#C2185B]" // Mörk rosa på hover
		: "bg-[#FF4D65]"; // Ljus rosa som standard

    // Välj ikon baserat på klicktillstånd
	const icon = isClicked ? (
		// Checkmark ikon om knappen är klickad
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={`fill-white ${iconSize}`}
		>
			<path d="M20.29 5.71L9 17 3.71 11.71a1 1 0 00-1.42 1.42l6 6a1 1 0 001.42 0l12-12a1 1 0 00-1.42-1.42z" />
		</svg>
	) : (
		// Plus ikon om knappen inte är klickad
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={`fill-white ${iconSize}`}
		>
			<path d="M19 13h-6v6a1 1 0 01-2 0v-6H5a1 1 0 010-2h6V5a1 1 0 012 0v6h6a1 1 0 010 2z" />
		</svg>
	);

	return (
		// Huvudcontainer för knappen
		<div
			className={`flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 ${circleSize} ${bgColor}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={() => setIsClicked(!isClicked)}
		>
			{/* Visar ikonen baserat på dess tillstånd */}
			{icon}
		</div>
	);
};

export default AddToMealPlanner;

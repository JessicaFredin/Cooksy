/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const StarRating = ({
	totalStars = 5,
	size = "2rem",
	staticRating = null, // Statiskt betyg (read-only läge)
	onRatingChange = null, // Callback för att hantera användarens val av betyg
	hoverDescriptions = null, // Beskrivningar som visas vid hover, t.ex. "Very good"
	initialRating = 0,
}) => {
	const [hoveredStar, setHoveredStar] = useState(0); // State för att hålla reda på vilken stjärna som är "hovered"
	const [selectedRating, setSelectedRating] = useState(initialRating); // State för att hålla reda på användarens valda betyg
	useEffect(() => {
		// Initierar valt betyg baserat på staticRating om det ges
		if (staticRating !== null) {
			setSelectedRating(staticRating);
		}
	}, [staticRating]);
    // Hanterar klick på en stjärna (endast om komponenten är interaktiv).
	const handleClick = (index) => {
		if (onRatingChange) {
			setSelectedRating(index); // Uppdatera valt betyg
			onRatingChange(index); // Anropar callback för att meddela ändringen
		}
	};

	const handleMouseOver = (index) => {
		if (onRatingChange) setHoveredStar(index); // Uppdatera hover-state endast i interaktivt läge
	};
    // Återställer hover-state när muspekaren lämnar stjärnorna.
	const handleMouseLeave = () => {
		if (onRatingChange) setHoveredStar(0); // Only reset hover in interactive mode
	};

	// Kontrollera om komponenten är i statiskt läge.
	const isStatic = staticRating !== null;

	return (
		<div className="star-rating flex flex-col items-center space-y-2">
			{/* Renderar stjärnor */}
			<div className="flex space-x-1">
				{[...Array(totalStars)].map((_, index) => {
					const starIndex = index + 1; // Index för varje stjärna (börjar från 1)
					// Kontrollerar om stjärnan är aktiv (fylld)
					const isActive =
						starIndex <=
						(isStatic
							? staticRating
							: hoveredStar || selectedRating);

					return (
						<span
							key={starIndex}
							className={isActive ? "star filled" : "star"}
							onClick={() => !isStatic && handleClick(starIndex)}
							onMouseOver={() =>
								!isStatic && handleMouseOver(starIndex)
							}
							onMouseLeave={() => !isStatic && handleMouseLeave()}
							style={{
								fontSize: size, // Adjust size dynamically
								cursor: isStatic ? "default" : "pointer",
								color: isActive ? "#A8D400" : "#d1d5db", // Active or inactive color
								stroke: "#A8D400", // Border color
								strokeWidth: "1px",
								transition: "color 0.3s ease, stroke 0.3s ease",
							}}
						>
							&#9733; {/* Unicode for a star */}
						</span>
					);
				})}
			</div>

			{/* Beskrivningar vid hover eller valt betyg */}
			{hoverDescriptions && (
				<div className="text-gray-600 text-sm text-center">
					{hoverDescriptions[hoveredStar || selectedRating] || ""}
				</div>
			)}
		</div>
	);
};

export default StarRating;

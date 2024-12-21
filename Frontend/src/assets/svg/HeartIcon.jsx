/* eslint-disable react/prop-types */
import { useState } from "react";

export function HeartIcon({ size = 20, initialStroke = "#E12F6B" }) {
	const [isHovered, setIsHovered] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);
	const handleClick = () => setIsClicked((prev) => !prev);

	// Determine fill and stroke colors dynamically
	const fillColor = isClicked
		? "#FF4D65" // Fill color when clicked
		: isHovered
		? "#FF4D65" // Fill color on hover
		: "none"; // Default fill color

	const strokeColor = isHovered || isClicked ? "#FF4D65" : initialStroke;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
			style={{ cursor: "pointer", transition: "all 0.3s ease" }} // Smooth transition
		>
			<path
				fill={fillColor}
				stroke={strokeColor}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
			>
				{/* Animation remains for stroke-dashoffset */}
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					dur="0.7s"
					values="32;0"
				></animate>
			</path>
		</svg>
	);
}

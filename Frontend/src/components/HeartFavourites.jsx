/* eslint-disable react/prop-types */
import { useState } from "react";
import { HeartIcon } from "../assets/svg/HeartIcon";

const HeartFavorites = ({ size = "small" }) => {
	const [isClicked, setIsClicked] = useState(false);

	// Define size classes for heart icon
	const sizeClasses = {
		small: "w-8 h-8",
		medium: "w-10 h-10",
		large: "w-12 h-12",
	};

	const heartSize = sizeClasses[size] || sizeClasses.small;

	return (
		<div
			className={`flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 bg-white ${heartSize}`}
			onClick={() => setIsClicked((prev) => !prev)}
		>
			<HeartIcon
				stroke={isClicked ? "#FF4D65" : "#E12F6B"}
				fill={isClicked ? "#FF4D65" : "none"}
			/>
		</div>
	);
};

export default HeartFavorites;

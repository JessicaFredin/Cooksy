import React, { useState } from "react";
// Size: small, medium, large
const HeartFavorites = ({ size = "small" }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => setIsClicked(!isClicked);

  // Storlek på cirkeln (nu mindre än tidigare)
  const sizeClasses =
    size === "large" ? "w-16 h-16" : size === "medium" ? "w-12 h-12" : "w-8 h-8";

  // Storlek på hjärtat (anpassad till cirkelns storlek)
  const heartSize =
    size === "large" ? "w-8 h-8" : size === "medium" ? "w-6 h-6" : "w-4 h-4";

  const bgColor = "bg-[#FAFAFA]";
  const heartColor = isClicked
    ? "fill-[#FF4D65] stroke-none"
    : isHovered
    ? "fill-[#FF4D65] stroke-none"
    : "fill-none stroke-[#FF4D65]";

  return (
    <div
      className={`flex items-center justify-center rounded-full cursor-pointer ${sizeClasses} ${bgColor}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`stroke-2 ${heartColor} ${heartSize}`} // Lägg till hjärtstorlek
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        ></path>
      </svg>
    </div>
  );
};

export default HeartFavorites;
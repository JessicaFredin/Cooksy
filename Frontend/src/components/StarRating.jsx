/* eslint-disable react/prop-types */
import { useState } from "react";

// <StarRating totalStars={5} size="3rem" />

const StarRating = ({ totalStars = 5, size = "2rem" }) => {
  const [hoveredStar, setHoveredStar] = useState(0); // Vilken stjärna som hovras
  const [selectedRating, setSelectedRating] = useState(0); // Sparar valt betyg

  const handleClick = (index) => {
    setSelectedRating(index);
  };

  const handleMouseOver = (index) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1; // Stjärnindex börjar från 1
        return (
          <span
            key={starIndex}
            className={
              starIndex <= (hoveredStar || selectedRating)
                ? "star filled"
                : "star"
            }
            onClick={() => handleClick(starIndex)}
            onMouseOver={() => handleMouseOver(starIndex)}
            onMouseLeave={handleMouseLeave}
            style={{
              fontSize: size, // Anpassad storlek
              cursor: "pointer",
              color: starIndex <= (hoveredStar || selectedRating) ? "#A8D400" : "#d1d5db",
              stroke: "#A8D400",
              strokeWidth: "1px",
            }}
          >
            &#9733; {/* Unicode-tecknet för en fylld stjärna */}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
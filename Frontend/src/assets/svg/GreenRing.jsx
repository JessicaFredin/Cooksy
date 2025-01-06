import React, { useState } from "react";

const GreenRing = ({ text, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="relative inline-block px-4 py-4 text-xl font-semibold rounded-full bg-transparent border-none focus:outline-none lg:text-2xl "
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        style={{
          opacity: isHovered || isActive ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <ellipse
          cx="100"
          cy="25"
          rx="95"
          ry="40"
          stroke="#b5e000" // Ring color
          strokeWidth="6"
          fill="none"
        />
      </svg>

      <div className="relative z-8 ">{text}</div>
    </button>
  );
};

export default GreenRing;

import React from "react";
import PropTypes from "prop-types";

function HeadingWithLine({ text }) {
  return (
    // Wrapper för att centrera rubriken och placera den dekorativa linjen
    <div className="relative inline-block text-center">
       {/* Rubriken som inporteras in för att plaseras över linjen */}
      <h1 className="text-3xl font-pacifico mb-6 whitespace-nowrap">{text}</h1>
      {/* SVG-element för att visa en dekorativ linje under rubriken */}
      <svg
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 638 30"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M1 15.587C1 15.587 256.659 -7.53603 228.704 11.5477C200.748 30.6315 265.642 13.5711 280.647 11.5477C400.286 -4.585 637 26 637 26"
          stroke="#A8D400"
          strokeWidth="8"
        />
      </svg>
    </div>
  );
}

// Validerar att prop text är en sträng och krävs för att komponenten ska fungera korrekt
HeadingWithLine.propTypes = {
  text: PropTypes.string.isRequired, // Kräver att text skickas in som en sträng
};

export default HeadingWithLine;

/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function HeadingWithLine({ text }) {
	return (
		<div className="relative inline-block text-center">
			<h1 className="text-3xl font-pacifico mb-6">{text}</h1>
			<svg
				className="absolute left-0 bottom-3 w-full"
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

// Prop type validation
HeadingWithLine.propTypes = {
	text: PropTypes.string.isRequired,
};

export default HeadingWithLine;

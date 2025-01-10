// function RecipeSwoosh(props) {
// 	return (
// 		<svg
// 			className="absolute top-0 left-0 w-full h-auto z-0"
// 			viewBox="0 0 1400 800" // Expanded viewBox for more space
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 			{...props}
// 		>
// 			<path
// 				d="M5.97108 -103.73C5.97108 -103.73 662.216 55.7172 528.499 150.112C394.781 244.507 603.238 209.384 644.247 214.242C971.227 252.976 1384.25 751.827 1384.25 751.827"
// 				stroke="#D3E980"
// 				strokeWidth="50"
// 			/>
// 		</svg>
// 	);
// }

// export default RecipeSwoosh;



function RecipeSwoosh(props) {
	return (
		<svg
			viewBox="0 -150 1400 950" // Adjusted to tightly fit the swoosh
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none" // Makes the swoosh stretch properly
			overflow="hidden" // Prevents clipping
			{...props}
		>
			<path
				d="M5.97108 -103.73C5.97108 -103.73 662.216 55.7172 528.499 150.112C394.781 244.507 603.238 209.384 644.247 214.242C971.227 252.976 1384.25 751.827 1384.25 751.827"
				stroke="#D3E980"
				strokeWidth="50"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export default RecipeSwoosh;

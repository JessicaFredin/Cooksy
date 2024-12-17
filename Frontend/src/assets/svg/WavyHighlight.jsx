/* eslint-disable react/prop-types */

function WavyHighlight({ className = "" }) {
	return (
		<svg
			className={`w-full  ${className}`} // Makes the SVG responsive
			viewBox="0 0 246 82"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* First path with gradient */}
			<path
				d="M2 23.5718C2 23.5718 76.9957 16.9492 64.1158 21.7491C51.2359 26.5489 121.75 22.258 128.663 21.7491C173.669 18.436 167.028 20.2458 212 23.7127"
				stroke="url(#paint0_linear_3456_37715)"
				strokeOpacity="0.5"
				strokeWidth="40"
			/>
			{/* Second path with solid stroke */}
			<path
				d="M2 61.4647C2 61.4647 88.4236 53.1865 73.5811 59.1863C58.7385 65.1862 139.998 59.8225 147.964 59.1863C199.828 55.0451 192.175 57.3073 244 61.6409"
				stroke="#A8D400"
				strokeOpacity="0.5"
				strokeWidth="40"
			/>
			{/* Gradient Definition */}
			<defs>
				<linearGradient
					id="paint0_linear_3456_37715"
					x1="-4.63158"
					y1="23.6638"
					x2="284.217"
					y2="23.6638"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="1" stopColor="#A8D400" />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default WavyHighlight;

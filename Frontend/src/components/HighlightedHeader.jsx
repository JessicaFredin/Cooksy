import WavyHighlight from "../assets/svg/WavyHighlight";

function HighlightedHeader() {
	return (
		<div className="relative w-full">
			{/* Wavy Highlight */}
			<WavyHighlight className="w-full h-auto" />

			{/* Text på startsidan som har gröna sträck backom sig*/}
			<div className="absolute inset-0 flex items-center justify-start pl-4 md:pl-8">
				<h1 className="font-pacifico text-lg md:text-4xl lg:text-6xl text-black leading-tight">
					Cook, share, and{" "}
					<span className="block">inspire with Cooksy</span>
				</h1>
			</div>
		</div>
	);
}

export default HighlightedHeader;

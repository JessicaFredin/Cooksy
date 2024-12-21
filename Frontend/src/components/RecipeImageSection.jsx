/* eslint-disable react/prop-types */

const RecipeImageSection = ({
	imageUrl,
	authorName,
	authorImage,
	isFavorited,
}) => {
	return (
		<div className="relative flex flex-col gap-3">
			{/* Recipe Image */}
			<div className="relative w-full max-w-md rounded-lg ">
				<img
					src={imageUrl}
					alt="Recipe"
					className="w-full h-auto object-cover"
				/>
				{/* Favorite and Add Buttons */}
				<button
					className={`absolute top-2 right-14 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md ${
						isFavorited ? "text-red-500" : "text-gray-400"
					}`}
				>
					<i className="fas fa-heart"></i>
				</button>
				<button className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md text-gray-400">
					<i className="fas fa-plus"></i>
				</button>

				{/* Author Info Overlay */}
				<div className="absolute bottom-0 right-0 w-1/2 bg-green-300 flex items-center px-4 py-2 rounded-tl-lg">
					<p className="text-sm font-semibold text-gray-800">
						{authorName}
					</p>
					<div className="absolute right-0">
						<img
							src={authorImage}
							alt={authorName}
							className="h-20 rounded-lg object-cover "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeImageSection;
/* eslint-disable react/prop-types */
import HeartFavourites from "../HeartFavourites";

function RecipeImage({imageUrl, title, firstName, lastName, profilePicture}) {
	return (
		<div className="relative rounded-lg">
			{/* Huvudbilden */}
			<img
				src={imageUrl}
				alt={title}
				className="w-full h-auto rounded-lg"
			/>

			{/* Hjärta i övre högra hörnet */}
			<div className="absolute top-4 right-4">
				<HeartFavourites />
			</div>

			{/* Hjärta i övre högra hörnet */}
			<div className="absolute top-14 right-4">
				<HeartFavourites />
			</div>

			{/* Profile Information */}
			<div className="absolute bottom-[-14px] right-4 flex items-center">
				{/* Profile Name */}
				<div className="bg-green-500 py-1 px-10 rounded-tl-xl text-lg font-medium">
					<p>
						{firstName} {lastName}
					</p>
				</div>

				{/* Profile Picture */}
				<div className="w-16 h-16 flex-shrink-0">
					<img
						src={profilePicture || ""} // Add a fallback profile image
						alt={`${firstName} ${lastName}`}
						className="w-full h-full rounded-xl object-cover border-2 border-white shadow-lg"
					/>
				</div>
			</div>
		</div>
	);
}

export default RecipeImage;

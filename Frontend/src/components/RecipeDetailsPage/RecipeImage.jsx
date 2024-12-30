import CardImg from "../../assets/images/CardImg.png";
import HeartFavourites from "../HeartFavourites";
import ProfileImage from "../../assets/images/profile1.jpg";

function RecipeImage() {
	return (
		<div className="relative rounded-lg">
			{/* Huvudbilden */}
			<img
				src={CardImg}
				alt="Meal"
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

			{/* Profilinformation */}
			<div className="absolute bottom-[-17px] right-4 flex items-center">
				{/* Profilnamn */}
				<div className="bg-green-200 py-1 px-10 rounded-tl-xl text-lg font-medium">
					<p>Lisa Karlsson</p>
				</div>

				{/* Profilbild */}
				<img
					src={ProfileImage}
					alt="Profile Image"
					className="w-20 h-18 rounded-xl"
				/>
			</div>
		</div>
	);
}

export default RecipeImage;

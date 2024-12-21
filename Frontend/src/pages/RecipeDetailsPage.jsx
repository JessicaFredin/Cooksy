import RecipeImageSection from "../components/RecipeImageSection";
import profileImg from "../assets/images/profile1.jpg"

function RecipeDetailsPage() {
	return (
		<div>
			<RecipeImageSection
				imageUrl="https://via.placeholder.com/400" // Replace with actual recipe image URL
				authorName="Lisa Karlsson"
				authorImage={profileImg} // Replace with actual author image URL
				isFavorited={true} // Set to true or false
			/>
		</div>
	);
}

export default RecipeDetailsPage;

import HeadingWithLine from "../components/HeadingWithLine";
import RecipeCard from "../components/RecipeCard";
import { useData } from "../contexts/DataContext";

const RecipeFeed = () => {
  const { data, loading, error } = useData();

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-12 gap-x-4 py-32">
      {/* Header */}
      <div className="col-start-2 col-span-10">
        <HeadingWithLine text="Recipe Feed" />
      </div>

      {/* Recipe Cards */}
      <div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 mt-8">
        {data.recipes.map((recipe, index) => (
          <div key={index} className="flex justify-center">
            <RecipeCard
              image={recipe.img} // Replace with appropriate image
              dishName={recipe.name}
			  description={recipe.description} // Lägg till beskrivning
              categoryName={recipe.category}
              time={recipe.time}
              authorName="Lisa Karlsson"
              authorImage={recipe.img}
              rating={recipe.rating}
              reviews={recipe.reviews}
              commentsCount={recipe.comments}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFeed;

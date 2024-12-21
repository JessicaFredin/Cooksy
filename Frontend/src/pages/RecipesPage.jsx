
import RecipeCard from "../components/RecipeCard";
import HeadingWithLine from "../components/HeadingWithLine";

const RecipePage = () => {
  // Dummy data för att visa korten
  const recipes = [
    { id: 1, name: "Recipe name" },
    { id: 2, name: "Cheeseburger pasta skillet (one pot)" },
    { id: 3, name: "Smashed burger med extra ost" },
    { id: 4, name: "Sushi" },
    { id: 5, name: "Chickpea and harissa stew with herby yoghurt" },
    { id: 6, name: "Shrimp salad" },
    { id: 7, name: "Steamed mussels in tomato cream sauce" },
    { id: 8, name: "Chicken and asparagus" },
    { id: 9, name: "Steamed mussels in tomato cream sauce" },
  ];

  return (
    <div className="container mx-auto py-8 px-4 grid grid-cols-12 gap-6">
      {/* Page Title */}
      <div className="col-start-2 col-span-3">
          <HeadingWithLine text="Recipes" />
        </div>

      {/* Recipe Grid */}
      <div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} size="small" />
          // <RecipeCard recipeData={recipe1} size="small" />

        ))}
      </div>
    </div>
  );
};

export default RecipePage;
import React from "react";
import Button from "../components/Button";
import RecipeCard from "../components/RecipeCard";
import HeadingWithLine from "../components/HeadingWithLine";

const MyUploadedRecipes = () => {
    // Dummy data for recipes with images
    const publishedRecipes = [
        { id: 1, dishName: "", description: "A classic Italian dish.", time: "30 min", image: "https://via.placeholder.com/300x200?text=Spaghetti+Bolognese" },
        { id: 2, dishName: "", description: "Rich and flavorful curry.", time: "40 min", image: "https://via.placeholder.com/300x200?text=Chicken+Curry" },
        { id: 3, title: "", description: "Perfectly cooked salmon.", time: "25 min", image: "https://via.placeholder.com/300x200?text=Grilled+Salmon" },
    ];

    const privateRecipes = [
        { id: 4, title: "", description: "Cheesy and delicious.", time: "50 min", image: "https://via.placeholder.com/300x200?text=Homemade+Pizza" },
        { id: 5, title: "", description: "Fresh and healthy.", time: "15 min", image: "https://via.placeholder.com/300x200?text=Caesar+Salad" },
        { id: 6, title: "", description: "Warm and hearty.", time: "90 min", image: "https://via.placeholder.com/300x200?text=Beef+Stew" },
        { id: 7, title: "", description: "Quick and easy.", time: "20 min", image: "https://via.placeholder.com/300x200?text=Vegetable+Stir+Fry" },
        { id: 8, title: "", description: "Fluffy and sweet.", time: "20 min", image: "https://via.placeholder.com/300x200?text=Pancakes" },
        { id: 9, title: "", description: "Rich and decadent.", time: "60 min", image: "https://via.placeholder.com/300x200?text=Chocolate+Cake" },
    ];

    return (
        <div className="grid grid-cols-12 gap-x-4 py-12">
            {/* Rubrik */}
            <div className="col-start-2 col-span-10">
                <HeadingWithLine text="My Uploaded recipes" />
            </div>

            {/* Publicerade recept */}
            <div className="col-start-2 col-span-10">
                <h2 className="text-2xl font-semibold mb-4 font-pacifico">My Published Recipes</h2>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
                    {publishedRecipes.map((recipe) => (
                        <RecipeCard 
                            key={recipe.id} 
                            id={recipe.id} 
                            image={recipe.image} 
                            dishName={recipe.title} 
                            categoryName="Meat" 
                            time={recipe.time} 
                            size={window.innerWidth >= 1024 ? "medium" : "small"} // Responsiv storlek
                        />
                    ))}
                </div>
                <div className="flex justify-end mt-6">
                    <Button size="medium" onClick={() => alert('Load more published recipes')}>More</Button>
                </div>
            </div>

            {/* Privata recept */}
            <div className="col-start-2 col-span-10 mt-12">
                <h2 className="text-2xl font-semibold mb-4 font-pacifico">My Private Recipes</h2>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
                    {privateRecipes.map((recipe) => (
                        <RecipeCard 
                            key={recipe.id} 
                            id={recipe.id} 
                            image={recipe.image} 
                            dishName={recipe.title} 
                            categoryName="Vegetable" 
                            time={recipe.time} 
                            size={window.innerWidth >= 1024 ? "medium" : "small"} // Responsiv storlek
                        />
                    ))}
                </div>
                <div className="flex justify-end mt-6">
                    <Button size="medium" onClick={() => alert('Load more private recipes')}>More</Button>
                </div>
            </div>
        </div>
    );
};

export default MyUploadedRecipes;
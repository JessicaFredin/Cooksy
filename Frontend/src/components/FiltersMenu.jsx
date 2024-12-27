import DropdownCategory from "./DropdownCategory";
import { useState } from "react";


const FiltersMenu = () => {
    const categories = [
      {
        title: "Calories (per portion)",
        options: ["0-100 kcal", "100-200 kcal", "200-400 kcal", "400-600 kcal", "600-800 kcal","800+ kcal" ],
      },
      {
        title: "Time",
        options: ["0-30 min", "31-60 min", "61-90 min", "91-120 min", "121-150 min", "150+ min"],
      },
      {
        title: "Meal Type",
        options: ["Breakfast", "Lunch", "Dinner", "Snacks"],
      },
      {
        title: "Dite",
        options: ["Vegan", "Vegetarian", "Keto", "Paleo"],
      },
      {
        title: "Protein Type",
        options: ["Chicken", "Beef", "Fish", "Lentils", "Seafood", "Egg", "Lamb"],
      },
      {
        title: "Recipes Without",
        options: ["Dairy", "Eggs", "Nuts", "Gluten", "Fish", "Seeds", "Flour", "Milk", "Chesse", "Sugar", "Soy", "Cream"],
      },
      {
        title: "World Cuisine",
        options: ["Italian", "Indian", "Chinese", "Mexican", "Swedish", "Asian", "American", "Middle Eastern"],
      },
      {
        title: "Ingredient",
        options: ["Tomatoes", "Cheese", "Chicken", "Basil"],
      }
    ];

    const [isOpen, setIsOpen] = useState(false);
    
  
    return (
      <div className="relative">
      {/* Knapp som visar/döljer dropdown */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-10 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-md"
      >
        Filter
        <span className="ml-8">▼</span>
      </button>

      {/* Dropdown-meny */}
      {isOpen && (
        <div className="absolute mt-4 w-full max-w-md mx-auto bg-white p-4 shadow-lg rounded-md z-10">
          {categories.map((category, index) => (
            <DropdownCategory
              key={index}
              title={category.title}
              options={category.options}
            />
          ))}
          <div className="mt-4">
            <button className="px-10 py-2 bg-pink-500 text-white font-semibold rounded-full">
              85 recipes found →
            </button>
          </div>
        </div>
      )}
    </div> 
);
};

export default FiltersMenu;
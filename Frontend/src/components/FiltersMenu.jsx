import DropdownCategory from "./DropdownCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FiltersMenu() {

  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    {
      title: "Calories (per portion)",
      options: ["0-100 kcal", "100-200 kcal", "200-400 kcal", "400-600 kcal", "600-800 kcal", "800+ kcal"],
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
    useEffect(() => {
      if (isOpen) {
        // Lås scroll på body
        document.body.style.overflow = "hidden";
      } else {
        // Återställ scroll på body
        document.body.style.overflow = "auto";
      }
  
      // Rensa effekten vid unmount
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isOpen]);
  
    return (
      <div>
        {/* Knapp som visar/döljer dropdown */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="px-8 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-md"
        >
          Filter
          <FontAwesomeIcon icon={faChevronDown} className="ml-8" />
        </button>
  
        {/* Overlay och Dropdown */}
        {isOpen && (
          <>
            {/* Overlay */}
            <div
              onClick={() => setIsOpen(false)} // Stänger dropdown om man klickar på overlayen
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
            ></div>
  
            {/* Dropdown-meny */}
            <div
              className="fixed top-0 left-0 w-96 h-screen bg-white p-4 shadow-lg z-50 overflow-y-auto"
            >
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
          </>
        )}
      </div>
    );
  }
  
  export default FiltersMenu;
import React, { useState } from "react";
import Button from "./Button";
import MealPlanCard from "./MealPlanCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
// Grundläggande struktur för måltider (tomma till att börja med)
const initialMealsState = {
  breakfast: null,
  lunch: null,
  dinner: null,
};

// Veckonummer som kan navigeras mellan
const weeks = [32, 33, 34, 35, 36];


const PopMealPlan = () => {

  const selectedRecipe = {
    id: 1,
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishName: "Homemade Sushi",
    categoryName: "Fish",
    time: "30 mins",
    authorName: "Test Author",
    authorImage: "https://cdn.pixabay.com/photo/2024/03/19/12/16/fantasy-8643203_1280.jpg",
    rating: 4.5,
    reviews: 25,
    commentsCount: 10,
    description: "This is a test description for the dish.",
  };

  const [currentDayIndex, setCurrentDayIndex] = useState(0);  // Håller reda på vilken dag som visas just nu
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Håller reda på vilken vecka som visas just nu
  const [mealsByWeek, setMealsByWeek] = useState( // State som lagrar måltidsplanen för varje vecka och dag
    weeks.reduce((acc, week) => {
      acc[week] = daysOfWeek.reduce((dayAcc, day) => {
        dayAcc[day] = { ...initialMealsState }; // Initialiserar varje dag med tomma måltider
        return dayAcc;
      }, {});
      return acc;
    }, {})
  );
  // Hämtar de aktuella måltiderna för vald vecka och dag
  const currentMeals =
    mealsByWeek[weeks[currentWeekIndex]][daysOfWeek[currentDayIndex]];
  // Hanterar när en recept-kort dras och släpps i en specifik måltidsruta
  const handleDrop = (e, mealType) => {
    e.preventDefault();
    const recipeData = JSON.parse(e.dataTransfer.getData("recipeData"));
    setMealsByWeek((prev) => ({
      ...prev,
      [weeks[currentWeekIndex]]: {
        ...prev[weeks[currentWeekIndex]],
        [daysOfWeek[currentDayIndex]]: {
          ...prev[weeks[currentWeekIndex]][daysOfWeek[currentDayIndex]],
          [mealType]: recipeData, // Uppdaterar måltiden med det släppta receptet
        },
      },
    }));
  };
  // Tillåter drag & drop på måltidsrutorna
  const allowDrop = (e) => e.preventDefault();

  // Renderar ett receptkort för en specifik måltid eller en tom plats om inget recept är valt
  const renderCard = (meal, mealType) =>
    meal ? (
      <MealPlanCard {...meal} />
    ) : (
      <div
        className="text-gray-500 flex items-center justify-center h-full font-semibold"
        style={{
          minHeight: "150px",
          width: "100%",
          border: "1px dashed #A8D400",
        }}
      >
        {mealType}
      </div>
    );

  return (
    <div className="w-full max-w-7xl mt-4 mx-auto bg-white p-2 rounded-lg shadow-lg overflow-y-auto lg:overflow-visible max-h-screen" >
      {/* Sektion för att navigera mellan veckor */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2 font-[Pacifico]">
          <h2 className="text-3xl font-bold text-[#333]">
            Week {weeks[currentWeekIndex]}
          </h2>
          <button
            className="bg-pink-500 text-black px-2 py-1 rounded-full text-xs"
            onClick={() =>
              setCurrentWeekIndex((prevIndex) =>
                prevIndex === 0 ? weeks.length - 1 : prevIndex - 1
              )
            }
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className="bg-pink-500 text-black px-2 py-1 rounded-full text-xs"
            onClick={() =>
              setCurrentWeekIndex((prevIndex) =>
                prevIndex === weeks.length - 1 ? 0 : prevIndex + 1
              )
            }
          >
             <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      {/* Grid för måltidsplanering */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 border-2 border-[#A8D400] rounded-md p-6">
        {/* Slot för "No Recipes Selected" */}
        <div
          className="flex flex-col items-center justify-start text-black-500 bg-white p-4"
          style={{ minHeight: "300px" }}
        >
          {/* Dag-navigering */}
          <div className="flex items-center mb-4">
            <button
              className="bg-[#D9D9D9] text-black px-2 py-1 rounded-full text-xs"
              onClick={() =>
                setCurrentDayIndex((prevIndex) =>
                  prevIndex === 0 ? daysOfWeek.length - 1 : prevIndex - 1
                )
              }
            >
             <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h3 className="text-2xl font-bold text-[#333] ml-2 font-[Pacifico]">
              {daysOfWeek[currentDayIndex]}
            </h3>
            <button
              className="bg-pink-500 text-black px-2 py-1 rounded-full text-xs ml-2"
              onClick={() =>
                setCurrentDayIndex((prevIndex) =>
                  prevIndex === daysOfWeek.length - 1 ? 0 : prevIndex + 1
                )
              }
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div
            className="flex items-center justify-center h-full"
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData("recipeData", JSON.stringify(selectedRecipe))
            }
          >
            {selectedRecipe ? (
              <MealPlanCard {...selectedRecipe}/>
            ) : (
              <div
                className="text-gray-500 text-sm flex items-center justify-center font-semibold"
                style={{
                  minHeight: "180px",
                  width: "100%",
                  border: "1px dashed #A8D400",
                }}
              >
                Drag Recipe Here
              </div>
            )}
          </div>
        </div>

        {/* Slots för måltider */}
        {["breakfast", "lunch", "dinner"].map((mealType) => (
          <div
            key={mealType}
            onDrop={(e) => handleDrop(e, mealType)}
            onDragOver={allowDrop}
            className="flex flex-col items-center justify-start bg-white text-black-500 border-[#A8D400] border rounded-md p-4"
            style={{ minHeight: "300px" }}
          >
            <h4
              className="text-lg font-semibold mb-2 w-full text-center text-black py-2"
              style={{ backgroundColor: "#EAF2C8" }}
            >
              {mealType}
            </h4>
            {renderCard(currentMeals[mealType.toLowerCase()], mealType)}
          </div>
        ))}
      </div>

      {/* Spara-knapp */}
      <div className="flex justify-end mt-6">
        <Button size="medium">Save</Button>
      </div>
    </div>
  );
};

export default PopMealPlan;


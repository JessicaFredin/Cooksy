import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import Button from "./Button";

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


const PopMealPlan = ({ selectedRecipe }) => {
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
      <RecipeCard {...meal} size="small" />
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
    <div
      className="w-full max-w-[95vw] mx-auto bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
      style={{ maxHeight: "85vh" }}
    >
      {/* Sektion för att navigera mellan veckor */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2 font-[Pacifico]">
          <h2 className="text-3xl font-bold text-[#333]">
            Week {weeks[currentWeekIndex]}
          </h2>
          <button
            className="bg-pink-500 text-black px-3 py-1 rounded-full text-sm"
            onClick={() =>
              setCurrentWeekIndex((prevIndex) =>
                prevIndex === 0 ? weeks.length - 1 : prevIndex - 1
              )
            }
          >
            &lt;
          </button>
          <button
            className="bg-pink-500 text-black px-3 py-1 rounded-full text-sm"
            onClick={() =>
              setCurrentWeekIndex((prevIndex) =>
                prevIndex === weeks.length - 1 ? 0 : prevIndex + 1
              )
            }
          >
            &gt;
          </button>
        </div>
      </div>

      

      {/* Grid för måltidsplanering */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 border-2 border-[#A8D400] rounded-md p-6">
        {/* Slot för valt recept */}
        <div
          className="flex flex-col items-center justify-start text-black-500"
          style={{ minHeight: "250px" }} 
        >
          {/* Dag-navigering */}
      <div className="flex items-center mb-6">
        <button
          className="bg-[#D9D9D9] text-black px-2 py-1 rounded-full text-xs"
          onClick={() =>
            setCurrentDayIndex((prevIndex) =>
              prevIndex === 0 ? daysOfWeek.length - 1 : prevIndex - 1
            )
          }
        >
          &lt;
        </button>
        <h3 className="text-2xl font-bold text-[#333] ml-4 font-[Pacifico]">
          {daysOfWeek[currentDayIndex]}
        </h3>
        <button
          className="bg-pink-500 text-black px-2 py-1 rounded-full text-xs ml-4"
          onClick={() =>
            setCurrentDayIndex((prevIndex) =>
              prevIndex === daysOfWeek.length - 1 ? 0 : prevIndex + 1
            )
          }
        >
          &gt;
        </button>
      </div>
          <div className="flex flex-col items-center justify-center h-full">
            {selectedRecipe ? (
              <RecipeCard {...selectedRecipe} size="mini" />
            ) : (
              <div
                className="text-gray-500 text-sm flex items-center justify-center h-full font-semibold"
                style={{
                  minHeight: "180px",
                  height: "100%",
                  width: "100%",
                  border: "1px dashed #A8D400",
                }}
              >
                No Recipe Selected
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
            className="flex flex-col items-center justify-start text-black-500 border-[#A8D400] border rounded-md"
            style={{ minHeight: "300px" }} // Increased height here
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

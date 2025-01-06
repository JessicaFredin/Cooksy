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

const initialMealsState = {
  breakfast: null,
  lunch: null,
  dinner: null,
};

const weeks = [32, 33, 34, 35, 36];

const PopMealPlan = ({ selectedRecipe }) => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [mealsByWeek, setMealsByWeek] = useState(
    weeks.reduce((acc, week) => {
      acc[week] = daysOfWeek.reduce((dayAcc, day) => {
        dayAcc[day] = { ...initialMealsState };
        return dayAcc;
      }, {});
      return acc;
    }, {})
  );

  const currentMeals =
    mealsByWeek[weeks[currentWeekIndex]][daysOfWeek[currentDayIndex]];

  const handleDrop = (e, mealType) => {
    e.preventDefault();
    const recipeData = JSON.parse(e.dataTransfer.getData("recipeData"));
    setMealsByWeek((prev) => ({
      ...prev,
      [weeks[currentWeekIndex]]: {
        ...prev[weeks[currentWeekIndex]],
        [daysOfWeek[currentDayIndex]]: {
          ...prev[weeks[currentWeekIndex]][daysOfWeek[currentDayIndex]],
          [mealType]: recipeData,
        },
      },
    }));
  };

  const allowDrop = (e) => e.preventDefault();

  const nextDay = () => {
    setCurrentDayIndex((prevIndex) =>
      prevIndex === daysOfWeek.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevDay = () => {
    setCurrentDayIndex((prevIndex) =>
      prevIndex === 0 ? daysOfWeek.length - 1 : prevIndex - 1
    );
  };

  const nextWeek = () => {
    setCurrentWeekIndex((prevIndex) =>
      prevIndex === weeks.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentDayIndex(0); // Återställ dagen till måndag när veckan byts
  };

  const prevWeek = () => {
    setCurrentWeekIndex((prevIndex) =>
      prevIndex === 0 ? weeks.length - 1 : prevIndex - 1
    );
    setCurrentDayIndex(0); // Återställ dagen till måndag när veckan byts
  };

  const renderCard = (meal, mealType) =>
    meal ? (
      <RecipeCard
        image={meal.image}
        dishName={meal.dishName}
        categoryName={meal.categoryName}
        time={meal.time}
        authorName={meal.authorName}
        authorImage={meal.authorImage}
        reviews={meal.reviews}
        rating={meal.rating}
        commentsCount={meal.commentsCount}
        size="small"
      />
    ) : (
      <div
        className="text-gray-500 flex items-center justify-center h-full font-semibold"
        style={{ minHeight: "150px", width: "100%", border: "1px dashed #A8D400" }}
      >
        {mealType}
      </div>
    );

  return (
    <div
      className="w-full max-w-[95vw] mx-auto bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
      style={{ maxHeight: "85vh" }} // Scrollfunktion med maxhöjd
    >
      {/* Week Navigation Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2 font-[Pacifico]">
          <h2 className="text-3xl font-bold text-[#333]">
            Week {weeks[currentWeekIndex]}
          </h2>
          <button
            className="bg-pink-500 text-black px-3 py-1 rounded-full text-sm"
            onClick={prevWeek}
          >
            &lt;
          </button>

          <button
            className="bg-pink-500 text-black px-3 py-1 rounded-full text-sm"
            onClick={nextWeek}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Day Navigation */}
      <div className="flex items-center mb-6">
        <button
          className="bg-[#D9D9D9] text-black px-3 py-1 rounded-full text-sm"
          onClick={prevDay}
        >
          &lt;
        </button>
        <h3 className="text-2xl font-bold text-[#333] ml-4 font-[Pacifico]">
          {daysOfWeek[currentDayIndex]}
        </h3>
        <button
          className="bg-pink-500 text-black px-3 py-1 rounded-full text-sm ml-4"
          onClick={nextDay}
        >
          &gt;
        </button>
      </div>

      {/* Meal Plan Grid */}
      <div
        className="grid gap-4 border-2 border-[#A8D400] rounded-md p-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Responsiv grid
        }}
      >
        {/* Selected Recipe Slot */}
        <div
          className="flex flex-col items-center justify-center border-[#A8D400] border rounded-md"
          style={{ minHeight: "200px", width: "100%" }}
        >
          <h4
            className="text-lg font-semibold mb-2 w-full text-center text-white py-2"
            style={{ backgroundColor: "#A8D400" }}
          >
            Selected Recipe
          </h4>
          {selectedRecipe ? (
            <img
              src={selectedRecipe.image}
              alt="Selected Recipe"
              className="w-24 h-24 object-cover rounded-lg"
            />
          ) : (
            <div
              className="text-gray-500 text-sm flex items-center justify-center h-full font-semibold"
              style={{
                minHeight: "320px",
                minWidth: "250px",
                width: "100%",
                border: "1px dashed #A8D400",
              }}
            >
              No Recipe Selected
            </div>
          )}
        </div>

        {/* Meal Slots with Titles */}
        {["Breakfast", "Lunch", "Dinner"].map((mealType) => (
          <div
            key={mealType}
            className="flex flex-col items-center justify-start text-black-500 border-[#A8D400] border rounded-md"
            onDrop={(e) => handleDrop(e, mealType.toLowerCase())}
            onDragOver={allowDrop}
            style={{
              minHeight: "320px",
              width: "100%",
              border: "1px dashed #A8D400",
            }}
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

      {/* Save Button */}
      <div className="flex justify-end mt-6">
        <Button size="large" text="Save" />
      </div>
    </div>
  );
};

export default PopMealPlan;
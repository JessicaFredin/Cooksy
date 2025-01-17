import { useState } from "react";
import HeadingWithLine from "./HeadingWithLine";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weeks = [32, 33, 34, 35, 36];

const MealPlanner = () => {
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    const nextWeek = () => {
        setCurrentWeekIndex((prevIndex) => (prevIndex === weeks.length - 1 ? 0 : prevIndex + 1)); // Knapp för att byta vecka 
    };

    const prevWeek = () => {
        setCurrentWeekIndex((prevIndex) => (prevIndex === 0 ? weeks.length - 1 : prevIndex - 1));// Knapp för att byta vecka 
    };

    const nextDay = () => {
        setCurrentDayIndex((prevIndex) => (prevIndex === daysOfWeek.length - 1 ? 0 : prevIndex + 1));// Knapp för att byta veckodagen
    };

    const prevDay = () => {
        setCurrentDayIndex((prevIndex) => (prevIndex === 0 ? daysOfWeek.length - 1 : prevIndex - 1));// Knapp för att byta veckodagen
    };


    return (
        <div className="grid grid-cols-12 gap-x-4 py-12">
            {/* Rubrik */}
            <div className="col-start-2 col-span-10">
                <HeadingWithLine text="Mealplanner" />
            </div>

            {/* Veckonavigation */}
            <div className="col-start-2 w-52 flex justify-between items-center mt-8 mb-6">
                <button
                    className="bg-[#D9D9D9] text-black px-3 py-1 rounded-full text-sm"
                    onClick={prevWeek}
                >
                    &lt;
                </button>
                <h2 className="text-2xl font-bold text-[#333] font-pacifico">
                    Week {weeks[currentWeekIndex]}
                </h2>
                <button
                    className="bg-pink-500 text-black px-3 py-1 rounded-full text-sm"
                    onClick={nextWeek}
                >
                    &gt;
                </button>
            </div>

            {/* Måltidsrubriker */}
            <div className="hidden col-start-2 col-span-10 lg:grid grid-cols-4 gap-4 text-center mb-4 ">
                <div className="hidden lg:block"></div>
                <div className="bg-green-200 border-2 border-green-100 text-black font-semibold py-4 px rounded-md">
                    Breakfast
                </div>
                <div className="bg-green-200 border-2 border-green-100 text-black font-semibold py-4 rounded-md">
                    Lunch
                </div>
                <div className="bg-green-200 border-2 border-green-100 text-black font-semibold py-4 rounded-md">
                    Dinner
                </div>
            </div>

            {/* Planeringsgrid */}
            <div className="col-start-2 col-span-10 grid gap-6">
                {/* Desktop: Alla dagar visas */}
                <div className="col-start-2 col-span-10 grid gap-6">
                    {/* Desktop: Alla dagar visas */}
                    <div className="hidden lg:block">
                        {daysOfWeek.map((day) => (
                            <div
                                key={day}
                                className="border-2 border-green-500 rounded-md p-4 grid lg:grid-cols-4 sm:grid-cols-1 gap-4 mb-6"
                            >
                                {/* Dagens namn */}
                                <h3 className="text-lg font-pacifico text-black font-semibold py-2 rounded-md text-center bg-white lg:bg-transparent">
                                    {day}
                                </h3>

                                {/* Måltider */}
                                {["Breakfast", "Lunch", "Dinner"].map((meal) => (
                                    <div
                                        key={meal}
                                        className="border-green-500 border rounded-md flex justify-center items-center text-gray-500 h-[25rem]"
                                    >
                                        {meal === "Breakfast" ? (
                                            <Link to="/recipes">
                                                <span className="text-green-500 text-2xl font-semibold">+</span>
                                            </Link>
                                        ) : (
                                            <RecipeCard
                                                id="1"
                                                image="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                dishName="Homemade Sushi"
                                                categoryName="Fish"
                                                time="30 mins"
                                                authorName="Test Author"
                                                authorImage="https://cdn.pixabay.com/photo/2024/03/19/12/16/fantasy-8643203_1280.jpg"
                                                rating="4.5"
                                                reviews="25"
                                                commentsCount="10"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>


                {/* Mobil: Endast en dag visas åt gången */}
                <div className="block lg:hidden">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            className="bg-[#D9D9D9] text-black px-3 py-1 rounded-full text-sm"
                            onClick={prevDay}
                        >
                            &lt;
                        </button>
                        <h3 className="text-lg font-[Pacifico] text-black font-semibold py-2 rounded-md text-center">
                            {daysOfWeek[currentDayIndex]}
                        </h3>
                        <button
                            className="bg-pink-500 text-black px-3 py-1 rounded-full text-sm"
                            onClick={nextDay}
                        >
                            &gt;
                        </button>
                    </div>

                    {/* Måltider för den valda dagen */}
                    <div className="border-2 border-green-500 rounded-md px-16 py-6 grid gap-6">
                        {["Breakfast", "Lunch", "Dinner"].map((meal) => (
                            <div key={meal}>
                                {/* Måltidstitel */}
                                <h4 className="bg-green-200 border-2 border-green-100 text-black text-center font-semibold py-4 mb-4 rounded-md text-lg">{meal}</h4>
                                {meal === "Breakfast" ? (
                                    <div className="border-green-500 border rounded-md flex justify-center items-center text-gray-500 h-[25rem]">
                                        <Link to="/recipes">
                                            <span className="text-green-500 text-2xl font-semibold">+</span>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="border-green-500 border rounded-md flex justify-center items-center text-gray-500 h-[25rem]">
                                        <RecipeCard
                                            id="1"
                                            image="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            dishName="Homemade Sushi"
                                            categoryName="Fish"
                                            time="30 mins"
                                            authorName="Test Author"
                                            authorImage="https://cdn.pixabay.com/photo/2024/03/19/12/16/fantasy-8643203_1280.jpg"
                                            rating="4.5"
                                            reviews="25"
                                            commentsCount="10"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealPlanner;

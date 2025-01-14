import { useState } from "react";
import HeadingWithLine from "../components/HeadingWithLine";

const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const weeks = [32, 33, 34, 35, 36];

const MealPlanner = () => {
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

    const nextWeek = () => {
        setCurrentWeekIndex((prevIndex) =>
            prevIndex === weeks.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevWeek = () => {
        setCurrentWeekIndex((prevIndex) =>
            prevIndex === 0 ? weeks.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="grid grid-cols-12 gap-x-4 py-12">
            {/* Rubrik */}
            <div className="col-start-2 col-span-10">
                <HeadingWithLine text="Mealplanner" />
            </div>

            {/* Veckonavigation */}
            <div className="col-start-2 col-span-10 flex justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                    <button
                        className="bg-[#D9D9D9] text-black px-3 py-1 rounded-full text-sm"
                        onClick={prevWeek}
                    >
                        &lt;
                    </button>
                    <h2 className="text-2xl font-bold text-[#333] font-[Pacifico]">
                        Week {weeks[currentWeekIndex]}
                    </h2>
                    <button
                        className="bg-pink-500 text-black px-3 py-1 rounded-full text-sm"
                        onClick={nextWeek}
                    >
                        &gt;
                    </button>
                </div>
            </div>

            {/* Planeringsgrid */}
            <div className="col-start-2 col-span-10 grid gap-6">
                {daysOfWeek.map((day) => (
                    <div
                        key={day}
                        className="border-2 border-green-500 rounded-md p-4 grid lg:grid-cols-4 sm:grid-cols-1 gap-4"
                    >
                        {/* Dagens namn */}
                        <h3 className="text-lg font-[Pacifico] text-black font-semibold py-2 rounded-md text-center bg-white lg:bg-transparent">
                            {day}
                        </h3>

                        {/* Måltider */}
                        {[
                            "Breakfast",
                            "Lunch",
                            "Dinner",
                        ].map((meal) => (
                            <div
                                key={meal}
                                className="border-green-500 border rounded-md flex justify-center items-center text-gray-500 h-[15rem]"
                            >
                                <span className="text-green-500 text-2xl font-semibold">
                                    +
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealPlanner;


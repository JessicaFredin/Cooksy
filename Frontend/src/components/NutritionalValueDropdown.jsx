import { useState } from "react";

// Komponent för att visa näringsinformation i en dropdown
function NutritionalValueDropdown() {
  // Dummy-data som representerar näringsinformation för en portion mat.
  const nutritionData = {
    servingSize: "1 piece (30g)",
    calories: 400,
    nutrients: [
      { name: "Protein", amount: "22g", color: "bg-lime-500" },
      { name: "Carbs", amount: "15g", color: "bg-lime-300" },
      { name: "Fat", amount: "25g", color: "bg-lime-400" },
    ],
    detailedInfo: [
      { name: "Total Fat", value: "8g" },
      { name: "Saturated Fat", value: "3g" },
      { name: "Trans Fat", value: "0g" },
      { name: "Cholesterol", value: "10mg" },
      { name: "Sodium", value: "120mg" },
      { name: "Total Carbohydrate", value: "18g" },
      { name: "Dietary Fiber", value: "2g" },
      { name: "Total Sugars", value: "8g" },
      { name: "Added Sugars", value: "5g" },
      { name: "Protein", value: "3g" },
    ],
    vitamins: [
      { name: "Vitamin D", value: "0.05mcg", percentage: "2%" },
      { name: "Calcium", value: "40mg", percentage: "4%" },
      { name: "Iron", value: "0.8mg", percentage: "4%" },
      { name: "Potassium", value: "100mg", percentage: "2%" },
    ],
  };
   // State för att styra om dropdownen är öppen eller stängd.
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      {/* Knapp för att öppna/stänga dropdown */}
      <button
        className="w-96 text-left bg-lime-200 text-gray-900 py-3 px-4 rounded-md shadow-sm flex items-center justify-between"
        onClick={() => setDropdownOpen(!isDropdownOpen)} // Växlar mellan öppet/stängt tillstånd
      >
        Nutritional value
        <span
          className={`transform transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {/* Dropdown-innehåll */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-96 md:w-3/5 grid lg:grid-cols-2 bg-white shadow-md rounded-md mt-2 p-6 z-10">
          <div>
            {/* Rubrik och serveringsstorlek */}
            <h2 className="text-3xl font-semibold mb-6">Nutrition facts</h2>
            <p className="text-sm text-gray-600 mb-4">
              Serving Size: {nutritionData.servingSize}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Per serving: <span className="font-bold">{nutritionData.calories} kcal</span>
            </p>

            {/* Simulerad cirkeldiagram */}
            <div className="flex items-center justify-center my-4 md:my-10">
              <div className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-gradient-to-tr from-lime-500 to-lime-300 relative mb-10"></div>
            </div>

            {/* Makronutrienter */}
            <div className="flex justify-between items-center mb-8">
              {nutritionData.nutrients.map((nutrient, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 inline-block rounded-sm ${nutrient.color}`}
                  ></span>
                  <p className="text-sm text-gray-700">
                    {nutrient.name}: {nutrient.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-2 p-4 md:ml-10">
            <h2 className="text-xl font-bold mb-2">Serving Size: {nutritionData.servingSize}</h2>
            <span className="w-full h-3 bg-green-500 block my-5"></span>

            {/* Detaljerad information*/}
            <ul className="text-sm text-gray-700 space-y-1">
              {nutritionData.detailedInfo.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>

            {/* Lista över vitaminer */}
            <h3 className="text-md font-semibold mt-4 mb-2">Vitamins</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {nutritionData.vitamins.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>
                    {item.value} ({item.percentage})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NutritionalValueDropdown;
// import { useState } from "react";

// function NutritionalValueDropdown() {
//   const nutritionData = {
//     servingSize: "1 piece (30g)",
//     calories: 400,
//     nutrients: [
//       { name: "Protein", amount: "22g", color: "bg-lime-500" },
//       { name: "Carbs", amount: "15g", color: "bg-lime-300" },
//       { name: "Fat", amount: "25g", color: "bg-lime-400" },
//     ],
//     detailedInfo: [
//       { name: "Total Fat", value: "8g" },
//       { name: "Saturated Fat", value: "3g" },
//       { name: "Trans Fat", value: "0g" },
//       { name: "Cholesterol", value: "10mg" },
//       { name: "Sodium", value: "120mg" },
//       { name: "Total Carbohydrate", value: "18g" },
//       { name: "Dietary Fiber", value: "2g" },
//       { name: "Total Sugars", value: "8g" },
//       { name: "Added Sugars", value: "5g" },
//       { name: "Protein", value: "3g" },
//     ],
//     vitamins: [
//       { name: "Vitamin D", value: "0.05mcg", percentage: "2%" },
//       { name: "Calcium", value: "40mg", percentage: "4%" },
//       { name: "Iron", value: "0.8mg", percentage: "4%" },
//       { name: "Potassium", value: "100mg", percentage: "2%" },
//     ],
//   };

//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         className="w-96 font-bold text-black text-left bg-green-100 py-3 px-4 rounded-md shadow-sm flex items-center justify-between"
//         onClick={() => setDropdownOpen(!isDropdownOpen)}
//       >
//         Nutritional value
//         <span
//           className={`transform transition-transform ${
//             isDropdownOpen ? "rotate-180" : ""
//           }`}
//         >
//           ▼
//         </span>
//       </button>

//       {isDropdownOpen && (
//         <div className="absolute top-full left-0 w-96 md:w-full md:grid md:grid-cols-2 bg-white shadow-md rounded-md mt-2 p-6 z-10">
//           <div>
//             <h2 className="text-3xl font-semibold mb-6">Nutrition facts</h2>
//             <p className="text-sm text-gray-600 mb-4">
//               Serving Size: {nutritionData.servingSize}
//             </p>
//             <p className="text-sm text-gray-600 mb-4">
//               Per serving: <span className="font-bold">{nutritionData.calories} kcal</span>
//             </p>

//             {/* Pie chart mock */}
//             <div className="flex items-center justify-center my-4 md:my-10">
//               <div className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-gradient-to-tr from-lime-500 to-lime-300 relative mb-10"></div>
//             </div>

//             {/* Nutrients */}
//             <div className="flex justify-between items-center mb-8">
//               {nutritionData.nutrients.map((nutrient, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <span
//                     className={`w-6 h-6 inline-block rounded-sm ${nutrient.color}`}
//                   ></span>
//                   <p className="text-sm text-gray-700">
//                     {nutrient.name}: {nutrient.amount}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="border-2 p-4 md:ml-10">
//             <h2 className="text-xl font-bold mb-2">Serving Size: {nutritionData.servingSize}</h2>
//             <span className="w-full h-3 bg-green-500 block my-5"></span>

//             {/* Detailed Info */}
//             <ul className="text-sm text-gray-700 space-y-1">
//               {nutritionData.detailedInfo.map((item, index) => (
//                 <li key={index} className="flex justify-between">
//                   <span>{item.name}</span>
//                   <span>{item.value}</span>
//                 </li>
//               ))}
//             </ul>

//             {/* Vitamins */}
//             <h3 className="text-md font-semibold mt-4 mb-2">Vitamins</h3>
//             <ul className="text-sm text-gray-700 space-y-1">
//               {nutritionData.vitamins.map((item, index) => (
//                 <li key={index} className="flex justify-between">
//                   <span>{item.name}</span>
//                   <span>
//                     {item.value} ({item.percentage})
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NutritionalValueDropdown;

import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function NutritionalValueDropdown() {
	const nutritionData = {
		servingSize: "1 piece (30g)",
		calories: 400,
		nutrients: [
			{ name: "Protein", amount: 22, color: "#D4E157" }, // Light green
			{ name: "Carbs", amount: 15, color: "#F0F4C3" }, // Pale green
			{ name: "Fat", amount: 25, color: "#9CCC65" }, // Bright green
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

	const [isDropdownOpen, setDropdownOpen] = useState(false);

	// Pie chart data
	const chartData = {
		labels: nutritionData.nutrients.map((n) => n.name),
		datasets: [
			{
				data: nutritionData.nutrients.map((n) => n.amount),
				backgroundColor: nutritionData.nutrients.map((n) => n.color),
				borderWidth: 1,
			},
		],
	};

	return (
		<div
			className={`col-start-2 ${
				isDropdownOpen ? "col-span-10" : "col-span-4"
			} transition-all duration-300`}
		>
			<button
				className="w-full max-w-md  font-bold text-black text-left bg-green-100 py-3 px-4 rounded-lg shadow-sm flex items-center justify-between"
				onClick={() => setDropdownOpen(!isDropdownOpen)}
			>
				Nutritional Value
				<span
					className={`transform transition-transform ${
						isDropdownOpen ? "rotate-180" : ""
					}`}
				>
					<FontAwesomeIcon icon={faChevronDown} />
				</span>
			</button>

			{isDropdownOpen && (
				<div className="mt-4 bg-white shadow-md rounded-md p-6 w-full transition-all duration-300">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Left Side - Pie Chart */}
						<div>
							<h2 className="text-2xl font-semibold mb-4">
								Nutrition Facts
							</h2>
							<p className="text-sm text-gray-600 mb-2">
								Serving Size: {nutritionData.servingSize}
							</p>
							<p className="text-sm text-gray-600 mb-4">
								Per Serving:{" "}
								<span className="font-bold">
									{nutritionData.calories} kcal
								</span>
							</p>

							{/* Pie Chart */}
							<div className="w-48 h-48 mx-auto">
								<Pie data={chartData} />
							</div>

							{/* Legend */}
							<div className="flex justify-center mt-4 space-x-4">
								{nutritionData.nutrients.map(
									(nutrient, index) => (
										<div
											key={index}
											className="flex items-center space-x-1"
										>
											<span
												className="inline-block w-4 h-4 rounded-sm"
												style={{
													backgroundColor:
														nutrient.color,
												}}
											></span>
											<p className="text-sm">
												{nutrient.name}:{" "}
												{nutrient.amount}g
											</p>
										</div>
									)
								)}
							</div>
						</div>

						{/* Right Side - Detailed Info */}
						<div>
							<h3 className="text-xl font-semibold mb-3">
								Detailed Info
							</h3>
							<ul className="text-sm text-gray-700 space-y-2">
								{nutritionData.detailedInfo.map(
									(item, index) => (
										<li
											key={index}
											className="flex justify-between"
										>
											<span>{item.name}</span>
											<span>{item.value}</span>
										</li>
									)
								)}
							</ul>

							<h3 className="text-lg font-semibold mt-6 mb-2">
								Vitamins
							</h3>
							<ul className="text-sm text-gray-700 space-y-2">
								{nutritionData.vitamins.map((item, index) => (
									<li
										key={index}
										className="flex justify-between"
									>
										<span>{item.name}</span>
										<span>
											{item.value} ({item.percentage})
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default NutritionalValueDropdown;

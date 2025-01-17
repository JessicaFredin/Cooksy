import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

/* Data till dropdown med nutrient infomation om receptet */

function NutritionalValueDropdown() {
	const nutritionData = {
		servingSize: "1 piece (30g)",
		calories: 400,
		nutrients: [
			{ name: "Protein", amount: 22, color: "#D4E157" }, 
			{ name: "Carbs", amount: 15, color: "#F0F4C3" }, 
			{ name: "Fat", amount: 25, color: "#9CCC65" }, 
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

	// cirkeldiagram av nutrienterna
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
						{/* Vänter sida med cirkeldiagram och servingstorlek */}
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

							{/* Cirkeldiagram för nutrienterna */}
							<div className="w-48 h-48 mx-auto">
								<Pie data={chartData} />
							</div>

							{/* Nutrienter */}
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

						{/* Nutrienttabellen */}
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

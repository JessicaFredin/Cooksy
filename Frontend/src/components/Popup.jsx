/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TopCurve from "../assets/images/top-curve.png";
import BottomCurve from "../assets/images/bottom-curve.png";

const Popup = ({ onClose }) => {
	const [view, setView] = useState("options"); // "options", "login", or "signup"

	const renderContent = () => {
		if (view === "login") {
			return (
				<div>
					<img
						src={TopCurve}
						alt="Top Curve"
						className="absolute top-[-30px] left-[-30px] w-[80px] h-auto"
					/>
					<h2 className="text-xl font-bold mb-4 text-green-100">
						Log in
					</h2>
					{/* Login Form */}
					<form className="space-y-4">
						<input
							type="email"
							placeholder="Email"
							className="w-full px-4 py-2 border rounded-lg"
						/>
						<input
							type="password"
							placeholder="Password"
							className="w-full px-4 py-2 border rounded-lg"
						/>
						<button className="w-full bg-pink-500 text-white py-2 rounded-lg">
							Log in
						</button>
					</form>
					<button
						onClick={() => setView("options")}
						className="text-gray-500 mt-4"
					>
						Back
					</button>
				</div>
			);
		}

		if (view === "signup") {
			return (
				<div>
					<h2 className="text-xl font-bold mb-4">Create an account</h2>
					{/* Signup Form */}
					<form className="space-y-4">
						<input
							type="text"
							placeholder="Fullständigt namn"
							className="w-full px-4 py-2 border rounded-lg"
						/>
						<input
							type="email"
							placeholder="E-post"
							className="w-full px-4 py-2 border rounded-lg"
						/>
						<input
							type="password"
							placeholder="Lösenord"
							className="w-full px-4 py-2 border rounded-lg"
						/>
						<button className="w-full bg-pink-500 text-white py-2 rounded-lg">
							Create account
						</button>
					</form>
					<button
						onClick={() => setView("options")}
						className="text-gray-500 mt-4"
					>
						Back
					</button>
				</div>
			);
		}

		// Default view with options
		return (
			<div>
				<h2 className="text-xl font-bold mb-4">
					Save your favorite recipes – create a free account
				</h2>
				<ul className="space-y-4 mb-6">
					<li className="flex items-center">
						<span className="bg-red-100 text-red-500 rounded-full p-2 mr-4">
							❤️
						</span>
						Easily keep track of your recipes by having them all in
						one place.
					</li>
					<li className="flex items-center">
						<span className="bg-green-100 text-green-500 rounded-full p-2 mr-4">
							📁
						</span>
						Save your favorites in practical folders! Why not create
						your own weekly menus?
					</li>
					<li className="flex items-center">
						<span className="bg-blue-100 text-blue-500 rounded-full p-2 mr-4">
							📄
						</span>
						Save articles with tips, tests, and interviews you want
						to revisit!
					</li>
				</ul>
				<div className="flex space-x-4">
					<button
						onClick={() => setView("login")}
						className="px-4 py-2 bg-pink-500 text-white rounded-lg"
					>
						Log in
					</button>
					<button
						onClick={() => setView("signup")}
						className="px-4 py-2 bg-pink-100 text-white rounded-lg"
					>
						Create account
					</button>
				</div>
			</div>
		);
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
				>
					✕
				</button>
				{renderContent()}
			</div>
		</div>
	);
};

export default Popup;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TopCurve from "../assets/svg/TopCurve";
import BottomCurve from "../assets/svg/BottomCurve";
import Button from "./Button";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

// SignUpForm-komponent: hanterar användarregistrering
function SignUpForm({ setView, setEmail }) {
	// State för att lagra användarinmatning och eventuella fel
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");
    
	// Uppdaterar `formData` när användaren skriver i inputfält
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
    // Skickar användardata till backend för att skapa ett konto
	const handleSubmit = async (e) => {
		e.preventDefault(); // Förhindrar sidladdning vid formulärinlämning
		try {
			console.log(formData);
			// Skicka en POST-förfrågan till backend för att registrera användaren
			const response = await axios.post(
				import.meta.env.VITE_APP_BACKEND_URL + "/auth/register",
				formData,
				{
					withCredentials: true,
				}
			);
			console.log("Response from backend:", response);

			// Sätt email i förälderns state
			setEmail(formData.email);

			// Visar ett meddelande om registreringen lyckas
			const successMessage =
				response.data.message ||
				"Registration successful. Please verify your email.";
			console.log("Nu byter vi till VerifyEmail");
			// Ändra vyn till e-postverifieringssidan
			setView("VerifyEmail");
		} catch (err) {
			// Hanterar fel och visar ett felmeddelande
			console.error("Error during registration:", err);
			const errorMessage =
				err.response?.data?.message || "Registration failed";
			setError(errorMessage);
		}
	};

	return (
		<div className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden w-[600px]">
			{/* Top Curve */}
			<div className="absolute top-[0px] left-[0px]">
				<TopCurve />
			</div>

			{/* Bottom Curve */}
			<div className="absolute bottom-[0px] left-[0px]">
				<BottomCurve />
			</div>

			<div className="flex items-center justify-center flex-col py-6">
				<div className="flex items-center justify-center h-full w-full my-6">
					<div className="text-left">
						<h2 className="text-2xl font-extrabold text-green-700 leading-tight">
							Create an account
						</h2>
					</div>
				</div>

				{/* Registreringsformulär */}
				<form
					onSubmit={handleSubmit}
					className="space-y-4 mb-6 w-[400px] text-left z-50"
				>
					{error && <p className="text-red-500">{error}</p>}
					<input
						type="text"
						name="first_name"
						placeholder="First Name"
						className="w-full px-3 py-2 text-sm border border-gray-500 placeholder-gray-500 rounded-full"
						value={formData.first_name}
						onChange={handleChange}
						required
					/>
					<input
						type="text"
						name="last_name"
						placeholder="Last Name"
						className="w-full px-3 py-2 text-sm border border-gray-500 placeholder-gray-500 rounded-full"
						value={formData.last_name}
						onChange={handleChange}
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="w-full px-3 py-2 text-sm border border-gray-500 placeholder-gray-500 rounded-full"
						value={formData.email}
						onChange={handleChange}
						required
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						className="w-full px-3 py-2 text-sm border border-gray-500 placeholder-gray-500 rounded-full"
						value={formData.password}
						onChange={handleChange}
						required
					/>
					<input
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
						className="w-full px-3 py-2 text-sm border border-gray-500 placeholder-gray-500 rounded-full"
						value={formData.confirmPassword}
						onChange={handleChange}
						required
					/>

					<div className="flex items-center justify-center">
						<Button
							type="submit"
							className="w-[200px]"
							size="mediumMoreWidth"
						>
							Create account
						</Button>
					</div>
				</form>
                {/* Länk till inloggningssidan */} 
				<div className="text-center text-gray-500 z-50">
					Already have an account?{" "}
					<span
						className="text-pink-500 cursor-pointer"
						onClick={() => setView("LogIn")}
					>
						Log in
					</span>
				</div>

				<div className="flex items-center my-4">
					<div className="border-t border-gray-300 w-11"></div>
					<span className="px-4 text-gray-400 text-sm">
						Or sign up with your account
					</span>
					<div className="border-t border-gray-300 w-11"></div>
				</div>

				{/* Social Media knappar */}
				<div className="flex justify-center space-x-4 mt-4 mb-6">
					<div className="flex items-center justify-center bg-blue-100 text-blue-500 rounded-full w-10 h-10 shadow hover:shadow-md cursor-pointer z-50">
						<FontAwesomeIcon
							icon={faFacebookF}
							className="w-5 h-5"
						/>
					</div>
					<div
						className="flex items-center justify-center bg-red-100 text-red-500 rounded-full w-12 h-12 shadow hover:shadow-md cursor-pointer z-50"
						onClick={() => {
							try {
								window.location.href =
									"http://localhost:5000/auth/google";
							} catch (error) {
								console.error("Google OAuth failed:", error);
								alert(
									"Failed to connect with Google. Please try again later."
								);
							}
						}}
					>
						<FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUpForm;

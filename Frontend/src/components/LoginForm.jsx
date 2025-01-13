/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import TopCurve from "../assets/svg/TopCurve";
import BottomCurve from "../assets/svg/BottomCurve";
import Button from "./Button";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

function LoginForm({ setView }) {
	const { login } = useAuth(); // Get the login function from AuthContext
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	console.log("LoginForm rendered");

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await login(formData);
			window.location.href = "/"; // Redirect to home
		} catch (err) {
			setError("Invalid credentials");
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
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
						<h2 className="text-3xl font-extrabold text-green-700 leading-tight">
							Log in
						</h2>
					</div>
				</div>

				{/* Login Form */}
				<form
					onSubmit={handleLogin}
					className="space-y-4 mb-6 w-[400px] text-left z-50"
				>
					{error && <p className="text-red-500">{error}</p>}
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="w-full px-3 py-2 text-sm border border-gray-500 placeholder-gray-500 rounded-full"
						value={formData.email}
						onChange={handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						className="w-full px-3 py-2 text-sm border border-gray-500 placeholder-gray-500 rounded-full"
						value={formData.password}
						onChange={handleChange}
					/>
					<div className="flex items-center justify-center">
						<Button
							type="submit"
							className="w-[200px]"
							size="mediumMoreWidth"
						>
							Log in
						</Button>
					</div>
				</form>

				<div className="text-center text-black z-50">
					Don&apos;t have an account?{" "}
					<span
						className="text-pink-500 cursor-pointer"
						onClick={() => setView("SignUp")}
					>
						Create account
					</span>
				</div>

				<div className="flex items-center my-4">
					<div className="border-t border-gray-300 w-11"></div>
					<span className="px-4 text-gray-400 text-sm ">
						Or log in with your account
					</span>
					<div className="border-t border-gray-300 w-11"></div>
				</div>

				{/* Social Media Buttons */}
				<div className="flex justify-center space-x-4 mt-4 mb-6">
					<div className="flex items-center justify-center bg-blue-100 text-blue-500 rounded-full w-12 h-12 shadow hover:shadow-md cursor-pointer z-50">
						<FontAwesomeIcon
							icon={faFacebookF}
							className="w-5 h-5"
						/>
					</div>
					{/* <div className="flex items-center justify-center bg-red-100 text-red-500 rounded-full w-12 h-12 shadow hover:shadow-md cursor-pointer z-50">
						<FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
					</div> */}

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

export default LoginForm;

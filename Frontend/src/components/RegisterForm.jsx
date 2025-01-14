/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
	const [formData, setFormData] = useState({ // State för att lagra användarens inmatning
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	// State för att lagra eventuella felmeddelanden
	const [error, setError] = useState("");
    //Hanterar formulärinlämning, skickar användarens data till servern via API-anrop för att registrera en ny användare.
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Skickar en POST-förfrågan till servern med användarens data
			const response = await axios.post("/auth/register", formData, {
				withCredentials: true,
			});
			alert(response.data.message);
		} catch (err) {
			// Sätt felmeddelande i state om registreringen misslyckas
			setError(err.response.data.message || "Registration failed");
		}
	};

	return (
		// Formulär för användarregistrering
		<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
			<h1 className="text-2xl mb-4">Register</h1>
			{/* Visar felmeddelande om det finns fel */}
			{error && <p className="text-red-500">{error}</p>}
			<input
				type="text"
				name="first_name"
				placeholder="First Name"
				value={formData.first_name}
				onChange={handleChange}
				required
				className="w-full p-2 border rounded mb-4"
			/>
			<input
				type="text"
				name="last_name"
				placeholder="Last Name"
				value={formData.last_name}
				onChange={handleChange}
				required
				className="w-full p-2 border rounded mb-4"
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleChange}
				required
				className="w-full p-2 border rounded mb-4"
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={formData.password}
				onChange={handleChange}
				required
				className="w-full p-2 border rounded mb-4"
			/>
			<input
				type="password"
				name="confirmPassword"
				placeholder="Confirm Password"
				value={formData.confirmPassword}
				onChange={handleChange}
				required
				className="w-full p-2 border rounded mb-4"
			/>
			{/* Knapp för registrering */}
			<button
				type="submit"
				className="w-full p-2 bg-blue-500 text-white rounded"
			>
				Register
			</button>
		</form>
	);
};

export default RegisterForm;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("/auth/register", formData, {
				withCredentials: true,
			});
			alert(response.data.message);
		} catch (err) {
			setError(err.response.data.message || "Registration failed");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
			<h1 className="text-2xl mb-4">Register</h1>
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

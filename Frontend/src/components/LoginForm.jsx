/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"/auth/login",
				{ email, password },
				{ withCredentials: true }
			);
			alert(response.data.message);
			window.location.href = "/"; // Redirect to home after login
		} catch (err) {
			setError("Invalid credentials");
		}
	};

	return (
		<form onSubmit={handleLogin} className="max-w-md mx-auto mt-8">
			<h1 className="text-2xl mb-4">Login</h1>
			{error && <p className="text-red-500">{error}</p>}
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="w-full p-2 border rounded mb-4"
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className="w-full p-2 border rounded mb-4"
			/>
			<button
				type="submit"
				className="w-full p-2 bg-blue-500 text-white rounded"
			>
				Login
			</button>
		</form>
	);
};

export default LoginForm;

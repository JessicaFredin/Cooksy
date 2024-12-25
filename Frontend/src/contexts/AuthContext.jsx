/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create the context
const AuthContext = createContext();

// Provide the context to your app
export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState(null);

	// Function to check if user is logged in
	const checkAuthStatus = async () => {
		try {
			const response = await axios.get(
				import.meta.env.VITE_APP_BACKEND_URL + "/auth/user",
				{
					withCredentials: true,
				}
			);
			setIsLoggedIn(true);
			setUser(response.data);
		} catch (error) {
			setIsLoggedIn(false);
			setUser(null);
			console.log(error);
		}
	};

	// Call checkAuthStatus on mount
	useEffect(() => {
		checkAuthStatus();
	}, []);

	// Function to log in the user
	const login = async (formData) => {
		try {
			const response = await axios.post(
				import.meta.env.VITE_APP_BACKEND_URL + "/auth/login",
				formData,
				{ withCredentials: true }
			);
			setIsLoggedIn(true);
			setUser(response.data);
		} catch (error) {
			throw new Error("Login failed", error);
		}
	};

	// Function to log out the user
	const logout = async () => {
		try {
			await axios.post(
				import.meta.env.VITE_APP_BACKEND_URL + "/auth/logout",
				{},
				{ withCredentials: true }
			);
			setIsLoggedIn(false);
			setUser(null);
		} catch (error) {
			console.error("Logout failed", error);
		}
	};

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, user, login, logout, checkAuthStatus }}
		>
			{children}
		</AuthContext.Provider>
	);
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

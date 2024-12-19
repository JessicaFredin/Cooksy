/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

function UserProvider({ children }) {
	const [user, setUser] = useState(null); // Holds user data

	useEffect(() => {
		// Fetch user data on mount
		axios
			.get(import.meta.env.VITE_APP_BACKEND_URL + "/auth/user", {
				withCredentials: true,
			})
			.then((response) => {
				setUser(response.data); // Store user data
			})
			.catch(() => {
				setUser(null);
			});
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;

/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
	// Hämtar inloggningsstatus från AuthContext
	const { isLoggedIn } = useAuth();

	if (!isLoggedIn) {
		// // Om användaren inte är inloggad, omdirigera dem till startsidan
		return <Navigate to="/" />;
	}

	// Om användaren är inloggad, rendera det skickade innehållet (children)
	return children;
};

export default ProtectedRoute;

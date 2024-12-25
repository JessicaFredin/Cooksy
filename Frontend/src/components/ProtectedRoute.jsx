/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
	const { isLoggedIn } = useAuth();

	if (!isLoggedIn) {
		// Redirect to the login page if the user is not logged in
		return <Navigate to="/" />;
	}

	// Render the children if the user is logged in
	return children;
};

export default ProtectedRoute;

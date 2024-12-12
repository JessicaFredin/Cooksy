/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/SignUpForm";
import AuthContainer from "./components/AuthContainer";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/auth" element={<AuthContainer />} />
				<Route path="/register" element={<RegisterForm />} />
				<Route path="/" element={Navbar} />

				
			</Routes>
		</Router>
	);
}

export default App;

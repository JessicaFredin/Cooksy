/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import VerifyEmail from "./VerifyEmail";
import Prompt from "../components/Navbar/Prompt";

function AuthContainer() {
	// Använder state för att spåra vilket vy som ska visas: "Prompt", "SignUp", "LogIn" eller "VerifyEmail".
	const [view, setView] = useState("Prompt"); 
	// State för att lagra e-postadressen som används vid registrering och verifiering.
	const [email, setEmail] = useState("");

	return (
		<div>
			{/* Om vy är "Prompt" visas Prompt-komponenten */}
			{view === "Prompt" && <Prompt setView={setView} />}
			{/* Om vy är "LogIn" visas LoginForm-komponenten */}
			{view === "LogIn" && <LoginForm setView={setView} />}
            {/* Om vy är "SignUp" visas SignUpForm-komponenten */}
			{view === "SignUp" && (
				<SignUpForm setView={setView} setEmail={setEmail} />
			)}
			{/* Om vy är "VerifyEmail" visas VerifyEmail-komponenten */}
			{view === "VerifyEmail" && (
				<VerifyEmail setView={setView} email={email} />
			)}
		</div>
	);
}

export default AuthContainer;
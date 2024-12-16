/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import VerifyEmail from "./VerifyEmail";
import Prompt from "../components/Navbar/Prompt";

function AuthContainer() {
	const [view, setView] = useState("Prompt"); // "SignUp", "LogIn" eller "VerifyEmail"
	const [email, setEmail] = useState("");

	console.log("Current view in AuthContainer:", view);

	return (
		<div>
			{view === "Prompt" && <Prompt setView={setView} />}
			{view === "LogIn" && <LoginForm setView={setView} />}

			{view === "SignUp" && (
				<SignUpForm setView={setView} setEmail={setEmail} />
			)}
			{view === "VerifyEmail" && (
				<VerifyEmail setView={setView} email={email} />
			)}
		</div>
	);
}

export default AuthContainer;
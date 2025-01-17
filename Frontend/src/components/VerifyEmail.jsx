/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";

function VerifyEmail({ setView, email }) {
	//State för att hantera verifieringskoden, initialiseras som en array med sex tomma strängar
	const [verificationCode, setVerificationCode] = useState(["","","","","",""]);
	//State för att hantera eventuella felmeddelanden
	const [error, setError] = useState("");

	
    //Hanterar verifiering av koden när användaren klickar på "Verify"
	const handleVerify = async (e) => {
		e.preventDefault();
		try {
			// Kombinerar koden från de sex input-fälten till en enda sträng
			const fullCode = verificationCode.join("");
			// Skickar verifieringsförfrågan till backend
			const response = await axios.post( // Backend-API för att verifiera koden
				"http://localhost:5000/auth/verify-code",
				{
					email, // E-postadressen användaren försöker verifiera
					code: fullCode, // Den kombinerade verifieringskoden
				}
			);
			console.log("Verification succeeded. Changing view to LogIn.");
			alert(response.data.message); // Meddelande vid framgångsrik verifiering
			setView("LogIn"); // Byter vy till "LogIn" efter verifiering
		} catch (err) {
			// Visar felmeddelande om verifiering misslyckas
			setError(err.response?.data?.message || "Invalid verification code");
		}
	};
    //Hanterar ändringar i input-fälten
	const handleChange = (index, value) => {
		if (/^\d*$/.test(value)) {
			const updatedCode = [...verificationCode];
			updatedCode[index] = value;
			setVerificationCode(updatedCode);

			// Flyttar automatiskt till nästa input-fält om användaren fyller i ett nummer
			if (value && index < 5) {
				document.getElementById(`code-input-${index + 1}`).focus();
			}
		}
	};



	return (
		<div className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden w-[600px]">
			<h2 className="text-xl font-bold text-center mb-4">
				Verify Your Email
			</h2>
			<p className="text-center text-gray-500 mb-4">
				We have sent a 6-digit code to your email. Enter it below to
				verify your account.
			</p>
			{/* Formulär för verifiering */}
			<form onSubmit={handleVerify} className="space-y-4">
				{/* Visar felmeddelanden om de finns */}
				{error && <p className="text-red-500">{error}</p>}
				<div className="flex justify-center space-x-2">
					{verificationCode.map((digit, index) => (
						<input
							key={index} // Unik nyckel för varje input-fält
							id={`code-input-${index}`} // Dynamiskt ID för att hantera fokus
							type="text"
							value={digit} // Det aktuella värdet i input-fältet
							onChange={(e) =>
								handleChange(index, e.target.value) // Hanterar ändringar i fältet
							}
							className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl"
							maxLength={1}
						/>
					))}
				</div>
				{/* Knapp för att skicka verifieringskoden */}
				<div className="flex items-center justify-center mt-6">
					<Button type="submit" className="w-[200px]" size="mediumMoreWidth">
						Verify
					</Button>
				</div>
			</form>
			{/* Länk för att skicka koden igen om användaren inte fått den */}
			<p className="text-center text-gray-500 mt-4">
				Didn&apos;t receive a code?{" "}
				<span
					className="text-pink-500 cursor-pointer"
					onClick={() => {
						axios.post(
							// Skickar en ny kod till användarens e-post
							import.meta.env.VITE_APP_BACKEND_URL + "/auth/send-code",
							{ email }
						);
					}}
				>
					Resend Code
				</span>
			</p>
		</div>
	);
}

export default VerifyEmail;

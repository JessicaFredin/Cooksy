/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";

function VerifyEmail({ setView, email }) {
	// const [verificationCode, setVerificationCode] = useState(Array(6).fill(""));
	const [verificationCode, setVerificationCode] = useState(["","","","","",""]);
	const [error, setError] = useState("");

	

	const handleVerify = async (e) => {
		e.preventDefault();
		try {
			const fullCode = verificationCode.join("");
			const response = await axios.post(
				"http://localhost:5000/auth/verify-code",
				{
					email,
					code: fullCode,
				}
			);
			console.log("Verification succeeded. Changing view to LogIn.");
			alert(response.data.message);
			setView("LogIn"); // Redirect to login after successful verification
		} catch (err) {
			setError(err.response?.data?.message || "Invalid verification code");
		}
	};

	const handleChange = (index, value) => {
		if (/^\d*$/.test(value)) {
			const updatedCode = [...verificationCode];
			updatedCode[index] = value;
			setVerificationCode(updatedCode);

			// Automatically move to the next input field
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
			<form onSubmit={handleVerify} className="space-y-4">
				{error && <p className="text-red-500">{error}</p>}
				<div className="flex justify-center space-x-2">
					{verificationCode.map((digit, index) => (
						<input
							key={index}
							id={`code-input-${index}`}
							type="text"
							value={digit}
							onChange={(e) =>
								handleChange(index, e.target.value)
							}
							className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl"
							maxLength={1}
						/>
					))}
				</div>
				<div className="flex items-center justify-center mt-6">
					<Button type="submit" className="w-[200px]" size="mediumMoreWidth">
						Verify
					</Button>
				</div>
			</form>
			<p className="text-center text-gray-500 mt-4">
				Didn&apos;t receive a code?{" "}
				<span
					className="text-pink-500 cursor-pointer"
					onClick={() => {
						axios.post(
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

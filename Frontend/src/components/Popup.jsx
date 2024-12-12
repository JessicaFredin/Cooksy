// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import LoginForm from "./LoginForm";
// import SignUpForm from "./SignUpForm";
// import VerifyEmail from "./VerifyEmail";
// import Prompt from "./Navbar/Prompt";
// import CloseButton from "./CloseButton";
// import AuthContainer from "./AuthContainer";

// function Popup({ onClose }) {
// 	const [view, setView] = useState("options"); // "options", "login", or "signup"
// 	const [email, setEmail] = useState(""); // Store email during registration

// 	const renderContent = () => {
// 		if (view === "login") {
// 			return <LoginForm setView={setView} />;
// 		}

// 		if (view === "signup") {
// 			return <SignUpForm setView={setView} setEmail={setEmail} />;
// 		}

// 		if (view === "verifyEmail") {
// 			return <VerifyEmail setView={setView} email={email} />;
// 		}

// 		// Default view with options
// 		return <Prompt setView={setView} />;
// 	};

// 	return (
// <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// 	<div className="relative bg-white rounded-lg shadow-lg">
// 		<div className="absolute top-5 right-5 text-black hover:text-pink-700 z-50">
// 			<CloseButton onClick={onClose} />
// 		</div>
// 		{renderContent()}
// 	</div>
// </div>
// 	);
// }

// export default Popup;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CloseButton from "./CloseButton";
import AuthContainer from "./AuthContainer";

function Popup({ onClose }) {
	console.log("Popup rendered");
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="relative bg-white rounded-lg shadow-lg ">
				<div className="absolute top-5 right-5 text-black hover:text-pink-700 z-50">
					<CloseButton onClick={onClose} />
				</div>
				<AuthContainer /> {/* Använd AuthContainer direkt */}
			</div>
		</div>
	);
}

export default Popup;

// import React from "react";
// import AuthContainer from "./AuthContainer";

// function Popup({ showPopup, onClose }) {
// 	if (!showPopup) return null;

// 	return (
// 		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// 			<div className="bg-white rounded-lg shadow-lg p-6">
// 				<button onClick={onClose} className="absolute top-2 right-2">
// 					Close
// 				</button>
// 				<AuthContainer />
// 			</div>
// 		</div>
// 	);
// }

// export default Popup;

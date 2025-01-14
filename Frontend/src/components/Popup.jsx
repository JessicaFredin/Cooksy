/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CloseButton from "./CloseButton";
import AuthContainer from "./AuthContainer";

//Innehåller AuthContainer-komponenten för att hantera inloggning/registrering
function Popup({ onClose }) {
	console.log("Popup rendered"); // Loggar ut varje gång Popup-komponenten renderas
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="relative bg-white rounded-lg shadow-lg ">
				<div className="absolute top-5 right-5 text-black hover:text-pink-700 z-50">
					<CloseButton onClick={onClose} /> {/* CloseButton för att stänga popupen */}
				</div>
				<AuthContainer /> {/* Använd AuthContainer direkt */}
			</div>
		</div>
	);
}

export default Popup;

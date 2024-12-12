/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/MobileMenu.jsx
import React from "react";
import Links from "./Links";

const MobileMenu = ({ isOpen, onClose }) => {
	return (
		<div
			className={`
        fixed top-0 right-0 h-screen w-full bg-white z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
		>
			{/* Close button */}
			<div className="flex justify-end p-4">
				<button
					className="text-gray-800 hover:text-gray-600 text-2xl"
					onClick={onClose}
					aria-label="Close menu"
				>
					&times;
				</button>
			</div>

			{/* Logo (optional) */}
			<div className="flex items-center px-4 py-2">
				<img
					src="/your-logo.png"
					alt="Logo"
					className="h-8 w-auto mr-2"
				/>
				<span className="font-bold text-xl text-gray-900">Cooksy</span>
			</div>

			{/* Navigation links */}
			<div className="p-4">
				<Links />
			</div>
		</div>
	);
};

export default MobileMenu;

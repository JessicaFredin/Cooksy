/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Links from "./Links";
import Logo from "./Logo";
import CloseButton from "../CloseButton";
import BottomCurve from "../../assets/svg/BottomCurve";

const MobileMenu = ({ isOpen, onClose }) => {
	return (
		<div
			className={`fixed top-0 left-0 h-screen w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			}`}
		>
			{/* Close Button */}
			<div className="flex justify-end p-4">
				<CloseButton onClick={onClose} />
			</div>

			{/* Logo */}
			<div className="flex items-center px-4 py-2">
				<Logo />
			</div>

			{/* Navigation Links */}
			<div>
				<Links isMobile={true} />
			</div>

			{/* Bottom Curve */}
			<div className="absolute bottom-[0px] left-[0px]">
				<BottomCurve />
			</div>
		</div>
	);
};

export default MobileMenu;

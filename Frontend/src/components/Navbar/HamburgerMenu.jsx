/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function HamburgerMenu({ menuOpen, toggleMenu }) {
	return (
		<>
			{/* Mobilmeny */}
			<div
				className={`fixed top-0 right-0 h-full bg-white transition-transform transform ${
					menuOpen ? "translate-x-0" : "translate-x-full"
				} w-[90%] md:w-[30%] z-50`}
			>
				<div className="relative h-full p-6 grid grid-rows-[auto,1fr,auto]">
					{/* Stäng-knapp */}
					<button
						onClick={toggleMenu}
						className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
					>
						<FontAwesomeIcon icon={faTimes} className="text-xl" />
					</button>

					{/* Logo */}
					<div className="mb-6">
						<h1 className="text-lg font-bold text-gray-700">
							Cooksy
						</h1>
					</div>

					{/* Länkar */}
					<nav className="space-y-4">
						<a
							href="/"
							className="block text-gray-700 hover:text-pink-500"
						>
							Home
						</a>
						<a
							href="/recipes"
							className="block text-gray-700 hover:text-pink-500"
						>
							Recipes
						</a>
						<a
							href="/articles"
							className="block text-gray-700 hover:text-pink-500"
						>
							Articles
						</a>
						<a
							href="/categories"
							className="block text-gray-700 hover:text-pink-500"
						>
							Categories
						</a>
					</nav>

					{/* Footer */}
					<footer className="mt-6 text-gray-500 text-sm">
						© 2024 Cooksy. All rights reserved.
					</footer>
				</div>
			</div>

			{/* Bakgrundsöverlägg */}
			{menuOpen && (
				<div
					onClick={toggleMenu}
					className="fixed inset-0 bg-black bg-opacity-20 z-40"
				></div>
			)}
		</>
	);
}

export default HamburgerMenu;

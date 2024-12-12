/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import Popup from "../Popup";
import ReactDOM from "react-dom";
import Logo from "./Logo";
import Links from "./Links";
import Search from "./Search";
import ProfileAvatar from "../ProfileAvatar";
import Button from "../Button";
import Avatar from "../../assets/images/avatar.png";
import ProfileMenu from "../ProfileMenu";

function Navbar() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [user, setUser] = useState(null); // Holds user data
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const openPopup = () => {
		setIsPopupOpen(true);
	};

	const closePopup = () => {
		setIsPopupOpen(false);
	};

	const toggleProfileMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	useEffect(() => {
		axios
			.get(import.meta.env.VITE_APP_BACKEND_URL + "/auth/user", {
				withCredentials: true,
			})
			.then((response) => {
				console.log("User authenticated:", response.data);
				// Handle user authentication (e.g., save user data in state)
				setIsLoggedIn(true);
				setUser(response.data); // Save user data
			})
			.catch(() => {
				console.log("User not authenticated");
				setIsLoggedIn(false);
				setUser(null);
			});
	}, []);

	// Handle logout
	const handleLogout = async () => {
		await axios.post(
			import.meta.env.VITE_APP_BACKEND_URL + "/auth/logout",
			{},
			{ withCredentials: true }
		);
		setIsLoggedIn(false);
		setUser(null);
	};

	return (
		<nav className="grid grid-cols-12 gap-4 py-4 bg-white/10 backdrop-blur-sm shadow-lg fixed w-full">
			{/* Grid Background */}
			{/* <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-25 w-full">
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
				<div className="bg-purple-300"></div>
			</div> */}

			{/* Navigation Links */}
			<div className="col-start-2 col-span-3 hidden md:flex ">
				<Links />
			</div>

			{/* Logo */}
			<div className="col-start-6 col-span-2 grid items-center">
				<Logo />
			</div>

			{/* Search and User/Actions */}
			<div className="col-start-10 col-span-2 flex justify-end items-center space-x-4">
				<div className="relative">
					<Search
						onSearch={(query) =>
							console.log("Search Query:", query)
						}
					/>
				</div>

				{/* Dynamic content based on logged-in state */}
				{isLoggedIn ? (
					<div className="flex items-center space-x-2">
						<div className="hidden md:inline-block flex-nowrap">
							<Button size="small" iconPosition="right">
								Add recipe
							</Button>
						</div>
						{/* <a href="/add-recipe">Add Recipe</a> */}

						{/* <img
							src={Avatar}
							alt="Profile"
							className="w-8 h-8 rounded-full cursor-pointer"
						/> */}

						<div className="relative">
							{/* Avatar */}
							<ProfileAvatar
								user={user}
								onClick={toggleProfileMenu}
							/>

							{/* Profile Menu */}
							<ProfileMenu
								isOpen={menuOpen}
								onLogOut={handleLogout}
							/>
						</div>
					</div>
				) : (
					<button
						onClick={openPopup}
						className="w-6 h-6 p-4 bg-pink-500 text-white rounded-full flex items-center justify-center"
					>
						<FontAwesomeIcon icon={faUser} className="text-white" />
					</button>
				)}

				{/* Hamburger menu for mobile */}
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="block md:hidden text-gray-600"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			{/* Mobile menu */}
			{menuOpen && (
				<div className="col-span-12 md:hidden flex flex-col items-center bg-gray-50 p-4 space-y-4">
					<a href="/" className="hover:text-gray-900">
						Home
					</a>
					<a href="/recipes" className="hover:text-gray-900">
						Recipes
					</a>
					<a href="/articles" className="hover:text-gray-900">
						Articles
					</a>
					<a href="/categories" className="hover:text-gray-900">
						Categories
					</a>
					{isLoggedIn ? (
						<>
							<a
								href="/add-recipe"
								className="px-4 py-2 bg-pink-500 text-white rounded-lg"
							>
								Add Recipe
							</a>
							<button
								onClick={handleLogout}
								className="text-red-600"
							>
								Logout
							</button>
						</>
					) : (
						<a
							href="/login"
							className="px-4 py-2 bg-pink-500 text-white rounded-lg"
						>
							Login
						</a>
					)}
				</div>
			)}

			{/* Render the Popup Using a Portal */}
			{isPopupOpen &&
				ReactDOM.createPortal(
					<Popup onClose={closePopup} />,
					document.getElementById("root")
				)}
		</nav>
	);
}

export default Navbar;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
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
		<nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-lg z-50">
			{/* Grid Background */}
			<div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-25 w-full">
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
			</div>
			{/* Desktop Navbar */}
			<div className="hidden md:grid grid-cols-12 gap-4 py-4">
				{/* Navigation Links */}
				<div className="col-start-2 col-span-3 hidden md:flex">
					<Links />
				</div>
				{/* Logo */}
				<div className="col-start-6 col-span-2 flex justify-center">
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
							<ProfileAvatar
								user={user}
								onClick={() => setMenuOpen(!menuOpen)}
							/>
							<ProfileMenu
								isOpen={menuOpen}
								onLogOut={handleLogout}
							/>
						</div>
					) : (
						<button
							onClick={openPopup}
							className="w-6 h-6 p-4 bg-pink-500 text-white rounded-full flex items-center justify-center"
						>
							<FontAwesomeIcon
								icon={faUser}
								className="text-white"
							/>
						</button>
					)}
				</div>
			</div>

			{/* Mobile Navbar */}
			<div className="md:hidden flex items-center justify-between px-4 py-2">
				{/* Hamburger Menu */}
				<button
					className="text-gray-600"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<FontAwesomeIcon icon={faBars} size="lg" />
				</button>

				{/* Logo */}
				<Logo />

				{/* Right Side (Search/User Avatar) */}
				<div className="flex items-center space-x-4">
					<Search
						onSearch={(query) => console.log("Search:", query)}
					/>
					{isLoggedIn ? (
						<ProfileAvatar
							user={user}
							onClick={() => setMenuOpen(!menuOpen)}
						/>
					) : (
						<button
							onClick={openPopup}
							className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center"
						>
							<FontAwesomeIcon icon={faUser} />
						</button>
					)}
				</div>
			</div>

			{/* Mobile Menu Content */}
			{menuOpen && (
				<div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
					{isLoggedIn ? (
						<ul className="flex flex-col space-y-4 p-4">
							<li className="flex items-center">
								<ProfileAvatar user={user} />
								<span className="ml-2">{user?.name}</span>
							</li>
							<li>
								<Button size="small">Add Recipe</Button>
							</li>
							<li>
								<button
									onClick={handleLogout}
									className="text-red-500"
								>
									Logout
								</button>
							</li>
						</ul>
					) : (
						<ul className="flex flex-col space-y-4 p-4">
							<li>
								<button
									onClick={openPopup}
									className="w-full bg-pink-500 text-white py-2 rounded-lg"
								>
									Login
								</button>
							</li>
						</ul>
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
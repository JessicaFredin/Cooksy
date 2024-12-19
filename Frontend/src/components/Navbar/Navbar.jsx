// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
// import Popup from "../Popup";
// import ReactDOM from "react-dom";
// import Logo from "./Logo";
// import Links from "./Links";
// import Search from "./Search";
// import ProfileAvatar from "../ProfileAvatar";
// import Button from "../Button";
// import Avatar from "../../assets/images/avatar.png";
// import ProfileMenu from "../ProfileMenu";
// import { UserContext } from "../../../contexts/UserContext";


// function Navbar() {
// 	const [isLoggedIn, setIsLoggedIn] = useState(false);
// 	const [menuOpen, setMenuOpen] = useState(false);
// 	const [user, setUser] = useState(null); // Holds user data
// 	const [isPopupOpen, setIsPopupOpen] = useState(false);

// 	const openPopup = () => {
// 		setIsPopupOpen(true);
// 	};

// 	const closePopup = () => {
// 		setIsPopupOpen(false);
// 	};

// 	const toggleProfileMenu = () => {
// 		setMenuOpen((prev) => !prev);
// 	};

// 	useEffect(() => {
// 		axios
// 			.get(import.meta.env.VITE_APP_BACKEND_URL + "/auth/user", {
// 				withCredentials: true,
// 			})
// 			.then((response) => {
// 				console.log("User authenticated:", response.data);
// 				// Handle user authentication (e.g., save user data in state)
// 				setIsLoggedIn(true);
// 				setUser(response.data); // Save user data
// 			})
// 			.catch(() => {
// 				console.log("User not authenticated");
// 				setIsLoggedIn(false);
// 				setUser(null);
// 			});
// 	}, []);

	


// 	// Handle logout
// 	const handleLogout = async () => {
// 		try {
// 			await axios.post(
// 				import.meta.env.VITE_APP_BACKEND_URL + "/auth/logout",
// 				{},
// 				{ withCredentials: true }
// 			);
// 			setIsLoggedIn(false);
// 			setUser(null);
// 		} catch (error) {
// 			console.error("Logout failed", error);
// 		}
// 	};

// 	return (
// 		<nav className="grid grid-cols-12 gap-4 py-4 bg-white/10 backdrop-blur-sm shadow-lg fixed w-full top-0 left-0 z-50">
// 			{/* Grid Background */}
// 			{/* <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-25 w-full">
// 				<div className="bg-purple-300"></div>
// 				<div className="bg-purple-300"></div>
// 				<div className="bg-purple-300"></div>
// 				<div className="bg-purple-300"></div>
// 				<div className="bg-purple-300"></div>
// 				<div className="bg-purple-300"></div>
// 				<div className="bg-purple-300"></div>
// 				<div className="bg-purple-300"></div>
// 				<div className="bg-purple-300"></div>
// 				<div className="bg-purple-300"></div>
// 				<div className="bg-purple-300"></div>
// 				<div className="bg-purple-300"></div>
// 			</div> */}

// 			{/* Navigation Links */}
// 			<div className="col-start-2 col-span-3 hidden md:flex ">
// 				<Links />
// 			</div>

// 			{/* Logo */}
// 			<div className="col-start-6 col-span-2 grid items-center">
// 				<Logo />
// 			</div>

// 			{/* Search and User/Actions */}
// 			<div className="col-start-10 col-span-2 flex justify-end items-center space-x-4">
// 				<div className="relative">
// 					<Search
// 						onSearch={(query) =>
// 							console.log("Search Query:", query)
// 						}
// 					/>
// 				</div>

// 				{/* Dynamic content based on logged-in state */}
// 				{isLoggedIn ? (
// 					<div className="flex items-center space-x-2">
// 						<div className="hidden md:inline-block flex-nowrap">
// 							<Button size="small" to="/add-recipe">
// 								Add recipe
// 							</Button>
// 						</div>

// 						<div className="relative">
// 							{/* Avatar */}
// 							<ProfileAvatar
// 								user={user}
// 								onClick={toggleProfileMenu}
// 							/>


// 							{/* Profile Menu */}
// 							<ProfileMenu
// 								isOpen={menuOpen}
// 								onLogOut={handleLogout}
// 							/>

					
// 						</div>
// 					</div>
// 				) : (
// 					<button
// 						onClick={openPopup}
// 						className="w-10 h-10 p-4 bg-pink-500 text-white rounded-full flex items-center justify-center"
// 					>
// 						<FontAwesomeIcon icon={faUser} className="text-white" />
// 					</button>
// 				)}

// 				{/* Hamburger menu for mobile */}
// 				<button
// 					onClick={() => setMenuOpen(!menuOpen)}
// 					className="block md:hidden text-gray-600"
// 				>
// 					<svg
// 						xmlns="http://www.w3.org/2000/svg"
// 						fill="none"
// 						viewBox="0 0 24 24"
// 						strokeWidth={2}
// 						stroke="currentColor"
// 						className="w-6 h-6"
// 					>
// 						<path
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							d="M4 6h16M4 12h16M4 18h16"
// 						/>
// 					</svg>
// 				</button>
// 			</div>
// 			{/* Mobile menu */}
// 			{menuOpen && (
// 				<div className="col-span-12 md:hidden flex flex-col items-center bg-gray-50 p-4 space-y-4">
// 					<Links isMobile={true} />
// 					{isLoggedIn ? (
// 						<>
// 							<a
// 								href="/add-recipe"
// 								className="px-4 py-2 bg-pink-500 text-white rounded-lg"
// 							>
// 								Add Recipe
// 							</a>
// 							<button
// 								onClick={handleLogout}
// 								className="text-red-600"
// 							>
// 								Logout
// 							</button>
// 						</>
// 					) : (
// 						<a
// 							href="/login"
// 							className="px-4 py-2 bg-pink-500 text-white rounded-lg"
// 						>
// 							Login
// 						</a>
// 					)}
// 				</div>
// 			)}

// 			{/* Render the Popup Using a Portal */}
// 			{isPopupOpen &&
// 				ReactDOM.createPortal(
// 					<Popup onClose={closePopup} />,
// 					document.getElementById("root")
// 				)}
// 		</nav>
// 	);
// }

// export default Navbar;




// // /* eslint-disable no-unused-vars */
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faSearch, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
// // import ReactDOM from "react-dom";
// // import Logo from "./Logo";
// // import Links from "./Links";
// // import Search from "./Search";
// // import ProfileAvatar from "../ProfileAvatar";
// // import Button from "../Button";
// // import ProfileMenu from "../ProfileMenu";
// // import MobileMenu from "./MobileMenu";
// // import Popup from "../Popup";

// // function Navbar() {
// // 	const [isLoggedIn, setIsLoggedIn] = useState(false);
// // 	const [menuOpen, setMenuOpen] = useState(false);
// // 	const [user, setUser] = useState(null); // Holds user data
// // 	const [isPopupOpen, setIsPopupOpen] = useState(false);

// // 	const openPopup = () => setIsPopupOpen(true);
// // 	const closePopup = () => setIsPopupOpen(false);

// // 	const toggleMobileMenu = () => setMenuOpen((prev) => !prev);

// // 		const toggleProfileMenu = () => {
// // 			setMenuOpen((prev) => !prev);
// // 		};

// // 	useEffect(() => {
// // 		axios
// // 			.get(import.meta.env.VITE_APP_BACKEND_URL + "/auth/user", {
// // 				withCredentials: true,
// // 			})
// // 			.then((response) => {
// // 				setIsLoggedIn(true);
// // 				setUser(response.data); // Save user data
// // 			})
// // 			.catch(() => {
// // 				setIsLoggedIn(false);
// // 				setUser(null);
// // 			});
// // 	}, []);

// // 	const handleLogout = async () => {
// // 		await axios.post(
// // 			import.meta.env.VITE_APP_BACKEND_URL + "/auth/logout",
// // 			{},
// // 			{ withCredentials: true }
// // 		);
// // 		setIsLoggedIn(false);
// // 		setUser(null);
// // 	};

// // 	return (
// // 		<nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-lg z-50">
// // 			{/* Desktop Navbar */}
// // 			<div className="hidden md:grid grid-cols-12 gap-4 py-4">
// // 				<div className="col-start-2 col-span-3 hidden md:flex">
// // 					<Links />
// // 				</div>
// // 				<div className="col-start-6 col-span-2 flex justify-center">
// // 					<Logo />
// // 				</div>
// // 				<div className="col-start-10 col-span-2 flex justify-end items-center space-x-4">
// // 					{isLoggedIn ? (
// // 						<div className="flex items-center space-x-2">
// // 							<Search
// // 								onSearch={(query) =>
// // 									console.log("Search:", query)
// // 								}
// // 							/>
// // 							<Button size="small">Add Recipe</Button>

// // 							<ProfileAvatar
// // 								user={user}
// // 								onClick={toggleProfileMenu}
// // 							/>
// // 							<ProfileMenu
// // 								isOpen={menuOpen}
// // 								onLogOut={handleLogout}
// // 							/>
// // 						</div>
// // 					) : (
// // 						<button
// // 							onClick={openPopup}
// // 							className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center"
// // 						>
// // 							<FontAwesomeIcon icon={faUser} />
// // 						</button>
// // 					)}
// // 				</div>
// // 			</div>

// // 			{/* Mobile Navbar */}
// // 			<div className="md:hidden flex items-center justify-between px-4 py-2">
// // 				{/* Hamburger Menu Button */}
// // 				<button className="text-gray-600" aria-label="Open menu">
// // 					<FontAwesomeIcon icon={faBars} size="lg" />
// // 				</button>

// // 				{/* Logo */}
// // 				<Logo />

// // 				{/* User Profile or Login */}
// // 				<div className="flex items-center space-x-4">
// // 					<Search
// // 						onSearch={(query) => console.log("Search:", query)}
// // 					/>
// // 					{isLoggedIn ? (
// // 						<ProfileAvatar
// // 							user={user}
// // 							onClick={toggleProfileMenu}
// // 						/>
// // 					) : (
// // 						<button
// // 							onClick={openPopup}
// // 							className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center"
// // 						>
// // 							<FontAwesomeIcon icon={faUser} />
// // 						</button>
// // 					)}
// // 				</div>
// // 			</div>

// // 			{/* Mobile Menu */}
// // 			<MobileMenu isOpen={menuOpen} onClose={toggleMobileMenu} />

// // 			{/* Popup */}
// // 			{isPopupOpen &&
// // 				ReactDOM.createPortal(
// // 					<Popup onClose={closePopup} />,
// // 					document.getElementById("root")
// // 				)}
// // 		</nav>
// // 	);
// // }

// // export default Navbar;





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
        try {
            await axios.post(
                import.meta.env.VITE_APP_BACKEND_URL + "/auth/logout",
                {},
                { withCredentials: true }
            );
            setIsLoggedIn(false);
            setUser(null);
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <nav className="grid grid-cols-12 gap-4 py-4 bg-white/10 backdrop-blur-sm shadow-lg fixed w-full top-0 left-0 z-50">
            {/* Navigation Links */}
            <div className="col-start-2 col-span-3 hidden md:flex">
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
                            <Button size="small" to="/add-recipe">
                                Add recipe
                            </Button>
                        </div>

                        <div className="relative">
                            {/* Avatar */}
                            <ProfileAvatar
                                user={user}
                                onClick={toggleProfileMenu}
                            />

                            {/* Profile Menu */}
                            <ProfileMenu
                                isOpen={menuOpen}
                                onClose={() => setMenuOpen(false)} // Close menu on outside click
                                onLogOut={handleLogout}
                            />
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={openPopup}
                        className="w-10 h-10 p-4 bg-pink-500 text-white rounded-full flex items-center justify-center"
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
                    <Links isMobile={true} />
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

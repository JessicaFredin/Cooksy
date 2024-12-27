/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Popup from "../Popup";
import ReactDOM from "react-dom";
import Logo from "./Logo";
import Links from "./Links";
import ProfileAvatar from "../ProfileAvatar";
import ProfileMenu from "../ProfileMenu";
import MobileMenu from "./MobileMenu";
import Button from "../Button";

function Navbar() {
    const { isLoggedIn, user, logout } = useAuth(); // Get state and methods from AuthContext
    const [menuOpen, setMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
    const profileMenuRef = useRef(null);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const toggleProfileMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const toggleHamburgerMenu = () => setHamburgerMenuOpen((prev) => !prev);

    // Close profile menu when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                profileMenuRef.current &&
                !profileMenuRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    // Handle logout
    const handleLogout = async () => {
        try {
            logout(); // Call logout function from AuthContext
            setMenuOpen(false); // Close the menu (if open)
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:grid grid-cols-12 items-center gap-4 py-4 bg-white/10 backdrop-blur-sm shadow-lg fixed w-full top-0 left-0 z-50">
                {/* Logo */}
                <div className="col-start-2 col-span-3 flex items-center">
                    <Logo />
                </div>

                {/* Links */}
                <div className="col-start-5 col-span-4 flex justify-center">
                    <Links />
                </div>

                {/* Search, Add Recipe, and User Avatar */}
                <div className="col-start-10 col-span-3 flex justify-start items-center space-x-4">
                    <button className="text-gray-600">
                        <FontAwesomeIcon icon={faSearch} className="text-black" />
                    </button>

                    {isLoggedIn && (
                        <Button size="small" to="/add-recipe" className="hidden md:inline-block">
                            Add Recipe
                        </Button>
                    )}

                    {isLoggedIn ? (
                        <div className="relative ml-4" ref={profileMenuRef}>
                            <ProfileAvatar
                                user={user}
                                onClick={toggleProfileMenu}
                            />
                            {menuOpen && (
                                <ProfileMenu
                                    isOpen={menuOpen}
                                    onClose={() => setMenuOpen(false)}
                                    onLogOut={handleLogout}
                                />
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={openPopup}
                            className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center"
                        >
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-white"
                            />
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="md:hidden grid grid-cols-8 items-center gap-2 py-4 bg-white/10 backdrop-blur-sm shadow-lg fixed w-full top-0 left-0 z-50">
                {/* Hamburger Menu Icon */}
                <div className="col-start-2 col-span-1 flex items-center">
                    <button
                        onClick={toggleHamburgerMenu}
                        className="text-gray-600"
                    >
                        <FontAwesomeIcon icon={faBars} className="text-black" />
                    </button>
                </div>

                {/* Logo */}
                <div className="col-start-4 col-span-2 flex justify-center items-center">
                    <Logo />
                </div>

                {/* User Avatar */}
                <div className="col-start-7 col-span-1 flex justify-end items-center">
                    {isLoggedIn ? (
                        <ProfileAvatar user={user} />
                    ) : (
                        <button
                            onClick={openPopup}
                            className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center"
                        >
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-white"
                            />
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {hamburgerMenuOpen && (
                <MobileMenu
                    isOpen={hamburgerMenuOpen}
                    onClose={toggleHamburgerMenu}
                />
            )}

            {/* Render the Popup Using a Portal */}
            {isPopupOpen &&
                ReactDOM.createPortal(
                    <Popup onClose={closePopup} />, // Popup close functionality
                    document.getElementById("root")
                )}
        </>
    );
}

export default Navbar;

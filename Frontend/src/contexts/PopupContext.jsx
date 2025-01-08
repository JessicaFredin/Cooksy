/* eslint-disable react/prop-types */
// contexts/PopupContext.jsx
import { createContext, useContext, useState } from "react";
import Popup from "../components/Popup";

const PopupContext = createContext();

export function PopupProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState(null);

	const openPopup = (component) => {
		setContent(component); // Set the content to render in the Popup
		setIsOpen(true);
	};

	const closePopup = () => {
		setIsOpen(false);
		setContent(null);
	};

	return (
		<PopupContext.Provider value={{ openPopup, closePopup }}>
			{children}
			{isOpen && (
				<Popup onClose={closePopup}>
					{/* Render the content dynamically */}
					{content}
				</Popup>
			)}
		</PopupContext.Provider>
	);
}

export function usePopup() {
	return useContext(PopupContext);
}

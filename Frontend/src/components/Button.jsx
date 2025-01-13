import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Button({
	size = "medium", // Defaultstorlek på knappen om ingen anges
	children, // Innehållet i knappen (t.ex. text eller ikoner)
	onClick, // Eventuell klickhändelsefunktion som skickas som prop.
	className,
	icon = null, // Ikon som kan visas tillsammans med knappen
	iconPosition = "left", // Defaultposition för ikonen, om ingen anges
	to = null, // Navigeringsväg, används för att navigera via React Router
}) {
	const navigate = useNavigate();

	// Definierar olika storleksklasser för knappen.
	const sizeClasses = {
		large: "py-3 px-6 text-lg",
		medium: "py-2 px-4 text-base",
		small: "py-1.5 px-3 text-sm",
		mini: "py-1 px-2 text-xs",
		mediumMoreWidth: "py-2 px-4 text-base w-[200px]",
	};
    // Defaultstilar för knappen, bakgrundsfärg, form och övergångar
	const baseClass =
		"bg-pink-500 text-white rounded-full flex items-center justify-center space-x-2 transition-all duration-300 ease-in-out hover:bg-pink-600 whitespace-nowrap z-30";
    // Hanterar klickhändelsen för knappen
	const handleClick = (e) => {
		if (onClick) {
			onClick(e); // Utför eventuell logik som skickats via onClick-proppen.
		}
		if (to) {
			navigate(to); // Navigerar till den angivna vägen om "to" är definierad
		}
	};

	return (
		// Returnerar en knapp med de sammansatta klasserna och klickhändelsen.
		<button
			onClick={handleClick}
			className={`${baseClass} ${sizeClasses[size]} ${className}`}
		>   
		    {/* Om en ikon anges och positionen är "left", renderas ikonen till vänster */}
			{icon && iconPosition === "left" && (
				<span className="inline-flex items-center">{icon}</span>
			)}
			{/* Om det finns text visas det */}
			{children && <span>{children}</span>}
			{/* Om en ikon anges och positionen är "right", renderas ikonen till höger */}
			{icon && iconPosition === "right" && (
				<span className="inline-flex items-center">{icon}</span>
			)}
		</button>
	);
}

// Typvalidering för props för att säkerställa korrekt användning av komponenten
Button.propTypes = {
	size: PropTypes.oneOf([
		"large",
		"medium",
		"small",
		"mini",
		"mediumMoreWidth",
	]),
	children: PropTypes.node.isRequired, // Innehåll i knappen, t.ex. text eller ikoner
	onClick: PropTypes.func, // Funktion som anropas vid klick på knappen
	icon: PropTypes.node, // Ikon som kan renderas tillsammans med knappen
	iconPosition: PropTypes.oneOf(["left", "right"]), // Position för ikonen
	to: PropTypes.string, // Navigeringsväg, används med React Router
	className: PropTypes.node,
};

export default Button;

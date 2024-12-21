import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Button({
	size = "medium",
	children,
	onClick,
	className,
	icon = null,
	iconPosition = "left",
	to = null, // New prop for navigation
}) {
	const navigate = useNavigate();

	// Define classes for different button sizes
	const sizeClasses = {
		large: "py-3 px-6 text-lg",
		medium: "py-2 px-4 text-base",
		small: "py-1.5 px-3 text-sm",
		mini: "py-1 px-2 text-xs",
		mediumMoreWidth: "py-2 px-4 text-base w-[200px]",
	};

	const baseClass =
		"bg-pink-500 text-white rounded-full flex items-center justify-center space-x-2 transition-all duration-300 ease-in-out hover:bg-pink-600 whitespace-nowrap z-30";

	const handleClick = (e) => {
		if (onClick) {
			onClick(e); // Execute any custom onClick logic
		}
		if (to) {
			navigate(to); // Navigate to the specified path
		}
	};

	return (
		<button
			onClick={handleClick}
			className={`${baseClass} ${sizeClasses[size]} ${className}`}
		>
			{icon && iconPosition === "left" && (
				<span className="inline-flex items-center">{icon}</span>
			)}
			{children && <span>{children}</span>}
			{icon && iconPosition === "right" && (
				<span className="inline-flex items-center">{icon}</span>
			)}
		</button>
	);
}

// Prop type validation for better usability
Button.propTypes = {
	size: PropTypes.oneOf([
		"large",
		"medium",
		"small",
		"mini",
		"mediumMoreWidth",
	]),
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	icon: PropTypes.node, // Accepts JSX for an icon
	iconPosition: PropTypes.oneOf(["left", "right"]), // Icon position
	to: PropTypes.string, // Path to navigate to
	className: PropTypes.node,
};

export default Button;

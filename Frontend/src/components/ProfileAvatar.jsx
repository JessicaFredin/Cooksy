/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React from "react";
// import randomColor from "randomcolor"; // Optional, install with `npm install randomcolor`

// function ProfileAvatar({ firstName, lastName, profilePicture }) {
// 	// Generate initials
// 	const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();

// 	// Optional: Generate dynamic background color for initials
// 	const backgroundColor = randomColor({ luminosity: "light" });

// 	return (
// 		<div
// 			className="relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden text-white font-bold"
// 			style={{ backgroundColor: !profilePicture && backgroundColor }}
// 		>
// 			{/* If profilePicture exists, display it, otherwise display initials */}
// 			{profilePicture ? (
// 				<img
// 					src={profilePicture}
// 					alt={`${firstName} ${lastName}`}
// 					className="w-full h-full object-cover"
// 					loading="lazy"
// 				/>
// 			) : (
// 				<span>{initials}</span>
// 			)}
// 		</div>
// 	);
// }

// export default ProfileAvatar;



// import React from "react";

// function ProfileAvatar({ user, onClick }) {
// 	const getInitials = (name) => {
// 		if (!name) return "U"; // Default initial if no name is provided
// 		const [firstName, lastName] = name.split(" ");
// 		return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();
//     };
    
//     const generateColor = (color) => {
// 		const colors = [
// 			"bg-red-500",
// 			"bg-blue-500",
// 			"bg-green-500",
// 			"bg-yellow-500",
// 		];
// 		const index = color ? color.charCodeAt(0) % colors.length : 0; // Fallback index if no color
// 		return colors[index];
// 	};

// 	// Usage
// 	const avatarStyle = generateColor(user.name);

// 	return user.profileImage ? (
// 		<img
// 			src={user.profileImage}
// 			alt="Profile"
// 			className="w-8 h-8 rounded-full cursor-pointer"
// 			onClick={onClick}
// 		/>
// 	) : (
// 		<div
// 			onClick={onClick}
// 			className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${avatarStyle} cursor-pointer`}
// 		>
// 			{getInitials(user.name)}
// 		</div>
// 	);
// }

// export default ProfileAvatar;





import React from "react";

function ProfileAvatar({ user, onClick }) {
    const getInitials = (firstName, lastName) => {
        const initials = `${firstName?.[0] || ""}${lastName?.[0] || ""}`;
        return initials.toUpperCase();
    };

    const generateColor = (name) => {
        const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];
        const index = name ? name.charCodeAt(0) % colors.length : 0;
        return colors[index];
    };

    const avatarColor = generateColor(user?.first_name || "U");

    return user?.profileImage ? (
        <img
            src={user.profileImage}
            alt={`${user.first_name} ${user.last_name}`}
            className="w-10 h-10 rounded-full cursor-pointer object-cover"
            onClick={onClick}
        />
    ) : (
        <div
            onClick={onClick}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${avatarColor} cursor-pointer`}
        >
            {getInitials(user?.first_name, user?.last_name)}
        </div>
    );
}

export default ProfileAvatar;

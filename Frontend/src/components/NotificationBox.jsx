import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating";

const NotificationBox = ({
	avatar,
	name,
	repliedTo, // Indikerar om detta är ett svar och vem det är riktat till
	text, // Meddelandetexten i notifikationen.
	stars,
	color = "green",
	min, //Tidsstämpel i minuter som visar hur länge sedan notifikationen skapades
}) => {
	// Bestämmer kantfärgen baserat på prop color
	const borderColor =
		color === "green" ? "border-green-500" : "border-pink-500";

	return (
		<div
			className={`col-start-2 col-span-10 flex items-start gap-4 p-4 border-2 rounded-3xl ${borderColor} shadow-md bg-white w-full `}
		>
			{/* Avatar */}
			{avatar && (
				<img
					src={avatar}
					alt={`${name}'s avatar`}
					className="w-12 h-12 md:w-20 md:h-20 rounded-full"
				/>
			)}

			{/* Innehåll */}
			<div className="flex-1">
				<p className="text-sm font-bold">
					{/* Visar användarens namn */}
					{name}
					{/* Om det är ett svar, visa texten Replied to */}
					{repliedTo && (
						<span className="text-gray-500">
							{" "}
							- Replied to: {repliedTo}
						</span>
					)}
				</p>
				<p className="text-black">{text}</p>
				{stars && (
					<div className="mt-2 flex items-start">
						<StarRating staticRating={stars} />
					</div>
				)}
			</div>

			{/* Timestamp och Delete knapp */}
			<div className="flex flex-col items-end justify-between h-full ">
				<span className="text-gray-400 text-sm">{min}m ago</span>
				{/* Papperskorgsikon för att ta bort notifikationen  + klickhantering som visas som alert*/}
				<FontAwesomeIcon
					icon={faTrashAlt}
					className={`ml-4 text-sm text-pink-300`}
					onClick={() => alert("Delete notification")}
				/>
			</div>
		</div>
	);
};

export default NotificationBox;

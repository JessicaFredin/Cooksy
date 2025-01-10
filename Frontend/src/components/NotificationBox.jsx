import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating";

const NotificationBox = ({
    avatar,
    name,
    repliedTo,
    text,
    stars,
    color = "green",
    min,
}) => {
    const borderColor = color === "green" ? "border-green-500" : "border-pink-500";

    return (
        <div className={`col-start-2 col-span-10 flex items-start gap-4 p-4 border-2 rounded-3xl ${borderColor} shadow-md bg-white w-full `}>
            {/* Avatar */}
            {avatar && (
                <img
                    src={avatar}
                    alt={`${name}'s avatar`}
                    className="w-12 h-12 md:w-20 md:h-20 rounded-full"
                />
            )}

            {/* Content */}
            <div className="flex-1">
                <p className="text-sm font-bold">
                    {name}
                    {repliedTo && (
                        <span className="text-gray-500"> - Replied to: {repliedTo}</span>
                    )}
                </p>
                <p className="text-black">{text}</p>
                {stars && <div className="mt-2">
                    <StarRating
                        staticRating={stars}
                    /></div>}
            </div>

            {/* Timestamp and Delete */}
            <div className="flex flex-col items-end justify-between h-full ">
                <span className="text-gray-400 text-sm">{min}m ago</span>
                <FontAwesomeIcon icon={faTrashAlt} className={`ml-4 text-sm text-pink-300`} onClick={() => alert("Delete notification")} />
            </div>
        </div>
    );
};

export default NotificationBox
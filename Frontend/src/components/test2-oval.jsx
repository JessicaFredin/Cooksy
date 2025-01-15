/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { HatIcon } from "../assets/icons/HatIcon";
import { PeopleIcon } from "../assets/icons/PeopleIcon";
import { TopContributorOne } from "../assets/icons/TopContributorOne";
import { TopContributorTwo } from "../assets/icons/TopContributorTwo";
import { Link } from "react-router-dom";

// Import the uploaded placeholder image
import PlaceholderProfileImage from "../assets/images/PlaceholderProfileImage.jpg";

function ProfileCard({
	id,
	profileImage,
	size = "medium",
	name,
	recipes,
	followers,
}) {
	const [isFollowing, setIsFollowing] = useState(false);

	const handleFollowClick = () => {
		setIsFollowing((prev) => !prev);
	};

	// Define size classes for responsiveness
	const sizeClasses = {
		medium: {
			container: "w-64 h-96",
			profileImage: "w-52 h-52",
			nameBox: "w-52 h-9 text-base",
			iconText: "text-sm",
			buttonSize: "small",
		},
		large: {
			container: "w-80 h-128",
			profileImage: "w-64 h-64",
			nameBox: "w-64 h-10 text-lg",
			iconText: "text-base",
			buttonSize: "medium",
		},
		xl: {
			container: "w-96 h-160",
			profileImage: "w-72 h-72",
			nameBox: "w-72 h-12 text-xl",
			iconText: "text-lg",
			buttonSize: "large",
		},
	};

	const sizeClass = sizeClasses[size] || sizeClasses.medium;

	return (
		<div>
			<Link to={`/profile/${id}`}>
				<div
					className={`bg-white rounded-lg flex flex-col items-center p-5 relative shadow-lg ${sizeClass.container}`}
				>
					{/* Top Contributor Badges */}
					{size === "xl" && (
						<div className="absolute -top-6 right-2 z-10">
							<TopContributorOne />
						</div>
					)}
					{size === "large" && (
						<div className="absolute -top-4 -right-2 z-10">
							<TopContributorTwo />
						</div>
					)}

					{/* Profile Picture - Perfect Circle */}
					<div
						className={`rounded-full overflow-hidden mb-4 z-10 ${sizeClass.profileImage}`}
					>
						<img
							src={profileImage || PlaceholderProfileImage}
							alt={`${name}'s profile`}
							className="w-full h-full object-cover rounded-full bg-black flex items-center justify-center"
							onError={(e) =>
								(e.target.src = PlaceholderProfileImage)
							}
						/>
					</div>

					{/* Name Box */}
					<div
						className={`bg-green-300 rounded-lg flex items-center justify-center ${sizeClass.nameBox}`}
					>
						<p>{name}</p>
					</div>

					{/* Recipes and Followers */}
					<div className="space-y-2 mb-4 w-full px-4 mt-2">
						<div
							className={`flex items-center gap-2 ${sizeClass.iconText}`}
						>
							<HatIcon />
							{recipes} recipes
						</div>
						<div
							className={`flex items-center gap-2 ${sizeClass.iconText}`}
						>
							<PeopleIcon />
							{followers} followers
						</div>
					</div>

					{/* Bio for XL Cards */}
					{size === "xl" && (
						<div className="bg-green-100 text-black p-4 w-full rounded-lg mb-4 max-h-[100px] min-h-[100px]">
							Exploring new recipes is always an adventure, and I
							love both trying them out and sharing my own
							creations!
						</div>
					)}

					{/* Follow Button */}
					<div className="flex justify-end w-full mt-auto">
						<Button
							size={sizeClass.buttonSize}
							variant={isFollowing ? "green" : "default"}
							onClick={handleFollowClick}
						>
							{isFollowing ? "Following" : "Follow"}
						</Button>
					</div>
				</div>
			</Link>
		</div>
	);
}

ProfileCard.propTypes = {
	size: PropTypes.oneOf(["medium", "large", "xl"]),
};

export default ProfileCard;

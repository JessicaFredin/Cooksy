/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faBell,
	faUpload,
	faHeart,
	faCalendarAlt,
	faCog,
	faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

function ProfileMenu({ isOpen, onLogOut }) {
	if (!isOpen) return null;

	return (
		<div className="absolute right-0 top-[35px] mt-6 w-64 bg-white shadow-lg rounded-bl-lg rounded-br-lg z-50">
			<ul className="">
				<li className="px-4 py-2 flex items-center hover:bg-green-100 cursor-pointer">
					<span className="mr-3 text-gray-800">
						<FontAwesomeIcon icon={faUser} />
					</span>
					<Link to="/profile" className="flex-1 text-gray-700">
						My profile
					</Link>
				</li>
				<li className="px-4 py-2 flex items-center hover:bg-green-100 cursor-pointer">
					<span className="mr-3 text-gray-800">
						<FontAwesomeIcon icon={faBell} />
					</span>
					<Link to="/notifications" className="flex-1 text-gray-700">
						Notifications
					</Link>
					<span className="bg-red-500 text-white text-xs rounded-full px-2 w-4 h-4 flex items-center justify-center font-pacifico">
						1
					</span>
				</li>
				<li className="px-4 py-2 flex items-center hover:bg-green-100 cursor-pointer">
					<span className="mr-3 text-gray-800">
						<FontAwesomeIcon icon={faUpload} />
					</span>
					<Link
						to="/uploaded-recipes"
						className="flex-1 text-gray-700"
					>
						My uploaded recipes
					</Link>
				</li>
				<li className="px-4 py-2 flex items-center hover:bg-green-100 cursor-pointer">
					<span className="mr-3 text-gray-800">
						<FontAwesomeIcon icon={faHeart} />
					</span>
					<Link to="/saved-recipes" className="flex-1 text-gray-700">
						My saved recipes
					</Link>
				</li>
				<li className="px-4 py-2 flex items-center hover:bg-green-100 cursor-pointer">
					<span className="mr-3 text-gray-800">
						<FontAwesomeIcon icon={faCalendarAlt} />
					</span>
					<Link to="/meal-planner" className="flex-1 text-gray-700">
						Meal planner
					</Link>
				</li>
				<li className="px-4 py-2 flex items-center hover:bg-green-100 cursor-pointer">
					<span className="mr-3 text-gray-800">
						<FontAwesomeIcon icon={faCog} />
					</span>
					<Link to="/settings" className="flex-1 text-gray-700">
						Settings
					</Link>
				</li>
				<li className="px-4 py-2 flex items-center hover:bg-green-100 cursor-pointer">
					<span className="mr-3 text-gray-800">
						<FontAwesomeIcon icon={faPowerOff} />
					</span>
					<Link to="/logout" className="flex-1 text-gray-700" onClick={onLogOut}>
						Log out
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default ProfileMenu;
import { NavLink } from "react-router-dom";

function Links() {
	return (
		<div className="space-x-6 hidden md:flex justify-center items-center ">
			<NavLink
				to="/"
				className={({ isActive }) =>
					`relative text-gray-600 hover:text-pink-500 ${
						isActive ? "text-pink-500" : ""
					}`
				}
			>
				Home
			</NavLink>

			<NavLink
				to="/recipes"
				className={({ isActive }) =>
					`relative text-gray-600 hover:text-pink-500 ${
						isActive ? "text-pink-500" : ""
					}`
				}
			>
				Recipes
			</NavLink>
			<NavLink
				to="/articles"
				className={({ isActive }) =>
					`relative text-gray-600 hover:text-pink-500 ${
						isActive ? "text-pink-500" : ""
					}`
				}
			>
				Articles
			</NavLink>
			<NavLink
				to="/categories"
				className={({ isActive }) =>
					`relative text-gray-600 hover:text-pink-500 ${
						isActive ? "text-pink-500" : ""
					}`
				}
			>
				Categories
			</NavLink>
		</div>
	);
}

export default Links;

import React from "react";
import HeadingWithLine from "../components/HeadingWithLine";
import SortMenu from "../components/SortMenu";
import ProfileCard from "../components/ProfileCard";

const FollowersPage = () => {
	// Mock data for profile cards
	const profiles = [
		{ name: "Liv Thatcher", recipes: 20, followers: 120, following: true },
		{
			name: "Emma Andersson",
			recipes: 20,
			followers: 120,
			following: true,
		},
		{
			name: "Sofia Martinez",
			recipes: 20,
			followers: 120,
			following: true,
		},
		{
			name: "Isabella Sjöqvist",
			recipes: 20,
			followers: 120,
			following: true,
		},
		{
			name: "First/last name",
			recipes: 20,
			followers: 120,
			following: true,
		},
		{ name: "Hanna Nyström", recipes: 20, followers: 120, following: true },
		{
			name: "Lukas Andersson",
			recipes: 20,
			followers: 120,
			following: true,
		},
		{
			name: "Elena Fernandez",
			recipes: 20,
			followers: 120,
			following: true,
		},
		{
			name: "Adam Lindström",
			recipes: 20,
			followers: 120,
			following: true,
		},
		{ name: "Luca Bianchi", recipes: 20, followers: 120, following: true },
		{
			name: "Alessandro Moretti",
			recipes: 20,
			followers: 120,
			following: true,
		},
		{
			name: "Matilda Holmgren",
			recipes: 20,
			followers: 120,
			following: true,
		},
	];

	return (
		<div className="grid grid-cols-12 py-8">
			{" "}
			{/* Minskat vertikalt utrymme */}
			{/* Rubrik */}
			<div className="col-start-2 mb-4">
				{" "}
				{/* Mindre marginal under rubriken */}
				<HeadingWithLine text="Followers" />
			</div>
			{/* Sorteringsmeny */}
			<div className="col-start-2 col-span-10 flex justify-end mb-6">
				{" "}
				{/* Mindre marginal */}
				<SortMenu />
			</div>
			{/* Profilkort */}
			<div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
				{" "}
				{/* Justerat gap */}
				{profiles.map((profile, index) => (
					<div key={index} className="flex justify-center">
						<ProfileCard
							name={profile.name}
							recipes={profile.recipes}
							followers={profile.followers}
							following={profile.following}
						/>
					</div>
				))}
			</div>
			{/* Pagination */}
			<div className="col-start-2 col-span-10 flex justify-center mt-6">
				<div className="flex items-center space-x-2">
					<button className="px-4 py-2 bg-gray-200 rounded">1</button>
					<button className="px-4 py-2 bg-white border rounded">
						2
					</button>
					<button className="px-4 py-2 bg-white border rounded">
						3
					</button>
					<span>...</span>
					<button className="px-4 py-2 bg-white border rounded">
						543
					</button>
				</div>
			</div>
		</div>
	);
};

export default FollowersPage;

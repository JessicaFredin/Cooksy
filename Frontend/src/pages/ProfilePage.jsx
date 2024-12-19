import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import { CameraIcon } from "../assets/icons/Cameraicon";


function ProfilePage() {
	const [profile, setProfile] = useState(null);
	const [isEditingBio, setIsEditingBio] = useState(false);
	const [bio, setBio] = useState(""); // Empty by default
	const [isLoading, setIsLoading] = useState(true);
	const [bioLength, setBioLength] = useState(0);
	const [isOverLimit, setIsOverLimit] = useState(false);

	

	useEffect(() => {
		// Fetch user profile
		axios
			.get(import.meta.env.VITE_APP_BACKEND_URL + "/profile", {
				withCredentials: true,
			})
			.then((response) => {
				setProfile(response.data);
				setBio(response.data.bio || "");
				setBioLength(response.data.bio ? response.data.bio.length : 0);
				setIsLoading(false);
			})
			.catch((err) => console.error("Error fetching profile:", err));
	}, []);

	const handleBioSave = () => {
		if (bioLength > 1000) return; // Prevent saving if over limit

		axios
			.put(
				import.meta.env.VITE_APP_BACKEND_URL + "/profile/bio",
				{ bio },
				{ withCredentials: true }
			)
			.then((response) => {
				setIsEditingBio(false);
				setProfile((prev) => ({ ...prev, bio: response.data.bio }));
			})
			.catch((err) => console.error("Error updating bio:", err));
	};

	const handleBioChange = (e) => {
		const newBio = e.target.value;
		setBio(newBio);
		setBioLength(newBio.length);
		setIsOverLimit(newBio.length > 1000);
	};

	const handleProfilePictureChange = (e) => {
		const formData = new FormData();
		formData.append("profile_picture", e.target.files[0]);

		axios
			.put(
				import.meta.env.VITE_APP_BACKEND_URL + "/profile/picture",
				formData,
				{
					headers: { "Content-Type": "multipart/form-data" },
					withCredentials: true,
				}
			)
			.then((response) => {
				setProfile((prev) => ({
					...prev,
					profile_picture_url: response.data.profilePictureUrl,
				}));
			})
			.catch((err) =>
				console.error("Error updating profile picture:", err)
			);
	};

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="max-w-6xl mx-auto p-8">
			<div className="grid grid-cols-12 gap-4">
				{/* Profile Picture */}
				<div className="relative col-span-12 md:col-span-4 h-full">
					{/* <img
						src={
							profile.profile_picture_url ||
							"https://placehold.co/400x400"
						}
						alt="Profile"
						className="rounded-lg h-full min-h-[300px] object-cover w-full"
					/> */}

					<img
						src={
							profile.profile_picture_url
								? `${import.meta.env.VITE_APP_BACKEND_URL}${
										profile.profile_picture_url
								  }`
								: "https://placehold.co/400x400"
						}
						alt="Profile"
						className="rounded-lg h-full min-h-[300px] object-cover w-full"


					/>

					<label
						htmlFor="profilePictureInput"
						className="absolute bottom-4 right-4 bg-green-500 p-3 rounded-full cursor-pointer"
					>
						<input
							type="file"
							id="profilePictureInput"
							onChange={handleProfilePictureChange}
							className="hidden"
						/>
						<span role="img" aria-label="camera">
							<CameraIcon />
						</span>
					</label>
				</div>

				{/* Profile Info */}
				<div className="col-span-12 md:col-span-8">
					<div className="flex justify-between items-start mb-6">
						<div>
							<h1 className="text-4xl font-pacifico mb-6">
								{profile.first_name} {profile.last_name}
							</h1>

							<p className="text-sm text-gray-600">
								<span className="font-bold">
									{profile.followers || 0}
								</span>{" "}
								followers &middot;{" "}
								<span className="font-bold">
									{profile.following || 0}
								</span>{" "}
								following
							</p>
						</div>
					</div>
					<div className="text-gray-700 leading-relaxed">
						{isEditingBio ? (
							<div>
								<textarea
									placeholder="Add your bio here..."
									value={bio}
									onChange={handleBioChange}
									maxLength="1000" // Enforce the limit on the client-side
									className={`w-full border rounded-md p-2 ${
										isOverLimit
											? "border-red-500"
											: "border-gray-300"
									}`}
								/>

								<p
									className={`text-sm mt-1 ${
										isOverLimit
											? "text-red-500"
											: "text-gray-600"
									}`}
								>
									{bioLength}/1000 characters
								</p>
								<div className="flex justify-end mt-2">
									<Button
										onClick={handleBioSave}
										size="medium"
										className={`${
											isOverLimit
												? "bg-gray-300 cursor-not-allowed"
												: "bg-green-500"
										} text-white`}
										disabled={isOverLimit}
									>
										Save
									</Button>
									<Button
										onClick={() => {
											setIsEditingBio(false);
											setBioLength(
												profile.bio
													? profile.bio.length
													: 0
											);
											setBio(profile.bio || "");
										}}
										size="medium"
										className="bg-gray-200 text-black ml-2"
									>
										Cancel
									</Button>
								</div>
							</div>
						) : (
							<div className="flex justify-between">
								<p>
									{profile.bio || (
										<span className="text-gray-400">
											{bio}
										</span>
									)}
								</p>
								<Button
									onClick={() => setIsEditingBio(true)}
									size="medium"
									className="bg-pink-500 text-white"
								>
									Edit
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;

import Button from "./Button";

function AccountSettings() {
	return (
		<div className="space-y-8">
			{/* Ändra email */}
			<div className="bg-whiteFull shadow-md rounded-lg p-6">
				<h2 className="text-lg font-semibold">Change email address</h2>
				{/* Formulär för att ändra email */}
				<form className="space-y-4">
					{/* Nuvarande email */}
					<div>
						<label
							htmlFor="current-email"
							className="block text-sm font-bold text-gray-700 my-2"
						>
							Email
						</label>
						<input
							id="current-email"
							type="email"
							placeholder="Enter your current email"
							className="w-full p-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-200"
						/>
					</div>
					{/* Ny email */}
					<div>
						<label
							htmlFor="new-email"
							className="block text-sm font-bold text-gray-700 my-2"
						>
							New Email
						</label>
						<input
							id="new-email"
							type="email"
							placeholder="Enter your new email"
							className="w-full p-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-200"
						/>
					</div>
					{/*Lösenord */}
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-bold text-gray-700 my-2"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							placeholder="Enter your password"
							className="w-full p-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-200"
						/>
					</div>
					{/* Knapp för att uppdatera ändringar */}
					<div className="flex justify-end">
						<Button>Update</Button>
					</div>
				</form>
			</div>

			{/* form för ändring av lösenord*/}
			<div className="bg-whiteFull shadow-md rounded-lg p-6">
				<h2 className="text-lg font-semibold mb-4">Change password</h2>
				<form className="space-y-4">
					{/* Fält för email*/}
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-bold text-gray-700 my-2"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="Enter your email"
							className="w-full p-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-200"
						/>
					</div>
                    {/* Fält för nytt lösenord */}
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-bold text-gray-700 my-2"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							placeholder="New Password"
							className="w-full p-3 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-200"
						/>
					</div>
					{/* Uppdateringsknapp */}
					<div className="flex justify-end">
						<Button>Update</Button>
					</div>
				</form>
			</div>

			{/* Sektion: Radera konto */}
			<div className="bg-whiteFull shadow-md rounded-lg p-6">
				<h2 className="text-lg font-semibold text-red-600 mb-4">
					Delete account
				</h2>
				{/* Konsekvenserna av att radera kontot */}
				<p className="text-sm text-gray-600 mb-4">
					Are you sure you want to delete your account? Deleting your
					account is permanent and cannot be undone. All your data,
					including saved recipes, meal plans, and preferences, will
					be permanently removed and cannot be recovered.
				</p>
				{/* Knapp för att radera kontot*/}
				<div className="flex justify-end">
					<Button>Delete</Button>
				</div>
			</div>
		</div>
	);
}

export default AccountSettings;

function NotificationsSettings() {
	// Array av notifikationsinställningar, varje objekt innehåller label, beskrivning
	const notifications = [
		{
			label: "Email Notifications",
			description: "Receive updates and reminders directly to your inbox",
		},
		{
			label: "Weekly Meal Plan Reminders",
			description: "Never forget to plan your meals for the week",
		},
		{
			label: "New Recipe Alerts",
			description: "Be the first to know when new recipes are published",
		},
	];

	return (
		<div className="bg-whiteFull shadow-md rounded-lg p-6">
			<h2 className="text-xl font-semibold mb-6">Notifications</h2>
			{/* Lista som itererar igenom alla notifikationsinställningar */}
			<ul className="space-y-4">
				{notifications.map((notification) => (
					<li
						key={notification.label} // Varje li har en unik nyckel baserat på label för att säkerställa stabil rendering
						className="flex justify-between items-center border-b pb-4"
					>
						<div>
							{/* Rubrik för notifikationen */}
							<h3 className="text-md font-medium">
								{notification.label}
							</h3>
							{/* Beskrivning av notifikationen */}
							<p className="text-sm text-gray-600">
								{notification.description}
							</p>
						</div>
						{/* Växlingsknapp (toggle switch) */}
						<label className="relative inline-flex items-center cursor-pointer">
							{/* Osynlig checkbox som styr togglen */}
							<input type="checkbox" className="sr-only peer" />
							{/* Bakgrund på togglen: ändrar färg när checkbox är markerad */}
							<div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 peer-focus:ring-2 peer-focus:ring-green-300 transition-all"></div>
							{/* Den runda doten som flyttar sig när togglen är aktiverad */}
							<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}

export default NotificationsSettings;

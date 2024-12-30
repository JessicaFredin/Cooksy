function NotificationsSettings() {
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
			<ul className="space-y-4">
				{notifications.map((notification) => (
					<li
						key={notification.label}
						className="flex justify-between items-center border-b pb-4"
					>
						<div>
							<h3 className="text-md font-medium">
								{notification.label}
							</h3>
							<p className="text-sm text-gray-600">
								{notification.description}
							</p>
						</div>
						<label className="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" className="sr-only peer" />
							<div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 peer-focus:ring-2 peer-focus:ring-green-300 transition-all"></div>
							<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}

export default NotificationsSettings;

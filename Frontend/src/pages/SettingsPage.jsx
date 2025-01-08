import { useState } from "react";
import SettingsSidebar from "../components/SettingsSidebar";
import AccountSettings from "../components/AccountSettings";
import NotificationsSettings from "../components/NotificationsSettings";
import HeadingWithLine from "../components/HeadingWithLine";

function SettingsPage() {
	const [selectedSection, setSelectedSection] = useState("Account Settings");

	const renderContent = () => {
		switch (selectedSection) {
			case "Account Settings":
				return <AccountSettings />;
			case "Notifications":
				return <NotificationsSettings />;
			default:
				return <AccountSettings />;
		}
	};

	return (
		<div className="grid grid-cols-12 gap-4 py-8 mt-4">
			{/* Heading */}
			<div className="col-start-2 col-span-10 mb-4">
				<HeadingWithLine text="Settings" />
			</div>

			{/* Sidebar */}
			<div className="col-start-2 col-span-2">
				<SettingsSidebar
					selectedSection={selectedSection}
					setSelectedSection={setSelectedSection}
				/>
			</div>

			{/* Content */}
			<div className="col-start-4 col-span-8 ms-8">{renderContent()}</div>
		</div>
	);
}

export default SettingsPage;

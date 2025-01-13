import { useState } from "react";
import SettingsSidebar from "../components/SettingsSidebar";
import AccountSettings from "../components/AccountSettings";
import NotificationsSettings from "../components/NotificationsSettings";
import HeadingWithLine from "../components/HeadingWithLine";

function SettingsPage() {
	// State för att hålla reda på vilken sektion som är vald (standard är "Account Settings")
	const [selectedSection, setSelectedSection] = useState("Account Settings");
    // Funktion för att rendera rätt innehåll baserat på den valda sektionen
	const renderContent = () => {
		switch (selectedSection) {
			case "Account Settings":
				// Renderar komponenten för kontoinställningar
				return <AccountSettings />;
			case "Notifications":
				// Renderar komponenten för notifikationsinställningar
				return <NotificationsSettings />;
			default:
				// Om ingen sektion är vald, rendera "Account Settings" som standard
				return <AccountSettings />;
		}
	};

	return (
		<div className="grid grid-cols-12 gap-4 py-8 mt-4">
			{/* Rubrik */}
			<div className="col-start-2 col-span-10 mb-4">
				<HeadingWithLine text="Settings" />
			</div>

			{/* Sidebar */}
			<div className="col-start-2 col-span-2">
				<SettingsSidebar
					selectedSection={selectedSection} // Passerar den nuvarande valda sektionen till sidomenyn
					setSelectedSection={setSelectedSection} // Funktion för att uppdatera den valda sektionen
				/>
			</div>

			{/* Renderar innehåll baserat på vilken sektion som valts */}
			<div className="col-start-4 col-span-8 ms-8">{renderContent()}</div>
		</div>
	);
}

export default SettingsPage;

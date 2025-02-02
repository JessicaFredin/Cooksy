/* eslint-disable react/prop-types */
function SettingsSidebar({ selectedSection, setSelectedSection }) {
	// Lista över tillgängliga sektioner i sidomenyn
	const sections = ["Account Settings", "Notifications"];
 
	return (
		<div className="bg-whiteFull shadow-md rounded-lg border border-green-100 p-0">
			{/* Lista med navigeringsalternativ */}
			<ul className="space-y-4">
				{sections.map((section) => (
					<li
						key={section}
						className={`p-4 cursor-pointer rounded-lg text-black w-full ${
							selectedSection === section
								? "bg-green-100 text-black font-semibold rounded-lg"
							: "hover:bg-green-100/30"
						}`}
						onClick={() => setSelectedSection(section)}
					>
						{section} {/* Visar sektionens namn */}
					</li>
				))}
			</ul>
		</div>
	);
}

export default SettingsSidebar;

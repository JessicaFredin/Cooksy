// Funktion för att skapa initialer från förnamn och efternamn
function ProfileAvatar({ user, onClick }) {
	const getInitials = (firstName, lastName) => {
		 // Tar första bokstaven i förnamn och efternamn och sätter ihop dem som initialer
		const initials = `${firstName?.[0] || ""}${lastName?.[0] || ""}`;
		return initials.toUpperCase(); //initialer till versaler
	};
    // Funktion för att generera en bakgrundsfärg baserat på användarens namn
	const generateColor = (name) => {
		// Lista över möjliga bakgrundsfärger
		const colors = [
			"bg-red-500",
			"bg-blue-500",
			"bg-green-500",
			"bg-yellow-500",
		];
		// Beräknar en färgindex baserat på ASCII-värdet av den första bokstaven i namnet
		const index = name ? name.charCodeAt(0) % colors.length : 0;
		return colors[index]; // Returnerar färgen från listan
	};
    // Genererar en bakgrundsfärg baserat på användarens förnamn, eller en standardfärg om ingen finns
	const avatarColor = generateColor(user?.first_name || "U");
	
    // Returnerar en profilbild om en profilbilds-URL finns, annars en avatar med initialer
	return user?.profile_picture_url ? (
		<img
			src={import.meta.env.VITE_APP_BACKEND_URL + user.profile_picture_url} // Profilbildens URL konstrueras baserat på backend-URL och användarens `profile_picture_url`
			alt={`${user.first_name} ${user.last_name}`} // Alternativ text med användarens namn
			className="w-10 h-10 rounded-full cursor-pointer object-cover"
			onClick={onClick} // Anropar en klickfunktion om den skickats in
		/>
	) : (
		// Om ingen profilbilds-URL finns, visas en avatar med initialer
		<div
			onClick={onClick} // Anropar en klickfunktion om den skickats in
			className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${avatarColor} cursor-pointer`}
		>
			{getInitials(user?.first_name, user?.last_name)}
		</div>
	);
}

export default ProfileAvatar;

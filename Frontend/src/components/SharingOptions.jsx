/* eslint-disable react/prop-types */
// Komponent för att välja delningsalternativ (public eller private)
const SharingOptions = ({ selectedOption, onChange }) => {
	return (
		<div className="space-y-4">
			<label className="block font-bold text-lg">Sharing options</label>
			<label className="flex items-start space-x-3">
				{/* Radioknapp för "Public" */}
				<input
					type="radio" // Input-typ: radioknapp
					name="sharing" // Gruppnamn för radioknappar (endast ett kan väljas i en grupp)
					value="public" // Värdet som representerar alternativet "Public"
					checked={selectedOption === "public"}  // Kontrollera om detta alternativ är valt
					onChange={onChange} // Funktion som anropas när användaren väljer detta alternativ
					className="appearance-none w-4 h-4 rounded-full border-2 border-black/30 shadow-md checked:bg-pink-500 checked:border-black/30 focus:ring-0"
				/>
				<div>
					<span className="font-bold">Public</span> – Accessible for
					all visitors
				</div>
			</label>

			{/* Radioknapp för privat */}
			<label className="flex items-start space-x-3">
				<input
					type="radio"
					name="sharing"
					value="private"
					checked={selectedOption === "private"}
					onChange={onChange} // Funktion som anropas när användaren väljer detta alternativ
					className="appearance-none w-4 h-4 rounded-full border-2 border-black/30 shadow-md checked:bg-pink-500 checked:border-black/30 focus:ring-0"
				/>
				<div>
					<span className="font-bold">Private</span> – Not visible for
					others
				</div>
			</label>
		</div>
	);
};

export default SharingOptions;

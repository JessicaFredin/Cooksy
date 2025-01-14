/* eslint-disable react/prop-types */
import { useState } from "react";
// Komponenten tar emot props, placeholder, onSubmit, buttonText
function CommentInput({ placeholder, onSubmit, buttonText = "Send" }) {
	const [isFocused, setIsFocused] = useState(false);// Håller reda på om textrutan är fokuserad
	const [comment, setComment] = useState("");// Lagrar kommentaren som användaren skriver

	const handleSubmit = () => {
		if (comment.trim()) { // Kontrollera att kommentaren inte är tom eller bara innehåller mellanslag
			onSubmit(comment); // Anropar onSubmit-funktionen med kommentaren.
			setComment(""); // Rensar textrutan efter att kommentaren skickats
			setIsFocused(false); // Återställer fokusstatus
		}
	};

	return (
		<div className="flex flex-col space-y-2">
			{/* Textarea för att skriva en kommentar */}
			<textarea
				className={`transition-all duration-300 border w-full resize-none rounded-lg outline-none p-3 ${
					isFocused
						? "h-32 text-lg border-green-300"
						: "h-16 text-base border-gray-300"
				}`}
				placeholder={placeholder} // Placerar in text som visas när textrutan är tom
				value={comment} // Binder textrutan till `comment`-tillståndet
				onFocus={() => setIsFocused(true)}
				onBlur={() => !comment.trim() && setIsFocused(false)} // När användaren tappar fokus och kommentaren är tom
				onChange={(e) => setComment(e.target.value)} // Uppdaterar `comment`-tillståndet med användarens inmatning
			/>
			{/* Beskrivning och knappar */}
			<div className="flex justify-between items-start">
				<p className="text-sm text-gray-500 w-3/4">
					*Commenters are responsible for the content of their own
					comments. Please be respectful, use appropriate language,
					and follow applicable laws. For more information, see our
					Privacy Policy.
				</p>
				{/* Knappar för att skicka eller avbryta */}
				<div className="flex justify-end space-x-2">
					{/* Avbryt-knapp visas endast när textrutan är fokuserad */}
					{isFocused && (
						<button
							className="bg-green-200 text-gray-600 px-4 py-2 rounded-full hover:bg-green-400 transition-colors"
							onClick={() => {
								setComment(""); // Rensar textrutan
								setIsFocused(false); // Återställer fokusstatus
							}}
						>
							Cancel
						</button>
                    )}
                    {/* Skicka-knapp */}
					<button
						className={`px-4 py-2 rounded-full transition-colors ${
							isFocused
								? "bg-green-100 text-black hover:bg-green-400 cursor-pointer"
								: "bg-gray-200 text-black cursor-not-allowed"
						}`}
						onClick={isFocused ? handleSubmit : null} // Anropar `handleSubmit` endast om fokuserad
						disabled={!isFocused} // Knappen är inaktiverad om inte fokuserad
					>
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	);
}

export default CommentInput;

/* eslint-disable react/prop-types */
import { useState } from "react";
import CommentReply from "./CommentReply";
import { ThumbsUpIcon } from "../assets/icons/ThumbsUpIcon";
import { ThumbsDownIcon } from "../assets/icons/ThumbsDownIcon";
import axios from "axios";
//Tar emot comment och onReply som prop
const Comment = ({ comment, onReply }) => {
	// Lokala tillstånd för komponenten
	const [isReplying, setIsReplying] = useState(false); // Håller reda på om användaren är i reply-läge
	const [replyText, setReplyText] = useState(""); // Texten som skrivs in när användaren svarar
	const [likes, setLikes] = useState(comment.likes_count); // Antal likes för kommentaren
	const [dislikes, setDislikes] = useState(comment.dislikes_count); // Antal dislikes för kommentaren
	const [isVoting, setIsVoting] = useState(false); // Förhindra dubbelröstning

	// Funktion för att hantera röstning på kommentarer.
	const handleVote = async (voteType) => {
		if (isVoting) return; // Prevent multiple votes at the same time
		setIsVoting(true);

		try {
			// Skicka rösten till backend
			const response = await axios.post(
				`${import.meta.env.VITE_APP_BACKEND_URL}/comments/votes/${
					comment.comment_id
				}`,
				{ voteType },
				{ withCredentials: true }
			);

			// Extrahera uppdaterade gilla- och ogilla-markeringar från svaret
			const { likes: updatedLikes, dislikes: updatedDislikes } =
				response.data;

			// Uppdatera tillstånd med de nya värdena
			setLikes(updatedLikes);
			setDislikes(updatedDislikes);
		} catch (err) {
			console.error("Error handling vote:", err); 
		} finally {
			setIsVoting(false); // Tillåta röstning
		}
	};

	// Hanterar att skicka ett svar på kommentaren.
	const handleReplySubmit = () => {
		if (replyText.trim() === "") return; // Om texten är tom, gör ingenting
		onReply(comment.comment_id, replyText.trim()); // Anropar `onReply`-funktionen med kommentar-ID och text
		setReplyText(""); // Rensar textrutan
		setIsReplying(false); // Avslutar svarsläget
	};

	return (
		<div className="mb-6">
			{/* Kommentarens huvuddel */}
			<div className="flex items-start space-x-4">
				{/* Profilbild */}
				<div className="flex-shrink-0">
					<img
						src={
							comment.user_profile_picture_url
								? import.meta.env.VITE_APP_BACKEND_URL +
								  comment.user_profile_picture_url
								: `https://ui-avatars.com/api/?name=${comment.user_first_name}+${comment.user_last_name}`
						}
						alt={`${comment.user_first_name} ${comment.user_last_name}`}
						className="w-10 h-10 rounded-full"
					/>
				</div>
				{/* Kommentarens innehåll */}
				<div className="flex-1">
					<div className="flex justify-between items-start">
						<p className="font-bold">
							{/* Header med användarens namn och datum */}
							{comment.user_first_name} {comment.user_last_name}
						</p>
						<p className="text-sm text-gray-400">
							{new Date(comment.comment_created_at)
								.toLocaleString("sv-SE", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
									hour: "2-digit",
									minute: "2-digit",
									hour12: false,
								})
								.replace(" ", ", ")}
						</p>
					</div>
					{/* Kommentarens text */}
					<p>{comment.comment_content}</p>
					{/* Reaktionsknappar */}
					<div className="flex items-center space-x-4 mt-3">
						{/* Tummen upp */}
						<button
							onClick={() => handleVote(1)}
							className="flex items-center space-x-2 bg-gray-200 p-1 rounded-xl hover:bg-gray-500 transition"
						>
							<ThumbsUpIcon className="w-5 h-5 text-gray-700" />
							<span className="text-gray-700">{likes}</span>
						</button>

						{/* Tummen ner */}
						<button
							onClick={() => handleVote(-1)}
							className="flex items-center space-x-2 bg-gray-200 p-1 rounded-xl hover:bg-gray-500 transition"
						>
							<ThumbsDownIcon className="w-5 h-5 text-gray-700" />
							<span className="text-gray-700">{dislikes}</span>
						</button>
						{/* Svara-knapp */}
						<button
							className="bg-green-100 hover:bg-green-300 text-black rounded-full px-6 py-1"
							onClick={() => setIsReplying(!isReplying)}
						>
							Reply
						</button>
					</div>
					{/* Svar och input för svar */}
					<div className="mt-4 pl-6 border-l-2 border-green-300">
						{comment.replies.length > 0 &&
							comment.replies.map((reply) => (
								<CommentReply
									key={reply.reply_id}
									reply={reply}
								/>
							))}
					</div>

					{/* Svara-textfält */}
					{isReplying && (
						<div className="flex items-center mt-4 space-x-2">
							<textarea
								className="w-1/2 p-2 border border-gray-300 rounded-lg resize-none text-sm"
								placeholder="Write a reply..."
								style={{ height: "40px" }}
								value={replyText}
								onChange={(e) => setReplyText(e.target.value)}
							/>
							<button
								className="bg-green-100 hover:bg-green-300 text-black px-3 py-1 text-sm rounded-full"
								onClick={handleReplySubmit}
							>
								Send
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Comment;

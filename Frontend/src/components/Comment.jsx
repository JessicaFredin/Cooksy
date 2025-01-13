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
	const [isVoting, setIsVoting] = useState(false); // Prevent double voting

	  // Funktion för att hantera röstning på kommentarer.
	const handleVote = async (voteType) => {
		if (isVoting) return; // Förhindrar flera röstningar samtidigt
		setIsVoting(true);

		try {
			// Skickar en POST-förfrågan till backend för att hantera röstningen
			const response = await axios.post(
				`${import.meta.env.VITE_APP_BACKEND_URL}/comments/votes/${
					comment.comment_id
				}`,
				{ voteType },
				{ withCredentials: true }
			);

			if (voteType === 1) {
				// Hanterar logiken för likes
				if (response.data.message === "Vote removed") {
					// Förhindrar negativa värden
					setLikes(Math.max(likes - 1, 0));
				} else {
					setLikes(likes + 1); // Ökar likes
					setDislikes(dislikes - 1); // Reset dislike
				}
			} else if (voteType === -1) {
				if (response.data.message === "Vote removed") {
					// Prevent negative values
					setDislikes(Math.max(dislikes - 1, 0));
				} else {
					setDislikes(dislikes + 1); // Set dislike to 1
					setLikes(likes - 1); // Reset like
				}
			}
		} catch (err) {
			console.error("Error handling vote:", err);
		} finally {
			setIsVoting(false); // Allow voting again
		}
	};

	// Use the centralized onReply function
	const handleReplySubmit = () => {
		if (replyText.trim() === "") return;
		onReply(comment.comment_id, replyText.trim());
		setReplyText("");
		setIsReplying(false);
	};

	return (
		<div className="mb-6">
			<div className="flex items-start space-x-4">
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

				<div className="flex-1">
					<div className="flex justify-between items-start">
						<p className="font-bold">
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

					<p>{comment.comment_content}</p>

					<div className="flex items-center space-x-4 mt-3">
						{/* Thumbs Up Button */}
						<button
							onClick={() => handleVote(1)}
							className="flex items-center space-x-2 bg-gray-200 p-1 rounded-xl hover:bg-gray-500 transition"
						>
							<ThumbsUpIcon className="w-5 h-5 text-gray-700" />
							<span className="text-gray-700">{likes}</span>
						</button>

						{/* Thumbs Down Button */}
						<button
							onClick={() => handleVote(-1)}
							className="flex items-center space-x-2 bg-gray-200 p-1 rounded-xl hover:bg-gray-500 transition"
						>
							<ThumbsDownIcon className="w-5 h-5 text-gray-700" />
							<span className="text-gray-700">{dislikes}</span>
						</button>

						{/* Reply Button */}
						<button
							className="bg-green-100 hover:bg-green-300 text-black rounded-full px-6 py-1"
							onClick={() => setIsReplying(!isReplying)}
						>
							Reply
						</button>
					</div>

					{/* Replies Section */}
					<div className="mt-4 pl-6 border-l-2 border-green-300">
						{comment.replies.length > 0 &&
							comment.replies.map((reply) => (
								<CommentReply
									key={reply.reply_id}
									reply={reply}
								/>
							))}
					</div>

					{/* Reply Input */}
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

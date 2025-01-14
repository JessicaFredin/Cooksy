import { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import { useParams } from "react-router-dom";

function CommentSection() {
	// Hämta recipeId från URL-parametrarna
	const { id: recipeId } = useParams();
	// State-hantering för kommentarer, laddningsstatus och felhantering
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// Funktion för att hämta kommentarer från backend
	const fetchComments = async () => {
		try {
			const response = await axios.get(
				`${import.meta.env.VITE_APP_BACKEND_URL}/comments/${recipeId}` // Dynamisk endpoint baserad på recipeId
			);
			setComments(response.data); // Uppdaterar kommentarerna i state
			console.log(response.data);
		} catch (err) {
			console.error("Error fetching comments:", err);
			setError("Failed to load comments."); // Visa felmeddelande om något går fel
		} finally {
			setLoading(false);
		}
	};
	// Kör när komponenten mountas eller när recipeId ändras
	useEffect(() => {
		fetchComments();
	}, [recipeId]);
	// Funktion för att lägga till en ny kommentar
	const addComment = async (text) => {
		try {
			await axios.post(
				`${import.meta.env.VITE_APP_BACKEND_URL}/comments/${recipeId}`,
				{ content: text }, // Skicka innehållet i kommentaren
				{ withCredentials: true } // Skicka med användarens autentisering
			);

			// Hämtar kommentarer igen för att uppdatera listan
			fetchComments();
		} catch (err) {
			console.error("Error adding comment:", err);
			alert("You need to be logged in to comment.");
		}
	};

	// Funtion för att hantera avsar på en specifik kommentar
	const addReply = async (commentId, replyText) => {
		try {
			const response = await axios.post(
				`${
					import.meta.env.VITE_APP_BACKEND_URL
				}/comments/${commentId}/replies`,
				{ content: replyText },
				{ withCredentials: true }
			);

			// Uppdatera state med det nya svaret
			setComments((prevComments) =>
				prevComments.map((comment) =>
					comment.comment_id === commentId
						? {
								...comment,
								replies: [...comment.replies, response.data],
						  }
						: comment
				)
			);
		} catch (err) {
			console.error("Error adding reply:", err);
			alert("You need to be logged in to reply.");
		}
	};
	// Visa laddningsmeddelande tills data är hämtad
	if (loading) return <p>Loading comments...</p>;
	// Visa felmeddelande om något går fel
	if (error) return <p className="text-red-500">{error}</p>;

	return (
		<div className="grid grid-cols-12">
			<div className="col-start-2 col-span-9 p-4">
				{/* Titel*/}
				<h2 className="text-2xl font-bold">
					What’s Cooking in the Comments?
				</h2>
				{/* Inputfält för att skriva en ny kommentar */}
				<CommentInput
					placeholder="Write a comment..."
					onSubmit={addComment}
					buttonText="Send"
				/>
				{/* Lista över kommentarer */}
				<div className="mt-6">
					{comments.length === 0 ? (
						// Visa meddelande om inga kommentarer finns
						<p>No comments yet. Be the first to comment!</p>
					) : (
						// Mappa över kommentarer och rendera varje kommentar
						comments.map((comment) => (
							<Comment
								key={comment.comment_id} // Unik nyckel för varje kommentar
								comment={comment} // Skicka kommentaren som en prop
								onReply={addReply} // Passera addReply-funktionen för hantering av svar
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default CommentSection;

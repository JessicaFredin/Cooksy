import { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import { useParams } from "react-router-dom";

function CommentSection() {
	const { id: recipeId } = useParams();
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchComments = async () => {
		try {
			const response = await axios.get(
				`${import.meta.env.VITE_APP_BACKEND_URL}/comments/${recipeId}`
			);
			setComments(response.data);
		} catch (err) {
			console.error("Error fetching comments:", err);
			setError("Failed to load comments.");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchComments();
	}, [recipeId]);

	const addComment = async (text) => {
		try {
			await axios.post(
				`${import.meta.env.VITE_APP_BACKEND_URL}/comments/${recipeId}`,
				{ content: text },
				{ withCredentials: true }
			);

			// Re fetch comments
			fetchComments();
		} catch (err) {
			console.error("Error adding comment:", err);
			alert("You need to be logged in to comment.");
		}
	};

	// Centralized Reply Handler
	const addReply = async (commentId, replyText) => {
		try {
			const response = await axios.post(
				`${
					import.meta.env.VITE_APP_BACKEND_URL
				}/comments/${commentId}/replies`,
				{ content: replyText },
				{ withCredentials: true }
			);

			// Update comments state with the new reply
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

	if (loading) return <p>Loading comments...</p>;
	if (error) return <p className="text-red-500">{error}</p>;

	return (
		<div className="grid grid-cols-12">
			<div className="col-start-2 col-span-9 p-4">
				<h2 className="text-2xl font-bold">
					What’s Cooking in the Comments?
				</h2>
				<CommentInput
					placeholder="Write a comment..."
					onSubmit={addComment}
					buttonText="Send"
				/>

				<div className="mt-6">
					{comments.length === 0 ? (
						<p>No comments yet. Be the first to comment!</p>
					) : (
						comments.map((comment) => (
							<Comment
								key={comment.comment_id}
								comment={comment}
								onReply={addReply} // Pass the addReply function
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default CommentSection;

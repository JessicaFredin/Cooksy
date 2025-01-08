import { useState } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

function CommentSection() {
	const [comments, setComments] = useState([
		{
			id: 1,
			author: "Jessica Fredin",
			text: "So delicious! I will definitely make it again!",
			date: "2024-09-07",
			likes: 0,
			dislikes: 0,
			replies: [
				{
					id: 2,
					author: "Lisa Karlsson",
					text: "Thank you! And I am glad you liked it.",
					date: "2024-09-08",
				},
				{
					id: 3,
					author: "Maja Lamafreli",
					text: "I also loved it a lot! I will share it with all my friends and family.",
					date: "2024-10-24",
				},
			],
		},
		{
			id: 4,
			author: "Andrea Popse",
			text: "I loved it! Great recipe!",
			date: "2024-11-02",
			likes: 0,
			dislikes: 0,
			replies: [],
		},
	]);

	const addComment = (text) => {
		const newComment = {
			id: comments.length + 1,
			author: "Anonymous",
			text,
			date: new Date().toISOString().split("T")[0],
			likes: 0,
			dislikes: 0,
			replies: [],
		};
		setComments([...comments, newComment]);
	};

	const addReply = (commentId, replyText) => {
		setComments((prevComments) =>
			prevComments.map((comment) =>
				comment.id === commentId
					? {
							...comment,
							replies: [
								...comment.replies,
								{
									id: comment.replies.length + 1,
									author: "Anonymous",
									text: replyText,
									date: new Date()
										.toISOString()
										.split("T")[0],
								},
							],
					  }
					: comment
			)
		);
	};

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
					{comments.map((comment) => (
						<Comment
							key={comment.id}
							comment={comment}
							onReply={(replyText) =>
								addReply(comment.id, replyText)
							}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default CommentSection;

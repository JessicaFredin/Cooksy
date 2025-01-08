// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import CommentReply from "./CommentReply";
// import CommentInput from "./CommentInput";
// import { ThumbsUpIcon } from "../assets/icons/ThumbsUpIcon";
// import { ThumbsDownIcon } from "../assets/icons/ThumbsDownIcon";

// const Comment = ({ comment, onReply }) => {
// 	const [isReplying, setIsReplying] = useState(false);

// 	return (
// 		<div className="mb-6">
// 			<div className="flex items-start space-x-4">
// 				<div className="flex-shrink-0">
// 					<img
// 						src={`https://ui-avatars.com/api/?name=${comment.author}`}
// 						alt={comment.author}
// 						className="w-10 h-10 rounded-full"
// 					/>
// 				</div>
// 				<div className="flex-1">
// 					{/* Author and Date */}
// 					<div className="flex justify-between items-center">
// 						<p className="font-bold">{comment.author}</p>
// 						<p className="text-sm text-gray-400">{comment.date}</p>
// 					</div>
// 					{/* Comment Text */}
// 					<p className="mt-1">{comment.text}</p>
// 					{/* Interaction Buttons */}
// 					<div className="flex items-center space-x-4 mt-3">
// 						{/* Thumbs Up Button */}
// 						<button className="flex items-center space-x-2 bg-gray-200 p-1 rounded-xl hover:bg-gray-300 transition">
// 							<ThumbsUpIcon className="w-5 h-5 text-gray-700" />
// 							<span className="text-gray-700">
// 								{comment.likes}
// 							</span>
// 						</button>
// 						{/* Thumbs Down Button */}
// 						<button className="flex items-center space-x-2 bg-gray-200 p-1 rounded-xl hover:bg-gray-300 transition">
// 							<ThumbsDownIcon className="w-5 h-5 text-gray-700" />
// 							<span className="text-gray-700">
// 								{comment.dislikes}
// 							</span>
// 						</button>
// 						{/* Reply Button */}
// 						<button
// 							className="bg-green-100 hover:bg-green-300 text-black rounded-full px-6 py-1"
// 							onClick={() => setIsReplying(!isReplying)}
// 						>
// 							Reply
// 						</button>
// 					</div>
// 					{/* Reply Input */}
// 					{isReplying && (
// 						<div className="mt-4">
// 							{/* <CommentInput
// 								placeholder="Write a reply..."
// 								onSubmit={(replyText) => {
// 									onReply(replyText);
// 									setIsReplying(false); // Close the reply input after submission
// 								}}
// 							/> */}

// 							<CommentInput
// 								placeholder="Write a reply..."
// 								onSubmit={(replyText) => {
// 									onReply(replyText);
// 									setIsReplying(false); // Close the reply input after submission
// 								}}
// 								buttonText="Send"
// 								isReply={true} // Pass the isReply prop
// 							/>
// 						</div>
// 					)}
// 					{/* Replies Section */}
// 					<div className="mt-4 pl-6 border-l-2 border-green-300">
// 						{comment.replies.map((reply) => (
// 							<CommentReply key={reply.id} reply={reply} />
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Comment;


/* eslint-disable react/prop-types */
import { useState } from "react";
import CommentReply from "./CommentReply";
import CommentInput from "./CommentInput";
import { ThumbsUpIcon } from "../assets/icons/ThumbsUpIcon";
import { ThumbsDownIcon } from "../assets/icons/ThumbsDownIcon";

const Comment = ({ comment, onReply }) => {
	const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState("");

	return (
		<div className="mb-6">
			<div className="flex items-start space-x-4">
				<div className="flex-shrink-0">
					<img
						src={`https://ui-avatars.com/api/?name=${comment.author}`}
						alt={comment.author}
						className="w-10 h-10 rounded-full"
					/>
				</div>
				<div className="flex-1">
					<div className="flex justify-between items-start">
						<p className="font-bold">{comment.author}</p>
						<p className="text-sm text-gray-400">{comment.date}</p>
					</div>
					<p>{comment.text}</p>
					<div className="flex items-center space-x-4 mt-3">
						{/* Thumbs Up Button */}
						<button className="flex items-center space-x-2 bg-gray-200 p-1 rounded-xl hover:bg-gray-500 transition">
							<ThumbsUpIcon className="w-5 h-5 text-gray-700" />
							<span className="text-gray-700">
								{comment.likes}
							</span>
						</button>

						{/* Thumbs Down Button */}
						<button className="flex items-center space-x-2 bg-gray-200 p-1 rounded-xl hover:bg-gray-500 transition">
							<ThumbsDownIcon className="w-5 h-5 text-gray-700" />
							<span className="text-gray-700">
								{comment.dislikes}
							</span>
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
						{comment.replies.map((reply) => (
							<CommentReply key={reply.id} reply={reply} />
						))}
					</div>

					{/* Reply Input Below Replies */}
					{isReplying && (
						// <div className="mt-4">
						// 	<CommentInput
						// 		placeholder="Write a reply..."
						// 		onSubmit={(replyText) => {
						// 			onReply(replyText);
						// 			setIsReplying(false); // Close the reply input after submission
						// 		}}
						// 		buttonText="Send"
						// 		isReply={true} // Pass the isReply prop for styling
						// 	/>
						// </div>

						<div className="flex items-center mt-4 space-x-2">
							<textarea
								className="w-1/2 p-2 border border-gray-300 rounded-lg resize-none text-sm"
								placeholder="Write a reply..."
								style={{ height: "40px" }}
								value={replyText}
								onChange={(e) => setReplyText(e.target.value)} // Update state on change
							/>
							<button
								className="bg-green-100 hover:bg-green-300 text-black px-3 py-1 text-sm rounded-full"
								onClick={() => {
									if (replyText.trim()) {
										onReply(replyText); // Pass the reply text to the onReply handler
										setReplyText(""); // Clear the textarea after submission
										setIsReplying(false);
									}
								}}
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

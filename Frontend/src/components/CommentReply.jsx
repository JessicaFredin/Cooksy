/* eslint-disable react/prop-types */
function CommentReply({ reply }) {
	return (
		<div className="mb-4">
			<div className="flex items-start space-x-4">
				<div className="flex-shrink-0">
					<img
						src={`https://ui-avatars.com/api/?name=${reply.author}`}
						alt={reply.author}
						className="w-8 h-8 rounded-full"
					/>
				</div>
				<div className="flex-1">
					{/* Author and Date */}
					<div className="flex justify-between items-center">
						<p className="font-bold">{reply.author}</p>
						<p className="text-sm text-gray-400">{reply.date}</p>
					</div>
					{/* Reply Text */}
					<p className="mt-1">{reply.text}</p>
				</div>
			</div>
		</div>
	);
}

export default CommentReply;

/* eslint-disable react/prop-types */
import { useState } from "react";

function CommentInput({ placeholder, onSubmit, buttonText = "Send" }) {
	const [isFocused, setIsFocused] = useState(false);
	const [comment, setComment] = useState("");

	const handleSubmit = () => {
		if (comment.trim()) {
			onSubmit(comment);
			setComment(""); // Clear the input after submitting
			setIsFocused(false); // Reset focus state
		}
	};

	return (
		<div className="flex flex-col space-y-2">
			<textarea
				className={`transition-all duration-300 border w-full resize-none rounded-lg outline-none p-3 ${
					isFocused
						? "h-32 text-lg border-green-300"
						: "h-16 text-base border-gray-300"
				}`}
				placeholder={placeholder}
				value={comment}
				onFocus={() => setIsFocused(true)}
				onBlur={() => !comment.trim() && setIsFocused(false)}
				onChange={(e) => setComment(e.target.value)}
			/>
			<div className="flex justify-between items-start">
				<p className="text-sm text-gray-500 w-3/4">
					*Commenters are responsible for the content of their own
					comments. Please be respectful, use appropriate language,
					and follow applicable laws. For more information, see our
					Privacy Policy.
				</p>
				<div className="flex justify-end space-x-2">
					{isFocused && (
						<button
							className="bg-green-200 text-gray-600 px-4 py-2 rounded-full hover:bg-green-400 transition-colors"
							onClick={() => {
								setComment("");
								setIsFocused(false);
							}}
						>
							Cancel
						</button>
                    )}
                    
					<button
						className={`px-4 py-2 rounded-full transition-colors ${
							isFocused
								? "bg-green-100 text-black hover:bg-green-400 cursor-pointer"
								: "bg-gray-200 text-black cursor-not-allowed"
						}`}
						onClick={isFocused ? handleSubmit : null}
						disabled={!isFocused} // Disable button when not focused
					>
						{buttonText}
					</button>
				</div>
			</div>
		</div>
	);
}

export default CommentInput;

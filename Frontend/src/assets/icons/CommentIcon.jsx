

export function CommentIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="none"
				stroke="#333"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.1}
				d="M4.3 16.7a9 9 0 1 1 3 3L3 21z"
			></path>
		</svg>
	);
}



export function MeatIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 0 24 24"
			{...props}
		>
			<g
				fill="none"
				stroke="#333"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1}
			>
				<path d="m13.62 8.382l1.966-1.967A2 2 0 1 1 19 5a2 2 0 1 1-1.413 3.414l-1.82 1.821m-9.863 8.361c2.733 2.734 5.9 4 7.07 2.829c1.172-1.172-.094-4.338-2.828-7.071c-2.733-2.734-5.9-4-7.07-2.829c-1.172 1.172.094 4.338 2.828 7.071M7.5 16l1 1"></path>
				<path d="M12.975 21.425c3.905-3.906 4.855-9.288 2.121-12.021c-2.733-2.734-8.115-1.784-12.02 2.121"></path>
			</g>
		</svg>
	);
}

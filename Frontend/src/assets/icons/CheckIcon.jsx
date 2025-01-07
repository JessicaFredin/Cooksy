export function CheckIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5 text-green-500"
			fill="none"
			viewBox="0 0 24 24"
            stroke="currentColor"
            {...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M5 13l4 4L19 7"
			/>
		</svg>
	);
}

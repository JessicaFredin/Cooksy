export function DoneIcon(props) {
	return (
		<svg
			width="31"
			height="31"
			viewBox="0 0 31 31"
			fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
		>
			<rect
				x="0.939453"
				width="29.8174"
				height="30.75"
				fill="url(#pattern0_4958_14709)"
			/>
			<defs>
				<pattern
					id="pattern0_4958_14709"
					patternContentUnits="objectBoundingBox"
					width="1"
					height="1"
				>
					<use
						href="#image0_4958_14709"
						transform="matrix(0.0107425 0 0 0.0104167 -0.123064 0)"
					/>
				</pattern>
				<image
					id="image0_4958_14709"
					width="116"
					height="96"
					href="data:image/png;base64,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"
				/>
			</defs>
		</svg>
	);
}

/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react"

function CloseButton({ size = "md", color = "#333", onClick }) {
	const sizes = {
		sm: "w-4 h-4",
		md: "w-6 h-6",
		lg: "w-8 h-8",
	}
	return (
		<button
			onClick={onClick}
			className={`flex items-center justify-center ${sizes[size]} text-${color}-500 hover:text-${color}-700 z-50 bg-green-100 rounded-full w-[35px] h-[35px]`}
		>
			<Icon icon="ion:close" width="30" height="30" />
		</button>
	)
}

export default CloseButton
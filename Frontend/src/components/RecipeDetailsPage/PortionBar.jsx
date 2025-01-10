/* eslint-disable react/prop-types */
import { useState } from "react";

function PortionBar({ currentPortion, onPortionChange }) {
	const [count, setCount] = useState(currentPortion);

	return (
		<div className=" w-56 flex items-center justify-center bg-green-100 text-black rounded-xl py-1">
			<button
				onClick={() => {
					onPortionChange(count - 1);
					setCount(count - 1);
				}}
				className="bg-white text-3xl w-9 h-9 flex justify-center items-center rounded-xl"
			>
				–
			</button>
			<span className="mx-16 text-lg font-semibold">{count}</span>
			<button
				onClick={() => {
					onPortionChange(count + 1);
					setCount(count + 1);
				}}
				className="bg-white text-3xl w-9 h-9 flex justify-center items-center rounded-xl"
			>
				+
			</button>
		</div>
	);
}

export default PortionBar;

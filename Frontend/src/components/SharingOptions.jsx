/* eslint-disable react/prop-types */
const SharingOptions = ({ selectedOption, onChange }) => {
	return (
		<div className="space-y-4">
			<label className="block font-bold text-lg">Sharing options</label>
			<label className="flex items-start space-x-3">
				{/* Radioknapp för "Public" */}
				<input
					type="radio"
					name="sharing"
					value="public"
					checked={selectedOption === "public"}
					onChange={onChange}
					className="appearance-none w-4 h-4 rounded-full border-2 border-black/30 shadow-md checked:bg-pink-500 checked:border-black/30 focus:ring-0"
				/>
				<div>
					<span className="font-bold">Public</span> – Accessible for
					all visitors
				</div>
			</label>

			{/* Radioknapp för privat */}
			<label className="flex items-start space-x-3">
				<input
					type="radio"
					name="sharing"
					value="private"
					checked={selectedOption === "private"}
					onChange={onChange}
					className="appearance-none w-4 h-4 rounded-full border-2 border-black/30 shadow-md checked:bg-pink-500 checked:border-black/30 focus:ring-0"
				/>
				<div>
					<span className="font-bold">Private</span> – Not visible for
					others
				</div>
			</label>
		</div>
	);
};

export default SharingOptions;

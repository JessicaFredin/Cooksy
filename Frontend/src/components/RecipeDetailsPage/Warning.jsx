/* eslint-disable react/prop-types */
import { WarningIcon } from "../../assets/icons/WarningIcon";

function Warning({ title }) {
	return (
		<div className="flex items-center space-x-2">
			{/* <img className="w-8" src={WarningImg}/>*/}
			<span>
				<WarningIcon />
			</span>
			<h5 className="font-medium">{title}</h5>
		</div>
	);
}

export default Warning;

import { Link } from "react-router-dom";

//Tar emot props  bild, titel,
const MainIngredient = ({ title, image }) => {
	return (
		<Link to="/recipes">
			<div className="cursor-pointer">
				<img
					className="rounded-t-xl w-full h-52 object-cover"
					src={image}
				></img>
				<div className="shadow-lg px-3 py-4 md:text-sm rounded-xl xl:text-xl">
					<h3>{title}</h3>
				</div>
			</div>
		</Link>
	);
};

export default MainIngredient;

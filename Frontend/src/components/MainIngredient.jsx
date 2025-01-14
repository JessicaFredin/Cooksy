

//Tar emot props  bild, titel, beskrivning
const MainIngredient = ( {titel, image}) => {
	return (
		<div className="cursor-pointer">
			<img
        className="rounded-t-xl"
        src={image}
        ></img>
			<div className="shadow-lg px-3 py-4 md:text-sm rounded-xl xl:text-xl">
				<h3>{titel}</h3>
			</div>
		</div>
	);
};

export default MainIngredient;

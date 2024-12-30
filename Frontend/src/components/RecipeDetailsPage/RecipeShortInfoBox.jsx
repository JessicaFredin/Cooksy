import icon from "../../assets/images/CardImg.png"

function RecipeShortInfoBox({titel}) {
	return (
        <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center border-2 border-green-200 p-2 rounded-2xl">
                 <img className="w-10 md:w-7 lg:w-10" src={icon}/>
                 <h4 className="md:text-sm lg:text-lg">{titel}Chicken</h4>
		    </div>
            <div className="flex flex-col items-center justify-center border-2 border-green-200 p-2 rounded-2xl">
                 <img className="w-10 md:w-7 lg:w-10" src={icon}/>
                 <h4 className="md:text-sm lg:text-lg">{titel}Chicken</h4>
		    </div>
            <div className="flex flex-col items-center justify-center border-2 border-green-200 p-2 rounded-2xl">
                 <img className="w-10 md:w-7 lg:w-10" src={icon}/>
                 <h4 className="md:text-sm lg:text-lg">{titel}Chicken</h4>
		    </div>
        </div>

	);
}

export default RecipeShortInfoBox;
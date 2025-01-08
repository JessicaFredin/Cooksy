
const RecipeFolder = ({titel,color}) => {
    return(
        <div className={`h-96 bg-${color} w-full  rounded-lg shadow-lg flex justify-center items-center font-pacifico text-xl md:text-2xl lg:text-3xl px-4 text-center cursor-pointer`}>
            <h3>{titel}</h3>
        </div>
    )
}

export default RecipeFolder

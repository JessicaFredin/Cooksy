
//Tar emot img och title som prop
function CategoriesCard({img, title}) {

    return (
        <div className="group relative overflow-hidden rounded-lg ">
      {/* Bild */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {/* Text overlay */}
      <div className="absolute inset-0 flex items-end justify-center">
        <span className="text-lg font-semibold mb-4 bg-white py-1 px-10 rounded-full">
           {title}
        </span>
      </div>
    </div>
    );
}

export default CategoriesCard;
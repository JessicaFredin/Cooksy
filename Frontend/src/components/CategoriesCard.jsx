import { useState } from "react";

function CategoriesCard({img, title}) {

    return (
        <div className="group relative overflow-hidden rounded-lg h-[550px]">
      {/* Bilden */}
      <img
        src={img}
        alt="Low-Sugar"
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
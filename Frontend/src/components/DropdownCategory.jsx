import { useState } from "react";
import SelectButton from "./SelectButton";
    

const DropdownCategory = ({title, options}) =>{
const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2">
      {/* Kategori-knappen */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between px-4 py-2 bg-white border-2 border-pink-200 rounded-xl font-medium"
      >
        {title} 
        <span>▼</span>  
      </button>
      {/* Filtreringsalternativen */}
      {isOpen && (
          <div className="flex flex-wrap gap-4 px-2 py-4">
            {options.map((option, index) => (
              <SelectButton title={option} key={index}/>
            ))}
          </div>
        
      )}
    </div>
  );
};

export default DropdownCategory 
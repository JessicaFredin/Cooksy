import React, { useState } from "react";

const SelectButton = ({title}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`border-2 border-pink-200 rounded-xl cursor-pointer transition-all duration-300 
      ${isActive ? "bg-pink-200 text-white" : "bg-white hover:bg-pink-100 "}`}
    onClick={() => setIsActive(!isActive)}>
      <h3 className="flex items-center justify-center py-2 whitespace-nowrap">{title}</h3>
    </div>
  );
};

export default SelectButton;
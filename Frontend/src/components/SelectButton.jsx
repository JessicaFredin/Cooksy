import React, { useState } from "react";

const SelectButton = ({ image, title, description }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`border-2 border-pink-200 rounded-xl cursor-pointer transition-all duration-300 
      ${isActive ? "bg-pink-200 text-white" : "bg-white hover:bg-pink-100 "}`}
    onClick={() => setIsActive(!isActive)}>
      <h3 className="p-2 text-center ">Low-calorie</h3>
    </div>
  );
};

export default SelectButton;
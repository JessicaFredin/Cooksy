import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? 'bg-pink-500' : 'bg-zinc-200'
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
          isOn ? 'translate-x-8' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
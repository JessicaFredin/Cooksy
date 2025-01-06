import { useState } from "react";

function PortionBar() {
  
  const [count, setCount] = useState(2);

  return (
    <div className=" w-56 flex items-center justify-center bg-green-500 text-black rounded-xl py-1">
    <button
      onClick={() => setCount(count - 1)}
      className="bg-white text-3xl w-9 h-9 flex justify-center items-center rounded-xl"
    >
      –
    </button>
    <span className="mx-16 text-lg font-semibold">{count}</span>
    <button
      onClick={() => setCount(count + 1)}
      className="bg-white text-3xl w-9 h-9 flex justify-center items-center rounded-xl"
    >
      +
    </button>
  </div>
  );
}

export default PortionBar;
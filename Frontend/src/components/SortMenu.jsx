import React, { useState } from 'react';

const SortMenu = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Sort by:');

  const options = [
    'Popularity',
    'Alphabetically (a-z)',
    'Most viewed',
    'Trending',
    'Highest ranked',
    'Newest',
  ];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-300 text-black rounded-full px-4 md:px-6 py-2 flex items-center space-x-2"
      >
        <span>{selected}</span>
        <span>▼</span>
      </button>
      {open && (
        <ul className="absolute left-0 bg-white w-full shadow-lg rounded-md mt-2 z-20">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortMenu;
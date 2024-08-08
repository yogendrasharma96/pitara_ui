import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const ColorBar = ({data}) => {
  const [open, setOpen] = useState(false);
  

  const handleColorClick = () => {

  };

  return (
    <div className="bg-white rounded-lg">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center p-3 mb-4 border-b-2 border-gray-200 cursor-pointer"
      >
        <h4 className="font-medium text-gray-700">Colors</h4>
        <FontAwesomeIcon
          icon={open ? faArrowUp : faArrowDown}
          className="text-gray-500" />
      </div>
      {open && (
        <div className="flex flex-wrap gap-2">
          {data.map((color) => (
            <div
              key={color.code}
              onClick={() => handleColorClick(color.code)}
              className="w-7 h-7 rounded-full cursor-pointer border border-gray-300 hover:border-black transition duration-200 ease-in-out"
              style={{ backgroundColor: color.code }}
              title={color.label}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

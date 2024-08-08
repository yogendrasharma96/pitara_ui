import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
const SizeBar = ({data}) => {
    const [open, setOpen] = useState(false);
  

    const handleSizeClick = () => {
  
    };
    return (
        <div className="bg-white rounded-lg">
          <div
            onClick={() => setOpen(!open)}
            className="flex justify-between items-center p-3 mb-4 border-b-2 border-gray-200 cursor-pointer"
          >
            <h4 className="font-medium text-gray-700">Size</h4>
            <FontAwesomeIcon
              icon={open ? faArrowUp : faArrowDown}
              className="text-gray-500"
            />
          </div>
          {open && (
            <div className="flex flex-wrap gap-2">
              {data.map((size) => (
                <div
                  key={size.value}
                  onClick={() => handleSizeClick(size.value)}
                  className="p-1 w-10 h-10 flex items-center justify-center text-gray-700 text-sm font-medium cursor-pointer border border-gray-300 hover:border-black transition duration-200 ease-in-out rounded"
                >
                  {size.label}
                </div>
              ))}
            </div>
          )}
        </div>
      );
}

export default SizeBar;
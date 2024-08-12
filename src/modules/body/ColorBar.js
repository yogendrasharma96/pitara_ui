import React, { useState } from 'react';
import HeaderFilter from './HeaderFilter';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../redux/addFilterSlice';

export const ColorBar = ({ data }) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const currVal = useSelector((store) => store.addFilters);

  const handleColorClick = (color) => {
    dispatch(addFilter({ color: color }));
  };

  return (
    <div className="bg-white rounded-lg mb-6">
      <HeaderFilter open={open} setOpen={setOpen} title="Color" />
      {open && (
        <div className="flex flex-wrap gap-2">
          {data.map((color) => (
            <div
              key={color.code}
              onClick={() => handleColorClick(color)}
              className={`w-7 h-7 rounded-full cursor-pointer transition duration-200 ease-in-out
                ${currVal.filter(x => x.hasOwnProperty('color')).find((c) => c['color']['code'] === color.code)
                  ? 'border-black border-4'
                  : 'border border-gray-300 hover:border-black'
                }`}
              style={{ backgroundColor: color.code }}
              title={color.label}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

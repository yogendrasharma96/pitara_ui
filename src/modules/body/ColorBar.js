import React, { useState } from 'react';
import HeaderFilter from './HeaderFilter';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../redux/addFilterSlice';

export const ColorBar = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch();
  const currVal = useSelector((store) => store.addFilters);

  const handleColorClick = (color) => {
    const currentColor = currVal['color'] || [];
    let updatedColor;

    if (currentColor.find((c) => c.code === color.code)) {
      // Remove the color if it's already selected
      updatedColor = currentColor.filter((c) => c.code !== color.code);
    } else {
      // Otherwise, add the color to the selection
      updatedColor = [...currentColor, color];
    }

    dispatch(addFilter({ color: updatedColor }));
  };

  return (
    <div className="bg-white rounded-lg">
      <HeaderFilter open={open} setOpen={setOpen} title="Color" />
      {open && (
        <div className="flex flex-wrap gap-2">
          {data.map((color) => (
            <div
              key={color.code}
              onClick={() => handleColorClick(color)}
              className={`w-7 h-7 rounded-full cursor-pointer transition duration-200 ease-in-out
                ${currVal.color?.find((c) => c.code === color.code)
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

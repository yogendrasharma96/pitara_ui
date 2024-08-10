import React, { useState } from 'react';
import HeaderFilter from './HeaderFilter';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../redux/addFilterSlice';

const CommonBar = ({ data, title }) => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch();
  const currVal = useSelector((store) => store.addFilters);

  const handleClick = (x) => {
    const key = title.toLowerCase();
    const existingFilter = currVal[key] || [];

    let updatedFilter;
    let updatedSelectedItems;

    if (selectedItems.includes(x.value)) {
      // If the item is already selected, remove it
      updatedFilter = existingFilter.filter(item => item.value !== x.value);
      updatedSelectedItems = selectedItems.filter(item => item !== x.value);
    } else {
      // Otherwise, add it to the selected items
      updatedFilter = [...existingFilter, x];
      updatedSelectedItems = [...selectedItems, x.value];
    }

    setSelectedItems(updatedSelectedItems);
    dispatch(addFilter({ [key]: updatedFilter }));
  };

  return (
    <div className="bg-white rounded-lg">
      <HeaderFilter open={open} setOpen={setOpen} title={title} />
      {open && (
        <div className="flex flex-wrap gap-2">
          {data.map((x) => (
            <div
              key={x.value}
              onClick={() => handleClick(x)}
              className={`p-1 flex items-center justify-center text-sm font-medium cursor-pointer border transition duration-200 ease-in-out rounded min-w-[2.5rem] 
                ${selectedItems.includes(x.value) ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:border-black'}`}
              style={{ padding: '0.5rem 1rem' }}
            >
              {x.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonBar;
import React, { useEffect, useState } from 'react';
import HeaderFilter from './HeaderFilter';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter } from '../redux/addFilterSlice';

const CommonBar = ({ data, title }) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const key = title.toLowerCase();
  const currVal = useSelector((store) => store.addFilters);

  const selectedItems = currVal
    .filter(filter => filter[key])
    .map(filter => filter[key]?.value);

  const handleClick = (x) => {
    if (selectedItems.includes(x.value)) {
      const existingFilterIndex = currVal.findIndex(filter => filter[key]?.['value'] === x.value);
      dispatch(removeFilter(existingFilterIndex));
    } else {
      dispatch(addFilter({ [key]: x }));
    }
  };

  return (
    <div className="bg-white rounded-lg mb-6">
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
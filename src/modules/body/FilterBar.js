import React, { useEffect, useState } from 'react';
import { ColorBar } from './ColorBar';
import { getProductConfigApi } from '../utils/apis';
import CommonBar from './CommonBar';
import PriceRangeSlider from './PriceRangeSlider';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { removeFilter, resetFilter } from '../redux/addFilterSlice';

const FilterBar = () => {
  const [configData, setConfigData] = useState(null);
  const [filterVal, setFilterVal] = useState([]);
  const dispatch = useDispatch();
  const currVal = useSelector((store) => store.addFilters);
  useEffect(() => {
    async function fetchData() {
      const response = await getProductConfigApi();
      setConfigData(response.message[0]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const extractedFilterValues = currVal.map(x => {
      const val = Object.values(x)[0];
      return typeof val === 'object' ? val['label'] : val;
    });
    setFilterVal(extractedFilterValues);
  }, [currVal]);

  const handleRemove = (index) => {
    dispatch(removeFilter(index));
  };

  if (!configData) return null;

  return (
    <div className="max-h-screen overflow-y-auto px-7 rounded-lg">
      <div className='flex items-center justify-between mb-4'>
        <h3 className="font-bold text-lg">Filters</h3>
        <button
          onClick={() => dispatch(resetFilter())}
          className='text-sm font-semibold text-red-500 border-0 hover:text-red-700 transition duration-200 ease-in-out rounded px-3 py-1'
        >
          Reset Filters
        </button>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {filterVal.map((val, index) => (
          <div key={index} className="flex items-center bg-gray-200 px-2 py-1 rounded">
            <span>{val}</span>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => handleRemove(index)}
              className="ml-2 cursor-pointer text-gray-500 hover:text-red-500"
            />
          </div>
        ))}
      </div>
      <div>
        <PriceRangeSlider min={1000} max={20000} step={500} />
        <ColorBar data={configData.color} />
        <CommonBar data={configData.size} title={'Size'} />
        <CommonBar data={configData.fabric} title={'Fabric'} />
        <CommonBar data={configData.occasion} title={'Occasion'} />
        <CommonBar data={configData.pattern} title={'Pattern'} />
      </div>
    </div>
  );
};

export default FilterBar;

import React, { useEffect, useState } from 'react'
import { ColorBar } from './ColorBar';
import { getProductConfigApi } from '../utils/apis';
import CommonBar from './CommonBar';
import PriceRangeSlider from './PriceRangeSlider';

const FilterBar = () => {
  const [configData, setconfigData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const response = await getProductConfigApi();
      setconfigData(response.message[0]);
    }
    fetchData();
  }, []);

  if (!configData) return;
  return (
    <div>
      <div>
      <h3 className='font-bold text-lg'>Filters</h3>
      {}
      </div>
      <div>
      <PriceRangeSlider min={1000} max={20000} step={500} />
      <ColorBar data={configData.color} />
      <CommonBar data={configData.size} title={'Size'}/>
      <CommonBar data={configData.fabric} title={'Fabric'} />
      <CommonBar data={configData.occasion} title={'Occasion'} />
      <CommonBar data={configData.pattern} title={'Pattern'} />
      </div>
    </div>
  )
}

export default FilterBar;
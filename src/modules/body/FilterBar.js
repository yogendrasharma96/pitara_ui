
import React, { useEffect, useState } from 'react'
import { ColorBar } from './ColorBar';
import { getProductConfigApi } from '../utils/apis';
import SizeBar from './SizeBar';

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
      <ColorBar data={configData.color} />
      <SizeBar data={configData.size} />

    </div>
  )
}

export default FilterBar;
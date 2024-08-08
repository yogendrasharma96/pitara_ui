import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { getProductApi } from '../utils/apis';
import FilterBar from './FilterBar';

const EditProduct = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    const result = await getProductApi({
      "productCategory": null,
      "productTags": null,
      "productSize": null,
      "productColor": null,
      "minProductPrice": 0,
      "maxProductPrice": 1000,
      "pageNo": 0
    });
    if (result.success) {
      console.log(result);
      setProduct(result.message);
    }
  }

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2'>
        <FilterBar />
      </div>
      <div className='col-span-10'>
        {
          product.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <div className='grid grid-cols-4 gap-4'>
          {product.map((val) => (
            <ProductCard key={val.id} product={val} />
          ))}
        </div>
          )
        }
      </div>
    </div>
  );
}

export default EditProduct;
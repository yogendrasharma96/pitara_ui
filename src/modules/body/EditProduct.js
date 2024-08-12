import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { getProductApi } from '../utils/apis';
import FilterBar from './FilterBar';
import { useSelector } from 'react-redux';

const EditProduct = () => {

  const [product, setProduct] = useState([]);
  const currVal = useSelector((store) => store.addFilters);

  useEffect(() => {
    getProductData();
  }, [currVal]);

  const getProductData = async () => {

    let productFilter={
      productSize:[],
      productOccasion:[],
      productFabric:[],
      productColor:[],
      productPattern:[],
      productPrice:null,
      pageNo: 0
    }

    currVal.forEach(x => {
      if (x.size) {
        productFilter.productSize.push(x.size.value);
      }
      if (x.occasion) {
        productFilter.productOccasion.push(x.occasion.value);
      }
      if (x.fabric) {
        productFilter.productFabric.push(x.fabric.value);
      }
      if (x.color) {
        productFilter.productColor.push(x.color.value);
      }
      if (x.pattern) {
        productFilter.productPattern.push(x.pattern.value);
      }
      if (x.price) {
        productFilter.productPrice = x.price;
      }
    });

    const result = await getProductApi(productFilter);
    if (result.success) {
      setProduct(result.message);
    }
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <FilterBar />
      </div>
      <div className="col-span-9">
        {product.length === 0 ? (
          <div className='bg-gray-200 min-h-screen py-[24%] text-center text-2xl font-bold text-red-500'> 
          <p>
            No Product Found
          </p>
            </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {product.map((val) => (
              <div key={val.id} className="mb-12">
                <ProductCard product={val} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default EditProduct;
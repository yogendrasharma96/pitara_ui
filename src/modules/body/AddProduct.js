import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../components/Editor';
import SelectBox from '../components/SelectBox';
import TagSelectBox from '../components/TagSelectBox';
import { colourOptions } from '../utils/constants';
import TextBox from '../components/TextBox';
import SubType from '../body/ProductDetails';
import { v4 as uuidv4 } from 'uuid'; 
import { addProductSubArray } from '../redux/addProductSlice';

const AddProduct = () => {
  const [subTypeData, setSubTypeData] = useState([{ id: uuidv4() }]);

  const dispatch=useDispatch();

  const product = useSelector((store) => store.addProducts);

  const handleAddSubTypes = () => {
    setSubTypeData([...subTypeData, { id: uuidv4() }]);
    dispatch(addProductSubArray());
  };

  const handleRemove = (index) => {
    const list = subTypeData.filter((_, i) => i !== index);
    setSubTypeData(list);
  };

   const handleSubmit = () => {
    console.log(product.productName);
    console.log(product.productDescription);
    console.log(product.productCategory);
    console.log(product.productTags);
    console.log(product.productDetails);
  }

  return (
    <div>
      <div className='m-6'>
        <div className='mb-6'>
          <h3 className='font-semibold mb-3'>Product Title</h3>
          <TextBox
            placeholder='Product Name'
            type='text'
            css='rounded-md p-2 w-1/3 border border-solid border-gray-400 font-serif font-normal'
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-3'>Product Description</h3>
          <Editor css='w-2/3 border border-solid border-gray-400 rounded-md' />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-3'>Category</h3>
          <SelectBox
            type='category'
            css='basic-single w-1/3 border border-solid border-gray-400 rounded-md'
            placeholder='Categories...'
            option={colourOptions}
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-3'>Add Tags</h3>
          <TagSelectBox css='basic-single w-1/3 border border-solid border-gray-400 rounded-md' />
        </div>
        <div className='mb-6'>
          {subTypeData.map((data, index) => (
            <div key={data.id} className='flex'>
              <SubType id={data.id} />
              <div className='ml-8 mt-2'>
                <button className='p-2 cursor-pointer mt-6' onClick={handleAddSubTypes}>
                  ➕
                </button>
                {index !== 0 && (
                  <button className='p-2 cursor-pointer mt-6' onClick={() => handleRemove(index)}>
                    ➖
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddProduct;

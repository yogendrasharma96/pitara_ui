import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../components/Editor';
import SelectBox from '../components/SelectBox';
import TagSelectBox from '../components/TagSelectBox';
import { colourOptions } from '../utils/constants';
import TextBox from '../components/TextBox';
import SubType from '../body/ProductDetails';
import { v4 as uuidv4 } from 'uuid';
import { addFirstProductId, addProductSubArray, removeProductSubArray } from '../redux/addProductSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleFormSubmit } from '../utils/validation';

const AddProduct = () => {
  const [subTypeData, setSubTypeData] = useState([{ id: uuidv4() }]);

  const dispatch = useDispatch();

  const product = useSelector((store) => store.addProducts);
  useEffect(() => {
    dispatch(addFirstProductId(subTypeData[0].id));
  }, [dispatch, subTypeData]);



  const handleAddSubTypes = () => {
    const uuid = { id: uuidv4() };
    setSubTypeData([...subTypeData, uuid]);
    dispatch(addProductSubArray(uuid));
  };

  const handleRemove = (index) => {
    const list = subTypeData.filter((val) => val.id !== index);
    setSubTypeData(list);
    dispatch(removeProductSubArray(index));
  };

  const handleSubmit = () => {
    handleFormSubmit(product);
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
                {subTypeData.length - 1 === index && <button className='p-2 cursor-pointer mt-6' onClick={handleAddSubTypes}>
                  ➕
                </button>}
                {subTypeData.length !== 1 && (
                  <button className='p-2 cursor-pointer mt-6' onClick={() => handleRemove(data.id)}>
                    ➖
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mr-8 w-screen flex justify-end'>
        <button className='p-3 cursor-pointer text-amber-50 rounded-md bg-slate-500 mr-64' onClick={handleSubmit}>Submit</button>
        <ToastContainer
          // toastClassName={() => "relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-slate-700"}
          //   bodyClassName={() => "text-sm font-white font-med block p-3"} 
          style={{ marginTop: '55px' }} />
      </div>
    </div>
  );
};

export default AddProduct;

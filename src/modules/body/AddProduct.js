import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectBox from '../components/SelectBox';
import TagSelectBox from '../components/TagSelectBox';
import TextBox from '../components/TextBox';
import { removeProduct } from '../redux/addProductSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteData, handleFormSubmit, postData, updateData } from '../utils/validation';
import TextArea from '../components/TextArea';
import { getProductConfigApi } from '../utils/apis';
import SizeQuantityDialogBox from '../components/SizeQuantityDialogBox';
import ImageUpload from '../components/ImageUpload';

const AddProduct = () => {
  const [configData, setconfigData] = useState({});
  const [dialogBox, setDialogBox] = useState(false);

  const dispatch = useDispatch();

  const product = useSelector((store) => store.addProducts);
  useEffect(() => {
    async function fetchData() {
      const response = await getProductConfigApi();
      setconfigData(response.message[0]);
    }
    fetchData();
  }, []);


  const handleSubmit = () => {
    const status = handleFormSubmit(product);
    if (status) {
      if (product.id == null) {
        postData(product);
      } else {
        updateData(product);
      }
      dispatch(removeProduct());
    }

  }

  const handleDelete = () => {
    deleteData(product.id);
    dispatch(removeProduct());
  }

  return (
    <div className='ml-16 mt-6'>
      <div className='grid grid-cols-3'>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Product Title</h3>
          <TextBox
            placeholder='What will be the name of product ?'
            desc='name'
            type='text'
            css='rounded-md p-2 w-[65%] border border-solid border-gray-400 font-serif font-normal'
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Product Description</h3>
          <TextArea placeholder='What will be the description of this product ?'
            desc='description'
            css='rounded-md p-2 w-[65%] border border-solid border-gray-400 font-serif font-normal' />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Category</h3>
          <SelectBox
            isMulti={false}
            type='categories'
            css='w-[65%] border border-solid border-gray-400 rounded-md font-serif font-normal'
            placeholder='What will be the category of this product ?'
            option={configData.category}
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Add Tags</h3>
          <TagSelectBox css='rounded-md p-2 w-[65%] border border-solid border-gray-400 font-serif font-normal' />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Color</h3>
          <SelectBox
            isMulti={true}
            type='colors'
            css='w-[65%] border border-solid border-gray-400 rounded-md font-serif font-normal'
            placeholder='What is the color composition of this product ?'
            option={configData.color}
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Fabric</h3>
          <SelectBox
            isMulti={true}
            type='fabrics'
            css='w-[65%] border border-solid border-gray-400 rounded-md font-serif font-normal'
            placeholder='Choose fabric of cloth'
            option={configData.fabric}
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Pattern</h3>
          <SelectBox
            isMulti={true}
            type='patterns'
            css='w-[65%] border border-solid border-gray-400 rounded-md font-serif font-normal'
            placeholder='Choose patterns'
            option={configData.pattern}
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Occasion</h3>
          <SelectBox
            isMulti={true}
            type='occasion'
            css='w-[65%] border border-solid border-gray-400 rounded-md font-serif font-normal'
            placeholder='On which occasion would you drape this ?'
            option={configData.occasion}
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Blouse</h3>
          <SelectBox
            isMulti={false}
            type='blouse'
            css='w-[65%] border border-solid border-gray-400 rounded-md font-serif font-normal'
            placeholder='Do we have blouse piece for this Item ?'
            option={configData.isAvailable}
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>WashCare</h3>
          <SelectBox
            isMulti={true}
            type='washcare'
            css='w-[69%] border border-solid border-gray-400 rounded-md font-serif font-normal'
            placeholder='How do you wash these clothes ?'
            option={configData.washCare}
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Size With Color</h3>
          <button
            className='w-[65%] h-10 border border-solid border-gray-400 rounded-md font-serif font-normal'
            onClick={() => setDialogBox(true)}
          >Select Size With Color</button>
          {dialogBox && <SizeQuantityDialogBox onClose={setDialogBox} option={configData.size}></SizeQuantityDialogBox>}
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>MRP</h3>
          <TextBox
            placeholder='What will be the MRP of product ?'
            desc='mrp'
            type='number'
            css='rounded-md p-2 w-[65%] border border-solid border-gray-400 font-serif font-normal'
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Selling Price</h3>
          <TextBox
            placeholder='What will be the selling price of product ?'
            desc='sp'
            type='number'
            css='rounded-md p-2 w-[65%] border border-solid border-gray-400 font-serif font-normal'
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Shipping Days</h3>
          <TextBox
            placeholder='How many days it take to deliver like 2-7 ?'
            desc='ship'
            type='text'
            css='rounded-md p-2 w-[75%] border border-solid border-gray-400 font-serif font-normal'
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Sale</h3>
          <SelectBox
            isMulti={false}
            type='sale'
            css='w-[65%] border border-solid border-gray-400 rounded-md font-serif font-normal'
            placeholder='Is product available for sale ?'
            option={configData.isAvailable}
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Coupon Code</h3>
          <SelectBox
            isMulti={false}
            type='coupon'
            css='w-[65%] border border-solid border-gray-400 rounded-md font-serif font-normal'
            placeholder='Is coupon available to this product ?'
            option={configData.isAvailable}
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Returnable</h3>
          <SelectBox
            isMulti={false}
            type='return'
            css='w-[65%] border border-solid border-gray-400 rounded-md font-serif font-normal'
            placeholder='Is this product returnable?'
            option={configData.isAvailable}
          />
        </div>
        <div className='mb-6'>
          <h3 className='font-semibold mb-1'>Product images</h3>
          <ImageUpload />
        </div>
      </div>
      <div className='flex justify-end w-[80%]'>
        {product.id && <button className='p-3 cursor-pointer text-amber-50 rounded-md bg-red-500 mx-2' onClick={handleDelete}>Delete</button>}
        <button className='p-3 cursor-pointer text-amber-50 rounded-md bg-slate-500' onClick={handleSubmit}>Submit</button>
        <ToastContainer
          // toastClassName={() => "relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-slate-700"}
          //   bodyClassName={() => "text-sm font-white font-med block p-3"} 
          style={{ marginTop: '55px' }} />
      </div>
    </div>
  );
};

export default AddProduct;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProduct } from '../redux/addProductSlice';

const ProductCard = ({ product }) => {
  const images = product?.productImages;
  const [showImage,setShowImage]=useState(images[0])
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editProduct = () => {

    dispatch(updateProduct(product));
    navigate('/add');

  }

  return (
    <div className='bg-gray-400 h-96 mb-8'>
     <img className="w-full h-96" src={showImage} onMouseOver={()=>setShowImage(images[1])} onMouseOut={()=>setShowImage(images[0])} onClick={editProduct} alt={'Loading'} />
     <div className='p-2 flex flex-col items-center font-normal'>
      <span >{product.productName}</span>
      <span className={product.productSP? 'line-through':''}>Rs. {product.productMrp}</span>
      {product.productSP && <span >Rs. {product.productSP}</span>}
     </div>
    </div>
  );
};


export default ProductCard;
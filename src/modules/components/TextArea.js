import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/addProductSlice';
import { useEffect } from 'react';

const TextArea = ({ css, placeholder, desc }) => {
  const [val, setVal] = useState('');
  const dispatch = useDispatch();
  const currVal = useSelector(store => store.addProducts);

  useEffect(() => {
    if (desc === 'description') {
      setVal(currVal.productDescription || '');
    }
  }, [currVal, placeholder]);
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (desc === 'description') {
      dispatch(addProduct({ productDescription: value }));
      setVal(value);
    }
  };
  return (
    <textarea className={css} placeholder={placeholder} onChange={handleInputChange} value={val || ''}></textarea>
  )
}

export default TextArea;
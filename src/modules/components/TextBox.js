import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/addProductSlice';

const TextBox = ({ css, placeholder, type, desc }) => {

  const dispatch = useDispatch();
  const [val, setVal] = useState('');

  const currVal = useSelector(store => store.addProducts);

  useEffect(() => {
    if (desc === 'name') {
      setVal(currVal.productName || '');
    }
    else if (desc === 'mrp') {
      setVal(currVal.productMrp || '');
    }
    else if (desc === 'sp') {
      setVal(currVal.productSP || '');
    }
    else if (desc === 'ship') {
      setVal(currVal.productShippingDays || '');
    }
  }, [currVal, desc]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (desc === 'name') {
      dispatch(addProduct({ productName: value }));
      setVal(value);
    }
    else if (desc === 'mrp') {
      dispatch(addProduct({ productMrp: value }));
      setVal(value);
    }
    else if (desc === 'sp') {
      dispatch(addProduct({ productSP: value }));
      setVal(value);
    }
    else if (desc === 'ship') {
      dispatch(addProduct({ productShippingDays: value }));
      setVal(value);
    }
  };

  return (
    <input className={css} placeholder={placeholder} type={type} onChange={handleInputChange} value={val || ''}></input>
  )
}

export default TextBox;
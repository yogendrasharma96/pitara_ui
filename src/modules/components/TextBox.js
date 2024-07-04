import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductDetails, addProductName } from '../redux/addProductSlice';

const TextBox = ({ uuid, css, placeholder, type }) => {

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (placeholder === 'Product Name')
      dispatch(addProductName(e.target.value));
    else if (placeholder === 'Quantity...')
      dispatch(addProductDetails({ id: uuid, productQuantity: parseInt(e.target.value) }));
    else if (placeholder === 'Price...')
      dispatch(addProductDetails({ id: uuid, productPrice: parseFloat(e.target.value) }));
    else if (placeholder === 'Discount...')
      dispatch(addProductDetails({ id: uuid, productDiscount: parseFloat(e.target.value) }));

  }

  return (
    <input className={css} placeholder={placeholder} type={type} onChange={handleInputChange}></input>
  )
}

export default TextBox;
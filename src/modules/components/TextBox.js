import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductName } from '../redux/addProductSlice';

const TextBox = ({ css, placeholder, type }) => {

  const dispatch=useDispatch();

  const handleInputChange = (e) => {
      dispatch(addProductName(e.target.value));
  }

  return (
    <input className={css} placeholder={placeholder} type={type} onChange={handleInputChange}></input>
  )
}

export default TextBox;
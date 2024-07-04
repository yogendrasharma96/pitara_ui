import React from 'react'
import Select from 'react-select';
import { customStyles } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addProductCat, addProductDetails } from '../redux/addProductSlice';

const SelectBox = ({uuid, css, placeholder, option }) => {

  const dispatch = useDispatch();

  const handleSelect = (e) => {
    if (uuid) {
      dispatch(addProductDetails({ id: uuid, productSize: e.value }));
    } else {
      dispatch(addProductCat(e.value));
    }

  }

  return (
    <Select
      className={css}
      placeholder={placeholder}
      classNamePrefix="select"
      styles={customStyles}
      options={option}
      onChange={handleSelect}
    />
  )
}

export default SelectBox;
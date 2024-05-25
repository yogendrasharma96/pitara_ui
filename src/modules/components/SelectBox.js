import React from 'react'
import Select from 'react-select';
import { customStyles } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addProductCat, addProductSize } from '../redux/addProductSlice';

const SelectBox = (props) => {

  const dispatch = useDispatch();

  const handleSelect = (e) => {
    if(props.type==='category')
    dispatch(addProductCat(e));
    if(props.type==='size')
    dispatch(addProductSize(e));

  }

  return (
    <Select
      className={props.css}
      placeholder={props.placeholder}
      classNamePrefix="select"
      styles={customStyles}
      options={props.option}
      onChange={handleSelect}
    />
  )
}

export default SelectBox;
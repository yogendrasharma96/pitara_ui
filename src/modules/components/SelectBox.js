import React from 'react'
import Select from 'react-select';
import { customStyles } from '../utils/constants';

const SelectBox = (props) => {
    
  return (
    <Select
        className={props.css}
        placeholder={props.placeholder}
        classNamePrefix="select"
        styles={customStyles}
        options={props.option}
      />
  )
}

export default SelectBox;
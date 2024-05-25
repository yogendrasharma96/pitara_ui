import React from 'react'
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { colourOptions, customStyles } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addProductTags } from '../redux/addProductSlice';

const TagSelectBox = (props) => {

  const dispatch = useDispatch();

  const handleSelect = (e) => {
    dispatch(addProductTags(e));
  }
  

  const animatedComponents = makeAnimated();
  return (
    <CreatableSelect
      closeMenuOnSelect={false}
      components={animatedComponents}
      // defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
      styles={customStyles}
      placeholder='Tags...'
      className={props.css}
      onChange={handleSelect}
    />
  )
}

export default TagSelectBox;
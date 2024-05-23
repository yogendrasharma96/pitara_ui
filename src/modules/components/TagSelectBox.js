import React from 'react'
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { colourOptions, customStyles } from '../utils/constants';

const TagSelectBox = (props) => {
  

  const animatedComponents = makeAnimated();
  return (
    <CreatableSelect
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
      styles={customStyles}
      placeholder='Tags...'
      className={props.css}
    />
  )
}

export default TagSelectBox;
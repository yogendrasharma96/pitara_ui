import React from 'react';

const TextBox = ({ css, placeholder, type }) => {
  return (
    <input className={css} placeholder={placeholder} type={type}></input>
  )
}

export default TextBox;
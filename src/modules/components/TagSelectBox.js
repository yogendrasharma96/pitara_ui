import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addProductTags } from '../redux/addProductSlice';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TagSelectBox = (props) => {

  const dispatch = useDispatch();

  const currVal = useSelector((store) => store.addProducts);
  const [val, setVal] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(currVal.productTags || []);
  }, [currVal.productTags]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && val.trim()) {
      const newTags = [...tags, val.trim()];
      dispatch(addProduct({ productTags: newTags }));
      setTags(newTags);
      setVal('');
    }
  };

  const onTagRemove = (index) => {
    const newTags = tags.filter((_, id) => id !== index);
    setTags(newTags);
    dispatch(addProduct({ productTags: newTags }));
  }


  return (
    <div className='flex flex-wrap items-center space-x-2'>
      {tags.length >= 1 && tags.map((x, index) => (
        <div key={index} className='flex items-center bg-gray-200 text-gray-800 rounded px-2 py-1 mx-1'>
          <span className='font-bold'>{x}</span>
          <button
            className='ml-2 text-red-500 hover:text-red-700'
            onClick={() => onTagRemove(index)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      ))}
      <input
        type='text'
        placeholder='Press Enter to add Tags...'
        className={`${props.css}`}
        onKeyDown={handleKeyDown}
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />
    </div>

  )
}

export default TagSelectBox;
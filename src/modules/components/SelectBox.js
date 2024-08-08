import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { customStyles } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, } from '../redux/addProductSlice';

const SelectBox = ({ isMulti, css, placeholder, option, type }) => {

  const dispatch = useDispatch();

  const [val, setVal] = useState();

  const currVal = useSelector(store => store.addProducts);
  useEffect(() => {
    switch (type) {
      case 'colors':
        setVal(option?.filter(opt => currVal.productColor?.includes(opt.value)) || []);
        break;
      case 'categories':
        setVal(option?.find(opt => opt.value === currVal.productCategory) || null);
        break;
      case 'fabrics':
        setVal(option?.filter(opt => currVal.productFabric?.includes(opt.value)) || []);
        break;
      case 'patterns':
        setVal(option?.filter(opt => currVal.productPattern?.includes(opt.value)) || []);
        break;
      case 'size':
        setVal(option?.filter(opt => currVal.productSize?.includes(opt.value)) || []);
        break;
      case 'occasion':
        setVal(option?.filter(opt => currVal.productOccasion?.includes(opt.value)) || []);
        break;
      case 'blouse':
        setVal(option?.find(opt => opt.value === currVal.productBlouse) || null);
        break;
      case 'washcare':
        setVal(option?.filter(opt => currVal.productWashCare?.includes(opt.value)) || []);
        break;
      case 'coupon':
        setVal(option?.filter(opt => currVal.productCoupon?.includes(opt.value)) || []);
        break;
      case 'sale':
        setVal(option?.filter(opt => currVal.productSale?.includes(opt.value)) || []);
        break;
      case 'return':
        setVal(option?.filter(opt => currVal.productReturn?.includes(opt.value)) || []);
        break;
      default:
        break;
    }

  }, [currVal, type, option]);

  const handleSelect = (e) => {
    const selectedValues = isMulti ? e.map(opt => opt.value) : e.value;

    switch (type) {
      case 'colors':
        dispatch(addProduct({ productColor: selectedValues }));
        break;
      case 'categories':
        dispatch(addProduct({ productCategory: selectedValues }));
        break;
      case 'fabrics':
        dispatch(addProduct({ productFabric: selectedValues }));
        break;
      case 'patterns':
        dispatch(addProduct({ productPattern: selectedValues }));
        break;
      case 'size':
        dispatch(addProduct({ productSize: selectedValues }));
        break;
      case 'occasion':
        dispatch(addProduct({ productOccasion: selectedValues }));
        break;
      case 'blouse':
        dispatch(addProduct({ productBlouse: selectedValues }));
        break;
      case 'washcare':
        dispatch(addProduct({ productWashCare: selectedValues }));
        break;
      case 'coupon':
        dispatch(addProduct({ productCoupon: selectedValues }));
        break;
      case 'sale':
        dispatch(addProduct({ productSale: selectedValues }));
        break;
      case 'return':
        dispatch(addProduct({ productReturn: selectedValues }));
        break;
      default:
        break;
    }
  }

  return (
    <Select
      className={css}
      isMulti={isMulti}
      placeholder={placeholder}
      classNamePrefix="select"
      styles={customStyles}
      options={option}
      onChange={handleSelect}
      value={val}
    />
  )
}

export default SelectBox;
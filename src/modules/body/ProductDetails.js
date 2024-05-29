import React from 'react';
import { size } from '../utils/constants';
import ColorPicker from '../components/ColorPicker';
import TextBox from '../components/TextBox';
import ImageUpload from '../components/ImageUpload';
import SelectBox from '../components/SelectBox';

const SubType = ({id}) => {

    return (
        <div className='flex'>
            <div className='m-2'>
                <h5>Size</h5>
                <SelectBox uuid={id} css={'basic-single w-32 border border-solid border-gray-400 rounded-md'} option={size} placeholder={'Size...'}></SelectBox>
            </div>
            <div className='m-2'>
                <h5>Color</h5>
                <ColorPicker uuid={id}></ColorPicker>
            </div>
            <div className='m-2'>
                <h5>Quantity</h5>
                <TextBox uuid={id} placeholder={'Quantity...'} type={'number'} css={'w-32 p-[6%] border border-solid border-gray-400 rounded-md'}></TextBox>
            </div>
            <div className='m-2'>
                <h5>Price</h5>
                <TextBox uuid={id} placeholder={'Price...'} type={'number'} css={'w-32 p-[6%] border border-solid border-gray-400 rounded-md'}></TextBox>
            </div>
            <div className='m-2'>
                <h5>Discount</h5>
                <TextBox uuid={id} placeholder={'Discount...'} type={'number'} css={'w-32 p-[6%] border border-solid border-gray-400 rounded-md'}></TextBox>
            </div>
            <div className='m-2'>
                <h5>Image Upload</h5>
                <ImageUpload uuid={id}></ImageUpload>
            </div>
        </div>
    )
}

export default SubType;
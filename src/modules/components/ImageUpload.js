import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { useDispatch } from 'react-redux';
import { addProductDetails } from '../redux/addProductSlice';

const ImageUpload = ({ uuid }) => {
    const [images, setImages] = useState([]);
    const maxNumber = 5;

    const dispatch = useDispatch();
    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
        dispatch(addProductDetails({ id: uuid, productImages: imageList }))
    };

    return (
        <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
        >
            {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
            }) => (
                <div>
                    <div>
                        <button className='p-2 border border-black cursor-pointer bg-green-200 rounded-md' onClick={onImageUpload}>
                            Upload Image
                        </button>
                    </div>
                    <div>
                        {imageList.map((image, index) => (
                            <div key={index} className='m-4 flex'>
                                <img src={image['data_url']} alt="" width="100" />
                                <div className="m-4">
                                    <button className='p-2 m-4 border border-black cursor-pointer bg-green-200 rounded-md' onClick={() => onImageUpdate(index)}>Update</button>
                                    <button className='p-2 border border-black cursor-pointer bg-red-200 rounded-md' onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </ImageUploading>
    )
}

export default ImageUpload;
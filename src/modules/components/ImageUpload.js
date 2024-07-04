import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { useDispatch } from 'react-redux';
import  imageCompression  from 'browser-image-compression';
import { addProductDetails } from '../redux/addProductSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';

const ImageUpload = ({ uuid }) => {
    const [images, setImages] = useState([]);
    const maxNumber = 5;

    const dispatch = useDispatch();
    const onChange = async (imageList, addUpdateIndex) => {
        //FOR TESTING
        const compressedImages = await compressImages(imageList);
        // const compressedImages = imageList; --in prod
        setImages(compressedImages);
        dispatch(addProductDetails({ id: uuid, productImages: compressedImages.map(image=>image.data_url)}))
    };

    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        useWebWorker: true
    };

    async function compressImages(imageList) {
        const compressedImages = await Promise.all(
            imageList.map(async (image) => {
                const compressedFile = await imageCompression(image.file,options);
                // console.log('Compressed file size:', compressedFile.size / (1024 * 1024), 'MB'); 
                const reader = new FileReader();
                return new Promise((resolve, reject) => {
                    reader.readAsDataURL(compressedFile);
                    reader.onloadend = () => {
                        resolve({
                            ...image,
                            data_url: reader.result,
                            file: compressedFile
                        });
                    };
                });
            })
        );
        return compressedImages;
    }

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
                                    <button className='p-2 m-4 cursor-pointer' onClick={() => onImageUpdate(index)}><FontAwesomeIcon icon={faUpload} /></button>
                                    <button className='p-2 cursor-pointer' onClick={() => onImageRemove(index)}><FontAwesomeIcon icon={faTrash} /></button>
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
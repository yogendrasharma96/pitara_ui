import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/addProductSlice';
import imageCompression from 'browser-image-compression';

const ImageUpload = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const currVal = useSelector(store => store.addProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        setSelectedImages(currVal.productImages || []);
    }, [currVal]);

    const handleImageChange = async (e) => {
        const files = Array.from(e.target.files);
        const newImagesCount = files.length + selectedImages.length;

        if (newImagesCount > 5) {
            alert('You can only upload up to 5 images.');
            return;
        }

        const compressedImages = await compressImages(files);
        setSelectedImages((prevImages) => {
            const newImages = prevImages.concat(compressedImages);
            dispatch(addProduct({ productImages: newImages }));
            return newImages;
        });
    };

    const compressImages = async (files) => {
        const options = {
            maxSizeMB: 1, // Maximum file size in MB
            maxWidthOrHeight: 800, // Maximum width or height
            useWebWorker: true // Use web worker for processing
        };

        const promises = files.map(file => imageCompression(file, options).then(compressedFile => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
                reader.readAsDataURL(compressedFile);
            });
        }));

        return Promise.all(promises);
    };

    const removeImage = (url) => {
        setSelectedImages((prevImages) => {
            const newImages = prevImages.filter((image) => image !== url);
            dispatch(addProduct({ productImages: newImages }));
            return newImages;
        });
    };

    return (
        <div>
            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
            <div className="mt-4 flex flex-wrap gap-4">
                {selectedImages.map((image, index) => (
                    <div key={index} className="relative">
                        <img
                            src={image}
                            alt={`preview ${index}`}
                            className="w-32 h-32 object-cover rounded border"
                        />
                        <FontAwesomeIcon icon={faTrashAlt}
                            onClick={() => removeImage(image)}
                            className="mt-1 mr-1 bg-red-400 text-white rounded-full p-2 hover:bg-red-600 cursor-pointer"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageUpload;
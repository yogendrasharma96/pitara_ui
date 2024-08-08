import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/addProductSlice';

const SizeQuantityDialogBox = ({ onClose, option }) => {
 
    const dispatch = useDispatch();
    const currVal = useSelector(store => store.addProducts);
    
    // Initialize dialogData on first render
    useEffect(() => {
        const dialogData = option.map(x => ({ size: x.label, quantity: 0 }));
        dispatch(addProduct({ productSizeQuantity: dialogData }));
    }, [dispatch, option]);

    const handleQuantityChange = (size, newQuantity) => {
        const updatedData = currVal.productSizeQuantity.map(item =>
            item.size === size ? { ...item, quantity: newQuantity } : item
        );
        dispatch(addProduct({ productSizeQuantity: updatedData }));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md w-1/3">
                <h2 className="text-xl mb-4 text-center">Select Sizes and Quantities</h2>
                <div className='p-2 space-y-4'>
                    {currVal.productSizeQuantity?.map((x, index) => (
                        <div key={index} className='flex items-center justify-between'>
                            <label className="flex items-center">
                                <span className="ml-2">{x.size}</span>
                            </label>
                            <input
                                type='number'
                                defaultValue={0}
                                min={0}
                                className="border border-gray-300 rounded-md p-2 w-16"
                                onChange={(e) => handleQuantityChange(x.size, parseInt(e.target.value, 10))}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <button onClick={() => onClose(false)} className="bg-red-500 text-white p-2 rounded-md">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SizeQuantityDialogBox;
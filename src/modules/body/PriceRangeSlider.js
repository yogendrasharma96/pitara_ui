import React, { useEffect, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import HeaderFilter from './HeaderFilter';
import { useDispatch } from 'react-redux';
import { addFilter } from '../redux/addFilterSlice';

const PriceRangeSlider = ({ min, max, step, onPriceChange }) => {
    const [values, setValues] = useState([min, max]);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addFilter({ minPrice: values[0] }));
        dispatch(addFilter({ maxPrice: values[1] }));
    }, [dispatch, values]);

    return (
        <div className="bg-white rounded-lg">
            <HeaderFilter open={open} setOpen={setOpen} title={'Price'} />
            {open && (
                <div className="py-0 px-4 mt-0">
                    <Range
                        values={values}
                        step={step}
                        min={min}
                        max={max}
                        onChange={(values) => setValues(values)}
                        onFinalChange={onPriceChange}
                        renderTrack={({ props, children }) => (
                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                className="w-full flex"
                                style={props.style}
                            >
                                <div
                                    ref={props.ref}
                                    className="h-1 w-full self-center rounded-md"
                                    style={{
                                        background: getTrackBackground({
                                            values,
                                            colors: ['#ccc', '#548BF4', '#ccc'],
                                            min,
                                            max,
                                        }),
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({ index, props }) => (
                            <div
                                {...props}
                                className="h-5 w-5 rounded-full bg-blue-500 flex justify-center items-center shadow"
                            >
                                <div className="w-3 h-3 bg-white rounded-full" />
                            </div>
                        )}
                    />
                    <div className="flex justify-center text-center ml-3 text-sm text-gray-700 mt-1">
                        <span>{values[0]}</span> - <span>{values[1]}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PriceRangeSlider;
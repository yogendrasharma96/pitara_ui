import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProductDesc } from '../redux/addProductSlice';
import { formats, modules } from '../utils/constants';

const Editor = ({ css }) => {

    const dispatch = useDispatch();
    const [val, setVal] = useState();

    const currVal = useSelector(store => store.addProducts);
    useEffect(() => {
        setVal(currVal.productDescription);
    }, [currVal])

    const handleInputChange = (e) => {
        dispatch(addProductDesc(e));
    }

    return (
        <div className={css}>
            <ReactQuill
                onChange={handleInputChange}
                modules={modules}
                formats={formats}
                value={val}
            />
        </div>
    );

}

export default Editor;
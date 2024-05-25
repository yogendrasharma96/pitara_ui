import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { addProductDesc } from '../redux/addProductSlice';
import { formats, modules } from '../utils/constants';

const Editor = ({ css }) => {

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        dispatch(addProductDesc(e));
    }

    return (
        <div className={css}>
            <ReactQuill
                onChange={handleInputChange}
                modules={modules}
                formats={formats}
            />
        </div>
    );

}

export default Editor;
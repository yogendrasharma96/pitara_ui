import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({css}) => {
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            ['link', 'image']
        ]
    };
    
    const formats = [
        'header', 'font', 'list', 'bullet',
        'bold', 'italic', 'underline',
        'align', 'link', 'image'
    ];
    const [productDescription, setProductDescription] = useState('');
    return (
        <div className={css}>
            <ReactQuill
                value={productDescription}
                onChange={setProductDescription}
                modules={modules}
                formats={formats}
            />
        </div>
    );



}

export default Editor;
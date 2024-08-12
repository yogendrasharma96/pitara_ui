import React, { useState } from 'react'

const RadioButton = ({ value, content }) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };
    return (
        <div className='flex items-center space-x-2'>
            <input
                className='custom-checkbox'
                type='checkbox'
                value={value}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label className={isChecked ? 'font-bold' : ''}>{content}</label>
        </div>
    );
}

export default RadioButton;
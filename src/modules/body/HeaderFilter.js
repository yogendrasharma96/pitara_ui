import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
const HeaderFilter = ({ open, setOpen,title }) => {
    return (
        <div
            onClick={() => setOpen(!open)}
            className="flex justify-between items-center p-3 mb-4 border-b-2 border-gray-200 cursor-pointer"
        >
            <h4 className="font-medium text-gray-700">{title}</h4>
            <FontAwesomeIcon
            size='sm'
                icon={open ? faArrowUp : faArrowDown}
                className="text-gray-500"
            />
        </div>
    )
}

export default HeaderFilter;
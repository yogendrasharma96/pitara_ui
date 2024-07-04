import React from 'react';
import { useSelector } from 'react-redux';

const SideBar = () => {

    const showSideBar = useSelector(store => store.sideBar);
    if (!showSideBar)
        return null;
    return (

        <div className='w-48 h-screen bg-gray-600 text-white shadow-lg transition-transform duration-300 {showSideBar ? translate-x-0 : -translate-x-full}'>
            <ul className="mb-4">
                <li className="font-bold text-lg p-4 border-b border-gray-300">Category</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">Saree</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">Suit</li>
            </ul>
            <ul className="mb-4">
                <li className="font-bold text-lg p-4 border-b border-gray-300">Trending</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">Saree</li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">Suit</li>
            </ul>
        </div>
    )
}

export default SideBar;
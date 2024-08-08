import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelSideBar } from '../redux/sideBarSlice';

const SideBar = () => {

    const showSideBar = useSelector(store => store.sideBar);
    const dispatch=useDispatch();
    if (!showSideBar)
        return null;
    return (

        <div className='fixed w-64 h-screen bg-white shadow-lg transition-transform duration-300 {showSideBar ? translate-x-0 : -translate-x-full}'>
            <div className='p-4'>
                <div className='pb-2 grid grid-cols-12 gap-1 border-b border-gray-300 items-center'>
                    <FontAwesomeIcon icon={faUser} className="text-gray-700 cursor-pointer col-start-1 col-span-1 " />
                    <p className="font-bold text-lg col-start-2 col-span-10 cursor-pointer">Log In</p>
                    <span onClick={() => dispatch(cancelSideBar())} className="cursor-pointer text-gray-500 col-span-1 col-end-13 text-right">
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </div>
            </div>
            <ul className="mb-4 p-4">
                <li className="pb-2 font-bold text-lg border-b border-gray-300">Category</li>
                <li className="p-2 hover:bg-gray-700 hover:text-white cursor-pointer">Saree</li>
                <li className="p-2 hover:bg-gray-700 hover:text-white cursor-pointer">Suit</li>
            </ul>
            <ul className="mb-4 p-4">
                <li className="pb-2 font-bold text-lg border-b border-gray-300">Trending</li>
                <li className="p-2 hover:bg-gray-700 hover:text-white cursor-pointer">Saree</li>
                <li className="p-2 hover:bg-gray-700 hover:text-white cursor-pointer">Suit</li>
            </ul>
        </div>
    )
}

export default SideBar;
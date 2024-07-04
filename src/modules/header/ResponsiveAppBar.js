import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../redux/sideBarSlice';

const ResponsiveAppBar = () => {

    const dispatch = useDispatch();

    const handleToggleSideBar = () => {
        dispatch(toggleSideBar());
    }


    return (
        <div>
            <div className='bg-gradient-to-t from-blue-500 via-green-500 to-purple-500'>
                <ul className='flex p-2 items-center'>
                    <li className='p-4 cursor-pointer'>
                        <FontAwesomeIcon icon={faBars} size="" onClick={handleToggleSideBar} />
                    </li>
                    <li className='w-16 '>
                        <img src={require('../../pitara.png')} alt='logo' />
                    </li>
                    <li className='p-4' >
                        <Link to={"/"}><h4>Home</h4></Link>
                    </li>
                    <li className='p-4'>
                        <Link to={"/add"}><h4>Add Products</h4></Link>
                    </li>
                    <li className='p-4'>
                        <Link to={"/edit"}> <h4>Edit Products</h4></Link>
                    </li>
                    <li className='p-4'>
                        <Link to={"/show"}><h4>Show Products</h4></Link>
                    </li>
                    <li className='p-4 ml-auto  '>
                        <Link to={"/signUp"}><FontAwesomeIcon icon={faUser} size="m" /></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ResponsiveAppBar;



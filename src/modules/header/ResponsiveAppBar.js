import * as React from 'react';
import { useState } from 'react';





const ResponsiveAppBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const pages = ['Add Products', 'Show Products', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const handleToggleNavMenu = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleToggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-xl font-bold mr-4">LOGO</span>
                    <div className="hidden md:flex space-x-4">
                        {pages.map((page) => (
                            <a key={page} href={`#${page.toLowerCase().replace(/ /g, '-')}`} className="hover:underline">
                                {page}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="md:hidden">
                        <button onClick={handleToggleNavMenu} className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative">
                        <button onClick={handleToggleUserMenu} className="focus:outline-none">
                            <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="User Avatar" />
                        </button>
                        {isUserMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                                {settings.map((setting) => (
                                    <a key={setting} href={`#${setting.toLowerCase()}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        {setting}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {isNavOpen && (
                <nav className="md:hidden">
                    <div className="space-y-1">
                        {pages.map((page) => (
                            <a key={page} href={`#${page.toLowerCase().replace(/ /g, '-')}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                {page}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};


export default ResponsiveAppBar;

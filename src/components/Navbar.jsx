import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [toggle, setToggle] = useState(true);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white border-gray-200 py-5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a className="flex items-center">
                    <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Landwind</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <div className="hidden mt-2 mr-4 sm:inline-block">
                        <span></span>
                    </div>

                    <Link
                        to="/book"
                        className="text-white bg-[#56C596] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-10 lg:px-6 py-2 lg:py-2 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                    >
                        Book
                    </Link>
                    <button
                        onClick={() => setToggle(!toggle)}
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded="true"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                {toggle && (
                    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0">
                            <li>
                                <Link
                                    to="/"
                                    className={`block py-4 pl-3 px-6 rounded-2xl pr-4 lg:px-6 lg:py-1.5 ${
                                        isActive('/')
                                            ? 'bg-[#56C596] text-white'
                                            : 'text-gray-700 hover:text-[#56C596]'
                                    }`}
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={`block py-4 pl-3 px-6 rounded-2xl pr-4 lg:px-6 lg:py-1.5 ${
                                        isActive('/about')
                                            ? 'bg-[#56C596] text-white'
                                            : 'text-gray-700 hover:text-[#56C596]'
                                    }`}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blogs"
                                    className={`block py-4 pl-3 px-6 rounded-2xl pr-4 lg:px-6 lg:py-1.5 ${
                                        isActive('/blogs')
                                            ? 'bg-[#56C596] text-white'
                                            : 'text-gray-700 hover:text-[#56C596]'
                                    }`}
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/destinations"
                                    className={`block py-4 pl-3 px-6 rounded-2xl pr-4 lg:px-6 lg:py-1.5 ${
                                        isActive('/destinations')
                                            ? 'bg-[#56C596] text-white'
                                            : 'text-gray-700 hover:text-[#56C596]'
                                    }`}
                                >
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/book"
                                    className={`block py-4 pl-3 px-6 rounded-2xl pr-4 lg:px-6 lg:py-1.5 ${
                                        isActive('/book')
                                            ? 'bg-[#56C596] text-white'
                                            : 'text-gray-700 hover:text-[#56C596]'
                                    }`}
                                >
                                    Book
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact-us"
                                    className={`block py-4 pl-3 px-6 rounded-2xl pr-4 lg:px-6 lg:py-1.5 ${
                                        isActive('/contact-us')
                                            ? 'bg-[#56C596] text-white'
                                            : 'text-gray-700 hover:text-[#56C596]'
                                    }`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;

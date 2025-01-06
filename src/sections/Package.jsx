import React, { useEffect, useState } from 'react';

// Package Component
function Package({ packages }) {
    return (
        <div>
            {/* Title Section */}
            <h1 className="text-4xl font-bold text-center text-gray-800 my-8">Packages</h1>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-auto items-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-4">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className="col-span-1 md:col-span-2 gap-6 max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105"
                    >
                        <div className="relative">
                            <img
                                className="w-full h-64 object-cover"
                                src={`https://tour-dashboard.hakimethio.et/storage/${pkg?.image || ''}`}
                                alt={pkg.title}
                            />
                            {pkg.featured && (
                                <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                                    Featured
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm max-w-md mx-auto">
                                <p className="text-blue-600 font-semibold text-sm italic">
                                    Tour Code: <span className="text-blue-800 font-bold">{pkg.code}</span>
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold mb-2 text-gray-800">{pkg.title}</h2>
                            <p className="text-gray-600 mb-4">{pkg.description}</p>

                            <div className="flex justify-between items-center">
                                <Link to='book' className="px-7 py-2 bg-[#56C596] text-white font-semibold rounded-2xl shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out">
                                    Book Now
                                </Link>
                                <Link to={`/package-detail/${pkg.id}`} className="px-7 py-2 bg-indigo-500 text-white font-semibold rounded-2xl shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out">
                                    Detail
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
                <Link to='/packages' class=" lg:-my-20 text-[#56C596] border border-[#56C596] py-2 px-6 gap-2 rounded inline-flex items-center">
                    <span>
                        View More
                    </span>
                    <svg class="w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        viewBox="0 0 24 24" className="w-6 h-6 ml-2">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </Link>
            </div>


        </div>
    );
}

import axios from 'axios';
import { Link } from 'react-router-dom';

// Example usage of the Package component with dynamic data fetched from API
export default function App() {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        axios.get('https://tour-dashboard.hakimethio.et/api/home-packages')
            .then(response => {
                console.log(response.data.data, 'here in this app');
                setPackages(response.data.data);
            })
            .catch(error => {
                console.error('There was an error fetching the packages!', error);
            });
    }, []);

    return <Package packages={packages} />;
}

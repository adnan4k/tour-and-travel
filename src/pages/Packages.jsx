import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Packages() {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/packages')
            .then(response => {
                setPackages(response.data.data);
            })
            .catch(error => {
                console.error('There was an error fetching the packages!', error);
            });
    }, []);

    return (
        <div>
            <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-24 font-[sans-serif]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="assets/photos/monkey.jpg"
                        alt="Background Image"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                {/* Content */}
                <div className="cursor-pointer relative max-w-screen-lg mx-auto px-8 z-10 text-center text-white">
                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
                        Packages
                    </h1>

                    {/* Path (Center and Indicating "Home") */}
                    <div className="text-lg md:text-2xl font-semibold mb-12 bg-white text-indigo-800 py-4 px-6 rounded-full shadow-lg inline-block">
                        <Link to='/' className="inline">Home</Link>  → Packages
                    </div>
                </div>
            </div>
            <div>
                <div className="max-w-full ml-14 md:left-30">
                    <div className="bg-white text-4xl ml-5 font-bold text-indigo-800 black mix-blend-screen px-6 py-5 ">Packages</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-auto items-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-4">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="col-span-1 md:col-span-2 gap-6 max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    className="w-full h-64 object-cover"
                                    src={`http://127.0.0.1:8000/storage/${pkg?.image || ''}`}
                                    alt={pkg.title}
                                />
                                {pkg.featured && (
                                    <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                                        Featured
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">{pkg.title}</h2>
                                <p className="text-gray-600 mb-4">{pkg.description}</p>

                                <div className="mt-2 flex justify-between items-center">
                                    <Link to={`/package-detail/${pkg.id}`}
                                        className="hidden z-10 text-xs absolute bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-[#56C596] hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                                        <span className="text-lg">|</span>&nbsp;&nbsp;<span>Read more</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Packages;
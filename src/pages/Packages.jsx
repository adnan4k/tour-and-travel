import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Packages() {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        axios.get('https://dashboard.jemmavalleytour.com/api/packages')
            .then(response => {
                console.log(response.data, 'date of packages is here ')
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
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-auto items-center h-full p-4">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="col-span-1 md:col-span-2 gap-6 max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    className="w-full h-64 object-cover"
                                    src={`https://dashboard.jemmavalleytour.com/storage/${pkg?.image || ''}`}
                                    alt={pkg.name}
                                />

                            </div>
                            <div className="p-6">
                                <h2 className="text-[18px] font-bold mb-2 text-gray-800">{pkg.name}</h2>
                                <div className="text-gray-800 space-y-2">
                              
                                    <p className="text-[15px] text-gray-500">
                                        <span className="font-bold">Duration:</span> {pkg.duration}
                                    </p>
                                    {/* Tour Code */}
                                    <p className="text-[15px] text-gray-500">
                                        <span className="font-bold">Tour code:</span> {pkg.tour_code}
                                    </p>
                                    <p className="text-[15px] text-gray-500">
                                        <span className="font-bold">Destination:</span> {pkg.destination}
                                    </p>
                                    <p className="text-[15px] text-gray-500">
                                        <span className="font-bold">Transportion:</span> {pkg.transport}
                                    </p>
                                
                                </div>
                                <div className="mt-6  w-full flex justify-center items-center">
                                    {/* Read More Button */}
                                    <Link
                                        to={`/package-detail/${pkg.id}`}
                                        className="z-10 flex justify-center text-sm w-full bg-[#56C596] px-4 py-2 text-white rounded-md hover:bg-[#56C596] transition duration-300 ease-in-out"
                                    >
                                        <span>Read More</span>
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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Destinations() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios.get('https://dashboard.jemmavalleytour.com/api/destinations')
            .then(response => {
                setDestinations(response.data.data);
                console.log(destinations,'destinations here')
            })
            .catch(error => {
                console.error('There was an error fetching the Destinations!', error);
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
                        Destinations
                    </h1>

                    {/* Path (Center and Indicating "Home") */}
                    <div className="text-lg md:text-2xl font-semibold mb-12 bg-white text-indigo-800 py-4 px-6 rounded-full shadow-lg inline-block">
                        <Link to='/' className="inline">Home</Link>  → Destinations
                    </div>
                </div>
            </div>
            <div>
                <div className="max-w-full ml-14 md:left-30">
                    <div className="bg-white text-4xl ml-5 font-bold text-indigo-800 black mix-blend-screen px-6 py-5 ">Destinations</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-auto items-center h-full  p-4">
                    {destinations.map((pkg, index) => (
                        <Link 
                        to={`/destination-detail/${pkg.id}`}
                            key={index}
                            className="col-span-1 md:col-span-2 gap-6 max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    className="w-full h-64 object-cover"
                                    src={`https://dashboard.jemmavalleytour.com/storage/${pkg?.image || ''}`}
                                    alt={pkg.title}
                                />
                                {pkg.featured && (
                                    <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                                        Featured
                                    </div>
                                )}
                            </div>
                            <div className="p-2">
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">{pkg.title}</h2>
                                <p className="text-gray-600 mb-4">{pkg.description}</p>



                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Destinations;
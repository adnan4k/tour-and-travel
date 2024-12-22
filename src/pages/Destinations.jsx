import React from 'react'
import { Link } from 'react-router-dom'

function Destinations() {
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
                <div class="max-w-full ml-14 md:left-30">
                    <div class="bg-white text-4xl ml-5 font-bold text-indigo-800 black mix-blend-screen px-6 py-5 ">Destinations</div>
                </div>
                <div class="w-full grid grid-cols-2  gap-6 mx-auto p-5 sm:p-5 md:p-8">

                    <div class="rounded overflow-hidden flex flex-col max-w-2xl mx-auto border">
                        <div class="sm:flex justify-between items-center pt-4 px-5">
                            <a href="#"
                                class="sm:w-8/12 font-medium text-md inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
                                Best Activewear from the Nordstrom Anniversary Sale</a>

                        </div>

                        <div class="relative">
                            <a href="#">
                                <img class="w-full max-h-56" src="assets/photos/mountain.jpg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500" alt="Sunset in the mountains" />
                            </a>

                            <a href="#!"
                                class="hidden absolute z-10 text-xs absolute bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"><span class="text-lg">|</span>&nbsp;&nbsp;<span>Read more</span></a>

                        </div>


                    </div>
                    <div class="rounded overflow-hidden flex flex-col max-w-2xl mx-auto border">
                        <div class="sm:flex justify-between items-center pt-4 px-5">
                            <a href="#"
                                class="sm:w-8/12 font-medium text-md inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
                                Best Activewear from the Nordstrom Anniversary Sale</a>

                        </div>

                        <div class="relative">
                            <a href="#">
                                <img class="w-full max-h-56" src="assets/photos/holka.jpg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500" alt="Sunset in the mountains" />
                            </a>

                            <a href="#!"
                                class="hidden absolute z-10 text-xs absolute bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"><span class="text-lg">|</span>&nbsp;&nbsp;<span>Read more</span></a>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Destinations
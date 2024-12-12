import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import anime from 'animejs';
import DestinationHeader from '../components/DestinationHeader';


function Destination() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing option
            once: true, // Whether animation should happen only once
        });
    }, []);
   

    anime.timeline({ loop: true })
        .add({
            targets: '.ml1 .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1)
        }).add({
            targets: '.ml1 .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        }).add({
            targets: '.ml1',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    return (
        <div className="p-1 flex flex-wrap flex-col my-12 items-center justify-center">

              <DestinationHeader/>
            {/* Card Example */}
            <div className='flex md: justify-center'>
                <div
                    data-aos="zoom-in" // AOS animation type
                    className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group"
                >
                    <svg
                        className="absolute bottom-0 left-0 mb-8 scale-150 transition-transform"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ opacity: 0.1 }}
                    >
                        <rect
                            x="159.52"
                            y="175"
                            width="152"
                            height="152"
                            rx="8"
                            transform="rotate(-45 159.52 175)"
                            fill="white"
                        />
                        <rect
                            y="107.48"
                            width="152"
                            height="152"
                            rx="8"
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div
                            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{
                                background: 'radial-gradient(black, transparent 60%)',
                                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                                opacity: 0.2,
                            }}
                        ></div>
                        <img
                            className="relative w-40"
                            src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                            alt="Plant"
                        />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Addis Ababa</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Ethiopia</span>
                            <button className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                Detail
                            </button>
                        </div>
                    </div>
                </div>

                {/* Add More Cards Here */}
                <div
                    data-aos="fade-up" // AOS animation type
                    className="flex-shrink-0 m-6 relative overflow-hidden bg-blue-500 rounded-lg max-w-xs shadow-lg group"
                >
                    <svg
                        className="absolute bottom-0 left-0 mb-8 scale-150 transition-transform"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ opacity: 0.1 }}
                    >
                        <rect
                            x="159.52"
                            y="175"
                            width="152"
                            height="152"
                            rx="8"
                            transform="rotate(-45 159.52 175)"
                            fill="white"
                        />
                        <rect
                            y="107.48"
                            width="152"
                            height="152"
                            rx="8"
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div
                            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{
                                background: 'radial-gradient(black, transparent 60%)',
                                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                                opacity: 0.2,
                            }}
                        ></div>
                        <img
                            className="relative w-40"
                            src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                            alt="Plant"
                        />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Outdoor</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Snake Plant</span>
                            <span className="block bg-white rounded-full text-blue-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                $45.00
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="zoom-in" // AOS animation type
                    className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group"
                >
                    <svg
                        className="absolute bottom-0 left-0 mb-8 scale-150 transition-transform"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ opacity: 0.1 }}
                    >
                        <rect
                            x="159.52"
                            y="175"
                            width="152"
                            height="152"
                            rx="8"
                            transform="rotate(-45 159.52 175)"
                            fill="white"
                        />
                        <rect
                            y="107.48"
                            width="152"
                            height="152"
                            rx="8"
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div
                            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{
                                background: 'radial-gradient(black, transparent 60%)',
                                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                                opacity: 0.2,
                            }}
                        ></div>
                        <img
                            className="relative w-40"
                            src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                            alt="Plant"
                        />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Addis Ababa</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Ethiopia</span>
                            <button className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                Detail
                            </button>
                        </div>
                    </div>
                </div>

                {/* Add More Cards Here */}
                <div
                    data-aos="fade-up" // AOS animation type
                    className="flex-shrink-0 m-6 relative overflow-hidden bg-blue-500 rounded-lg max-w-xs shadow-lg group"
                >
                    <svg
                        className="absolute bottom-0 left-0 mb-8 scale-150 transition-transform"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ opacity: 0.1 }}
                    >
                        <rect
                            x="159.52"
                            y="175"
                            width="152"
                            height="152"
                            rx="8"
                            transform="rotate(-45 159.52 175)"
                            fill="white"
                        />
                        <rect
                            y="107.48"
                            width="152"
                            height="152"
                            rx="8"
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div
                            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{
                                background: 'radial-gradient(black, transparent 60%)',
                                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                                opacity: 0.2,
                            }}
                        ></div>
                        <img
                            className="relative w-40"
                            src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                            alt="Plant"
                        />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Outdoor</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Snake Plant</span>
                            <span className="block bg-white rounded-full text-blue-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                $45.00
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;

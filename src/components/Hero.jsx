import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import anime from 'animejs';

function Hero() {
    const swiperRef = useRef(null);

    // Function to run animations
    const runAnimations = () => {
        anime({
            targets: '.hero-title',
            translateY: [-200, 0],
            opacity: [0, 1], // Fade-in effect
            easing: 'easeOutExpo',
            duration: 1000,
            delay: anime.stagger(200), // Stagger animation for multiple lines
        });

        anime({
            targets: '.hero-btn',
            scale: [1.4, 1], // Scale from 0.8 to 1
            opacity: [0, 1],
            easing: 'spring(1, 80, 10, 0)', // Spring effect for natural bounce
            delay: 1500, // Start after title animation
        });

        anime({
            targets: '.hero-img',
            scale: [1.5, 1], // Zoom-out effect for background
            easing: 'easeOutQuart',
            duration: 2000,
        });
    };

    useEffect(() => {
        runAnimations();
    }, []);


    return (
        <Swiper
            onSlideChange={() => {
                runAnimations(); // Trigger animations on every slide change
            }}
            // navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            speed={2000}
            effect="slide" // Smooth fade transition
            fadeEffect={{ crossFade: true }}
            slidesPerView={1} // One slide visible at a time
            spaceBetween={0} // No gap between slides for a seamless effect
            loop={true} // Enables continuous looping
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Pagination, Navigation]}

        >
            {/* Slide 1 */}
            <SwiperSlide>
                <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Background"
                            className="hero-img object-cover object-center w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                        <h1 className=" hero-title text-5xl font-bold leading-tight mb-4">
                            Welcome to Our Awesome Website 1
                        </h1>
                        <p className="text-lg hero-title text-gray-300 mb-8">
                            Discover amazing features and services that await you.
                        </p>
                        <a
                            href="#"
                            className="bg-yellow-400 hero-btn text-[#56C596] hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
                <div className="relative bg-gradient-to-r from-green-600 to-blue-600 h-screen text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1581090700227-1e37e6b8db69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Background"
                            className="hero-img object-cover object-center w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                        <h1 className="text-5xl hero-title font-bold leading-tight mb-4">
                            Welcome to Our Awesome Website 2
                        </h1>
                        <p className="hero-title text-lg text-gray-300 mb-8">
                            Discover amazing features and services that await you.
                        </p>
                        <a
                            href="#"
                            className="bg-yellow-400 hero-btn text-[#56C596] hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Hero;

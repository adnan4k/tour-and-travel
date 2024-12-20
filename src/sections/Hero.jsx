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


   
    
    const slidesData = [
        {
            id: 1,
            title: "Where Nature Meets Tradition",
            description: "Experience the wonders of Ethiopia, from cascading waterfalls and dense forests to charming traditional houses.",
            buttonText: "Get Started",
            buttonLink: "#",
            gradient: "from-purple-600 to-blue-600",
            image:
                "/assets/photos/houses.jpg",
        },
        {
            id: 2,
            title: "A Timeless Journey Through Ethiopia",
            description: "Discover amazing features and services that await you.",
            buttonText: "Get Started",
            buttonLink: "#",
            gradient: "from-green-600 to-blue-600",
            image:
                "/assets/photos/forest.jpg",
        },
        {
            id: 2,
            title: "Explore Ethiopia's Hidden Gems",
            description: "Uncover the beauty of Ethiopia — towering waterfalls, lush green landscapes, and timeless traditions",
            buttonText: "Get Started",
            buttonLink: "#",
            gradient: "from-green-600 to-blue-600",
            image:
                "/assets/photos/waterfall.jpg",
        },
        {
            id: 2,
            title: "Ethiopia Awaits: Adventure in Every Corner",
            description: "Step into a land of extraordinary beauty — roaring waterfalls, pristine forests, and unique heritage",
            buttonText: "Get Started",
            buttonLink: "#",
            gradient: "from-green-600 to-blue-600",
            image:
                "/assets/photos/gates.jpg",
        },    ];
    
    
     
    
        return (
            <Swiper
                onSlideChange={() => {
                    runAnimations(); // Trigger animations on every slide change
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                speed={2000}
                effect="slide"
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className={`relative bg-gradient-to-r ${slide.gradient} h-screen text-white overflow-hidden`}
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={slide.image}
                                    alt={`Slide ${slide.id}`}
                                    className="hero-img object-cover object-center w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                                <h1 className="hero-title text-5xl font-bold leading-tight mb-4">
                                    {slide.title}
                                </h1>
                                <p className="text-lg hero-title text-gray-300 mb-8">
                                    {slide.description}
                                </p>
                               
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
    

export default Hero;

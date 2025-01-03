import React, { useEffect, useState } from 'react';
import anime from 'animejs';

function Hero() {
    // State to hold the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesData = [
        {
            id: 1,
            title: "Where Nature Meets Tradition",
            description:
                "Experience the wonders of Ethiopia, from cascading waterfalls and dense forests to charming traditional houses.",
            gradient: "from-purple-600 to-blue-600",
            image: "/assets/photos/holka.jpg",
        },
        {
            id: 2,
            title: "A Timeless Journey Through Ethiopia",
            description: "Discover amazing features and services that await you.",
            gradient: "from-green-600 to-blue-600",
            image: "/assets/photos/forest.jpg",
        },
        {
            id: 3,
            title: "Explore Ethiopia's Hidden Gems",
            description:
                "Uncover the beauty of Ethiopia — towering waterfalls, lush green landscapes, and timeless traditions.",
            gradient: "from-green-600 to-blue-600",
            image: "/assets/photos/lalibela.jpg",
        },
        {
            id: 4,
            title: "Ethiopia Awaits: Adventure in Every Corner",
            description:
                "Step into a land of extraordinary beauty — roaring waterfalls, pristine forests, and unique heritage.",
            gradient: "from-green-600 to-blue-600",
            image: "/assets/photos/gates.jpg",
        },
    ];

    // Function to animate the content when it changes
    const animateContent = () => {
        anime({
            targets: ".hero-title",
            translateY: [-50, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
        });

        anime({
            targets: ".hero-description",
            translateY: [50, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: 200,
        });

        anime({
            targets: ".hero-img",
            scale: [1.2, 1],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
        });
    };

    // Change slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slidesData.length]);

    // Trigger animation when the slide changes
    useEffect(() => {
        animateContent();
    }, [currentSlide]);

    const currentData = slidesData[currentSlide];

    return (
        <div
            className={`relative bg-gradient-to-r ${currentData.gradient} h-screen text-white overflow-hidden`}
        >
            <div className="absolute inset-0">
                <img
                    src={currentData.image}
                    alt={`Slide ${currentData.id}`}
                    className="hero-img object-cover object-center w-full h-full transition-transform duration-1000 ease-in-out transform"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="hero-title text-5xl font-bold leading-tight mb-4">
                    {currentData.title}
                </h1>
                <p className="hero-description text-lg text-gray-300 mb-8">
                    {currentData.description}
                </p>
            </div>
        </div>
    );
}

export default Hero;

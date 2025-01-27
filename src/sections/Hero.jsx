import React, { useEffect, useState } from "react";
import anime from "animejs";

function Hero() {
    // State to hold the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // State to hold fetched slide data
    const [slidesData, setSlidesData] = useState([]);

    // Loading state
    const [loading, setLoading] = useState(true);

    // Fetch slide data from API
    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch("https://dashboard.jemmavalleytour.com/api/hero-slider"); // Replace with your API URL
                const data = await response.json();
                console.log(data.data,'here it is ')
                setSlidesData(data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching slide data:", error);
                setLoading(false);
            }
        };

        fetchSlides();
    }, []);

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

    // Show a loading state until the slides are fetched
    if (loading) {
        return <div className="text-center text-white h-screen flex items-center justify-center">Loading slides...</div>;
    }

    const currentData = slidesData[currentSlide];

    return (
        <div
            className={`relative bg-gradient-to-r  h-screen text-white overflow-hidden`}
        >
            <div className="absolute inset-0">
                <img
                    src={`https://dashboard.jemmavalleytour.com/storage/${currentData?.image}`}
                    alt={`Slide ${currentData?.id}`}
                    className="hero-img object-cover object-center w-full h-full transition-transform duration-1000 ease-in-out transform"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="hero-title text-5xl font-bold leading-tight mb-4">
                    {currentData?.title}
                </h1>
                <p className="hero-description text-lg text-gray-300 mb-8">
                    {currentData?.description}
                </p>
            </div>
        </div>
    );
}

export default Hero;

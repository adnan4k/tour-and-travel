import React, { useEffect, useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import anime from 'animejs';

function SliderSection() {
    const spanStyle = {
        position: 'absolute',
        top: '50%',
        left: '20px',
        transform: 'translateY(-50%)',
        color: '#ffffff',
        padding: '10px 15px',
        borderRadius: '5px',
        fontSize: '18px',
        marginLeft:'20px',
        fontWeight: 'bold',
        animation: 'slideIn 1s ease-in-out', // Add animation
    };

    const divStyle = {
        position: 'relative', // Parent container must have relative positioning for absolute positioning inside
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Centers the image
        height: '400px',
    };
   anime({
            targets: ".title",
            translateY: [50, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: 200,
        });
   
      const [slidesData, setSlidesData] = useState([]);
    
        // Loading state
        const [loading, setLoading] = useState(true);
    
        // Fetch slide data from API
        useEffect(() => {
            const fetchSlides = async () => {
                try {
                    const response = await fetch("https://dashboard.jemmavalleytour.com/api/slider-section"); // Replace with your API URL
                    const data = await response.json();
                    // console.log(data.data, 'here is data in the slider section');
                    console.log(slidesData, 'here is slides data');
                    setSlidesData(data.data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching slide data:", error);
                    setLoading(false);
                }
            };
    
            fetchSlides();
        }, []);
    if (loading) {
        return <div className="text-center text-white h-screen flex items-center justify-center">Loading slides...</div>;
    }

    return (
        <div className="slide-container md:mt-10">
            <Fade duration={2000} arrows={true}>
                {slidesData.map((slideImage, index) => (
                    <div key={index}>
                        <div
                            style={{
                                ...divStyle,
                                backgroundImage: `url(https://dashboard.jemmavalleytour.com/storage/${slideImage?.image})`,
                            }}
                        >
                            <span className='title' style={spanStyle}>{slideImage?.title}</span>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
}

export default SliderSection;

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';


function AboutHero() {
    const sectionRefs = useRef([]);

    useEffect(() => {
        // Anime.js scroll-triggered animations
        sectionRefs.current.forEach((section, index) => {
            anime({
                targets: section,
                translateY: [100, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: index * 500,
            });
        });
    }, []);

    const sections = [
        {
            id: 1,
            title: 'Welcome to Adventure',
            subtitle: 'Explore breathtaking destinations around the globe with our curated travel packages.',
            background: '/assets/photos/beautifullmaintain.jpg',
        },
        {
            id: 2,
            title: 'Popular Destinations',
            subtitle: 'Discover the most sought-after travel spots, from exotic beaches to vibrant cities.',
            background: '/assets/photos/zebras.jpg',
        },
        {
            id: 3,
            title: 'Why Travel With Us?',
            subtitle: 'Affordable packages, expert guides, and 24/7 support ensure your journey is seamless and memorable.',
            background: '/assets/photos/rainbow.jpg',
        },
        
    ];

    return (
        <div className="relative">
            {sections.map((section, index) => (
                <div
                    key={section.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className="sticky top-0 h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${section.background})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center text-white">
                        <h2 className="text-5xl font-bold mb-4">{section.title}</h2>
                        {section.subtitle && (
                            <p className="text-lg max-w-lg mx-auto">{section.subtitle}</p>
                        )}
                        {section.cta && (
                            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-800">
                                Book Now
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AboutHero;

import React from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SwiperSlide, Swiper } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function AboutUsSection() {


    const images = [
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
        "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
    ];
    return (
        <div>
            <section class="bg-gray-100">
                <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div class="max-w-lg">
                            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                            <p class="mt-4 text-gray-600 text-lg">Jemma Valley Ethiopia Tours envisions becoming a leading provider of immersive and transformative travel experiences, showcasing Ethiopia's rich cultural heritage, diverse landscapes, and historical significance. The company aims to promote sustainable tourism, fostering responsible travel that supports local communities and conserves the environment. By offering authentic experiences in Ethiopia's undiscovered gems, Jemma Valley Ethiopia Tours strives to connect global travelers to the soul of the country, allowing them to explore both popular and hidden destinations while respecting the cultural fabric of Ethiopia..</p>
                          
                        </div>
                        <div class="mt-12 md:mt-0">
                            <Swiper

                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                className="mySwiper"
                            >
                                {images.map((src, index) => (
                                    <SwiperSlide key={index}>
                                        <img src='/assets/photos/ppl.jpg' alt={`Slide ${index}`} className="object-cover rounded-lg shadow-md" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>




                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsSection
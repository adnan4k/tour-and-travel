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
                            <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                                Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                                malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                            <div class="mt-8">
                                <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                                    <span class="ml-2">&#8594;</span></a>
                            </div>
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
                                        <img src={src} alt={`Slide ${index}`} className="object-cover rounded-lg shadow-md" />
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
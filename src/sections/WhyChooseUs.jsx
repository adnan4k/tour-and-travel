import React, { useEffect } from 'react';
import anime from 'animejs';

function WhyChooseUs() {
  useEffect(() => {
    // Animate the header
    anime({
      targets: 'h2',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 200,
    });

    // Animate the paragraph
    anime({
      targets: 'p',
      translateY: [-30, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 400,
    });

    // Animate each feature item sequentially
    anime({
      targets: '.feature-item',
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutExpo',
      delay: anime.stagger(300), // Stagger animation for each feature
    });

    // Animate the image
    anime({
      targets: '.feature-image',
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutExpo',
      delay: 600,
    });
  }, []);

  return (
    <section>
      <div className="lg:flex items-center justify-between p-6 md:p-12 dark:bg-gray-700">
        <div className="lg:w-1/2 w-full">
          <h1
            role="heading"
            className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800 dark:text-white"
          >
            Why Choose Us
          </h1>
          <p
            role="contentinfo"
            className="text-base leading-5 mt-5 text-gray-600 dark:text-gray-200"
          >
            We’re working on a suite of tools to make managing complex systems
            easier for everyone, for free. We can’t wait to hear what you think!
          </p>
          <div className="w-56">
            <button
              onClick={() => console.log('Learn More clicked')}
              className="bg-gray-100 dark:bg-gray-800 shadow rounded-full flex items-center mt-10"
            >
              <div
                className="bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6"
                id="annually"
              >
                Learn More
              </div>
            </button>
          </div>
        </div>
        <div
          className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
          role="list"
        >
          <img
            src="https://i.ibb.co/0n6DSS3/bgimg.png"
            className="absolute w-full -ml-12 mt-24"
            alt="background circle images"
          />
          {/* Card Items */}
          <div
            role="listitem"
            className="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg p-8 relative z-30 transform transition-transform hover:scale-105 hover:bg-gray-300 hover:text-white"
          >
            <div className="md:flex items-center justify-between">
              <h2 className="text-2xl  font-semibold leading-6 text-gray-800 dark:text-white">
                Starter
              </h2>
             
            </div>
            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">
              Full access to all features and no credit card required
            </p>
          </div>

          <div
            role="listitem"
            className="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg mt-3 flex relative z-30 transform transition-transform hover:scale-105 hover:bg-gray-300 hover:text-white"
          >
            <div className="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
            <div className="w-full p-8">
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">
                  Personal
                </h2>
               
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">
                Unlimited product features and dedicated support channels
              </p>
            </div>
          </div>

          <div
            role="listitem"
            className="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7 transform transition-transform hover:scale-105 hover:bg-gray-300 hover:text-white"
          >
            <div className="md:flex items-center justify-between">
              <h2 className="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">
                Team
              </h2>
            
            </div>
            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">
              Unlimited product features and dedicated support channels
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
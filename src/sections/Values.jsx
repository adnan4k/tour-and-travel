import React, { useEffect, useRef } from "react";
import anime from "animejs";

function Values() {
  const serviceItemsRef = useRef([]);

  useEffect(() => {
    // Initialize Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation for the intersecting element
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0.8, 1],
              duration: 1200,
              easing: "easeOutElastic(1, .8)",
            });
            // Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    // Observe each service item
    serviceItemsRef.current.forEach((item) => observer.observe(item));

    return () => observer.disconnect(); // Cleanup
  }, []);

  const handleHover = (event, scale = 1.2, rotate = 360) => {
    anime({
      targets: event.currentTarget.querySelector("svg"),
      scale,
      rotate,
      duration: 800,
      easing: "easeOutElastic(1, .8)",
    });
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-1 py-14">
      <h2 className="font-headline text-2xl font-semibold sm:text-3xl py-5 text-center">
        Our Values
      </h2>
      <div className="container mx-auto max-w-5xl lg:max-w-screen-2xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
        {/** Individual Service Items */}
        {[
          {
            title: "Community Empowerment",
            description: "We collaborate with local businesses, artisans, and guides to ensure that tourism generates lasting positive change in the areas we operate.",
            svgPath: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            ),
          },
          {
            title: "Integrity",
            description: "Transparency, honesty, and accountability form the core of our operations. We adhere to high ethical standards in every aspect of our service, ensuring trust and satisfaction for our clients, partners, and stakeholders",
            svgPath: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            ),
          },
          {
            title: "Authenticity",
            description: "At Jemma Valley Ethiopia Tours, we prioritize genuine, culturally-rich travel experiences that allow our guests to engage with Ethiopia’s true essence",
            svgPath: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            ),
          },
        ].map((item, index) => (
          <div
            key={index}
            className="service-item grid gap-4 justify-items-center text-center md:flex-1 opacity-0"
            ref={(el) => (serviceItemsRef.current[index] = el)}
            onMouseEnter={(e) => handleHover(e)}
            onMouseLeave={(e) => handleHover(e, 1, 0)}
          >
            <div className="rounded-full border-8 border-[#56C596] p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 h-14"
              >
                {item.svgPath}
              </svg>
            </div>
            <h3 className="text-3xl font-bold">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Values;

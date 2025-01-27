import React, { useEffect, useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import anime from "animejs";
import DestinationHeader from "../components/DestinationHeader";

import axios from "axios";
import { Link } from "react-router-dom";
function Destination() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing option
      once: true, // Whether animation should happen only once
    });
  }, []);

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml1 .letter",
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i + 1),
    })
    .add({
      targets: ".ml1 .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700,
      offset: "-=875",
      delay: (el, i, l) => 80 * (l - i),
    })
    .add({
      targets: ".ml1",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get("https://dashboard.jemmavalleytour.com/api/home-destinations")
      .then((response) => {
        setDestinations(response.data); // Update state with the fetched data
        console.log(destinations.data, "API response data"); // Log the actual API response

      })
      .catch((error) => {
        console.error("There was an error fetching the destinations!", error);
      });
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <DestinationHeader />
      {/* Card Example */}
      <section class="bg-white mb-4">
        <div class="py-4 px-2 mx-auto max-w-screen-2xl sm:py-4 lg:px-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <Link
                to={`/destination-detail/${ destinations?.data?.[0]?.id}`}
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={`https://dashboard.jemmavalleytour.com/storage/${
                    destinations?.data?.[0]?.image || ""
                  }`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {destinations?.data?.[0]?.title}
                </h3>
              </Link>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <Link
                to={`/destination-detail/${ destinations?.data?.[1]?.id}`}
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src={`https://dashboard.jemmavalleytour.com/storage/${
                    destinations?.data?.[1]?.image || ""
                  }`}
                  alt={destinations?.data?.[1]?.title}
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {destinations?.data?.[1]?.title}
                </h3>
              </Link>
              <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <Link
                to={`/destination-detail/${ destinations?.data?.[2]?.id}`}
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={`https://dashboard.jemmavalleytour.com/storage/${
                      destinations?.data?.[2]?.image || ""
                    }`}
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    {destinations?.data?.[2]?.title}
                  </h3>
                </Link>
                <Link
                to={`/destination-detail/${ destinations?.data?.[3]?.id}`}
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={`https://dashboard.jemmavalleytour.com/storage/${
                      destinations?.data?.[3]?.image || ""
                    }`}
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    {destinations?.data?.[3]?.title}
                  </h3>
                </Link>
              </div>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <Link
                to={`/destination-detail/${ destinations?.data?.[4]?.id}`}
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={`https://dashboard.jemmavalleytour.com/storage/${
                    destinations?.data?.[4]?.image || ""
                  }`}
                  alt={destinations?.data?.[5]?.title}
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {destinations?.data?.[4]?.title}
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center mb-4">
        <Link
          className="bg-[#56C596] focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6"
          to="/about"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

export default Destination;

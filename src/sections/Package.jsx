import React, { useEffect, useState } from "react";

// Package Component
function Package({ packages }) {
  return (
    <div className="flex flex-col  items-center  w-full ">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-gray-800 my-8">
        Packages
      </h1>

      <div className="flex-col  justify-center mb-4  md:flex md:flex-row  gap-4 w-full   h-full  p-4">
        {packages.map((pkg, index) => (

          <div
            key={index}
            className="col-span-1 md:col-span-2 gap-6 max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <div className="relative">
              <img
                className="w-full h-64 object-cover"
                src={`https://dashboard.jemmavalleytour.com/storage/${pkg?.image || ''}`}
                alt={pkg.name}
              />

            </div>
            <div className="p-6">
              <h2 className="text-[18px] font-bold mb-2 text-gray-800">{pkg.name}</h2>
              <div className="text-gray-800 space-y-2">

                <p className="text-[15px] text-gray-500">
                  <span className="font-bold">Duration:</span> {pkg.duration}
                </p>
                {/* Tour Code */}
                <p className="text-[15px] text-gray-500">
                  <span className="font-bold">Tour code:</span> {pkg.tour_code}
                </p>
                <p className="text-[15px] text-gray-500">
                  <span className="font-semibold ">Destination:</span> {pkg.destination}
                </p>
                <p className="text-[15px] text-gray-500">
                  <span className="font-bold">Transportion:</span> {pkg.transport}
                </p>

              </div>
              <div className="mt-6  w-full flex justify-center items-center">
                {/* Read More Button */}
                <Link
                  to={`/package-detail/${pkg.id}`}
                  className="z-10 flex justify-center text-sm w-full bg-[#56C596] px-4 py-2 text-white rounded-md hover:bg-[#56C596] transition duration-300 ease-in-out"
                >
                  <span>Read More</span>
                </Link>
              </div>
            </div>


          </div>
        ))}
      </div>

      <div className="flex justify-center ">
        <Link
          className="bg-[#56C596] focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6"
          to="/packages"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

import axios from "axios";
import { Link } from "react-router-dom";

// Example usage of the Package component with dynamic data fetched from API
export default function App() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios
      .get("https://dashboard.jemmavalleytour.com/api/home-packages")
      .then((response) => {

        setPackages(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the packages!", error);
      });
  }, []);

  return <Package packages={packages} />;
}

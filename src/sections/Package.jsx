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
                src={`https://tour-dashboard.hakimethio.et/storage/${
                  pkg?.image || ""
                }`}
                alt={pkg.title}
              />
              {pkg.featured && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                  Featured
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm max-w-md mx-auto">
                <p className="text-blue-600 font-semibold text-sm italic">
                  Tour Code:{" "}
                  <span className="text-blue-800 font-bold">{pkg.code}</span>
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {pkg.title}
              </h2>
              <p className="text-gray-600 mb-4">{pkg.description}</p>

              <div className="flex justify-between items-center">
                <Link
                  to="book"
                  state={{ tourCode: pkg.code }}
                  className="px-7 py-2 bg-[#56C596] text-white font-semibold rounded-2xl shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
                >
                  Book Now
                </Link>
                <Link
                  to={`/package-detail/${pkg.id}`}
                  className="px-7 py-2 bg-indigo-500 text-white font-semibold rounded-2xl shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
                >
                  Detail
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
      .get("https://tour-dashboard.hakimethio.et/api/home-packages")
      .then((response) => {
        console.log(response.data.data, "here in this app");
        setPackages(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the packages!", error);
      });
  }, []);

  return <Package packages={packages} />;
}

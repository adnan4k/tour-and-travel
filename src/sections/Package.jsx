import React from 'react';

// Package Component
function Package({ packages }) {
    return (
        <div>
            {/* Title Section */}
            <h1 className="text-4xl font-bold text-center text-gray-800 my-8">Packages</h1>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-auto items-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-4">
    {packages.map((pkg, index) => (
        <div
            key={index}
            className="col-span-1 md:col-span-2 gap-6 max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105"
        >
            <div className="relative">
                <img
                    className="w-full h-64 object-cover"
                    src={pkg.imageUrl}
                    alt={pkg.title}
                />
                {pkg.featured && (
                    <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                        Featured
                    </div>
                )}
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{pkg.title}</h2>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
              
                <div className="flex justify-between items-center">
                    <button className="px-4 py-2 bg-[#56C596] text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    ))}
</div>

        </div>
    );
}

// Example usage of the Package component with dynamic data passed in
const samplePackages = [
    {
        title: "Discover Nature's Beauty",
        description:
            "Immerse yourself in the tranquil landscapes and breathtaking vistas of the natural world.",
        imageUrl:
            "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: 299,
        rating: 4.9,
        reviews: 128,
        featured: true,
    },
    {
        title: "Adventurous Escapes",
        description:
            "Explore the wild terrain and enjoy thrilling outdoor activities in remote locations.",
        imageUrl:
            "/assets/photos/shangul.jpg",
        price: 399,
        rating: 4.7,
        reviews: 200,
        featured: false,
    },
    {
        title: "Luxury Getaway",
        description:
            "Relax and unwind in world-class resorts offering ultimate comfort and luxury.",
        imageUrl:
            "/assets/photos/elephant.jpg",
        price: 599,
        rating: 5.0,
        reviews: 50,
        featured: true,
    },
];

export default function App() {
    return <Package packages={samplePackages} />;
}

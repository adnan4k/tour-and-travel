import React from "react";

function Gallery() {
    const images = [
        {
            src: "assets/photos/unkown.jpg",
            alt: "Image 1",
        },
        {
            src: "assets/photos/zebra.jpg",
            alt: "Image 2",
        },
        {
            src: "assets/photos/monkey.jpg",
            alt: "Image 3",
        },
        {    src:"assets/photos/elephant.jpg",
            alt: "Image 4",
        },
        { 
            src:"assets/photos/forest.jpg",
            alt: "Image 5",
        },
        {   
            src:"assets/photos/waterfall.jpg",
            alt: "Image 6",
        },
        {  
            src:"assets/photos/gates.jpg",
            alt: "Image 7",
        },
        { 
            src:"assets/photos/guy.jpg",
            alt: "Image 8",
        },
    ];

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold mb-4 my-8 text-center">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="group cursor-pointer relative">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;

import React from "react";

function Gallery() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Image 1",
        },
        {
            src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Image 2",
        },
        {
            src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Image 3",
        },
        {
            src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Image 4",
        },
        {
            src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Image 5",
        },
        {
            src: "https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxyaXZlcnxlbnwwfDB8fHwxNjk0MDk5ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Image 6",
        },
        {
            src: "https://images.unsplash.com/photo-1498855926480-d98e83099315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxyaXZlcnxlbnwwfDB8fHwxNjk0MDk5ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Image 7",
        },
        {
            src: "https://images.unsplash.com/photo-1502754400466-c87ff3039da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8cml2ZXJ8ZW58MHwwfHx8MTY5NDA5OTg4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
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

import React from 'react';

function EnjoymentVideo() {
    return (
        <div>
            <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
                {/* Video Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video
                        className="min-w-full min-h-full object-cover"
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                        type="video/mp4"
                        autoPlay
                        muted
                        loop
                    />
                    {/* Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
                </div>

                {/* Video Content */}
                <div className="z-10 space-y-2">
                    <h1 className="font-light text-6xl">Pure Enjoyment</h1>
                    <h3 className="font-light text-3xl">Brought to Life with TailwindCSS</h3>
                </div>
            </section>
        </div>
    );
}

export default EnjoymentVideo;

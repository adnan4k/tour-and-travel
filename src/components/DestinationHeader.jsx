import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

function DestinationHeader() {
    useEffect(() => {
        // Wrap every letter in a span
        const textWrapper = document.querySelector('.ml1 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        // Anime.js Timeline Animation
        anime.timeline({ loop: true })
            .add({
                targets: '.ml1 .letter',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: 'easeOutExpo',
                duration: 600,
                delay: (el, i) => 70 * (i + 1),
            })
            .add({
                targets: '.ml1 .line',
                scaleX: [0, 1],
                opacity: [0.5, 1],
                easing: 'easeOutExpo',
                duration: 700,
                offset: '-=875',
                delay: (el, i, l) => 80 * (l - i),
            })
            .add({
                targets: '.ml1',
                opacity: 0,
                duration: 1000,
                easing: 'easeOutExpo',
                delay: 1000,
            });
    }, []);

    return (
        <div>
            <h1 className="ml1 text-center text-5xl my-6 font-semibold text-[#264653]">
                <span className="letters">Destinations</span>
            </h1>
        </div>
    );
}

export default DestinationHeader;

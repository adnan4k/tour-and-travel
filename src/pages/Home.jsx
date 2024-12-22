import React from 'react'
import Hero from '../sections/Hero'
import Destination from '../sections/Destination'
import Values from '../sections/Values'
import WhyChooseUs from '../sections/WhyChooseUs'
import Package from '../sections/Package'
import Subscription from '../sections/Subscription'
import EnjoymentVideo from '../sections/Video'
import Gallery from '../sections/Gallery'

function Home() {
    return (
        <div>
            <div>
                <Hero />
                <Destination/>
                <Values />
                <EnjoymentVideo />
                <WhyChooseUs />
                {/* <Gallery /> */}
                <Package />
                <Subscription />
            </div>
        </div>
    )
}

export default Home
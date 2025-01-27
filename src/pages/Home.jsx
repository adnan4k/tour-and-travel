import React from 'react'
import Hero from '../sections/Hero'
import Destination from '../sections/Destination'
import Values from '../sections/Values'
import WhyChooseUs from '../sections/WhyChooseUs'
import Package from '../sections/Package'
import Subscription from '../sections/Subscription'
import EnjoymentVideo from '../sections/Video'
import Gallery from '../sections/Gallery'
import SliderSection from '../sections/SliderSection'

function Home() {
    return (
        <div>
            <div>
                <Hero />
                <Destination/>
                {/* <EnjoymentVideo /> */}
                <SliderSection/>
                <WhyChooseUs />
                {/* <Gallery /> */}
                <Package />
                <Gallery/>

                <Subscription />
            </div>
        </div>
    )
}

export default Home
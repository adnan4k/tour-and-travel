import React, { useEffect, useRef } from 'react';
import AboutHero from '../sections/AboutHero';
import Testimony from '../sections/Testimony';
import AboutUsSection from '../sections/AboutUsSection';
import Team from '../sections/Team';


function About() {
  
  

    return (
        <div>
          <AboutHero/>
          <Testimony/>
          <AboutUsSection/>
          <Team/>

        </div>
    );
}

export default About;

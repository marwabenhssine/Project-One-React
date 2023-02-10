import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Pricing from '../Pricing/Pricing';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../../Data'
import Review from '../Reviews/Reviews';

function Home() {
    return (
      <>
        {/* <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} /> */}
        <HeroSection {...homeObjThree} />
            <Pricing />
        <HeroSection {...homeObjFour} />
        <Review />
        
        
      </>
    );
}

export default Home
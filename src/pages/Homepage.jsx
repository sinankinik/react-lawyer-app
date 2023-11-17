import React from 'react'
import Slider from './../components/slider/Slider';
import WhoAreWe from './../components/whoAreWe/WhoAreWe';
import PracticeArea from './../components/practiceArea/PracticeArea';
import Benefits from './../components/benefits/Benefits';


const Homepage = () => {
    return (
        <>
            <Slider />
            <WhoAreWe />
            <PracticeArea />
            <Benefits />
        </>
    )
}

export default Homepage
import React from 'react'
import AboutBanner from './AboutBanner'
import AboutUs from './AboutUs'
import WhatWeDo from './WhatWeDo'
import Team from '../Home/Team'
import Carousel from '../../components/Carousel'
import Pricing from './Pricing'

const About = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutUs/>
      <WhatWeDo/>
      <Team/>
      <Carousel/>
      <Pricing/>
    </div>
  )
}

export default About
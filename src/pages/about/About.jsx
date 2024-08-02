import React from 'react'
import AboutUs from './AboutUs'
import WhatWeDo from './WhatWeDo'
import Team from '../Home/Team'
import Carousel from '../../components/Carousel'
import Pricing from './Pricing'
import Faq from './Faq'
import ClientLogo from '../../components/ClientLogo'
import Banners from '../../components/Banners'
import AboutBannerImg from '../../assets/images/about.png'


const About = () => {
  return (
    <div>
      <Banners
      backgroundImage={AboutBannerImg}
      title="About Us "
      subTitle="About Our Logistics"
      customMargin={true}
      
      
      />
      <AboutUs/>
      <WhatWeDo/>
      <Team/>
      <Carousel/>
      <Pricing/>
      <Faq/>
      <ClientLogo/>
    </div>
  )
}

export default About
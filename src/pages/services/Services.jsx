import React from 'react'
import ServicesBannerImg from '../../assets/images/about.png';
import WhatWeDo from '../about/WhatWeDo';
import Goodness from './Goodness';
import Carousel from '../../components/Carousel';
import Count from '../../components/Count';
import Banners from '../../components/Banners';

const Services = () => {
  return (
    <div>
      <Banners
      backgroundImage={ServicesBannerImg}
      title="Services "
      subTitle="Our Logistics Services"
      customMargin={true}
      
      
      />
        <WhatWeDo/>
        <Goodness/>
        <Carousel/>
        <Count/>
    </div>
  )
}

export default Services
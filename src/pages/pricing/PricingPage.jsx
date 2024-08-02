import React from 'react'
import Pricing from '../about/Pricing'
import Carousel from '../../components/Carousel'
import PricingBannerImg from "../../assets/images/Pricingbanner.png"
import Banners from '../../components/Banners'

const PricingPage = () => {
  return (
    <div>
        
      <Banners
      backgroundImage={PricingBannerImg}
      title="Price "
      subTitle="Our Best Price"
      customMargin={true}
      
      
      />
        <Pricing/>
        <Carousel/>
    </div>
  )
}

export default PricingPage
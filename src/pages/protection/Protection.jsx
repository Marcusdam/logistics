import React from 'react'
import ProtectionBannerImg from '../../assets/images/protection.png'
import ProtectionContent from './ProtectionContent'
import Banners from '../../components/Banners'

const Protection = () => {
  return (
    <div>
      <Banners
      backgroundImage={ProtectionBannerImg}
      title="Password "
      subTitle="Password Protection"
      customMargin={true}
      
      
      />
        <ProtectionContent/>
    </div>
  )
}

export default Protection
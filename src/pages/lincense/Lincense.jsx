import React from 'react'
import LincenseBannerimg from '../../assets/images/Errorbanner.png'
import LincenseContent from './LincenseContent'
import Banners from '../../components/Banners'

const Lincense = () => {
  return (
    <div>
      <Banners
      backgroundImage={LincenseBannerimg}
      title="Lincense "
      subTitle="All Assets Liecenses"
      customMargin={true}
      isHome={false}
      />
        <LincenseContent/>
    </div>
  )
}

export default Lincense
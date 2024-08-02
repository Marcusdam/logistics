import React from 'react'
import LogBannerImg from '../../assets/images/Errorbanner.png'
import LogContent from './LogContent'
import Banners from '../../components/Banners'

const Log = () => {
  return (
    <div>
         <Banners
      backgroundImage={LogBannerImg}
      title="Update "
      subTitle="Change Log"
      customMargin={true}
      isHome={false}
      />
        <LogContent/>
    </div>
  )
}

export default Log
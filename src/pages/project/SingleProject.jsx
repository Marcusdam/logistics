import React from 'react'
import SingleBannerImg from '../../assets/images/about.png'
import SingleProjectDetail from './SingleProjectDetail'
import WareHouse from './WareHouse'
import Video from './ProjectVideo'
import RelatedProject from './RelatedProject'
import Banners from '../../components/Banners'

const SingleProject = () => {
  return (
    <div>
     <Banners
      backgroundImage={SingleBannerImg}
      title="WareHouse Transportation "
      subTitle="Air Cargo Transportation"
      customMargin={true}
      
      
      />
    <SingleProjectDetail/>
    <WareHouse/>
    <Video/>
    <RelatedProject/>
   
    </div>
  )
}

export default SingleProject
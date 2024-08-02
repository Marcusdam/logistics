import React from 'react'
import ProjectBannerImg from '../../assets/images/about.png'
import Gallery from './Gallery'
import Count from '../../components/Count'
import Banners from '../../components/Banners'

const Projects = () => {
  return (
    <div>
      <Banners
      backgroundImage={ProjectBannerImg}
      title="Gallery "
      subTitle="Our Projects"
      customMargin={true}
      
      
      />
      <Gallery/>
      <Count/>
    </div>
  )
}

export default Projects
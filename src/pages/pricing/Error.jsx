import React from 'react'
import { Link } from 'react-router-dom'
import ErrorBannerImg from '../../assets/images/about.png'
import ErrorMessage from './ErrorMessage'
import Banners from '../../components/Banners'

const Error = () => {
  return (
    <div>
      <Banners
      backgroundImage={ErrorBannerImg}
      title="Gallery "
      subTitle="Our Projects"
      customMargin={true}
      
      
      />
      <ErrorMessage/>
        
    </div>
  )
}

export default Error
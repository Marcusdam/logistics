import React from 'react'
import SingleBlogBannerImg from '../../assets/images/single.png'
import SingleBlogPost from './SingleBlogPost'
import Banners from '../../components/Banners'

const SingleBlog = () => {
  return (
    <div>
      <Banners
      backgroundImage={SingleBlogBannerImg}
      title="Blog "
      subTitle="How technology can help redraw the supply chain map"
      customMargin={true}
      />
        <SingleBlogPost/>

    </div>
  )
}

export default SingleBlog
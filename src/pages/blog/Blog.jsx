import React from 'react'
import BlogBannerImg from '../../assets/images/blog.png'
import BlogPost from './BlogPost'
import Banners from '../../components/Banners'

const Blog = () => {
  return (
    <div>
      <Banners
      backgroundImage={BlogBannerImg}
      title="Blog "
      subTitle="Our Latest News"
      customMargin={true}
      isHome={false}
      />
        <BlogPost/>
    </div>
  )
}

export default Blog
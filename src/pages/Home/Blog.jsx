import React from 'react'
import BlogContent from './BlogContent'

const Blog = () => {
  return (
    <section>
        <div className='max-w-[1024px] mx-auto mt-[100px] px-4'>
        <div className="relative bg-[#E8E8E8] bg-opacity-70 text-white w-[80px] mt-10 mx-auto">
      <div
        className="absolute left-0 top-0 h-full w-1"
        style={{
          background:
            "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
        }}
      ></div>
      <div className=''>
        <p className="font-rubik text-[#1C1F35] pl-4 text-[12px] ">
        Our Blog
        </p>
      </div>
    </div>
    <div className='flex justify-center items-center'>
      <h1 className='text-[#1C1F35] text-[35px] font-bold'>Our Latest News</h1>
    </div>
            <BlogContent/>

        </div>
    </section>
  )
}

export default Blog
import React from 'react'
import Carousel from '../../components/Carousel'

const Testimonial = () => {
  return (
    <div className='max-w-[1024px] mx-auto h-[100vh] mt-[100px] px-4'>
        <div className="relative bg-[#E8E8E8] bg-opacity-70 text-white w-[100px] h-[23px]  mt-10">
            <div
              className="absolute left-0 top-0 h-full w-1"
              style={{
                background:
                  "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
              }}
            ></div>
            <div className='bg-[#E8E8E8]'>
            <p className="font-rubik text-[#1C1F35] pl-4 text-[14px] inline-block">
            Testimonials
            </p>
            </div>
          </div>
          <div className='pt-2'>
            <h1 className='font-rubik text-[35px] leading-tight text-[#1C1F35]'>What Our Customer Say</h1>
          </div>
        <div>
            <Carousel/>

        </div>
    </div>
  )
}

export default Testimonial
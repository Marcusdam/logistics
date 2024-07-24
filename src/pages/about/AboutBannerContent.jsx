import React from 'react'

const AboutBannerContent = () => {
  return (
    
    <>
        <div className='max-w-[1024px] mx-auto px-4 md:px-0'>
        <div className=' pt-[80px] mt-10'>
        <div className="relative  bg-opacity-70 text-white   mt-10">
            <div
              className="absolute left-0 top-0 h-full w-1"
              style={{
                background:
                  "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
              }}
            ></div>
            <div className='bg-[#041C37] inline-block'>
            <p className="font-rubik text-white px-2 text-[14px]">
              About Us
            </p>
            </div>
          </div>
          <div>
            <h1 className='text-[60px] font-rubik font-semibold text-white'>About Our Logistics</h1>
          </div>
        </div>
        </div>
    </>
  )
}

export default AboutBannerContent
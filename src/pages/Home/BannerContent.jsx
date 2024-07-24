import React from 'react'
import { Link } from 'react-router-dom'

const BannerContent = () => {
  return (
    <div className='max-w-[1024px] mx-auto pt-10 px-4 md:px-0'>
        <div className=' flex-wrap justify-center items-justify h-[25px] '>
            
        <div className='relative bg-[#041C37] bg-opacity-70 text-white max-w-[244px] h-[23px] w-full mt-10'>
      <div 
        className='absolute left-0 top-0 h-full w-1'
        style={{
          background: 'linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)'
        }}
      ></div>
      <p className='font-rubik pl-4 text-[14px] inline-block'>Logistics & Supply Chain Solutions</p>
    </div>
            <div className=''>
                <h2 className='font-rubik font-bold leading-tight text-[40px] md:text-[60px] text-white '>Your Gateway <br /> to  any Destination <br /> in the World</h2>
                <p className='text-white text-[12px] md:text-[16px] inline-'>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu 
                 no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam
                interdum nulla, sed laoreet risus lectus. </p>
                <div className='mt-6'>
                    <Link to={'/'} className=' font-rubik py-2 px-5 md:py-4 md:px-10 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] p-4 '>Explore More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerContent
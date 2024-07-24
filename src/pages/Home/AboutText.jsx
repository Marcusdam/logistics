import React from 'react';
import DeliverImg from '../../assets/images/Icon (11).png';
import CostImg from '../../assets/images/Icon (10).png';
import AboutImg1 from '../../assets/images/Image (1).jpg';

import AboutImg2 from '../../assets/images/Photo (2).png';
import Counter from './Counter';

const AboutText = () => {
  return (
    <div className='flex flex-col -mt-[100px] relative'>
        <div className='max-w-[1024px] mx-auto  bg-white p-10 left-0 right-0  '>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='w-4/5 ml-3'>
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
              Why Us
            </p>
            </div>
          </div>
          <div>
            <h1 className=" font-rubik text-[24px] leading-tight text-[#1C1F35]  font-bold ">
            We provide full range global logistics solution
            </h1>
            <p className='text-[14px]'>
                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. <br /> <br /> 

                Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            </p>
          </div>

          <div className='space-y-3 mt-8 '>
            <div className='flex items-center gap-4'>
                <div>
                <img src={DeliverImg} alt="img"  className='w-[48px] h-[48px] '/>
                </div>
                <div>
                <h1 className='text-[#1C1F35] font-semibold'>Delivery on Time</h1>
                </div>

            </div>
            <div className='flex items-center gap-4'>
                <div>
                <img src={CostImg} alt="img" className='w-[48px] h-[48px]'/>
                </div>
                <div>
                <h1 className='text-[#1C1F35] font-semibold'>Optimized Travel Cost</h1>
                </div>

            </div>
          </div>
        </div>
        <div className=' relative'>
            <div className=' pt-8 md:pt-0'>
                <img src={AboutImg1} alt="img" className='h-[300px] w-full ' />
            </div>
            <div className=' absolute -bottom-24 left-0   md:-left-28      p-4 bg-white z-0'>
                <img src={AboutImg2} alt="img"  className='w-full'/>
            </div>
        </div>

        </div>

        <Counter/>
    </div>
    
    </div>
    
    
    
  )
}

export default AboutText
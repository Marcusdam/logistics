import React from 'react'
import AboutImg1 from "../../assets/images/about2.png"
import AboutImg2 from "../../assets/images/about 3.png"
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='max-w-[1024px] mx-auto mt-[100px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-0'>
            <div className='relative'>
                <img src={AboutImg1} alt="" className='w-[80%]' />
                <div className='absolute -bottom-20 right-0  bg-white p-3'>
                <img src={AboutImg2} alt="" className='w-[80%] h-[30%]' />
                </div>

            </div>

            <div>
            <div className="relative inline-block px-2 bg-[#E8E8E8] bg-opacity-70 text-white  mt-10 ">
              <div
                className="absolute left-0 top-0 h-full w-1"
                style={{
                  background:
                    "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
                }}
              ></div>
              
                <p className="font-rubik text-[#1C1F35]  text-[12px] inline-block">
                About Us
                </p>
              
            </div>
            <div>
                <h1 className='tetxt-[35px] font-rubik text-[#1C1F35] font-semibold py-2'>Our Company Overview</h1>
                <p className='text-[16px] text-[#666C89] font-krub'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 pt-4'>
                    <div><Link className='bg-[#FFB82B] px-4 py-2 font-semibold'>Our Approch</Link></div>
                    <div><Link className='bg-[#F4F4F4] px-4 py-2 font-semibold'>Our Approch</Link></div>
                    <div><Link className='bg-[#F4F4F4] px-4 py-2 font-semibold'>Our Approch</Link></div>
                </div>
                <div className='py-4'>
                    <p className='text-[16px] text-[#666C89] font-krub'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.</p>
                    <div className='pt-4'>
                        <Link className='bg-[#1F2A69] px-4 py-2 text-white'>Learn More</Link>
                    </div>
                
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default AboutUs
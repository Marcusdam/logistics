import React from 'react'
import Box from '../assets/images/Pattern.png'


const Count = () => {
  return (
    <div className='py-20'>
        <div className='grid lg:grid-cols-4 md:border-t md:border-b md:mx-20 mt-10'>
                
                <div className='flex items-center gap-4 border-b border-l md:border-l-0 p-5'>
                    <div>
                        <span className='text-[30px] text-[#1C1F35] font-rubik font-bold'>24</span>
                    </div>
                    <div className='flex items-center gap-2'>
                    <img src={Box} alt="" /> 
                        <h1 className='text-[#1C1F35] '>Our Location</h1>
                    </div>
                </div>
                <div className='flex items-center gap-4 border-b md:border-l p-5'>
                    <div>
                        <span className='text-[30px] text-[#1C1F35] font-rubik font-bold'>1298</span>
                    </div>
                    <div className='flex items-center gap-2'>
                    <img src={Box} alt="" /> 
                        <h1 className='text-[#1C1F35] '>Delivered Packages</h1>
                    </div>
                </div>
                <div className='flex items-center gap-4 border-b border-l p-5'>
                    <div>
                        <span className='text-[30px] text-[#1C1F35] font-rubik font-bold'>3594</span>
                    </div>
                    <div className='flex items-center gap-2'>
                    <img src={Box} alt="" />
                        <h1 className='text-[#1C1F35] '>Satisfied Clients</h1>
                    </div>
                </div>
                <div  className='flex items-center gap-4 border-b border-l p-5'>
                    <div  className='text-[30px] text-[#1C1F35] font-rubik font-bold'>
                        <span>247+</span>
                    </div>
                    <div className='flex items-center gap-2'>
                    <img src={Box} alt="" />
                        <h1 className='text-[#1C1F35] '>Owned Vehicles</h1>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Count
import React from 'react'

const Counter = () => {
  return (
    <div className=' md:max-w[1024px] mx-auto mt-[100px] pb-20 sm:pb-0'>
         <div className='grid grid-cols-2 gap-10 border-t border-b items-center  '>
            <div  className='flex p-2 gap-8 items-center justify-center'>
                <span className='text-[16px] sm:text-[40px] font-rubik text-[#1C1F35]  font-bold'>1294</span>
                <div>
                    <p className='font-semibold text-[10px] md:text-[16px]'>Delivered Packages</p>
                </div>
            </div>
            <div className='flex p-2 gap-8 items-center justify-center border-l'>
                <span className='text-[16px] sm:text-[40px] font-rubik text-[#1C1F35] font-bold'>3594</span>
                <div>
                    <p  className='font-semibold text-[10px] md:text-[16px]'>Satisfied Clients</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter
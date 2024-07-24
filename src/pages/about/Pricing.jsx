import React from 'react'

const Pricing = () => {
  return (
    <>
    <section className='max-w-[1024px] mx-auto mt-[100px]'>
        <div className='flex flex-col items-center'>
  <div className="relative inline-block px-2 bg-[#E8E8E8] bg-opacity-70 text-white mt-10">
    <div
      className="absolute left-0 top-0 h-full w-1"
      style={{
        background:
          "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
      }}
    ></div>

    <div className="flex justify-center items-center h-full">
      <p className="font-rubik text-[#1C1F35] text-[12px] inline-block">
        Pricing
      </p>
    </div>
  </div>
  <div>
    <h1 className='text-[#1C1F35] text-[35px] font-rubik font-semibold py-2 text-center'>
    Our Best Pricing
    </h1>
  </div>
</div>

        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='bg-[#F4F4F4] text-[#1C1F35] font-rubik  p-8'>
                    <div className=''>
                        <h1 className=' flex justify-center text-[30px] font-semibold '>Basic</h1>
                        <div className='flex justify-center'>
                        <p className=' text-[60px] text-[#1C1F35] '>$39<span className='text-[22px] text-[#1C1F35] font-rubik'>/ month</span></p>
                        </div>
                    </div>
                    <div >
                        <div className='flex justify-center py-4'>
                        <ul className='text-[16px]'>
                            <li className='border-b border-t p-4'>Single Truck</li>
                            <li className='border-b p-4'>Full Insurance</li>
                            <li className='border-b p-4'>Unlimited</li>
                            <li className='border-b p-4'>Real-time rate shopping</li>
                        </ul>
                        </div>
                        <div className='flex justify-center py-4'>
                            <button className='px-4 py-2 bg-[#1F2A69] text-white font-krub'>Choose Plan</button>
                        </div>
                    </div>
                </div>
                <div className='text-[#F4F4F4] bg-[#1C1F35] font-rubik  p-8'>
                    <div className=''>
                        <h1 className=' flex justify-center text-[30px] font-semibold '>Standard</h1>
                        <div className='flex justify-center'>
                        <p className=' text-[60px] text-white '>$59<span className='text-[22px] '>/ month</span></p>
                        </div>
                    </div>
                    <div >
                        <div className='flex justify-center py-4'>
                        <ul className='text-[16px] '>
                            <li className='border-b border-t p-4'>Single Truck</li>
                            <li className='border-b p-4'>Full Insurance</li>
                            <li className='border-b p-4'>500 Km</li>
                            <li className='border-b p-4'>Real-time rate shopping</li>
                        </ul>
                        </div>
                        <div className='flex justify-center py-4'>
                            <button className='px-4 py-2 bg-yellow-300 text-[#1C1F35]'>Choose Plan</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F4F4F4] text-[#1C1F35] font-rubik  p-8'>
                    <div className=''>
                        <h1 className=' flex justify-center text-[30px] font-semibold '>Premium</h1>
                        <div className='flex justify-center'>
                        <p className=' text-[60px] text-[#1C1F35] '>$89<span className='text-[22px] text-[#1C1F35] font-rubik'>/ month</span></p>
                        </div>
                    </div>
                    <div >
                        <div className='flex justify-center py-4'>
                        <ul className='text-[16px]'>
                            <li className='border-b border-t p-4'>Single Truck</li>
                            <li className='border-b p-4'>Full Insurance</li>
                            <li className='border-b p-4'>Unlimited</li>
                            <li className='border-b p-4'>Real-time rate shopping</li>
                        </ul>
                        </div>
                        <div className='flex justify-center py-4'>
                            <button className='px-4 py-2 bg-[#1F2A69] text-white font-krub'>Choose Plan</button>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Pricing
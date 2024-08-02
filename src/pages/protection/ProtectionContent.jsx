import React from 'react'
import { Link } from 'react-router-dom'

const ProtectionContent = () => {
  return (
    <div className='max-w-[1024px] mx-auto px-8 lg:px-0 py-20'>
        <div className=' bg-[#091242] h-[400px] flex justify-center mt-20'>
        <div className=' p-10 mt-20'>
                <div>
                    <h1 className='text-white text-[30px] font-bold'>Enter Password</h1>
                </div>
                <div>
                    <form action="" className='flex justify-between items-center py-4'>
                        <input type="text" placeholder='Enter Your Password ' className='p-3 bg-[#091242] border border-[#999999] font-bold'/>
                        <Link className='bg-yellow-400 px-4 py-3'>Submit</Link>
                    </form>
                </div>

            </div>
        
    </div>
    </div>
    
    
  )
}

export default ProtectionContent
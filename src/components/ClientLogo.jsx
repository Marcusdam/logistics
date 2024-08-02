import React from 'react';
import Norto from '../assets/images/Norto.png'
import TheSand from '../assets/images/TheSand.png'
import Point from '../assets/images/Point.png'
import Studio from '../assets/images/1.png'

const ClientLogo = () => {
  return (
    <div className='max-w-[1024px] mx-auto px-8 lg:px-0 py-20'>
        <div className='grid lg:grid-cols-4 mt-10'>
            <div>
                <img src={Studio} alt="" className='w-full' />
            </div>
            <div>
                <img src={Norto} alt="" className='border border-gray-400 w-full'/>
            </div>
            <div>
                <img src={Point} alt="" className='border border-gray-400 w-full'/>
            </div>
            <div>
                <img src={TheSand} alt=""className='border border-gray-400 w-full' />
            </div>
        </div>
    </div>
  )
}

export default ClientLogo
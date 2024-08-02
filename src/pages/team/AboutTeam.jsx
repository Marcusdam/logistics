import React from 'react';
import Team1 from '../../assets/images/team 1.png';
import Team2 from '../../assets/images/team 2.png';
import Sandglass from '../../assets/images/sandglass.png'
import Contact from '../../assets/images/contact.png'
import Norto from '../../assets/images/Norto.png'
import TheSand from '../../assets/images/TheSand.png'
import Point from '../../assets/images/Point.png'
import Studio from '../../assets/images/1.png'
import ClientLogo from '../../components/ClientLogo';

const AboutTeam = () => {
  return (
    <div className='max-w-[1024px] mx-auto mt-[100px] px-8 lg:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-0'>
            <div className='relative'>
                <img src={Team2} alt="" className='w-[80%]' />
                <div className='absolute -bottom-20 right-10 w-[50%] bg-white p-3'>
                <img src={Team1} alt="" className='' />
                </div>

            </div>

            <div className='mt-10 lg:mt-0'>
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
                <h1 className='tetxt-[35px] font-rubik text-[#1C1F35] font-semibold py-2'>Why Choose Us</h1>
                <p className='text-[16px] text-[#666C89] font-krub'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>

            <div>
                <div className=' pt-10'>
                    <div className='flex justify-between'>
                        <div>
                            <img src={Contact} alt="" />
                            <h1 className='tetxt-[35px] font-rubik text-[#1C1F35] font-semibold py-2'>Our Vission</h1>
                           <p className='text-[16px] text-[#666C89] font-krub'>
                           Leverage agile frameworks to provide a robust synopsis for strategy foster.
                           </p>
                        </div>
                        <div>
                            <img src={Sandglass} alt="" />
                            <h1 className='tetxt-[35px] font-rubik text-[#1C1F35] font-semibold py-2'>Estimate Shipping</h1>
                           <p className='text-[16px] text-[#666C89] font-krub'>
                           Leverage agile frameworks to provide a robust synopsis for strategy foster.
                           </p>
                        </div>
                        </div>                    
                </div>
                
            </div>

            </div>
        </div>
        <ClientLogo/>
        
    </div>
  )
}

export default AboutTeam
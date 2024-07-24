import React from 'react'
import logo from "../.././assets/images/Logo (8).png";
import { GoClock } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

const NavHeader = () => {
  return (
    <div className='flex justify-between  h-[68px] gap-24 pt-[22px] md:pt-[40px] px-4 '>
      <div className='logo'>
        <img className='h-[36px]' src={logo} alt='logo'/>

      </div>

      <div className='hidden lg:grid  lg:grid-cols-3 gap-8 text-[12px] font-krub'>
        <div className='flex items-center gap-4'>
        <div  className='bg-[#111C55] text-[#F6B426]  rounded-full p-4'>
        <GoClock  className='w-[22px] h-[22px]'/>
        </div>

          <div>
          <p>Mon - Sat 9.00 - 18.00 <br /> Sunday Closed</p>
          </div> 
        </div>

        <div className='flex items-center gap-4'>
        <div className='bg-[#111C55] text-[#F6B426]  rounded-full p-4'>
        <AiOutlineMail className='w-[22px] h-[22px]' />
        </div>
        
          <div>
            <p>Email <br /> contact@logistics.com</p>
            </div>
        </div>

        <div className='flex items-center  gap-4'>
        <div className='bg-[#111C55] text-[#F6B426]  rounded-full p-4'>
        <IoCallOutline className='w-[22px] h-[22px]'/>
        </div>
          <div>
          <p>Call Us <br /> (00) 112 365 489</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavHeader
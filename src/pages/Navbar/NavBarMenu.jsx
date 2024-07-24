import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { GoChevronDown, GoClock } from "react-icons/go";
import { IoCallOutline, IoCloseOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import logo from "../.././assets/images/Logo (8).png";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { AiOutlineMail } from 'react-icons/ai';


const NavBarMenu = () => {
  const [nav, setNav] = useState(false);

  const HandleClick = ()=>{
    setNav(!nav)
  }
    return (
    <div className='max-w-[1024px] mx-auto flex justify-between  text-white text-[14px]'>
      <div className='nav'>
        <ul className='hidden lg:flex justify-between gap-4 pt-3'>
          <Link to={'/'} className='cursor-pointer'>Home</Link>
          <Link to={'/about'} className='cursor-pointer'>About</Link>
          <Link>
      <Menu>
        <MenuButton className='inline-flex items-center gap-1'>
          Projects
          <GoChevronDown className="size-4 " />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 rounded-md border border-white/5 bg-[#111C55] p-1 mt-4 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              {/* <PencilIcon className="size-4 fill-white/30" /> */}
              Edit
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              {/* <Square2StackIcon className="size-4 fill-white/30" /> */}
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              {/* <ArchiveBoxXMarkIcon className="size-4 fill-white/30" /> */}
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              {/* <TrashIcon className="size-4 fill-white/30" /> */}
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </Link>
          {/* <li>Projects</li> */}
          <Link to={'/contact'} className='cursor-pointer'>Contact</Link>
        </ul>

      </div>
      <div >
        <div className='hidden lg:flex justify-center gap-[50px] '>
          <ul className='flex justify-between gap-4 pt-3'>
            <li><FaInstagram  className='text-xl'/></li>
            <li><CiFacebook className='text-xl' /></li>
            <li><CiTwitter  className='text-xl'/></li>
            <li><CiLinkedin className='text-xl' /></li>
          </ul>

          <div>
            <p className='bg-white h-[50px] text-black pt-3 px-8 text-[12px]' >Request Quote</p>
          </div>
          
        </div>
      
      
      
      
      </div>
      <div className=' flex  justify-between gap-20 md:hidden'>
      <div className='flex justify-center  gap-6'>
          <ul className='flex justify-between gap-4 pt-3'>
            <li><FaInstagram  className='text-xl'/></li>
            <li><CiFacebook className='text-xl' /></li>
            <li><CiTwitter  className='text-xl'/></li>
            <li><CiLinkedin className='text-xl' /></li>
          </ul>

          <div>
            <p className='bg-white h-[50px] text-black pt-3 px-8 text-[12px]' >Request Quote</p>
          </div>
          
        </div>
      <div onClick={HandleClick} className='block md:hidden pr-8'>
         {nav ? <IoCloseOutline size={50}/>: <IoMenuOutline size={50}/> }

      </div>
      </div>
      
      <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#111C55] ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
            
            <div className='px-8 pt-8'>
            <img src={logo} alt="" />
            </div>
            <div className='mt-3'><hr /></div>
            <ul className='p-8 text-xl flex flex-col'>
              <Link to={'/'} className='p-2 hover:bg-white/10 rounded-md'>Home</Link>
              <Link to={'/about'} className='p-2 hover:bg-white/10 rounded-md'>About</Link>
              <Link to={'/projec'} className='p-2 hover:bg-white/10 rounded-md'>Project</Link>
              <Link to={'/contact'} className='p-2 hover:bg-white/10 rounded-md'>Contact</Link>
              <ul className='flex justify-between pt-3'>
            <li><FaInstagram  className='text-2xl hover:text-yellow-600'/></li>
            <li><CiFacebook className='text-2xl hover:text-yellow-600' /></li>
            <li><CiTwitter  className='text-2xl hover:text-yellow-600'/></li>
            <li><CiLinkedin className='text-2xl hover:text-yellow-600' /></li>
          </ul>

            </ul>
            
        <div className='flex items-center pl-4 '>
        <div  className='bg-[#111C55] text-[#F6B426]  rounded-full p-4'>
        <GoClock  className='w-[22px] h-[22px]'/>
        </div>

          <div>
          <p>Mon - Sat 9.00 - 18.00 <br /> Sunday Closed</p>
          </div> 
        </div>

        <div className='flex items-center pl-4 '>
        <div className='bg-[#111C55] text-[#F6B426]  rounded-full p-4'>
        <AiOutlineMail className='w-[22px] h-[22px]' />
        </div>
        
          <div>
            <p>Email <br /> contact@logistics.com</p>
            </div>
        </div>

        <div className='flex items-center pl-4'>
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

export default NavBarMenu
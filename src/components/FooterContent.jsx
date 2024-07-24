import React from 'react'
import logo from "../assets/images/Logo (8).png";
import { AiOutlineMail } from 'react-icons/ai';
import { IoCallOutline } from 'react-icons/io5';
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci';
import {Link} from 'react-router-dom'

const FooterContent = () => {
  return (
    <div>
        <div className='max-w-[1024px] mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white px-4 py-8">
      <div>
        <div className='mb-8'>
        <img className="h-[36px]" src={logo} alt="logo" />
        </div>

        <div className="flex flex-col mt-4">
          <p className="text-white">
            Leverage agile frameworks to provide a robust synopsis for strategy collaborative thinking to further the overall value proposition.
          </p>
          <div className="flex flex-col gap-4 text-[14px] pt-4 font-krub">
            <div className="flex items-center gap-4">
              <div className="bg-[#111C55] text-[#F6B426] rounded-full p-4">
                <AiOutlineMail className="w-[22px] h-[22px]" />
              </div>
              <div>
                <p>Email <br /> contact@logistics.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#111C55] text-[#F6B426] rounded-full p-4">
                <IoCallOutline className="w-[22px] h-[22px]" />
              </div>
              <div>
                <p>Call Us <br /> (00) 112 365 489</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='ml-0 md:ml-[40px]'>
        <div>
            <h1 className="text-[25px] mb-8">Pages</h1>
            </div>
        
          <div className='flex flex-col space-y-4'>
          <Link>About Us</Link>
          <Link>Our Team</Link>
          <Link>Our Project</Link>
          <Link>Pricing</Link>
          <Link>Contact</Link>
          </div>
        
      </div>

      <div>
       <div>
       <h1 className="text-[25px] mb-8">Utility</h1>
       </div>
        
        <div className='flex flex-col space-y-4'>
        <Link>Style Guide</Link>
          <Link>Changelog</Link>
          <Link>Linkcenses</Link>
          <Link>Protected</Link>
          <Link>Not Found</Link>
        </div>
        
      </div>

      <div>
        <h1 className="text-[25px] mb-8">Subscribe</h1>
        <div className=" space-y-4 ">
          <form action="">
            <input 
              type="text" 
              placeholder="Email here*" 
              className="p-2 mb-8 w-full rounded border border-gray-300 focus:outline-none focus:border-blue-500" 
            />
            <div className='block md:flex items-center gap-4 '>
            <button
              type="submit"
              className=" inline-flex items-center text-[#23212A] px-4 py-2 mb-4 md:mb-0 font-rubik bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] "
            >
              Send Now
            </button>
            <div className="flex gap-4">
            <span><CiFacebook className="text-xl" /></span>
            <span><CiTwitter className="text-xl" /></span>
            <span><CiLinkedin className="text-xl" /></span>
          </div>
            </div>
          </form>

          
        </div>
      </div>
    </div>

      

        </div>
    </div>
  )
}

export default FooterContent
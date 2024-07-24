import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { GoClock } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import Photo1 from "../../assets/images/1.png"
import Photo2 from "../../assets/images/2.png"
import Photo3 from "../../assets/images/3.png"
import Photo4 from "../../assets/images/4.png"


const ContactContent = () => {
    
  return (
    <div className="max-w-[1024px] mx-auto " >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center pt-10 m-4 md:m-0">
        <div className="space-y-2">
          
            <div className="relative inline-block px-2 bg-[#E8E8E8] bg-opacity-70 text-white  mt-10 ">
              <div
                className="absolute left-0 top-0 h-full w-1"
                style={{
                  background:
                    "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
                }}
              ></div>
              
                <p className="font-rubik text-[#1C1F35]  text-[12px] inline-block">
                  Contact
                </p>
              
            </div>
            <div className="">
            <h1 className="text-[35px] text-white font-rubik">Get in touch with us</h1>
            <p className="text-white text-[16px]">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>

            </div>
            <div>
        <div className='flex flex-col gap-4 text-[14px] pt-2 text-white font-krub'>
        <div className='flex items-center gap-4 '>
        <div  className='bg-[#111C55] text-[#F6B426]  rounded-full p-4'>
        <GoClock  className='w-[22px] h-[22px]'/>
        </div>

          <div>
          <p>Mon - Sat 9.00 - 18.00 <br /> Sunday Closed</p>
          </div> 
        </div>

        <div className='flex items-center font-krub gap-4'>
        <div className='bg-[#111C55] text-[#F6B426]  rounded-full p-4'>
        <AiOutlineMail className='w-[22px] h-[22px]' />
        </div>
        
          <div>
            <p>Email <br /> contact@logistics.com</p>
            </div>
        </div>

        <div className='flex items-center font-krub  gap-4'>
        <div className='bg-[#111C55] text-[#F6B426]  rounded-full p-4'>
        <IoCallOutline className='w-[22px] h-[22px]'/>
        </div>
          <div>
          <p>Call Us <br /> (00) 112 365 489</p>
          </div>
        </div>

      </div>

            </div>
          
        </div>
        <div className="form">
        <div className="max-w-lg mx-auto p-4 ">
      
      <form className=" space-y-4">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="mt-1 block w-full px-3 py-2 border border-[#4E5683] bg-[#091242] focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Your Name*"/>
          <input className="mt-1 block w-full px-3 py-2 border border-[#4E5683] bg-[#091242] focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Eamil*"/>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="mt-1 block w-full px-3 py-2 border border-[#4E5683] bg-[#091242] focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Phone Number*"/>
          <input className="mt-1 block w-full px-3 py-2 border border-[#4E5683] bg-[#091242] focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="City*"/>
        </div>
        
        <div>
          
          <textarea className="mt-1 block w-full h-[154px] px-3 py-2 border border-[#4E5683] bg-[#091242] focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Your Message*"/>
        </div>
        <div>
          <Link to={'/'}
            type="submit"
            className="inline-flex items-center px-4 py-2 font-rubik bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] focus:ring-blue-500">
            Submit Message
          </Link>
        </div>
      </form>
    </div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 py-[80px] mx-4 md:mx-0">
                <div>
                    <img src={Photo1} alt="img" className="w-[1200px] h-[234px]" />
                </div>
                <div>
                    <img src={Photo2} alt="img" className="w-[1200px] h-[234px]"/>
                </div>
                <div>
                    <img src={Photo3} alt="img" className="w-[1200px] h-[234px]"/>
                </div>
                <div>
                    <img src={Photo4} alt="img" className="w-[1200px] h-[234px]"/>
                </div>

            </div>
      </div>
    
  );
};

export default ContactContent;

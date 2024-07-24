import React from 'react'
import Icon1 from '../../assets/images/Icon (6).png'
import Icon2 from '../../assets/images/Icon (7).png'
import Icon3 from '../../assets/images/Icon (19).png'
import Icon4 from '../../assets/images/Icon (17).png'
import Icon5 from '../../assets/images/Icon (8).png'
import Icon6 from '../../assets/images/Icon (18).png'
import { Link } from 'react-router-dom'

const WhatWeDoContent = () => {

const services =[
    {
        img: Icon1, title:'Sea Transport Services',  description:'Following the quality of our service thus having gained trust of our many clients.'
    },
    {
        img: Icon2, title:'Warehousing Services',  description:'Following the quality of our service thus having gained trust of our many clients.'
    },
    {
        img: Icon3, title:'Air Fright Services',  description:'Following the quality of our service thus having gained trust of our many clients.'
    },
    {
        img: Icon4, title:'Project & Exhibition',  description:'Following the quality of our service thus having gained trust of our many clients.'
    },
    {
        img: Icon5, title:'Local Shipping Services',  description:'Following the quality of our service thus having gained trust of our many clients.'
    },
    {
        img: Icon6, title:'Local Shipping Services',  description:'Following the quality of our service thus having gained trust of our many clients.'
    },
]

  return (
    <div className='max-w-[1024px] mx-auto px-4 md:px-0 py-10'>
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
        What We Do
      </p>
    </div>
  </div>
  <div>
    <h1 className='text-[#1C1F35] text-[35px] font-rubik font-semibold py-2 text-center'>
      Our Logistics Services
    </h1>
  </div>
</div>


        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center '>
      {services.map((item, index) => (
        <div key={index}>
          <div>
            <img src={item.img} alt={item.title} />
            <div>
                <h1 className='text-[#1C1F35] text-[25px] font-rubik pt-4'>{item.title}</h1>
                <p className='text-[#666C89] text-[16px] font-krub'>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className='flex justify-center py-10'>
    <Link className='px-4 py-2 bg-[#1F2A69] text-white font-krub text-[16px]'>More Works</Link>
    </div>
    </div>
  )
}

export default WhatWeDoContent
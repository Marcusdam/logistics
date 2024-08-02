import React from 'react';
import Porject1 from '../../assets/images/project 1.png'

const SingleProjectDetail = () => {
  return (
    <section className=' bg-[#F4F4F4] px-4 md:px-0 '>
        <div className='max-w-[1024px] mx-auto grid md:grid-cols-2 gap-10 py-[100px]'>
            <div>
                <img src={Porject1} alt="img" className='w-full h-[300px]'/>
            </div>
            <div>
                <h1 className='text-[#1C1F35] text-[28px] md:text-[35px] font-rubik font-semibold'>Project Details</h1>
                <div className='text-[#1C1F35] font-rubik space-y-2 pt-4'>
                    <p>Customer:  David Warner</p>
                    <p>Category:  Warehouse Transportaion</p>
                    <p>Date:  12 December, 2022</p>
                    <p>Tags:  Life Style Travel , Best Delivery</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleProjectDetail
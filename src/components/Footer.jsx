import React from 'react'
import FooterImg from "../assets/images/Image (4).png"
import FooterContent from './FooterContent'

const Footer = () => {
  return (
    <section>
      <div className='mt-[100px]'>
        <div>
        <img src={FooterImg} alt="" />
        </div>
        <div className='bg-[#091242] '>
        <FooterContent/>  
        <div >
          <hr />
          <div className='flex justify-center text-white py-6 '>
            <span>Copyright © TransitFlow | Designed by MarkDev</span>
          </div>
        </div>
        </div>
        

      </div>

    </section>
  )
}

export default Footer
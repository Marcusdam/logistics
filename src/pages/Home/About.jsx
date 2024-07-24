import React from 'react'
import AboutImg from '../../assets/images/container.png'
import AboutText from './AboutText'

const About = () => {
  return (
    <div>
        <div className='mt-[200px]   relative '>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
            <img src={AboutImg} alt="img" className='w-full h-full object-cover hidden lg:block' />
        </div>
        <div>
            <AboutText/>
        </div>
    </div>
  )
}

export default About
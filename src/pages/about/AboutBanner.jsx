import React from 'react'
import AboutBannerContent from './AboutBannerContent'
import NavBarMenu from '../Navbar/NavBarMenu'

const AboutBanner = () => {
  return (
    
    <section>
  <div className='h-[100vh] bg-[url("assets/images/about.png")] bg-cover'>
  <div className='bg-gradient-to-r from-[#032D5F] to-[#091242]/20 bg-opacity-70 h-full w-full'>
  <div className='bg-[#091242] bg-opacity-40 '>
  <NavBarMenu/>
  
  </div>
  <AboutBannerContent/>
  </div>
</div>


    </section>
  )
}

export default AboutBanner
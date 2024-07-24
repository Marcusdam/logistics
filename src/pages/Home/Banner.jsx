import React from 'react'
// import Nav from '../Navbar/NavBarMenu'
import BannerContent from './BannerContent'
import NavBarMenu from '../Navbar/NavBarMenu'


const Banner = () => {
  return (
    <div>
        <div className='h-[100vh] bg-[url("assets/images/Photo.png")] bg-cover'>
        <div className='bg-[#091242] bg-opacity-40 '>
            
        <NavBarMenu/>
        </div>
        <BannerContent/>
        </div>
    </div>
  )
}
export default Banner
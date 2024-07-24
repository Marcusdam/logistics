import React from 'react'
import Head from '../pages/Navbar/NavHeader'
import NavHeader from '../pages/Navbar/NavHeader'
// import Menu from '../pages/Navbar/Menu'

const Header = () => {
  return (
    <div className=' bg-[#091242]  text-white h-[80px] md:h-[120px]'>
        <div className='max-w-[1024px] mx-auto'>
            <NavHeader/>
           
        </div>
    </div>
  )
}

export default Header
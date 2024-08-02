import React from 'react'
import NavHeader from '../pages/Navbar/NavHeader'
import NavBarMenu from '../pages/Navbar/NavBarMenu'

const Header = () => {
  return (
    <div className='text-white z-10'>
      <div>
        <div className='relative'>
          <div className='fixed top-0 left-0 w-full z-20'>
            <NavHeader />
          </div>
        </div>
        <div className='fixed top-[120px] left-0 w-full z-20'>
          <NavBarMenu />
        </div>
      </div>
    </div>
  )
}

export default Header

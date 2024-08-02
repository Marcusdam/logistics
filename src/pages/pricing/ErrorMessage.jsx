import React from 'react'
import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/images/404.png';

const ErrorMessage = () => {
  return (
    
        <div className='flex justify-center mt-20 py-10'>
      <div>
      <div>
        <img src={ErrorImg} alt="img"  className='w-[300px] lg:w-[350px]'/>
      </div>
      <div>
        <h1 className='text-[24px] lg:text-[35px] text-[#1C1F35] font-rubik font-semibold'>Oops! Page not found.</h1>
        <p className='text-[#666C89] text-[16px] font-krub'>Let’s get you to where you need to be.</p>
        <div className='mt-6 flex justify-center'>
        <Link className='bg-yellow-500 px-4 py-4  font-semibold'>Back to home</Link>
        </div>
      </div>
      </div>
        
    </div>
    
  )
}

export default ErrorMessage
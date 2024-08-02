import React from 'react';
import Project1 from '../../assets/images/project 1.png';
import Project2 from '../../assets/images/project 2.png';
import Project3 from '../../assets/images/project 3.png';
import Project4 from '../../assets/images/project 4.png';
import Project5 from '../../assets/images/project 5.png';
import Project6 from '../../assets/images/project 6.png';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <section className='max-w-[1024px] mx-auto mt-20'>
        <div className='grid md:grid-cols-3 px-8 lg:px-0 gap-2'>
            <div>
                <Link to='/project/single'>
                <img src={Project1} alt="img" className='w-full' />
                
                </Link>
            </div>
            <div>
                <img src={Project2} alt="img" className='w-full' />
            </div>
            <div>
                <img src={Project3} alt="img" className='w-full' />
            </div>
            <div>
                <img src={Project4} alt="img" className='w-full' />
            </div>
            <div>
                <img src={Project5} alt="img" className='w-full' />
            </div>
            <div>
                <img src={Project1} alt="img" className='w-full' />
            </div>
        </div>
    </section>
  )
}

export default Gallery
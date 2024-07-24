import React from 'react'
import Photo1 from '../../assets/images/Photo (3).png'
import Photo2 from '../../assets/images/Photo (4).png'
import Photo3 from '../../assets/images/Photo (5).png'
import Photo4 from '../../assets/images/Photo (6).png'
import Photo5 from '../../assets/images/Photo (7).png'

import Card from './Card';
import { Link } from 'react-router-dom'

const Project = () => {
    const data = [
       
        { img: Photo1, title: 'Liquid Transportation', description: 'Premium Tankers' },
        { img: Photo2,  title: 'Packaging Solutions', description: 'Warehouse Manangement' },
        { img: Photo3,  title: 'Contract Logistics', description: 'Road Transportation' },
        { img: Photo4,  title: 'Contract Logistics', description: 'Road Transportation' },
        { img: Photo5,  title: 'Warehouse & Distribution ', description: 'Large Warehouse' },
        
        
      ];
  return (
    <div>
        <div className="max-w-[1024px] md:mt-[100px] mx-auto px-4 md:px-0">
            <div className='flex justify-center items-center py-4'>
                <h1 className='text-[#1C1F35] text-[24px] md:text-[35px] md:mt-0 font-bold'>Transporting Across The World</h1>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
        {data && data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}

        </div>
      
    </div>
        <div className=' bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] min-h-[60vh] w-full'>
        <div className='-mt-[80px] flex justify-center items-center'>
                    <Link to={'/project'} className='text-white font-rubik py-4 px-10 bg-[#1F2A69] p-4 mt-[160px]'>More Work</Link >
                </div>

        </div>
    </div>
  )
}

export default Project
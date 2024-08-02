import React from 'react'
import Project1 from '../../assets/images/project 2.png'
import Project2 from '../../assets/images/project 3.png'
import Project3 from '../../assets/images/project 4.png'
const RelatedProject = () => {
  return (
    <section className='max-w-[1024px] mx-auto mt-20 px-4 py-20 md:px-0 '>
        <div>
            <div>
                <h1 className='text-[35px] text-[#1C1F35] font-rubik font-semibold py-4'>Related Project</h1>
            </div>
        <div className='grid md:grid-cols-3 gap-2'>
            <div>
                <img src={Project1} alt=""  className='w-full'/>
            </div>
            <div>
                <img src={Project2} alt=""  className='w-full'/>
            </div>
            <div>
                <img src={Project3} alt="" className='w-full' />
            </div>
        </div>
        </div>
    </section>
  )
}

export default RelatedProject
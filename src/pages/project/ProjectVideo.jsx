import React from 'react'
import Video from '../../assets/images/Video.png'

const ProjectVideo = () => {
  return (
    <section className='max-w-[1024px] mx-auto px-8 lg:px-0 mt-20'>
        <div>
            <div className='space-y-2'>
            <h1 className='text-[#1C1F35] text-[28px] md:text-[35px] font-rubik font-semibold'>Our Project Transportation</h1>
           <p className='text-[#666C89] text-[16px] font-rubik'>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.</p>
            </div>
            <img src={Video} alt="" className='mt-6'/>

        </div>
    </section>
  )
}

export default ProjectVideo
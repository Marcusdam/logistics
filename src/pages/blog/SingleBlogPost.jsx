import React from 'react';
import cargo from '../../assets/images/Cargo.png';
import { FaInstagram } from 'react-icons/fa';
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci';

const SingleBlogPost = () => {
  return (
    <section className='max-w-[1024px] mx-auto px-4 '>
       <div className='mt-20 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-10 w-full'>
       <div className='col-span-8 pb-10'>
            <div>
                <div>
                    <h1 className='text-[#1C1F35] text-[35px] font-rubik font-semibold'>Your Logistics Solutions</h1>
                    <p className='text-[#666C89] text-[16px] font-krub'>Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]</p>
                </div>
                <div className='p-8 mt-4 bg-[#091242]  text-white'>
                    <p>“Digitization within transport and logistics means seamless service to our customers, visibility in the supply chain, and driving a more efficient business.”</p>
                </div>

            </div>
            <div>
                <div className='py-10'>
                    <h1 className='text-[#1C1F35] text-[35px] font-rubik font-semibold'>Safest Logistics Solutions Provider With Integrity</h1>
                    <p className='text-[#666C89] text-[16px] font-krub'>
                    Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]
                        </p>
                </div>
                <div className=''>
                    <img src={cargo} alt="" />
                    <h1 className='flex justify-center mt-4 text-[16px] text-[#666C89] font-krub'>The Cargo Ship</h1>
                    <p className='text-[#666C89] text-[16px] font-krub mt-4'>
                    Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium. <br /> <br />
   
                     Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus atquam.
                    </p>
                  
                </div>
                <div>

                </div>
            <div className='flex justify-between items-center border-b border-t py-2 mt-4'>
       <ul className='flex items-center gap-4 pt-3'>
            <li><FaInstagram className='text-xl'/></li>
            <li><CiFacebook className='text-xl' /></li>
            <li><CiTwitter  className='text-xl'/></li>
            <li><CiLinkedin className='text-xl' /></li>
          </ul>
          <div>
            <span className='text-[#666C89] text-[16px] font-krub '>Category : Shipping</span>
          </div>
       </div>

            </div>

            
        </div>
        <div className='col-span-4 pb-10'> 
                <div>
                  <div className='bg-[#EEEEEE] p-8'>
                    <h1 className='text-[#1C1F35] text-[22px] font-rubik font-semibold'>Categories</h1>
                    <div className='w-full'>
                        <div className='flex justify-between gap-10 border-b py-4'>
                            <span>Shipping</span>
                            <span>(3)</span>
                        </div>
                        <div className='flex justify-between gap-10 border-b py-4'>
                            <span>Services</span>
                            <span>(5)</span>
                        </div>
                        <div className='flex justify-between gap-10 border-b py-4'>
                            <span>Transport</span>
                            <span>(2)</span>
                        </div>
                        <div className='flex justify-between gap-10 border-b py-4'>
                            <span>Warehouse</span>
                            <span>(2)</span>
                        </div>
                        <div className='flex justify-between gap-10 border-b py-4'>
                            <span>Transport Industries</span>
                            <span>(5)</span>
                        </div> 
                    </div>
                </div>
                
                <div className='mt-6 bg-[#EEEEEE] p-8'>
                    <h1 className='text-[#1C1F35] text-[22px] font-rubik font-semibold'>How can we help you?</h1>
                <p className='text-[#666C89] text-[16px]'>
                    Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus atquam.
                    </p>
                    <div className='py-2'>
                    <button className='px-4 py-2 bg-yellow-300 text-[#1C1F35]'>Contact</button>
                    </div>

                </div>

                <div className='bg-[#1C1F35] mt-6 p-8 text-white '>
                <div className="relative inline-block px-2  text-white ">
    <div
      className="absolute left-0 top-0 h-full w-1"
      style={{
        background:
          "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
      }}
    ></div>

    <div className="flex justify-center items-center">
      <p className="font-rubik text-[12px] inline-block">
        Get In Touch
      </p>
      
    </div>
  </div>
  <div>
        <p className='py-4'>Need help? <br />(00) 112 365 489</p>
        <span className='py-4'>Email <br /> contact@logistics.com </span>
      </div>
                </div>

            </div>
                </div>
       </div>
       
    </section>
  )
}

export default SingleBlogPost
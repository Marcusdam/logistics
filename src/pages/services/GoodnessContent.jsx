import React from 'react';
import CloudImg from '../../assets/images/cloud (1).png';
import Shield from '../../assets/images/cloud (2).png';
import BoxImg from '../../assets/images/Icon (11).png';
import Service1 from '../../assets/images/service 3.png';
import Service2 from '../../assets/images/service 2.png';

const GoodnessContent = () => {
    const services = [
        {
          img: BoxImg,
          title: 'Warehousing Services',
          desc: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking '
        },
        {
          img: Shield,
          title: 'Safety & Quality',
          desc: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking '
        },
        {
          img: CloudImg,
          title: 'Care for Environment',
          desc: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking '
        }
      ];
      

  return (
    <section className='max-w-[1024px] mx-auto py-4 px-8 lg:px-0'>
    <div className='flex flex-col items-center'>
  <div className="relative inline-block px-2 bg-[#E8E8E8] bg-opacity-70 text-white mt-10">
    <div
      className="absolute left-0 top-0 h-full w-1"
      style={{
        background:
          "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
      }}
    ></div>

    <div className="flex justify-center items-center h-full">
      <p className="font-rubik text-[#1C1F35] text-[12px] inline-block">
        Our Goodness
      </p>
    </div>
  </div>
  <div>
    <h1 className='text-[#1C1F35] text-[35px] font-rubik font-semibold py-2 text-center'>
    How We Works
    </h1>
  </div>
</div>
<div className="grid md:grid-cols-2 py-5">
    <div className='relative'>
        <div >
            <img src={Service1} alt="" className='max-w-[85%]  '/>
        </div>
        <div className='absolute -bottom-10 right-5 w-[50%] bg-white p-4'>
            <img src={Service2} alt="" className='w-full h-[10%] '/>
        </div>
        
    </div>

    <div className='mt-8 md:mt-0'>
    {services.map((item, index) => (
                                <div key={index} className="flex justify-between items-center gap-4 space-y-4">
                                    <img src={item.img} alt="" className='w-[8%]' />
                                    <div>
                                        <h1 className="text-[18px] text-[#1C1F35] font-rubik font-medium">{item.title}</h1>
                                        <p className='text-16px text-[#666C89] font-krub'>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
    </div>
                        </div>
    </section>
  )
}

export default GoodnessContent
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight, AiFillStar } from 'react-icons/ai';
import Photo1 from '../assets/images/Photo (1).png';
import Photo2 from '../assets/images/Photo(16).png';

const CustomPrevArrow = (props) => (
  <button
    {...props}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-lg z-10"
    style={{ zIndex: 10 }}
  >
    <AiOutlineLeft className="text-2xl" />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    {...props}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-lg z-10"
    style={{ zIndex: 10 }}
  >
    <AiOutlineRight className="text-2xl" />
  </button>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // sm screen and smaller
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const data = [
    {
      name: 'John Martin',
      company: 'Restoration Company',
      img: Photo1,
      description: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
      bgColor: '#F4F4F4',
      icon: <AiFillStar />
    },
    {
      name: 'John Martin',
      company: 'Restoration Company',
      img: Photo2,
      description: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
      bgColor: '#1E3A8A',
      icon: <AiFillStar />
    }
  ];

  return (
    <div className="relative max-w-[1024px] mx-auto mt-[100px]">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className='flex justify-center' key={index} style={{ margin: '0' }}>
            <div className='p-4 md:p-6 lg:p-8 text-white w-full max-w-[400px] md:w-full h-auto md:h-[425px]' style={{ backgroundColor: item.bgColor }}>
              <div className='flex items-center gap-2'>
                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-full" />
                <div>
                  <h1 className="text-xs md:text-sm lg:text-lg font-bold text-[#091242]">{item.name}</h1>
                  <p className='text-xs md:text-sm lg:text-md text-[#091242]'>{item.company}</p>
                </div>
              </div>
              <p className="mt-2 md:mt-4 text-[10px] md:text-sm lg:text-md text-[#666C89]">{item.description}</p>
              <div className='flex items-center gap-2 pt-3 md:pt-5'>
                {[...Array(5)].map((_, i) => (
                  <span className='text-yellow-400' key={i}>{item.icon}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

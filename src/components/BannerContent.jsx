import React from 'react';

const BannerContent = ({ title, subTitle, buttonName, bannerText, showButton, isHome }) => {
  return (
    <div className={`max-w-[1024px] mx-auto px-4 md:px-0 ${isHome ? 'pt-0' : 'pt-20'}`}>
      <div className='pt-[60px]'>
        <div className="relative bg-opacity-70 text-white mt-10">
          <div
            className="absolute left-0 top-0 h-full w-1"
            style={{
              background:
                "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
            }}
          ></div>
          <div className='bg-[#041C37] inline-block'>
            <p className="font-rubik text-white px-2 text-[14px]">
              {title}
            </p>
          </div>
        </div>
        <div>
          <h1 className='font-rubik font-bold leading-tight text-white text-[40px] md:text-[50px] mt-4 w-[400px] md:w-[500px]'>{subTitle}</h1>
          <p className='text-white text-[12px] md:text-[16px] w-[400px] md:w-[600px]'>{bannerText}</p>
        </div>
        {showButton && (
          <button className='font-rubik py-2 px-2 mt-4 md:py-4 md:px-6 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] p-4'>
            {buttonName}
          </button>
        )}
      </div>
    </div>
  );
};

export default BannerContent;

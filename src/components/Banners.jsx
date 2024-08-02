import React from 'react';
import BannerContent from './BannerContent';

const Banners = ({ backgroundImage, title, subTitle, buttonName, bannerText, showButton, isHome }) => {
  return (
    <section>
      <div
        className={`h-[100vh] bg-cover bg-center mt-[120px]`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='bg-gradient-to-r from-[#032D5F] to-[#091242]/20 bg-opacity-70 h-full w-full'>
          <BannerContent
            title={title}
            subTitle={subTitle}
            buttonName={buttonName}
            bannerText={bannerText}
            showButton={showButton}
            isHome={isHome}
          />
        </div>
      </div>
    </section>
  );
};

export default Banners;

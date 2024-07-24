import React from 'react';
const Card = ({ title, description, img }) => {
    return (
      <div className="relative">
        <img className="w-full" src={img} alt={title} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/50 p-6 md:py-2 md:px-4">
          <div className="font-bold text-[20px] md:text-[12px] mb-2 text-white">{title}</div>
          <p className="text-[#FFB629] text-[14px] md:text-xs ">{description}</p>
        </div>
      </div>
    );
  };
  export default Card;
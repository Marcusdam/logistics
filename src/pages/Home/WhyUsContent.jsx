import React from 'react';
import Photo from '../../assets/images/Image.png';
import Icon1 from '../../assets/images/Icon (11).png';
import Icon2 from '../../assets/images/Icon (12).png';
import Icon3 from '../../assets/images/Icon (13).png';
import Icon4 from '../../assets/images/Icon (14).png';
import Icon5 from '../../assets/images/Icon (15).png';
import Icon6 from '../../assets/images/Icon (16).png';

const WhyUsContent = () => {
    const data = [
        { icon: Icon1, title: 'Safe Package' },
        { icon: Icon2, title: 'Ship Everywhere' },
        { icon: Icon3, title: 'Global Tracking' },
        { icon: Icon4, title: '24/7 Support' },
        { icon: Icon5, title: 'In Time Delivery' },
        { icon: Icon6, title: 'Transparent Pricing' },
    ];

    return (
        <div className="relative max-w-[1024px] mt-[100px] mx-auto px-4 lg:px:0 z-0">
            <div className="grid lg:grid-cols-10 gap-8 items-center">
                <div className="relative md:col-span-6">
                    <img src={Photo} alt="img" className="w-full h-auto" />
                    <div className="absolute bottom-0 right-0 md:right-20 w-full md:w-[417px]">
                        <div className="flex items-center gap-2 font-rubik px-4 py-2 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
                            <img src={Icon4} alt="" className="w-1/4 md:w-1/3" />
                            <div>
                                <h1 className="text-[14px] md:text-[25px]">Moving your products across borders</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 pt-6">
                    <div className="relative bg-opacity-70 text-white mb-6">
                        <div
                            className="absolute left-0 top-0 h-full w-1"
                            style={{
                                background: "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
                            }}
                        ></div>
                        <div className="bg-[#E8E8E8] inline-block px-2">
                            <p className="font-rubik text-[#1C1F35] text-[14px] inline-block">
                                Why Choose
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[#1C1F35] font-rubik text-[35px] font-semibold">
                            We create opportunity to reach potential
                        </h1>
                        <p className="text-[#666C89] text-[16px]">
                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
                        </p>
                    </div>
                    <div className="pt-5">
                        <div className="grid grid-cols-2 gap-4">
                            {data.map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <img src={item.icon} alt="" className="w-[63px] h-[63px]" />
                                    <div>
                                        <h1 className="text-[14px] text-[#1C1F35]">{item.title}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUsContent;

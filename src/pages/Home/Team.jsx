import React from 'react';
import Photo1 from "../../assets/images/Photo (10).png";
import Photo2 from "../../assets/images/Photo (11).png";
import Photo3 from "../../assets/images/Photo (12).png";
import Photo4 from "../../assets/images/Photo (12).png";
import Photo5 from "../../assets/images/Photo (12).png";
import Photo6 from "../../assets/images/Photo (12).png";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Team = () => {
    const data = [
        { img: Photo1, name: 'Liquid Transportation', description: 'Designer' },
        { img: Photo2, name: 'Packaging Solutions', description: 'Designer' },
        { img: Photo3, name: 'Contract Logistics', description: 'Designer' },
        { img: Photo4, name: 'Contract Logistics', description: 'Designer' },
        { img: Photo4, name: 'Contract Logistics', description: 'Designer' },
        { img: Photo6, name: 'Contract Logistics', description: 'Designer' },
    ];

    return (
        <div className="mt-[100px] px-4">
            <div className="max-w-[1024px] mx-auto">
                <div className="relative bg-[#E8E8E8] bg-opacity-70 text-white w-[120px] h-[23px] mt-10 mx-auto">
                    <div
                        className="absolute left-0 top-0 h-full w-1"
                        style={{
                            background: "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
                        }}
                    ></div>
                    <div className='bg-[#E8E8E8]'>
                        <p className="font-rubik text-[#1C1F35] pl-4 text-[12px] inline-block">
                            The Transporters
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center py-4'>
                    <h1 className='text-[#1C1F35] text-[35px] font-bold'>Meet Expert Team</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>
                    {data && data.map((item, index) => (
                        <div key={index} className="relative overflow-hidden">
                            <img className="w-full h-auto object-cover" src={item.img} alt={item.name} />
                            <div className="absolute bottom-0 left-0 right-0 bg-[#1C1F35] p-4">
                                <div className="font-bold text-[20px] md:text-[16px] mb-2 text-white">{item.name}</div>
                                <p className="text-[#FFB629] text-[14px] md:text-[12px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;

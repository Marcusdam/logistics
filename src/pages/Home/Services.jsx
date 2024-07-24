import React from "react";
import TransportIcon from "../../assets/images/Icon (6).png";
import WareHouseIcon from "../../assets/images/Icon (7).png";

const Services = () => {
  return (
    <div className="max-w-[1024px] mx-auto md:mt-[100px] px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="">
          <div className="relative bg-[#E8E8E8] bg-opacity-70 text-white w-[100px] h-[23px]  mt-10">
            <div
              className="absolute left-0 top-0 h-full w-1"
              style={{
                background:
                  "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
              }}
            ></div>
            <p className="font-rubik text-[#1C1F35] pl-4 text-[14px] inline-block">
              What We Do
            </p>
          </div>
          <div>
            <h1 className=" font-rubik text-[28px] leading-tight text-[#1C1F35] font-bold ">
              Safe & Reliable Cargo Solutions
            </h1>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex justify-between gap-8">
              <div>
                <img src={TransportIcon} alt="img" />
              </div>

              <div className="relative ">
                <div className="absolute left-0 top-0 h-full border border-gray-200"></div>
                <div className="px-8">
                  <h2 className="text-[18px] text-[#1C1F35] font-bold ">
                    Sea Transport Services
                  </h2>
                  <p className="text-[14px] text-[#666C89]">
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-8">
              <div>
                <img src={WareHouseIcon} alt="img" />
              </div>
              <div className="relative ">
                <div className="absolute left-0 top-0 h-full border border-gray-200"></div>
                <div className="px-8">
                  <h2 className="text-[18px] text-[#1C1F35] font-bold ">
                    Warehousing Services
                  </h2>
                  <p className="text-[14px] text-[#666C89]">
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex justify-between gap-8">
              <div>
                <img src={TransportIcon} alt="img" />
              </div>

              <div className="relative ">
                <div className="absolute left-0 top-0 h-full border border-gray-200"></div>
                <div className="px-8">
                <h2 className="text-[18px] text-[#1C1F35] font-bold ">
                  Air Fright Services
                </h2>
                <p className="text-[14px] text-[#666C89]">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-8">
              <div>
                <img src={WareHouseIcon} alt="img" />
              </div>
              <div className="relative ">
                <div className="absolute left-0 top-0 h-full border border-gray-200"></div>
                <div className="px-8">
                <h2 className="text-[18px] text-[#1C1F35] font-bold ">
                  Local Shipping Services
                </h2>
                <p className="text-[14px] text-[#666C89]">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Services;

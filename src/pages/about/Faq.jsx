import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaChevronDown } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import "react-accessible-accordion/dist/fancy-example.css";
import AboutImg from "../../assets/images/about 4.png";

const Faq = () => {
  return (
    <div className="max-w-[1024px] mx-auto py-20">
      <div className=" bg-[#F4F4F4] mt-10 px-10 max">
        <div className="grid  lg:grid-cols-2 gap-6 mt-[100px] items-center py-20">
          <div className="space-y-4">
            <div className="relative inline-block px-2 bg-[#E8E8E8] bg-opacity-70 text-white  mt-10 ">
              <div
                className="absolute left-0 top-0 h-full w-1"
                style={{
                  background:
                    "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
                }}
              ></div>

              <p className="font-rubik text-[#1C1F35]  text-[12px] inline-block">
                FAQ
              </p>
            </div>
            <div>
              <h1 className="text-[#1C1F35] text-[35px] font-semibold font-rubik">
                Frequently Asked Questions
              </h1>
            </div>
            <div>
              <div>
                <h1 className="text-[#1C1F35] text-[20px] font-rubik">
                  How can I pay for your logistics services?
                </h1>
                <p className="text-[#666C89] text-[16px] font-krub">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive.
                </p>
              </div>
            </div>
            <Accordion className="space-y-8 pt-4">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="flex justify-between items-center">
                    <span className="text-[#1C1F35] text-[20px] font-rubik">
                      What payment methods are supported?
                    </span>
                    <FaChevronDown className="ml-auto text-[#1C1F35] text-[12px]" />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="border-none">
                <AccordionItemHeading>
                  <AccordionItemButton className="flex justify-between items-center">
                    <span className="text-[#1C1F35] text-[20px] font-rubik">
                      What options for logistics plans are available?
                    </span>
                    <FaChevronDown className="ml-auto text-[#1C1F35] text-[12px]" />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="flex justify-between items-center">
                    <span className="text-[#1C1F35] text-[20px] font-rubik">
                      Can i specify a delivery date when ordering?
                    </span>
                    <FaChevronDown className="ml-auto text-[#1C1F35] text-[12px]" />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className=" text-white md:ml-20 mt-6 ">
            <div className="grid md:relative w-full ">
              <div className="px-6 bg-[#091242] md:w-[70%] md:-ml-20 md:top-10 h-[280px] md:relative z-10">
                <div className="">
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
                        Let’s Talk
                      </p>
                    </div>
                  </div>
                  <h1 className="text-[20px] font-rubik py-2">
                    You need any help? get free consultation
                  </h1>
                  <div className="flex items-center gap-4 space-y-5">
                    <div className="bg-[#111C55] text-[#F6B426] rounded-full p-4">
                      <IoCallOutline className="w-[14px] h-[14px]" />
                    </div>
                    <div>
                      <p className="text-[12px] py-2">
                        Have Any Questions <br /> (00) 112 365 489
                      </p>
                    </div>
                  </div>
                  <div className=" py-2 flex justify-center">
                    <button className="px-4 py-2 bg-yellow-300 text-[#1C1F35] font-semibold">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>

              <div className=" md:absolute md:top-0 ">
                <img
                  src={AboutImg}
                  alt="img"
                  className="w-full md:w-[500px] h-[360px]"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Faq;

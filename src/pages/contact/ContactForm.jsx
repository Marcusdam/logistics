import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoClock } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <section className="max-w-[1024px] mx-auto px-4 lg:px-0 mt-20">
      <div className="bg-[#111C55] p-6 lg:p-20 ">
        <div className="flex justify-center items-center">
          <div className="relative  bg-opacity-70 text-white mt-10">
            <div
              className="absolute left-0 top-0 h-full w-1"
              style={{
                background:
                  "linear-gradient(to bottom, #FFB629 100%, #FFDA56 100%, #FFD7A6 100%)",
              }}
            ></div>
            <div className="bg-[#E8E8E8] bg-opacity-10 inline-block">
              <p className="font-rubik text-white px-2 text-[14px]">Contact</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div>
            <h1 className="text-[35px] font-rubik text-center font-semibold text-white">
              Get in touch with us
            </h1>
            <p className="text-[16px] font-krub text-center text-white w-[400px] lg:w-[600px]">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex jusitify-betwen gap-10 text-[14px] pt-2 text-white  font-krub">
            <div className="pt-4">
              <div className="font-krub text-white bg-[#273270] rounded-full w-[50px] h-[50px] flex items-center justify-center ">
                <AiOutlineMail className="w-[22px] h-[22px]" />
              </div>

              <div>
                <p className="text-[12px] py-5"> contact@logistics.com</p>
              </div>
            </div>

            <div className="pt-4">
              <div className="font-krub text-white bg-[#273270] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <IoCallOutline className="w-[22px] h-[22px]" />
              </div>

              <div>
                <p className="text-[12px] py-5">(00) 112 365 489</p>
              </div>
            </div>

            <div className="pt-4">
              <div className="font-krub text-white bg-[#273270] rounded-full w-[50px] h-[50px] flex items-center justify-center ">
                <GoClock className="w-[22px] h-[22px]" />
              </div>

              <div>
                <p className="text-[12px] py-5">
                  Mon - Sat 9.00 - 18.00 <br /> Sunday Closed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="form mt-10">
          <div className="max-w-lg mx-auto p-4  ">
            <form className=" space-y-4 text-white">
              <div className=" grid lg:grid-cols-2 gap-4">
                <input
                  className="mt-1 block w-full px-3 py-2 border border-[#4E5683] bg-[#091242] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your Name*"
                />
                <input
                  className="mt-1 block w-full px-3 py-2 border border-[#4E5683] bg-[#091242] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Eamil*"
                />
              </div>
              <div className=" grid lg:grid-cols-2 gap-4">
                <input
                  className="mt-1 block w-full px-3 py-2 border border-[#4E5683] bg-[#091242] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Phone Number*"
                />
                <input
                  className="mt-1 block w-full px-3 py-2 border border-[#4E5683] bg-[#091242] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="City*"
                />
              </div>

              <div>
                <textarea
                  className="mt-1 block w-full h-[154px] px-3 py-2 border border-[#4E5683] bg-[#091242] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your Message*"
                />
              </div>
              <div className="flex justify-center py-8">
                <Link
                  to={"/"}
                  type="submit"
                  className="inline-flex items-center px-4 text-[#23212A] py-4 font-rubik bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] focus:ring-blue-500"
                >
                  Submit Message
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

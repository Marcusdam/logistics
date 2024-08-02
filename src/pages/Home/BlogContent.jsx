import React from "react";
import Date1 from "../../assets/images/Date.png";
import Date2 from "../../assets/images/Date (3).png";
import Date3 from "../../assets/images/Date (1).png";
import Image1 from "../../assets/images/Photo (13).png";
import Image2 from "../../assets/images/Photo (14).png";
import Image3 from "../../assets/images/Photo (15).png";

import { Link } from "react-router-dom";

const BlogContent = () => {
  const data = [
    {
      img: Date2,
      image: Image1,
      title: "Inland freight a worthy solution for your business",
      description:
        "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
      list: [
        "Urgent transport solution",
        "Reliable & experienced staffs",
        "Urgent transport solutions",
        "Reliable & experienced staffs",
      ],
    },
    {
      img: Date1,
      image: Image2,
      title: "How technology can help redraw the supply chain map",
      description:
        "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
      list: [
        "Urgent transport solution",
        "Reliable & experienced staffs",
        "Urgent transport solutions",
        "Reliable & experienced staffs",
      ],
    },
    {
      img: Date3,
      image: Image3,
      title: "Five things you should have ready for your broker",
      description:
        "We are dedicated in creating added value for our customers by implementing modern technology in our work. . ",
      list: [
        "Urgent transport solution",
        "Reliable & experienced staffs",
        "Urgent transport solutions",
        "Reliable & experienced staffs",
      ],
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-8  border-t  py-6"
        >
          <div>
            <div className="flex justify-center gap-6">
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
          <div className="border-l px-8">
            <div>
              <h2 className="text-[#1C1F35] font-rubik text-[25px] font-medium hover:text-[#FFBE34] cursor-pointer">
                {item.title}
              </h2>
              <p className="text-[16px] text-[#666C89] font-krub">
                {item.description}
              </p>
              <ul className="list-disc pl-5 mt-2">
                {item.list.map((listItem, listIndex) => (
                  <li
                    key={listIndex}
                    className="text-[16px] text-[#1C1F35] font-krub"
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      <div className="-mt-[80px] flex justify-center items-center">
        <Link
          to={"/blog"}
          className="text-white font-rubik py-4 px-10 bg-[#1F2A69] p-4 mt-[160px]"
        >
          More Blog
        </Link>
      </div>

     
    </div>
  );
};

export default BlogContent;

import React from "react";
import Date1 from "../../assets/images/Date.png";
import Date2 from "../../assets/images/Date (3).png";
import Date3 from "../../assets/images/Date (1).png";
import Date4 from "../../assets/images/Date (4).png";
import Date5 from "../../assets/images/Date (5).png";
import Image1 from "../../assets/images/Photo (13).png";
import Image2 from "../../assets/images/Photo (14).png";
import Image3 from "../../assets/images/Photo (15).png";
import Image4 from "../../assets/images/blog 2.png";
import Image5 from "../../assets/images/Photo (16).png";

const BlogPost = () => {
  const post = [
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
    {
      img: Date4,
      image: Image4,
      title: "Four simple tips for becoming a healthier truck driver",
      description:
        "We are dedicated in creating added value for our customers by implementing modern technology in our work. . ",
      list: [
        "Urgent transport solution",
        "Reliable & experienced staffs",
        "Urgent transport solutions",
        "Reliable & experienced staffs",
      ],
    },
    {
      img: Date5,
      image: Image5,
      title: "What Is The Role Of A Logistics Operations Manager",
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
    <section className="max-w-[1024px] mx-auto px-8 lg:px-0">
      <div>
      <div className='flex flex-col items-center'>
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
        Our Blog
      </p>
    </div>
  </div>
  <div>
    <h1 className='text-[#1C1F35] text-[35px] font-rubik font-semibold py-2 text-center'>
    Our Latest News
    </h1>
  </div>
</div>

        <div>
          {post.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8  border-t  py-6"
            >
              <div>
                <div className="flex justify-center gap-6">
                  <div>
                    <img src={item.image} alt="img" className="w-full"/>
                  </div>
                  <div>
                    <img src={item.img} alt="img" />
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
        </div>
      </div>
    </section>
  );
};

export default BlogPost;

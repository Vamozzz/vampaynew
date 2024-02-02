import { useEffect, useState } from "react";
import Image from "next/image";

interface BlogData {
  title: string;
  blogs: {
    title: string;
    description: string;
    image: string;
    writerImage: string;
    writerName: string;
    time: string; // Change this to string if your data is in string format
  }[];
}

const gradientTextStyle = {
  background: "linear-gradient(to bottom, #FF9DD3, #866AE8)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const gradientStyle = {
  background: "linear-gradient(to right, #A5ADFF, #ECCAFF)",
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
};
const bgGradient = {
  background: "linear-gradient(to right, #E8E2F4, #DDE5F8)",
};

const Article: React.FC = () => {
  const blogData: BlogData = {
    title: "Our Latest Articles",
    blogs: [
      {
        title: "Unlocking Efficiency: The Offline Integration Revolution",
        description:
          "Discover the simplicity of offline integration with Vampay. Revolutionize your payment processes with this game-changing feature...",
        image: "/rafiki.svg",
        writerImage: "/blogger.svg",
        writerName: "Sanika Jadhav",
        time: "8",
      },
      {
        title: "Neobanking Redefined: Vampay's Yes Bank Partnership",
        description:
          "Explore the future of banking with Vampay's collaboration with Yes Bank. A seamless and comprehensive financial experience awaits. vampay....",
        image: "/rafiki.svg",
        writerImage: "/blogger.svg",
        writerName: "Sanika Jadhav",
        time: "4",
      },
      {
        title: "Tailored for Triumph: Vampay's Custom Solutions",
        description:
          "Elevate your business with Vampay's customized solutions. From startups to enterprises, find the perfect fit for your payment needs....",
        image: "/rafiki.svg",
        writerImage: "/blogger.svg",
        writerName: "Sanika Jadhav",
        time: "6",
      },
    ],
  };

  return (
    <div className="p-10 lg:px-20 ">
      <div className="features_title m-10">
        <p>{blogData.title}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {blogData.blogs.map((item, index) => (
          <div key={index} className="">
            <div
              className="flex justify-start items-center"
              style={gradientStyle}
            >
              <Image
                src={item.image}
                alt="blog"
                height={300}
                width={300}
                className="object-cover"
                // layout="responsive"
              />
            </div>
            <div className=" flex flex-col  gap-4 rounded-b-lg " style={bgGradient}>
              <div className="features_card_header flex flex-col  gap-2 p-3">
                <button>
                  <p
                    className="text-primaryPurple"
                    style={{ textAlign: "left" }}
                  >
                    {item.title}
                  </p>
                </button>

                <p
                  className="features_card_content"
                  style={{ textAlign: "left" }}
                >
                  {item?.description.substring(0,100) +"..."}
                </p>
              </div>
              <div className="flex flex-row justify-between p-2 bg-[#F7F8FD] rounded-b-lg">
                <div className="flex flex-row justify-center items-center">
                  <Image
                    src={item.writerImage}
                    alt="blog"
                    height={50}
                    width={50}
                    className="rounded-full"
                  />
                  <p className="text-sm ml-2">{item.writerName}</p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <Image
                    src={"/bookmark.svg"}
                    alt="blog"
                    height={20}
                    width={20}
                  />
                  <p className="text-xs text-center ">{item.time} mins read</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;

"use client";
import { CSSProperties, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import getBlogsData, { getLatestBlogs } from "@/services/blogsApi";
import {
  calculateReadingTime,
  truncateDescription,
} from "@/services/helperMethods";

interface BlogData {
  title: string;
  blogs: {
    id: number;
    title: string;
    description: string;
    blog_image: string;
    writerImage: string;
    writerName: string;
    create_date: string;
  }[];
}

interface componentProps {
  externalStyle?: CSSProperties;
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

const Article: React.FC<componentProps> = ({ externalStyle }) => {
  const [blogs, setBlogs] = useState([]);
  const blogData: BlogData = {
    title: "Our Latest Articles",
    blogs: blogs,
    // [
    //   {
    //     id: 1,
    //     title: "Unlocking Efficiency: The Offline Integration Revolution",
    //     description:
    //       "Discover the simplicity of offline integration with Vampay. Revolutionize your payment processes with this game-changing feature...",
    //     blog_image: "/rafiki.svg",
    //     writerImage: "/blogger.svg",
    //     writerName: "Sanika Jadhav",
    //     create_date: "8",
    //   },
    //   {
    //     id: 2,
    //     title: "Neobanking Redefined: Vampay's Yes Bank Partnership",
    //     description:
    //       "Explore the future of banking with Vampay's collaboration with Yes Bank. A seamless and comprehensive financial experience awaits. vampay....",
    //     blog_image: "/rafiki.svg",
    //     writerImage: "/blogger.svg",
    //     writerName: "Sanika Jadhav",
    //     create_date: "4",
    //   },
    //   {
    //     id: 3,
    //     title: "Tailored for Triumph: Vampay's Custom Solutions",
    //     description:
    //       "Elevate your business with Vampay's customized solutions. From startups to enterprises, find the perfect fit for your payment needs....",
    //     blog_image: "/rafiki.svg",
    //     writerImage: "/blogger.svg",
    //     writerName: "Sanika Jadhav",
    //     create_date: "6",
    //   },
    // ],
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getLatestBlogs();
      setBlogs(data);
    };
    getData();
  }, []);

  return (
    <div className="p-10 lg:px-20 " style={externalStyle}>
      <div className="features_title m-10">
        <p>{blogData.title}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {blogData?.blogs?.map((item, index) => (
          <div key={item.id} className="md:w-1/3 rounded-lg">
            <div
              className="flex justify-center items-center rounded-t-lg bg-[#ECE5FF]"
              // style={gradientStyle}
            >
              <Image
                src={item.blog_image || "/rafiki.svg"}
                alt="blog"
                height={300}
                width={300}
                className="object-cover rounded-t-lg"
              />
            </div>
            <div
              className=" py-3 flex flex-col  gap-4 rounded-b-lg"
              style={bgGradient}
            >
              <div className="features_card_header flex flex-col  gap-2 p-5">
                <div>
                  <Link href={`/company/blogs/${item.id}`}>
                    {/* <Link href={"/company/blogs/article"}> */}
                    <p
                      className="text-primaryPurple"
                      style={{ textAlign: "left" }}
                    >
                      {item.title}
                    </p>
                  </Link>
                </div>
                <Link href={`/company/blogs/${item.id}`}>
                  <div
                    className="features_card_content"
                    style={{ textAlign: "left" }}
                    dangerouslySetInnerHTML={{
                      __html: truncateDescription(item?.description, 30),
                    }}
                  ></div>
                </Link>
              </div>
              <div className="flex flex-row justify-between p-5 rounded-b-lg">
                <div className="flex flex-row justify-center items-center">
                  <Image
                    src={item?.writerImage || "/blogger.svg"}
                    alt="blog"
                    height={50}
                    width={50}
                    className="rounded-full"
                  />
                  <p className="text-sm ml-2">
                    {item.writerName ? item.writerName : "Sanika Jadhav"}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <Image
                    src={"/bookmark.svg"}
                    alt="blog"
                    height={20}
                    width={20}
                  />
                  <p className="text-xs text-center ">
                    {/* {item.create_date ? item.create_date : "2"} mins read */}
                    {`${calculateReadingTime(item?.description)} mins read`}
                  </p>
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

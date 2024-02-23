"use client";
import getBlogsData, { getSpecificBlog } from "@/services/blogsApi";
import {
  calculateReadingTime,
  formatDate,
  shareOnFacebook,
  shareOnInstagram,
  shareOnTwitter,
  shareOnWhatsApp,
} from "@/services/helperMethods";
import {
  gotoFacebook,
  gotoInstagram,
  gotoTwitter,
  gotoWhatsapp,
} from "@/utils/customFunctions";
import { Facebook } from "@mui/icons-material";
import Head from "next/head";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface ArticleProps {
  articleID: string;
}
interface blogType {
  id: string;
  category_id?: string;
  title?: string;
  seo_url?: string;
  description?: string;
  blog_image?: string;
  create_date?: string;
}

const ArticleBlog: React.FC<ArticleProps> = ({ articleID }) => {
  const [blog, setBlog] = useState<blogType | null>(null);
  const pathName = usePathname();
  const baseURL = "https://vampay.in";
  // const baseURL = "https://randomstring.ngrok.io";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSpecificBlog(articleID);
        setBlog(data[0]);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchData();
  }, [articleID]);

  return (
    <section className="mt-36 p-4 lg:px-20">
      {/* {blog && (
        <Head>
          <title>{blog.title}</title>
          <meta property="og:title" content={blog?.title} />
          <meta property="og:description" content={blog?.description} />
          <meta property="og:image" content={blog?.blog_image} />
          <meta property="og:url" content={`${baseURL}${pathName}`} />
          <meta property="og:type" content="article" />
        </Head>
      )} */}
      <div className="flex justify-center items-center font-poppins font-medium text-center text-base leading-6 text-[#518FF0]">
        <p className="">Business Banking Plus</p>
      </div>
      <div className="flex flex-col gap-8 lg:gap-10 justify-center items-center my-16">
        <div className=" lg:w-1/2 font-poppins font-medium text-center text-[20px] lg:text-4xl leading-12 ">
          <p>{blog?.title}</p>
        </div>
        <div className="font-poppins font-normal text-center text-base leading-6 text-[#989898]">
          {/* <p>January 10, 2024 . 4 Mins Read</p> */}
          <p>
            {blog?.create_date && formatDate(blog?.create_date.split(" ")?.[0])}
            . {`${calculateReadingTime(blog?.description)} mins read`}
          </p>
        </div>
        <div className=" ">
          <Image
            src={blog?.blog_image || "/faqbanner.svg"}
            alt="."
            width={1000}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-center lg:px-36 ">
          <div className="">
            <div className="flex lg:flex-col justify-center items-center gap-4">
              <p>share</p>
              <button onClick={() => shareOnFacebook(`${baseURL}${pathName}`)}>
                <Image
                  src={"/facebook.svg"}
                  width={25}
                  height={25}
                  className=" md:block  hover:cursor-pointer "
                  alt="logo"
                />
              </button>
              <button onClick={() => shareOnTwitter(`${baseURL}${pathName}`)}>
                <Image
                  src={"/twitter.svg"}
                  width={25}
                  height={25}
                  className=" md:block  hover:cursor-pointer "
                  alt="logo"
                />
              </button>
              <button onClick={() => shareOnWhatsApp(`${baseURL}${pathName}`)}>
                <Image
                  src={"/whatsapp.svg"}
                  width={25}
                  height={25}
                  className=" md:block  hover:cursor-pointer "
                  alt="logo"
                />
              </button>
              <button onClick={() => shareOnInstagram(`${baseURL}${pathName}`)}>
                <Image
                  src={"/instagram.svg"}
                  width={25}
                  height={25}
                  className=" md:block  hover:cursor-pointer "
                  alt="logo"
                />
              </button>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: blog?.description || "No Blog Available",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ArticleBlog;

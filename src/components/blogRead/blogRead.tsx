"use client";
import {
  gotoFacebook,
  gotoInstagram,
  gotoTwitter,
  gotoWhatsapp,
} from "@/utils/customFunctions";
import { Facebook } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

function ArticleBlog() {
  return (
    <section className="mt-36 p-4 lg:px-20">
      <div className="flex justify-center items-center font-poppins font-medium text-center text-base leading-6 text-[#518FF0]">
        <p className="">Business Banking Plus</p>
      </div>
      <div className="flex flex-col gap-8 lg:gap-10 justify-center items-center my-16">
        <div className=" lg:w-1/2 font-poppins font-medium text-center text-[20px] lg:text-4xl leading-12 ">
          <p>Unlocking Efficiency: The Offline Integration Revolution</p>
        </div>
        <div className="font-poppins font-normal text-center text-base leading-6 text-[#989898]">
          <p>January 10, 2024 . 4 Mins Read</p>
        </div>
        <div className=" ">
          <Image
            src={"/faqbanner.svg"}
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
              <Image
                src={"/facebook.svg"}
                width={25}
                height={25}
                className=" md:block  hover:cursor-pointer "
                alt="logo"
                onClick={gotoFacebook}
              />
              <Image
                src={"/twitter.svg"}
                width={25}
                height={25}
                className=" md:block  hover:cursor-pointer "
                alt="logo"
                onClick={gotoTwitter}
              />
              <Image
                src={"/whatsapp.svg"}
                width={25}
                height={25}
                className=" md:block  hover:cursor-pointer "
                alt="logo"
                onClick={gotoWhatsapp}
              />
              <Image
                src={"/instagram.svg"}
                width={25}
                height={25}
                className=" md:block  hover:cursor-pointer "
                alt="logo"
                onClick={gotoInstagram}
              />
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleBlog;

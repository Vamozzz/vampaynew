import React from "react";
import Logo from "@/public/logo.svg";
import Icon from "@/public/Vector.svg";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div
      className="flex flex-col  "
      style={{ background: "linear-gradient(to right, #E8E2F4, #DDE5F8)" }}
    >
      <div className="flex flex-col lg:flex-row gap-10 py-10 px-5 lg:px-20 ">
        <div className=" flex lg:flex-1 flex-col   gap-4">
          <Image src={"logo.svg"} width={139} height={38} alt="logo" />
          <p className="features_card_content" style={{ textAlign: "left" }}>
            Connect with us to discover easy payment solutions that make your
            transactions better. We’re dedicated to making things secure and
            innovative so your business can do great in the online world.
          </p>
          <div className="flex flex-row justify-start gap-2 items-center">
            <Image src={"footerpic1.svg"} width={100} height={38} alt="logo" />
            <Image src={"footerpic1.svg"} width={100} height={38} alt="logo" />
          </div>
        </div>
        <div className=" flex lg:flex-1 flex-col gap-5 lg:flex-row justify-around">
          <div className=" flex flex-row gap-10">
            <div className="flex flex-col">
              <p className="text-md">Products</p>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="text-md">Integration</p>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
            </div>
          </div>
          <div className=" flex flex-row gap-10">
          <div className="flex flex-col">
              <p className="text-md ">Company</p>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="text-md">Legal</p>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
              <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col flex-wrap gap-2">
          <p className="text-md lg:text-center">Find us online</p>
          <div className="flex justify-start lg:justify-center gap-2 ">
            <Image
              src={"linkedin.svg"}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
            />
            <Image
              src={"linkedin.svg"}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
            />
            <Image
              src={"linkedin.svg"}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
            />
            <Image
              src={"linkedin.svg"}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
            />
             <Image
              src={"linkedin.svg"}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
            />
            <Image
              src={"linkedin.svg"}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="bg-primaryPurple flex justify-center items-center p-6 ">
        <p className="font-normal text-[1opx] lg:text-[16px]  text-[#fff]" >© 2022 Vaamoz Online Private Limited. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;


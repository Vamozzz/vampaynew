"use client";
import React from "react";
import Icon from "@/public/Vector.svg";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import FooterPic1 from "@/assets/images/footerpic1.svg";
import secured from "@/assets/images/secured.svg";
import linkedin from "@/assets/images/linkedin.svg";
import instagram from "@/assets/images/instagram.svg";
import whatsapp from "@/assets/images/whatsapp.svg";
import twitter from "@/assets/images/twitter.svg";
import medium from "@/assets/images/medium.svg";
import facebook from "@/assets/images/facebook.svg";
import {
  gotoFacebook,
  gotoInstagram,
  gotoLinkedin,
  gotoMedium,
  gotoTwitter,
  gotoWhatsapp,
} from "@/utils/customFunctions";

function Footer() {
  return (
    <div
      className="flex flex-col  "
      style={{ background: "linear-gradient(to right, #E8E2F4, #DDE5F8)" }}
    >
      <div className="flex flex-col lg:flex-row gap-10 py-10 px-5 lg:px-20 ">
        <div className=" flex lg:flex-1 flex-col   gap-4">
          <button className="">
            <Link href={"/"}>
              <Image src={"/logo.svg"} width={139} height={38} alt="logo" />
            </Link>
          </button>

          <p className="features_card_content" style={{ textAlign: "left" }}>
            Explore seamless, secure, and innovative payment solutions with us.
            Elevate your online business effortlessly by connecting with our
            dedicated team.
          </p>
          <div className="flex flex-row justify-start gap-2 items-center">
            <Image src={FooterPic1} width={100} height={38} alt="logo" />
            <Image src={secured} width={100} height={38} alt="logo" />
          </div>
        </div>
        <div className=" flex lg:flex-1 flex-col gap-5 lg:flex-row justify-around">
          <div className=" flex flex-row gap-10">
            <div className="flex flex-col">
              <p className="text-md mb-2">Products</p>
              <Link
                href="/products/collection"
                className="text-md md:block text-[#565758] hover:text-primaryPurple-100 "
              >
                Collection
              </Link>
              <Link
                href="/products/payouts"
                className="text-md md:block text-[#565758]  hover:text-primaryPurple-100 "
              >
                Payout
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="text-md mb-2">Integration</p>
              {/* <Link href="/" className="text-md md:block text-[#565758]  hover:text-primaryPurple-100 ">
              Docs
              </Link> */}
              <Link
                href="/developerapi"
                className="text-md md:block text-[#565758]  hover:text-primaryPurple-100 "
              >
                API Information
              </Link>
            </div>
          </div>
          <div className=" flex flex-row gap-10">
            <div className="flex flex-col">
              <p className="text-md mb-2">Company</p>
              <Link
                href="/company/aboutus"
                className="text-md md:block text-[#565758]  hover:text-primaryPurple-100 "
              >
                About us
              </Link>
              <Link
                href="/company/contactus"
                className="text-md md:block text-[#565758]  hover:text-primaryPurple-100 "
              >
                Contact us
              </Link>
              <Link
                href="/company/blogs"
                className="text-md md:block text-[#565758]  hover:text-primaryPurple-100 "
              >
                Career
              </Link>
              <Link
                href="/company/faqs"
                className="text-md md:block text-[#565758]  hover:text-primaryPurple-100 "
              >
                FAQ
              </Link>
              {/* <Link href="/" className="text-md md:block text-[#565758]">
              Help Centre
              </Link> */}
            </div>
            <div className="flex flex-col">
              <p className="text-md mb-2">Legal</p>
              <Link
                href="/company/privacy"
                className="text-md md:block text-[#565758]  hover:text-primaryPurple-100 "
              >
                Privacy Policy
              </Link>
              <Link
                href="/company/terms"
                className="text-md md:block text-[#565758]  hover:text-primaryPurple-100 "
              >
                Terms and Conditions
              </Link>
              {/* <Link href="/" className="text-md md:block text-[#565758]">
                Features
              </Link> */}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col flex-wrap gap-2">
          <p className="text-md lg:text-center">Find us online</p>
          <div className="flex justify-start lg:justify-center gap-2 ">
            <Image
              src={linkedin}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
              onClick={gotoLinkedin}
            />
            <Image
              src={medium}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
              onClick={gotoMedium}
            />
            <Image
              src={facebook}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
              onClick={gotoFacebook}
            />
            <Image
              src={twitter}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
              onClick={gotoTwitter}
            />
            <Image
              src={whatsapp}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
              onClick={gotoWhatsapp}
            />
            <Image
              src={instagram}
              width={25}
              height={25}
              className=" md:block  hover:cursor-pointer "
              alt="logo"
              onClick={gotoInstagram}
            />
          </div>
        </div>
      </div>
      <div className="bg-primaryPurple flex justify-center items-center p-6 ">
        <p className="font-normal text-[10px] lg:text-[16px]  text-[#fff]">
          © 2022 Vaamoz Online Private Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

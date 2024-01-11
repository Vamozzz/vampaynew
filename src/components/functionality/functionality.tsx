"use client";

import Image from "next/image";
import React from "react";
import CheckMark from "@/public/CheckMark.svg";
import CustomButton from "@/components/customButton/customButton";

interface featurePoint {
  header: string;
  spannedHeader?:string;
  subHeader?: string;
  points?: Array<any>;
  imageSideLeft: boolean;
  featureImage: string;
  featureStyles?: object;
  buttonText?: string;
}
const Functionality = ({
  header,
  spannedHeader,
  subHeader,
  points,
  imageSideLeft,
  featureImage,
  featureStyles,
  buttonText,
}: featurePoint) => {

  const gradientTextStyle = {
    background: "linear-gradient(to bottom, #FF9DD3, #866AE8)",
    WebkitBackgroundClip: "text", // For Safari
    color: "transparent",
  };
  return (
    <div
      className="flex flex-col justify-between items-center px-4 mb-10 gap-10 lg:flex-row lg:gap-8 lg:px-20 my-20 lg:my-32 "
      style={{ ...featureStyles }}
    >
      {imageSideLeft && (
        <div className=" bg-white flex-1">
          <Image
            src={"/TRANSACTION_1.gif"}
            alt="image"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      )}
      <div className="flex-col space-y-6 flex-1">
        {header && <p className="features_title ">{header} <span style={gradientTextStyle} className="pl-1">{spannedHeader}</span> </p>}
        {subHeader && <p className="features_card_content">{subHeader}</p>}
        {points &&
          points.map((point, index) => (
            <div key={index}>
              <div className="flex justify-start gap-2">
                <Image
                  src={"/CheckMark.svg"}
                  alt="CheckMark"
                  width={20}
                  height={20}
                />
                <h3 className="features_card_more">{point.header}</h3>
              </div>
              {point.subHeader && (
                <p
                  className=" ml-7  features_card_content "
                  style={{ textAlign: "left" }}
                >
                  {point.subHeader}
                </p>
              )}
            </div>
          ))}

        {buttonText && (
          <div className="flex justify-center lg:justify-start py-4">
            <CustomButton filled={true} buttonMedium={true} endIcon={true}>
              {buttonText}
            </CustomButton>
          </div>
        )}
      </div>
      {!imageSideLeft && (
        <div className=" bg-white flex-1 ">
          <Image
            src={"/gif_1_resize.gif"}
            alt="image"
            width={100}
            height={100}
            layout="responsive"
            // fill
          />
        </div>
      )}
    </div>
  );
};

export default Functionality;

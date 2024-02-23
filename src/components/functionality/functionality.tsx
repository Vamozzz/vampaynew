"use client";

import Image from "next/image";
import React from "react";
import CheckMark from "@/public/CheckMark.svg";
import CustomButton from "@/components/customButton/customButton";

interface featurePoint {
  header: string;
  spannedHeader?: string;
  subHeader?: string;
  points?: Array<any>;
  imageSideLeft: boolean;
  featureImage: string;
  buttonText?: string;
}

interface FunctionalityProps extends featurePoint {
  externalStyle?: React.CSSProperties; // Import CSSProperties from react
  spanDynamicData?: string;
}

const Functionality = ({
  header,
  spannedHeader,
  subHeader,
  points,
  imageSideLeft,
  featureImage,
  externalStyle,
  buttonText,
  spanDynamicData,
}: FunctionalityProps) => {
  const gradientTextStyle = {
    background: "linear-gradient(to bottom, #FF9DD3, #866AE8)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <div
      className="flex flex-col justify-between items-center px-4  gap-10 lg:flex-row lg:gap-8 lg:px-20 my-10 lg:my-10 "
      style={externalStyle}
    >
      {imageSideLeft && (
        <div className="flex flex-1 justify-center">
          <Image
            src={featureImage}
            alt="image"
            width={500}
            height={500}
            // layout="responsive"
            // className="bg-transparent"
          />
          {/* <object
            aria-label="Admin panel display"
            width={80}
            height={80}
            className="b3_gs w-full h-full "
            type="image/svg+xml"
            data="/homeTransform.svg"
          ></object> */}
        </div>
      )}
      <div className="flex flex-col space-y-6 flex-1">
        {header && (
          <p
            className="features_title lg:text-left "
            style={{ textAlign: "left" }}
          >
            {header}{" "}
            <span style={gradientTextStyle} className="p-1">
              {spanDynamicData ? spanDynamicData : spannedHeader}
            </span>{" "}
          </p>
        )}
        {subHeader && (
          <p className="features_card_content" style={{ textAlign: "left" }}>
            {subHeader}
          </p>
        )}
        {points &&
          points.map((point, index) => (
            <div key={index}>
              <div className="flex justify-start gap-2 items-start ">
                <Image
                  src={"/CheckMark.svg"}
                  alt="CheckMark"
                  width={20}
                  height={20}
                />
                <h3
                  className="features_card_more "
                  style={{ textAlign: "left" }}
                >
                  {point.header}
                </h3>
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
        <div className="flex flex-1 justify-center">
          <Image
            src={featureImage}
            alt="image"
            width={500}
            height={500}
            // layout="responsive"
            // fill
          />
        </div>
      )}
    </div>
  );
};

export default Functionality;

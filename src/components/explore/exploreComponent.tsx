"use client";
import CustomButton from "@/components/customButton/customButton";
import React from "react";
import TextButton from "../customButton/textButton";
import { handleRegister } from "@/utils/customFunctions";
import Link from "next/link";

const ExploreComponent = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #F8ECFF, #CDD1FF)",
  };
  return (
    <section className="p-10 lg:p-20">
      <div
        // style={gradientStyle}
        className=" bg-gradient-to-b from-[#CDD1FF] to-[#F7EBFF] lg:bg-gradient-to-r from-[#CDD1FF] to-[#F7EBFF] flex flex-col p-6 lg:p-16 rounded-xl gap-10 lg:gap-20 lg:flex-row justify-center items-center "
      >
        <div className="flex-1">
          <p className="explore_title lg:text-left">
            Explore the diverse and profitable realm of Payments with Us!{" "}
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-10">
          <div>
            <p className="features_card_content">
              Elevate your business with Vampays seamless payment solution,
              ensuring stability and profitability. Join the league of
              successful businesses that trust us for financial excellence!
            </p>
          </div>
          <div className="flex flex-row justify-center lg:justify-start gap-4 items-center pb-6">
            <CustomButton onClick={handleRegister} filled={true}>
              Get Started
            </CustomButton>
            <TextButton endIcon={true}>
              <Link href={"/company/contactus"}>Our Features</Link>
            </TextButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreComponent;

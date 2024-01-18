"use client";
import CustomButton from "@/components/customButton/customButton";
import React from "react";
import TextButton from "../customButton/textButton";
import { handleRegister } from "@/utils/customFunctions";
import Link from "next/link";

const ExploreComponent = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #A5ADFF, #ECCAFF)",
  };
  return (
    <section className="p-10 lg:p-20">
      <div
        style={gradientStyle}
        className="flex flex-col p-8 rounded-xl gap-4 lg:flex-row justify-center items-center"
      >
        <div className="flex-1">
          <p className="explore_title lg:text-left">
            Explore the diverse and profitable realm of Payments with Us!{" "}
          </p>
        </div>
        <div className="flex-1">
          <div>
            <p className="features_card_content">
              Elevate your business with Vampays seamless payment solution,
              ensuring stability and profitability. Join the league of
              successful businesses that trust us for financial excellence!
            </p>
          </div>
          <div className="flex flex-row justify-center lg:justify-start gap-4 items-center py-6">
            <CustomButton onClick={handleRegister} filled={true}>
              Get Started
            </CustomButton>
            <TextButton endIcon={true}>
              <Link href={"/company/contactus"}>Our features</Link>
            </TextButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreComponent;

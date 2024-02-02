"use client";
import Image from "next/image";
import CustomButton from "../customButton/customButton";
import { useState } from "react";

const PricingComponent = () => {
  const data = {
    title: "Explore Our Premium Plans for Unmatched Value and Features",
    cardData: [
      {
        type: "Basic",
        percent: "2%",
        points: [
          "Personalized Dashboard",
          "Flexible Pricing Structure",
          "API Integration",
          "Analytics and Reporting",
        ],
      },
      {
        type: "Standard",
        percent: "2.5%",
        points: [
          "Personalized Dashboard",
          "Flexible Pricing Structure",
          "API Integration",
          "Advance Analytics and Reporting",
          "Dedicated Account Manager",
        ],
      },
    ],
  };
  //   onMouseOver={()=>setChangeBg(false)} onMouseOut={()=>setChangeBg(true)}
  return (
    <section className="flex flex-col justify-around  py-20  gap-10 items-center ">
      <div className="lg:w-1/2">
        <p className="features_title">{data.title}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-6  ">
        {data.cardData.map((card, index) => (
          <div
            key={index}
            className=" lg:w-2/4 flex flex-col shadow-lg rounded-2xl gap-10 justify-between items-center py-8 px-4 lg:px-16"
            style={{
              background: "linear-gradient(to top, #A5ADFF, #ECCAFF)",
            }}
          >
             {/* bg-[#F7F8FC]  hover:bg-[#6C54FF]  */}
            <p className="button_Font">{card.type} </p>
            {/* <p>
              <span className="features_title">{card.percent} </span> per Transaction
            </p> */}
            <div className="flex flex-col gap-4">
              {card.points.map((point, pointIndex) => (
                <div key={pointIndex} className="flex items-start ">
                  <Image
                    src={"/CheckMark.svg"}
                    alt="CheckMark"
                    height={20}
                    width={20}
                  />
                  <p className="features_card_content ml-2">{point}</p>
                </div>
              ))}
            </div>
            <div className="button_Font">
              <CustomButton endIcon={true} filled={true}>
                Get Started
              </CustomButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingComponent;

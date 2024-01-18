"use client";
import Image from "next/image";
import React from "react";
import TextButton from "../customButton/textButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CardItem {
  cardTitle: string;
  cardImage: string;
  cardContent: string;
  linkText: string;
  linkValue: string;
}

interface FeaturesCardProps {
  cards: CardItem[];
}

const SlickerComponent: React.FC<FeaturesCardProps> = ({ cards = [] }) => {
  const settings = {
    dots: true,
    // infinite: true, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <div className="slick-prev">Previous</div>,
    nextArrow: <div className="slick-next">Next</div>,
  };
  return (
    <div className=" bg-red-300 lg:mx-20 flex flex-wrap gap-2 lg:flex-nowrap  justify-around items-center">
      <Slider {...settings}>
        {cards.map((cardItem, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 items-center lg:items-start mx-2 mb-4 px-4 lg:p-4 ${
              index < cards.length - 1 ? "lg:border-r" : ""
            }`}
          >
            <div className=" ">
              <Image
                src={cardItem.cardImage}
                alt={"image"}
                // layout="responsive"
                width={50}
                height={30}
              />
            </div>
            <h3 className="features_card_header">{cardItem.cardTitle}</h3>
            <p className=" features_card_content text-center lg:text-left">
              {cardItem.cardContent}
            </p>
            {cardItem?.linkText && (
              <TextButton endIcon={true}>{cardItem?.linkText}</TextButton>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickerComponent;

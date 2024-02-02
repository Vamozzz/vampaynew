"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import TextButton from "../customButton/textButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

interface SlickerComponentProps {
  featuresData: {
    title1: string;
    cards: {
      cardImage: string;
      cardTitle: string;
      cardContent: string;
      linkText: string;
      linkValue: string;
    }[];
  };
}

const SlickerComponent: React.FC<SlickerComponentProps> = ({
  featuresData,
}) => {
  const sliderRef = useRef<Slider>(null);
  const router = useRouter();

  const handleButtonClick = (url: string) => {
    if (url.startsWith("/")) {
      router.push(url);
    } else {
      window.location.href = url;
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoPlay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden lg:px-20 p-5">
      <div className="features_title p-10">
        <p>{featuresData.title1}</p>
      </div>
      <Slider ref={sliderRef} {...sliderSettings}>
        {featuresData.cards.map((cardItem, index) => (
          <div
            key={index}
            className={`my-2  ${
              index < featuresData.cards.length - 1 ? "lg:border-r" : ""
            }`}
          >
            <div className="flex flex-col justify-around gap-2 items-center lg:items-start p-2 ">
              {" "}
              <div className="flex justify-center items-center lg:justify-start lg:items-start ">
                <Image
                  src={cardItem.cardImage}
                  alt={"image"}
                  width={100}
                  height={100}
                  className=""
                />
              </div>
              <h3 className="features_card_header">{cardItem.cardTitle}</h3>
              <p className=" features_card_content text-center lg:text-left">
                {cardItem.cardContent}
              </p>
              <div className="flex justify-center">
                {cardItem?.linkText && (
                  <TextButton
                    endIcon={true}
                    onClick={() => handleButtonClick(cardItem.linkValue)}
                  >
                    {cardItem?.linkText}
                  </TextButton>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button
        className="absolute hidden lg:inline-block top-2/3 left-8 transform -translate-y-1/2 text-[28px] bg-grayBackground p-2 rounded-full text-black"
        onClick={goToPrev}
      >
        &lt;
      </button>
      <button
        className="absolute  hidden lg:inline-block top-2/3 right-8 transform -translate-y-1/2 text-[28px] bg-grayBackground  p-2 rounded-full text-black"
        onClick={goToNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default SlickerComponent;

"use client";

import React, { CSSProperties, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const images = [
  {
    name: "Education",
    img: "/Education3.svg",
    img1: "/Education3.svg",
  },
  {
    name: "Freelancer",
    img: "/freelancer3.svg",
    img1: "/EDUCATION.svg",
  },
  {
    name: "Entertainment",
    img: "/Entertainment3.svg",
    img1: "/EDUCATION.svg",
  },
  {
    name: "Automobile",
    img: "/Automobile3.svg",
    img1: "/EDUCATION.svg",
  },
  {
    name: "Healthcare",
    img: "/healthcare3.svg",
    img1: "/EDUCATION.svg",
  },
  {
    name: "Travel",
    img: "/Travel3.svg",
    img1: "/EDUCATION.svg",
  },
  {
    name: "Hospitality",
    img: "/Hospitality3.svg",
    img1: "/EDUCATION.svg",
  },
  {
    name: "Ecommerce",
    img: "/Ecommerce3.svg",
    img1: "/EDUCATION.svg",
  },
  {
    name: "Retail",
    img: "/Retails3.svg",
    img1: "/RETAIL.svg",
  },
  {
    name: "Technology",
    img: "/Technology3.svg",
    img1: "/EDUCATION.svg",
  },
];
interface styleSheet {
  externalStyle?: CSSProperties;
}

const IndustrySwiper: React.FC<styleSheet> = ({ externalStyle }) => {
  // const sliderRef = useRef(null);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4.05,
    slidesToScroll: 3,
    autoPlay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.1,
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
    <div
      className="relative w-full overflow-hidden lg:px-20 p-5"
      style={externalStyle}
    >
      <div className="features_title p-10">
        <p>Ideal for Every Industry</p>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className=" flex p-2 ">
            {/* <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start pb-5">
              <p className=" button_Font lg:ml-[100px] ">{image.name} </p>
            </div> */}
            <Image
              src={image.img}
              alt={`Item ${index + 1}`}
              width={320}
              height={200}
              className="m-auto bg-[#F7F8FC] hover:bg-gradient-to-b from-[#FFD4EA] to-[#B3AFFF] rounded-2xl"
            />
          </div>
        ))}
      </Slider>
      {/* <button
        className="absolute hidden lg:inline-block top-2/3 left-8 transform -translate-y-1/2 bg-primaryPurple p-2 rounded-full text-white"
        onClick={goToPrev}
      >
        &lt;
      </button>
      <button
        className="absolute hidden lg:inline-block top-2/3 right-8 transform -translate-y-1/2 bg-primaryPurple p-2 rounded-full text-white"
        onClick={goToNext}
      >
        &gt;
      </button> */}
    </div>
  );
};

export default IndustrySwiper;

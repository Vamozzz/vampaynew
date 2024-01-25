"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const images = [
  {
    name: "Education",
    img: "/EDUCATION.svg",
  },
  {
    name: "Freelancer",
    img: "/FREELANCER.svg",
  },
  {
    name: "Entertainment",
    img: "/entertainment.svg",
  },
  {
    name: "Automobile",
    img: "/automobile.svg",
  },
  {
    name: "Healthcare",
    img: "/heathcare.svg",
  },
  {
    name: "Travel",
    img: "/TRAVEL.svg",
  },
  {
    name: "Hospitality",
    img: "/HOSPITALITY.svg",
  },
  {
    name: "Ecommerce",
    img: "/ecommerce.svg",
  },
  {
    name: "Gaming",
    img: "/noun-gaming-40372251.svg",
  },
  {
    name: "Retail",
    img: "/RETAIL.svg",
  },
  {
    name: "Technology",
    img: "/tech.svg",
  },
];

const IndustrySwiper = () => {
  // const sliderRef = useRef(null);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="relative w-full overflow-hidden lg:px-20 p-5">
      <div className="features_title p-10">
        <p>Ideal for Every Industry</p>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-1  mx-2 flex ">
            <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start pb-5">
              {" "}
              <p className=" button_Font lg:ml-[100px] ">{image.name}</p>{" "}
            </div>
            <Image
              src={image.img}
              alt={`Item ${index + 1}`}
              width={320}
              height={200}
              className="bg-[#F7F8FC] hover:bg-primaryPurple-100 rounded-lg items-center self-center "
            />
          </div>
        ))}
      </Slider>
      <button
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
      </button>
    </div>
  );
};

export default IndustrySwiper;

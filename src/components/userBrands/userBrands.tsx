"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CSSProperties } from "react";

interface UserBrandsProps {
  brandNames: string[];
  externalStyle?: CSSProperties;
}

const UserBrands: React.FC<UserBrandsProps> = ({
  brandNames,
  externalStyle,
}) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    autoPlay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  // const goToPrev = () => {
  //   sliderRef.current?.slickPrev();
  // };

  // const goToNext = () => {
  //   sliderRef.current?.slickNext();
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col gap-10 mb-4 py-6 bg-grayBackground lg:px-20" style={externalStyle}>
      <p className="features_title">Trusted By</p>
      {/* <div className="flex flex-row  justify-around items-center gap-4 lg:gap-10 px-10 lg:px-20 py-6 self-center"> */}
      <Slider ref={sliderRef} {...settings}>
        {brandNames.map((brandName) => (
          <div
            key={brandName}
            className="p-4 flex justify-center items-center "
          >
            <Image
              src={`/${brandName}.svg`}
              alt={`${brandName} image`}
              layout="responsive"
              width={80}
              height={30}
            />
          </div>
        ))}
      </Slider>
      {/* </div> */}
      <hr className="mx-20"></hr>
      <div className="flex flex-col gap-6  justify-center items-center">
        <p>Secure & Compliant</p>
        <div className="flex gap-3 ">
          <Image
            src={"/RBIlogo.svg"}
            alt={"img"}
            // layout="responsive"
            width={40}
            height={20}
          />

          <Image
            src={"/PCIDSSLOGO.svg"}
            alt={"img"}
            // layout="responsive"
            width={60}
            height={30}
          />
          <Image
            src={"/securedlogo.svg"}
            alt={"img"}
            // layout="responsive"
            width={60}
            height={30}
          />
          <Image
            src={"/ISO.svg"}
            alt={"img"}
            // layout="responsive"
            width={60}
            height={30}
          />
        </div>
      </div>
    </section>
  );
};

export default UserBrands;

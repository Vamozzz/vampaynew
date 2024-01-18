"use client";

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const images = [
//   'https://placekitten.com/300/200', // Replace with your image URLs
//   'https://placekitten.com/300/201',
//   'https://placekitten.com/300/202',
//   'https://placekitten.com/300/203',
//   'https://placekitten.com/300/204',
//   'https://placekitten.com/300/205',
//   'https://placekitten.com/300/206',
// ];

// const IndustrySwiper = () => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="w-full overflow-hidden">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="p-1">
//             <img src={image} alt={`Item ${index + 1}`} className="w-full" />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default IndustrySwiper;

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const images = [
  '/education.svg',  
  '/FREELANCER.svg', 
  '/entertainment.svg', 
  '/automobile.svg',  
  '/heathcare.svg', 
  '/TRAVEL.svg', 
  '/HOSPITALITY.svg',  
  '/ecommerce.svg', 
  '/noun-gaming-40372251.svg', 
  '/RETAIL.svg',  
  '/tech.svg', 
];

const IndustrySwiper = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-1 bg-red-300">
            <Image src={image} alt={`Item ${index + 1}`} width={300} height={200} />
          </div>
        ))}
      </Slider>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white"
        onClick={goToPrev}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white"
        onClick={goToNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default IndustrySwiper;

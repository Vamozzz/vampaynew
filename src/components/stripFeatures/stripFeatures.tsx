// // import React from "react";
// // import Image from "next/image";

// // interface StripItem {
// //   icon: string;
// //   text: string;
// // }

// // interface StripFeatureProps {
// //   stripitems: StripItem[];
// // }

// // const StripFeature: React.FC<StripFeatureProps> = ({ stripitems }) => {
// //   return (
// //     <section className="bg-[#F7F8FC] my-8">
// //       <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-5 px-20 p-2 ">
// //         {stripitems.map((stripItem, index) => (
// //           <div key={index} className="flex flex-row justify-center items-center ">
// //             <Image src={stripItem.icon} alt="img" width={35} height={35} />
// //             <p className="ml-4 text-[14px] lg:text-[20px]">{stripItem.text}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default StripFeature;

// // import React from "react";
// // import Image from "next/image";

// // interface StripItem {
// //   icon: string;
// //   text: string;
// // }

// // interface StripFeatureProps {
// //   stripitems: StripItem[];
// // }

// // const StripFeature: React.FC<StripFeatureProps> = ({ stripitems }) => {
// //   return (
// //     <section className="bg-[#F7F8FC] my-8">
// //       <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-5 px-20 p-2">
// //         {stripitems.map((stripItem, index) => (
// //           <div
// //             key={index}
// //             className="flex flex-row justify-center items-center border-r border-blue-500 pr-4"
// //           >
// //             <Image src={stripItem.icon} alt="img" width={35} height={35} />
// //             <p className="ml-4 text-[14px] lg:text-[20px]">{stripItem.text}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default StripFeature;

// "use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// interface StripItem {
//   icon: string;
//   text: string;
// }

// interface StripFeatureProps {
//   stripitems: StripItem[];
// }

// const StripFeature: React.FC<StripFeatureProps> = ({ stripitems }) => {
//   const sliderRef = useRef<Slider>(null);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoPlay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   // const goToPrev = () => {
//   //   sliderRef.current?.slickPrev();
//   // };

//   // const goToNext = () => {
//   //   sliderRef.current?.slickNext();
//   // };

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     sliderRef.current?.slickNext();
//   //   }, 3000);

//   //   return () => clearInterval(interval);
//   // }, []);
//   return (
//     <section className="bg-[#F7F8FC] my-8 ">
//       <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-5 px-20 p-6">
//         <Slider ref={sliderRef} {...settings}>
//           {stripitems.map((stripItem, index) => (
//             <div
//               key={index}
//               className={`flex flex-row justify-center items-center  ${
//                 index !== stripitems.length - 1
//                   ? " lg:border-r-4 lg:border-[#6C54FF] rounded-sm lg:pr-4"
//                   : ""
//               }`}
//             >
//               {/* <div className="flex"> */}
//               <Image src={stripItem.icon} alt="img" width={50} height={30} />
//               <p className="ml-4 text-[14px] lg:text-[20px]">
//                 {stripItem.text}
//               </p>
//               {/* </div> */}
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default StripFeature;

"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface StripItem {
  icon: string;
  text: string;
}

interface StripFeatureProps {
  stripitems: StripItem[];
}

const StripFeature: React.FC<StripFeatureProps> = ({ stripitems }) => {
  const sliderRef = useRef<Slider>(null);

  // const settings = {
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  const settings = {
    slidesToShow: 3, // Adjust this according to your design
    slidesToScroll: 1, // Set this to a higher number for continuous scrolling
    autoplay: true,
    autoplaySpeed: 0, // Set autoplaySpeed to 0 for continuous scrolling
    speed: 10000, // Adjust speed as needed
    arrows: false,
    cssEase: "linear", // Use linear easing for continuous scrolling
    pauseOnHover: false, // Disable pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          speed: 5000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          speed: 5000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          speed: 5000,
        },
      },
    ],
  };

  return (
    <section className="bg-[#F7F8FC] my-8 p-6">
      <div className="container mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {stripitems.map((stripItem, index) => (
            <div
              key={index}
              // className="flex flex-col items-center justify-center"
              className={`flex flex-col justify-center items-center border-r-4 border-[#6C54FF] rounded-sm pr-4 
              `}
            >
              <div className="flex justify-center items-center gap-4">
                <Image
                  src={stripItem.icon}
                  alt={stripItem.text}
                  width={50}
                  height={30}
                />
                <p className="mt-2 text-sm lg:text-base">{stripItem.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default StripFeature;

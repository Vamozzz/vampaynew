// import Image from "next/image";

// const OurStory = () => {
//   const storyData = {
//     title: "Our Story",
//     imgLeft: false,
//     para: [
//       {
//         para1:
//           "Embark on the Vampay journey, where innovation meets seamless transactions. Founded by Ariz Shaikh, whose entrepreneurial spirit was nurtured amidst the challenges of the digital landscape.",
//       },
//       {
//         para1:
//           "Our story originates from the insights gleaned during Ariz's six-year tenure at Vaamoz. Recognizing the complexities businesses faced with online payments, the vision for Vampay unfolded - a platform designed to make transactions personalised, efficient, and hassle-free.",
//       },
//       {
//         para1:
//           " In the wake of COVID-19 challenges, our team adapted, scaling operations and diversifying services, laying the groundwork for Vampay's robust and adaptable platform.",
//       },
//     ],
//   };

//   const storyData2 = {
//     title: "",
//     imgLeft: true,
//     para: [
//       {
//         para1:
//           "In the vibrant landscape of digital finance, Vampay emerges as a unique protagonist, distinguished by its innovative trio: personalised payment links, a robust dashboard, and competitive charges. This distinctive combination not only ensures a seamless payment process but also delivers unparalleled value to our users.",
//       },
//       {
//         para1:
//           "Picture a future where online payments are not just transactions but experiences. Join us on this odyssey as we redefine the very essence of digital payments, empowering businesses and individuals alike. Welcome to Vampay - where simplicity meets innovation, and your transactions find a home in the extraordinary.",
//       },
//     ],
//   };
//   return (
//     <section className="flex flex-col lg:flex-row lg:px-20 p-10 lg:w-full">
//       {storyData.imgLeft && (
//         <div className="lg:w-1/2">
//           <Image
//             src="/image.svg"
//             alt="Image"
//             className="w-full h-auto rounded-lg"
//             width={50}
//             height={50}
//           />
//         </div>
//       )}
//       <div className="lg:w-1/2">
//         {storyData.title && (
//           <div className="features_title">
//             <p>{storyData.title}</p>
//           </div>
//         )}
//         <div className="">
//           {storyData.para.map((story, index) => (
//             <div key={index}>
//               <p className="features_card_content p-4">{story.para1}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {!storyData.imgLeft && (
//         <div className="lg:w-1/2">
//           <Image
//             src="/image.svg"
//             alt="Image"
//             className="w-full h-auto rounded-lg"
//             width={50}
//             height={50}
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default OurStory;

import React from "react";
import Image from "next/image";

interface StorySectionProps {
  title?: string;
  imgLeft: boolean;
  para: { para1: string }[];
}

const OurStory: React.FC<StorySectionProps> = ({ title, imgLeft, para }) => {
  return (
    <section className="flex flex-col lg:flex-row gap-5 lg:px-20 p-10  lg:w-full">
      {imgLeft && (
        <div className="lg:w-1/2">
          <Image
            src="/our_story.png"
            alt="Image"
            className="w-full h-2/3 rounded-lg"
            width={20}
            height={20}
          />
        </div>
      )}
      <div className="lg:w-1/2">
        {title && (
          <div className="features_title">
            <p>{title}</p>
          </div>
        )}
        <div className="">
          {para.map((story, index) => (
            <div key={index}>
              <p
                className="features_card_content p-2"
                style={{ textAlign: "left" }}
              >
                {story.para1}
              </p>
            </div>
          ))}
        </div>
      </div>
      {!imgLeft && (
        <div className="lg:w-1/2">
          <Image
            src="/OURSTORYVAMPAYLOGO.svg"
            alt="Image"
            className="w-full h-auto rounded-lg"
            width={50}
            height={50}
          />
        </div>
      )}
    </section>
  );
};

export default OurStory;

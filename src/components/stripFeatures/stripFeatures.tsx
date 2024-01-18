

// import React from "react";
// import Image from "next/image";

// interface StripItem {
//   icon: string;
//   text: string;
// }

// interface StripFeatureProps {
//   stripitems: StripItem[];
// }

// const StripFeature: React.FC<StripFeatureProps> = ({ stripitems }) => {
//   return (
//     <section className="bg-[#F7F8FC] my-8">
//       <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-5 px-20 p-2 ">
//         {stripitems.map((stripItem, index) => (
//           <div key={index} className="flex flex-row justify-center items-center ">
//             <Image src={stripItem.icon} alt="img" width={35} height={35} />
//             <p className="ml-4 text-[14px] lg:text-[20px]">{stripItem.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StripFeature;

// import React from "react";
// import Image from "next/image";

// interface StripItem {
//   icon: string;
//   text: string;
// }

// interface StripFeatureProps {
//   stripitems: StripItem[];
// }

// const StripFeature: React.FC<StripFeatureProps> = ({ stripitems }) => {
//   return (
//     <section className="bg-[#F7F8FC] my-8">
//       <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-5 px-20 p-2">
//         {stripitems.map((stripItem, index) => (
//           <div
//             key={index}
//             className="flex flex-row justify-center items-center border-r border-blue-500 pr-4"
//           >
//             <Image src={stripItem.icon} alt="img" width={35} height={35} />
//             <p className="ml-4 text-[14px] lg:text-[20px]">{stripItem.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StripFeature;


import React from "react";
import Image from "next/image";

interface StripItem {
  icon: string;
  text: string;
}

interface StripFeatureProps {
  stripitems: StripItem[];
}

const StripFeature: React.FC<StripFeatureProps> = ({ stripitems }) => {
  return (
    <section className="bg-[#F7F8FC] my-8">
      <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center gap-5 px-20 p-2">
        {stripitems.map((stripItem, index) => (
          <div key={index} className={`flex flex-row justify-center items-center ${index !== stripitems.length - 1 ? ' lg:border-r-4 lg:border-blue-500 lg:pr-4' : ''}`}>
            <Image src={stripItem.icon} alt="img" width={35} height={35} />
            <p className="ml-4 text-[14px] lg:text-[20px]">{stripItem.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StripFeature;

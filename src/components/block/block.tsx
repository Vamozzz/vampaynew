// const BlockInfo = () => {
//   const block1 = {
//     title: "Payments Acceptance Simplified for Seamless Transactions",
//     subTitle:
//       "Our streamlined solution makes accepting payments straightforward, ensuring a hassle-free experience for both businesses and customers. Embrace simplicity in payments processing for a smoother and more efficient financial interaction.",
//     blocks: [
//       {
//         blockHeader: "Versatile Payment Modes",
//         blockContent:
//           "Choose from a range of secure and flexible payment options to suit your preferences and needs effortlessly.",
//       },
//       {
//         blockHeader: "Bulk Link Creation",
//         blockContent:
//           "Easily generate and send multiple collection links with a simple CSV file upload.",
//       },
//       {
//         blockHeader: "No Code Solution",
//         blockContent:
//           "Experience innovation without the need for complex programming.",
//       },
//       {
//         blockHeader: "Seamless Reconciliation",
//         blockContent:
//           "Achieve precision effortlessly for error-free transactions. Experience efficiency in just a few clicks.",
//       },
//     ],
//   };

//   return (
//     <section className="flex flex-col gap-5 p-10 lg:px-20 ">
//       <div className="lg:w-2/3 m-auto flex flex-col gap-2">
//         <div className="features_title ">
//           <p>{block1.title}</p>
//         </div>
//         <div className="features_card_content ">
//           <p className="">{block1.subTitle}</p>
//         </div>
//       </div>
//       <div className="flex flex-col lg:flex-row gap-10 p-6">
//         {block1.blocks.map((block, index) => (
//           <div key={index} className="bg-grayBackground p-4 shadow-md">
//             <div className="features_card_more">
//               <p className="text-center">{block.blockHeader}</p>
//             </div>
//             <div className="features_card_content">
//               <p className="text-center">{block.blockContent}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BlockInfo;


import React from 'react';

interface BlockInfoProps {
  title: string;
  subTitle: string;
  blocks: Array<{
    blockHeader: string;
    blockContent: string;
  }>;
}

const BlockInfo: React.FC<BlockInfoProps> = ({ title, subTitle, blocks }) => {
  return (
    <section className="flex flex-col gap-5 p-10 lg:px-20">
      <div className="lg:w-2/3 m-auto flex flex-col gap-10">
        <div className="features_title">
          <p>{title}</p>
        </div>
        <div className="features_card_content">
          <p className="lg:text-center">{subTitle}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 p-6">
        {blocks.map((block, index) => (
          <div key={index} className="lg:w-1/4 bg-grayBackground p-4 shadow-md">
            <div className="features_card_more pb-2">
              <p className="text-center">{block.blockHeader}</p>
            </div>
            <div className="features_card_content">
              <p className="text-center">{block.blockContent}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlockInfo;

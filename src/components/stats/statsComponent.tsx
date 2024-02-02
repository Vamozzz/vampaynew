
  
  
  
// const StatsComponent = () => {
//     const stats = [
//       {
//         num: "110+",
//         content:
//           "Over 110 businesses rely on Vampay to streamline their payment processes.",
//       },
//       {
//         num: "4M",
//         content:
//           "Processed annually, Vampay manages a staggering 4 million transactions.",
//       },
//       {
//         num: "80%",
//         content:
//           "Vampay is the preferred choice for top banks, powering 99.99% of business payments.",
//       },
//     ];
  
//     return (
//       <div className="flex flex-col justify-center items-center rounded-lg lg:flex-row bg-primaryPurple text-white">
//         {stats.map((item, index) => (
//           <div key={index} className={`px-4 ${index < stats.length - 1 ? "lg:border-r-4 lg:border-r-2 lg:" : ""}`}>
//             <p className="font-semibold text-[48px] text-center">{item.num}</p>
//             <p className="font-medium text-[24] text-center ">{item.content}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default StatsComponent;
  


const StatsComponent = () => {
    const stats = [
      {
        num: "110+",
        content:
          "Over 110 businesses rely on Vampay to streamline their payment processes.",
      },
      {
        num: "4M",
        content:
          "Processed annually, Vampay manages a staggering 4 million transactions.",
      },
      {
        num: "80%",
        content:
          "Vampay is the preferred choice for top banks, powering 99.99% of business payments.",
      },
    ];
  
    return (
      <div className="flex flex-col justify-center items-center rounded-lg  lg:flex-row bg-primaryPurple text-white">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`px-4 py-4 ${
              index < stats.length - 1 ? "lg:border-r-4 border-b-4 lg:border-b-0 " : "border-r-2"
            }`}
          >
            <p className="font-semibold text-[48px] text-center">{item.num}</p>
            <p className="font-normal text-[24] text-center ">{item.content}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default StatsComponent;
  
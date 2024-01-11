import Image from "next/image";
import React from "react";

   
const UserBrands = () => { 
  return (
    <div className=" flex flex-row justify-around items-center gap-4 lg:gap-10 bg-grayBackground px-10 lg:px-20 py-2  self-center ">
      <div className="">
      <Image
              src={"coinbase.svg"}
              alt={"image"}
              layout="responsive"
              width={500}
              height={300}
            />
      </div>
      <div className="">
       <Image
              src={"slack.svg"}
              alt={"image"}
              layout="responsive"
              width={500}
              height={300}
            />
      </div>
      <div className="">
       <Image
              src={"dropbox.svg"}
              alt={"image"}
              layout="responsive"
              width={500}
              height={300}
            />
      </div>
      <div className="">
       <Image
              src={"zoom.svg"}
              alt={"image"}
              layout="responsive"
              width={500}
              height={300}
            />
      </div>
    </div>
  );
};

export default UserBrands;

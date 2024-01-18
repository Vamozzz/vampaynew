import { heroSection } from "@/constants/features";
import CustomButton from "../customButton/customButton";
import Image from "next/image";
import TextButton from "../customButton/textButton";
import UserBrands from "../userBrands/userBrands";
import { handleLogin } from "@/utils/customFunctions";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
        <div className="hero__image-overlay" />

      <div className=" flex flex-col justify-center items-center w-full lg:flex-row mt-10 lg:pl-20 h-[100vh] lg:h-[100vh] "> 
      {/* lg:pl-20 gap-10 lg:gap-6 lg:flex lg:flex-row  pt-10  */}
        <div className="flex flex-col justify-center gap-10  lg:w-1/2 items-center  lg:items-start  ">
          <div className="hero__title ">
            <p>Your one stop,</p>
            <p>Integrated Payment</p>
             
              <p>solution</p>
              <Image
                src={heroSection?.lineImage}
                alt="logo"
                width={150}
                height={40}
                className="mx-auto md:w-auto lg:mx-0 align-middle"
              />
            
          </div>
          <div className="px-2">
            <p className="hero__subtitle">
              Simplify transactions, streamline payments, where integration
              meets ease, making it your all-in-one payment solution.
            </p>
            {/* <p className="hero__subtitle">
            Simplify transactions, streamline payments, where
          </p>
          <p className="hero__subtitle">
            integration meets ease, making it your all-in-one
          </p>
          <p className="hero__subtitle">payment solution.</p> */}
          </div>
          <div className="my-1">
            <div className=" flex justify-center gap-3 md:justify-start">
              <CustomButton onClick={handleLogin} filled={true} buttonMedium={true}>
                login
              </CustomButton>
              <TextButton endIcon={true}>
                <Link href={"/products/collection"}>Our features</Link>
                </TextButton>
            </div>
          </div>
        </div>
        <div className=" lg::w-1/2  ">
          <Image
            src={heroSection?.heroImage}
            alt="logo"
            width={80}
            height={80}
            // className="w-auto"
            layout="responsive"
          />
        </div>
      </div>
      {/* <div className="py-4">
      <UserBrands />
      </div> */}
    </section>
  );
};

export default Hero;
